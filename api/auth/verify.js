// Vercel Function to verify admin token

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const token = req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = JSON.parse(Buffer.from(token, 'base64').toString());

        // Check token expiration
        if (decoded.exp < Date.now()) {
            return res.status(401).json({ message: 'Token expired' });
        }

        return res.status(200).json({
            valid: true,
            user: {
                email: decoded.email,
                name: decoded.name,
                role: decoded.role
            }
        });
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}
