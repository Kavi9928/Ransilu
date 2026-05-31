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

    const artistsDataPath = path.join(process.cwd(), 'public', 'data', 'artists.json');

    if (req.method === 'GET') {
        try {
            const data = await fs.readFile(artistsDataPath, 'utf-8');
            return res.status(200).json(JSON.parse(data));
        } catch (err) {
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

            await fs.writeFile(artistsDataPath, JSON.stringify(artistsData, null, 2));

            return res.status(200).json({
                message: 'Artists data updated successfully',
                data: artistsData
            });
        } catch (err) {
            console.error('Error saving artists data:', err);
            return res.status(500).json({ message: 'Failed to save artists data' });
        }
    }

    return res.status(405).json({ message: 'Method not allowed' });
}
