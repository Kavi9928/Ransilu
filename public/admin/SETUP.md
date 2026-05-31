# Ransilu Admin Panel — Setup Guide

## Overview

The Ransilu Admin Dashboard allows non-technical team members to manage all content on the website without needing Git knowledge or developer access.

**Features:**
- Multi-user authentication with role-based access control
- Manage Store products, Radio programs, Teledrama episodes, and Artist profiles
- Secure file upload (integration ready)
- Real-time content synchronization
- Simple, intuitive interface

---

## Getting Started

### 1. Configure Admin Users

Admin users are stored securely using environment variables on Vercel. To add or manage admin users:

#### Option A: Via Vercel Dashboard (Recommended)

1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add a new variable called `ADMIN_USERS_JSON` with the following format:

```json
[
  {
    "email": "admin@ransilu.com",
    "password": "your_secure_password",
    "name": "Admin Name",
    "role": "admin"
  },
  {
    "email": "editor@ransilu.com",
    "password": "editor_password",
    "name": "Editor Name",
    "role": "editor"
  }
]
```

#### Option B: Via CLI

```bash
vercel env add ADMIN_USERS_JSON
# Paste the JSON config when prompted
```

### 2. Deploy to Vercel

The admin panel is automatically deployed when you push to your main branch.

```bash
git add api/ admin/ data/
git commit -m "Add admin panel and API endpoints"
git push origin main
```

Visit: `https://your-domain.com/admin/` to access the login page.

---

## User Roles & Permissions

Currently supported roles:

| Role | Permissions |
|------|------------|
| **admin** | Full access to all sections, user management |
| **editor** | Can create/edit/delete content, no user access |
| **viewer** | Read-only access (view content, no edits) |

---

## Managing Content

### Store Products
- Add/edit/delete albums and singles
- Manage product collections
- Upload product images
- Set pricing and format (CD, Vinyl, Digital, Cassette)

### Radio Programs
- Create radio shows and programs
- Upload episodes and audio files
- Set broadcast schedules
- Manage streaming URLs

### Teledrama
- Create TV series and episodes
- Upload video files
- Track season and episode numbers
- Manage air dates and metadata

### Artists
- Create and edit artist profiles
- Upload artist photos
- Add biography and genres
- Link social media accounts

---

## File Upload Strategy

The admin panel is designed to work with multiple file storage backends. Currently configured for future integration with:

- **Vercel Blob** (Simple, integrated)
- **Cloudinary** (Video optimization, CDN)
- **AWS S3** (Scalable, cost-effective)

### To Enable File Uploads

1. Choose your storage provider
2. Add API credentials to environment variables
3. Update the file upload handler in `api/upload.js`
4. No frontend changes needed — backend abstraction handles everything

---

## API Endpoints

### Authentication
- `POST /api/auth/login` — Admin login

### Content Management (Coming Soon)
- `GET /api/content/{type}` — List all items
- `POST /api/content/{type}` — Create new item
- `PUT /api/content/{type}/{id}` — Update item
- `DELETE /api/content/{type}/{id}` — Delete item
- `POST /api/upload` — Upload file

---

## Development

### Local Testing

Start a local server:

```bash
# In project root
vercel dev
```

Visit: `http://localhost:3000/admin/` to test locally.

### API Testing

Test authentication with curl:

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@ransilu.com","password":"your_password"}'
```

---

## Security Notes

⚠️ **Important:**
- Never commit passwords to Git — use environment variables only
- Passwords in env vars are visible to your Vercel team — use strong passwords
- In production, implement password hashing (bcrypt) in the auth API
- Add HTTPS for all admin requests (Vercel provides this automatically)
- Session tokens expire after 7 days — users must log in again
- Implement rate limiting on the login endpoint

---

## Troubleshooting

### "Server configuration error" on login
- Check that `ADMIN_USERS_JSON` is set in Vercel environment variables
- Verify the JSON is valid (use a JSON validator)
- Redeploy after adding environment variables

### Session expires unexpectedly
- Clear browser cache and localStorage
- Log in again
- Token expires after 7 days by design

### File uploads not working
- Storage backend not yet configured
- Choose a provider and add API credentials to env vars
- Update `api/upload.js` with provider-specific code

---

## Next Steps

1. ✅ Set up `ADMIN_USERS_JSON` environment variable
2. ✅ Deploy admin panel to Vercel
3. Test login at `/admin/`
4. Choose file storage provider
5. Integrate file upload handler
6. Implement remaining content management panels

---

For support, contact your development team.
