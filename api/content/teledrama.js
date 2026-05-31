import fs from 'fs/promises';
import path from 'path';
import { put, get } from '@vercel/blob';

const BLOB_KEY = 'teledrama.json';

async function getBlobData() {
    try {
        const options = process.env.BLOB_READ_WRITE_TOKEN ? { token: process.env.BLOB_READ_WRITE_TOKEN } : {};
        const blob = await get(BLOB_KEY, options);
        if (blob) return await blob.text();
    } catch (e) {
        console.log('Blob read fallback:', e.message);
    }
    return null;
}

async function setBlobData(data) {
    try {
        if (!process.env.BLOB_READ_WRITE_TOKEN) {
            console.error('BLOB_READ_WRITE_TOKEN not set');
            return false;
        }
        const options = { token: process.env.BLOB_READ_WRITE_TOKEN, access: 'public' };
        await put(BLOB_KEY, data, options);
        return true;
    } catch (e) {
        console.error('Blob write error:', e.message);
        return false;
    }
}

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
            let data = await getBlobData();

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
            const blobSuccess = await setBlobData(dataJson);

            if (!blobSuccess) {
                return res.status(503).json({
                    message: 'Vercel Blob not configured. Set up persistent storage at https://vercel.com/docs/storage/vercel-blob/quickstart',
                    data: teledramaData
                });
            }

            return res.status(200).json({
                message: 'Teledrama data updated successfully',
                data: teledramaData
            });
        } catch (err) {
            console.error('Error saving teledrama data:', err);
            return res.status(500).json({ message: 'Failed to save teledrama data', error: err.message });
        }
    }

    return res.status(405).json({ message: 'Method not allowed' });
}
