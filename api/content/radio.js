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
        path.join(process.cwd(), 'public', 'data', 'radio.json'),
        path.join(process.cwd(), 'data', 'radio.json'),
    ];

    if (req.method === 'GET') {
        try {
            let data;
            for (const p of paths) {
                try {
                    data = await fs.readFile(p, 'utf-8');
                    break;
                } catch (e) {
                    continue;
                }
            }

            if (!data) {
                return res.status(404).json({ message: 'Radio data not found' });
            }

            return res.status(200).json(JSON.parse(data));
        } catch (err) {
            console.error('Error reading radio data:', err);
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

            await fs.writeFile(paths[0], JSON.stringify(radioData, null, 2));

            return res.status(200).json({
                message: 'Radio data updated successfully',
                data: radioData
            });
        } catch (err) {
            console.error('Error saving radio data:', err);
            return res.status(500).json({ message: 'Failed to save radio data', error: err.message });
        }
    }

    return res.status(405).json({ message: 'Method not allowed' });
}
