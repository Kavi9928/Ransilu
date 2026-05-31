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

    const radioDataPath = path.join(process.cwd(), 'public', 'data', 'radio.json');

    if (req.method === 'GET') {
        try {
            const data = await fs.readFile(radioDataPath, 'utf-8');
            return res.status(200).json(JSON.parse(data));
        } catch (err) {
            return res.status(500).json({ message: 'Failed to read radio data' });
        }
    }

    if (req.method === 'POST') {
        try {
            const { programs, episodes } = req.body;

            if (!programs || !Array.isArray(programs)) {
                return res.status(400).json({ message: 'Invalid programs data' });
            }

            const radioData = {
                programs,
                episodes: episodes || []
            };

            await fs.writeFile(radioDataPath, JSON.stringify(radioData, null, 2));

            return res.status(200).json({
                message: 'Radio data updated successfully',
                data: radioData
            });
        } catch (err) {
            console.error('Error saving radio data:', err);
            return res.status(500).json({ message: 'Failed to save radio data' });
        }
    }

    return res.status(405).json({ message: 'Method not allowed' });
}
