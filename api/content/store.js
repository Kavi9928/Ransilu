import fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
    const token = req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        // Verify token
        const decoded = JSON.parse(Buffer.from(token, 'base64').toString());
        if (decoded.exp < Date.now()) {
            return res.status(401).json({ message: 'Token expired' });
        }
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }

    const storeDataPath = path.join(process.cwd(), 'public', 'data', 'store.json');

    if (req.method === 'GET') {
        try {
            const data = await fs.readFile(storeDataPath, 'utf-8');
            return res.status(200).json(JSON.parse(data));
        } catch (err) {
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

            await fs.writeFile(storeDataPath, JSON.stringify(storeData, null, 2));

            return res.status(200).json({
                message: 'Store data updated successfully',
                data: storeData
            });
        } catch (err) {
            console.error('Error saving store data:', err);
            return res.status(500).json({ message: 'Failed to save store data' });
        }
    }

    return res.status(405).json({ message: 'Method not allowed' });
}
