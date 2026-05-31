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
        path.join(process.cwd(), 'public', 'data', 'artists.json'),
        path.join(process.cwd(), 'data', 'artists.json'),
    ];

    if (req.method === 'GET') {
        try {
            let data;

            // Try Blob first
            try {
                const blob = await get('artists.json');
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
                return res.status(404).json({ message: 'Artists data not found' });
            }

            return res.status(200).json(JSON.parse(data));
        } catch (err) {
            console.error('Error reading artists data:', err);
            return res.status(500).json({ message: 'Failed to read artists data' });
        }
    }

    if (req.method === 'POST') {
        try {
            const { artists } = req.body;

            if (!artists || !Array.isArray(artists)) {
                return res.status(400).json({ message: 'Invalid artists data' });
            }

            const artistsData = { artists };

            const dataJson = JSON.stringify(artistsData, null, 2);

            try {
                await put('artists.json', dataJson);
            } catch (blobErr) {
                console.error('Blob error:', blobErr.message);
                throw blobErr;
            }

            return res.status(200).json({
                message: 'Artists data updated successfully',
                data: artistsData
            });
        } catch (err) {
            console.error('Error saving artists data:', err);
            return res.status(500).json({
                message: 'Failed to save artists data',
                error: err.message,
                details: err.toString()
            });
        }
    }

    return res.status(405).json({ message: 'Method not allowed' });
}
