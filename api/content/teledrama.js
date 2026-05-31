import { put, get } from '@vercel/blob';
import fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
    res.setHeader('Content-Type', 'application/json');

    const token = req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = JSON.parse(Buffer.from(token, 'base64').toString());
        if (decoded.exp < Date.now()) {
            return res.status(401).json({ message: 'Token expired' });
        }
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }

    const paths = [
        path.join(process.cwd(), 'public', 'data', 'teledrama.json'),
        path.join(process.cwd(), 'data', 'teledrama.json'),
    ];

    if (req.method === 'GET') {
        try {
            let data;

            // Try Blob first
            try {
                const blob = await get('teledrama.json');
                if (blob) {
                    data = await blob.text();
                }
            } catch (e) {
                // Fallback to filesystem
            }

            if (!data) {
                for (const p of paths) {
                    try {
                        data = await fs.readFile(p, 'utf-8');
                        break;
                    } catch (e) {
                        continue;
                    }
                }
            }

            if (!data) {
                return res.status(404).json({ message: 'Teledrama data not found' });
            }

            return res.status(200).json(JSON.parse(data));
        } catch (err) {
            console.error('Error reading teledrama data:', err);
            return res.status(500).json({ message: 'Failed to read teledrama data' });
        }
    }

    if (req.method === 'POST') {
        try {
            const { series, episodes } = req.body;

            if (!series || !Array.isArray(series)) {
                return res.status(400).json({ message: 'Invalid series data' });
            }

            const teledramaData = {
                series,
                episodes: episodes || []
            };

            const dataJson = JSON.stringify(teledramaData, null, 2);

            try {
                await put('teledrama.json', dataJson);
            } catch (blobErr) {
                console.error('Blob error:', blobErr.message);
                throw blobErr;
            }

            return res.status(200).json({
                message: 'Teledrama data updated successfully',
                data: teledramaData
            });
        } catch (err) {
            console.error('Error saving teledrama data:', err);
            return res.status(500).json({
                message: 'Failed to save teledrama data',
                error: err.message,
                details: err.toString()
            });
        }
    }

    return res.status(405).json({ message: 'Method not allowed' });
}
