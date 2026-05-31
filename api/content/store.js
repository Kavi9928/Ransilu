import fs from 'fs/promises';
import path from 'path';
import { put, get } from '@vercel/blob';

const BLOB_KEY = 'store.json';

async function getBlobData() {
    try {
        const blob = await get(BLOB_KEY);
        if (blob) return await blob.text();
    } catch (e) {
        // Blob not available, will fall back to filesystem
    }
    return null;
}

async function setBlobData(data) {
    try {
        console.log('Attempting Blob write, token available:', !!process.env.BLOB_READ_WRITE_TOKEN);
        console.log('Blob store ID:', process.env.BLOB_STORE_ID);
        await put(BLOB_KEY, data, { access: 'public' });
        console.log('Blob write successful');
        return true;
    } catch (e) {
        console.error('Blob write failed:', e.message, e.code);
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
        path.join(process.cwd(), 'public', 'data', 'store.json'),
        path.join(process.cwd(), 'data', 'store.json'),
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
                return res.status(404).json({ message: 'Store data not found' });
            }

            return res.status(200).json(JSON.parse(data));
        } catch (err) {
            console.error('Error reading store data:', err);
            return res.status(500).json({ message: 'Failed to read store data' });
        }
    }

    if (req.method === 'POST') {
        try {
            const { products, collections } = req.body;

            if (!products || !Array.isArray(products)) {
                return res.status(400).json({ message: 'Invalid products data' });
            }

            const storeData = {
                products,
                collections: collections || []
            };

            const dataJson = JSON.stringify(storeData, null, 2);
            const blobSuccess = await setBlobData(dataJson);

            if (!blobSuccess) {
                return res.status(503).json({
                    message: 'Vercel Blob not configured. Set up persistent storage at https://vercel.com/docs/storage/vercel-blob/quickstart',
                    data: storeData
                });
            }

            return res.status(200).json({
                message: 'Store data updated successfully',
                data: storeData
            });
        } catch (err) {
            console.error('Error saving store data:', err);
            return res.status(500).json({ message: 'Failed to save store data', error: err.message });
        }
    }

    return res.status(405).json({ message: 'Method not allowed' });
}
