// Vercel Function for Admin Login
// This is a serverless endpoint that handles authentication
// Admin credentials are stored securely via environment variables

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password required' });
        }

        // Get admin credentials from environment variables
        const adminUsersJson = process.env.ADMIN_USERS_JSON;

        if (!adminUsersJson) {
            console.error('ADMIN_USERS_JSON not configured');
            return res.status(500).json({ message: 'Server not configured' });
        }

        let adminUsers;
        try {
            adminUsers = JSON.parse(adminUsersJson);
        } catch (parseErr) {
            console.error('Failed to parse ADMIN_USERS_JSON:', parseErr.message);
            return res.status(500).json({ message: 'Configuration error' });
        }

        if (!Array.isArray(adminUsers)) {
            console.error('ADMIN_USERS_JSON is not an array');
            return res.status(500).json({ message: 'Configuration error' });
        }

        // Find user by email (case-insensitive)
        const user = adminUsers.find(u => u.email.toLowerCase() === email.toLowerCase());

        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Compare passwords
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate token
        const token = Buffer.from(JSON.stringify({
            email: user.email,
            name: user.name,
            role: user.role,
            exp: Date.now() + (7 * 24 * 60 * 60 * 1000)
        })).toString('base64');

        return res.status(200).json({
            token,
            user: {
                email: user.email,
                name: user.name,
                role: user.role
            }
        });
    } catch (err) {
        console.error('Auth error:', err);
        return res.status(500).json({ message: 'Authentication failed' });
    }
}
