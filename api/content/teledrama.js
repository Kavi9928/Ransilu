import fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
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

    const teledramaDataPath = path.join(process.cwd(), 'public', 'data', 'teledrama.json');

    if (req.method === 'GET') {
        try {
            const data = await fs.readFile(teledramaDataPath, 'utf-8');
            return res.status(200).json(JSON.parse(data));
        } catch (err) {
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

            await fs.writeFile(teledramaDataPath, JSON.stringify(teledramaData, null, 2));

            return res.status(200).json({
                message: 'Teledrama data updated successfully',
                data: teledramaData
            });
        } catch (err) {
            console.error('Error saving teledrama data:', err);
            return res.status(500).json({ message: 'Failed to save teledrama data' });
        }
    }

    return res.status(405).json({ message: 'Method not allowed' });
}
