import { put, get } from '@vercel/blob';
import fs from 'fs/promises';
import path from 'path';

const BLOB_KEY = 'store.json';

// The Blob store may be configured as private or public; try both.
const ACCESS_MODES = ['private', 'public'];

async function readBlob() {
    for (const access of ACCESS_MODES) {
        try {
            const result = await get(BLOB_KEY, { access, useCache: false });
            if (result && result.stream) {
                return await new Response(result.stream).text();
            }
        } catch (err) {
            // Try the next access mode, then fall back to bundled files
        }
    }
    return null;
}

async function writeBlob(json) {
    const options = {
        addRandomSuffix: false,
        allowOverwrite: true,
        cacheControlMaxAge: 60,
        contentType: 'application/json',
    };
    let lastErr;
    for (const access of ACCESS_MODES) {
        try {
            return await put(BLOB_KEY, json, { ...options, access });
        } catch (err) {
            lastErr = err;
        }
    }
    throw lastErr;
}

function isValidToken(req) {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) return false;
    try {
        const decoded = JSON.parse(Buffer.from(token, 'base64').toString());
        return decoded.exp > Date.now();
    } catch (err) {
        return false;
    }
}

export default async function handler(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        return res.status(204).end();
    }

    const paths = [
        path.join(process.cwd(), 'public', 'data', 'store.json'),
        path.join(process.cwd(), 'data', 'store.json'),
    ];

    if (req.method === 'GET') {
        // Public: the websites read store data from here, so admin edits
        // saved to Blob show up without a redeploy.
        try {
            let data = await readBlob();

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

            return res.status(200).json(JSON.parse(data.replace(/^﻿/, '')));
        } catch (err) {
            console.error('Error reading store data:', err);
            return res.status(500).json({ message: 'Failed to read store data' });
        }
    }

    if (req.method === 'POST') {
        if (!isValidToken(req)) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        try {
            const { products, collections } = req.body;

            if (!products || !Array.isArray(products)) {
                return res.status(400).json({ message: 'Invalid products data' });
            }

            const storeData = {
                products,
                collections: collections || []
            };

            await writeBlob(JSON.stringify(storeData, null, 2));

            return res.status(200).json({
                message: 'Store data updated successfully',
                data: storeData
            });
        } catch (err) {
            console.error('Error saving store data:', err);
            return res.status(500).json({
                message: 'Failed to save store data',
                error: err.message
            });
        }
    }

    return res.status(405).json({ message: 'Method not allowed' });
}
