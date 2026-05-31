// Vercel Function for Admin Login
// This is a serverless endpoint that handles authentication
// Admin credentials are stored securely via environment variables

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { email, password } = req.body;

    // Get admin credentials from environment variables
    // Format: ADMIN_USERS_JSON='[{"email":"admin@ransilu.com","password":"hashed_password","name":"Admin Name","role":"admin"}]'
    const adminUsersJson = process.env.ADMIN_USERS_JSON;

    if (!adminUsersJson) {
        console.error('ADMIN_USERS_JSON environment variable not set');
        return res.status(500).json({ message: 'Server configuration error' });
    }

    try {
        const adminUsers = JSON.parse(adminUsersJson);

        // Find user by email
        const user = adminUsers.find(u => u.email === email);

        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Compare passwords (in production, use bcrypt for hashed comparison)
        // For now, we're comparing plain text but storing in env vars
        // TODO: Implement proper bcrypt hashing
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate a simple JWT or session token
        // In production, use proper JWT library
        const token = Buffer.from(JSON.stringify({
            email: user.email,
            name: user.name,
            role: user.role,
            exp: Date.now() + (7 * 24 * 60 * 60 * 1000) // 7 days
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
