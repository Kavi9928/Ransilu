# Ransilu Admin Panel — Documentation

## Architecture Overview

The Ransilu Admin Panel is a modern, secure system for managing all website content without requiring Git knowledge or developer access. It's built with a serverless architecture using Vercel Functions for backend API operations.

### Key Components

```
ransilu/
├── admin/                    # Frontend admin interface
│   ├── index.html           # Login page
│   ├── dashboard.html       # Main dashboard with navigation
│   ├── SETUP.md             # Admin setup and configuration guide
│   └── components/          # (Future) Reusable UI components
│
├── api/                      # Vercel Functions (serverless backend)
│   ├── auth/
│   │   ├── login.js         # Authentication endpoint
│   │   └── verify.js        # Token verification
│   ├── content/             # (Future) CRUD endpoints
│   │   ├── store.js
│   │   ├── radio.js
│   │   ├── teledrama.js
│   │   └── artists.js
│   └── upload.js            # File upload handler (configurable)
│
├── data/                     # Content data files (JSON)
│   ├── store.json           # Products and collections
│   ├── radio.json           # Radio programs and episodes
│   ├── teledrama.json       # Teledrama series and episodes
│   └── artists.json         # Artist profiles
```

---

## User Flow

### 1. Login
```
User visits /admin/ → Sees login form → Enters credentials → 
Backend verifies against ADMIN_USERS_JSON → Token issued → 
Redirects to dashboard
```

### 2. Content Management
```
Dashboard → Select section (Store/Radio/Teledrama/Artists) → 
View, create, edit, or delete content → API updates data file → 
Changes deployed to live site
```

### 3. File Uploads
```
Admin selects file → Frontend validates → Upload to storage → 
Backend processes → File URL stored in data → Frontend reflects changes
```

---

## Authentication System

### How It Works

1. **User Credentials**: Stored in Vercel environment variables as JSON (`ADMIN_USERS_JSON`)
2. **Login Process**: POST request to `/api/auth/login` with email/password
3. **Token Generation**: Simple base64-encoded JWT with 7-day expiration
4. **Session Storage**: Token stored in browser localStorage
5. **Verification**: Token verified on API requests before data access

### Security Features

- ✅ HTTPS enforced (Vercel default)
- ✅ Token expiration (7 days)
- ✅ Credentials never exposed in frontend code
- ✅ Environment variable protection
- ⚠️ TODO: Implement bcrypt password hashing
- ⚠️ TODO: Add rate limiting on login endpoint
- ⚠️ TODO: Add CSRF token validation

---

## Data Structure

### Content Organization

Each content type (Store, Radio, Teledrama, Artists) follows a consistent pattern:

```json
{
  "items": [
    {
      "id": "unique-identifier",
      "title": "Item Title",
      "description": "Description",
      "image": "image-url",
      "metadata": {}
    }
  ]
}
```

This structure allows the frontend to:
- Dynamically render content without hardcoding
- Update data independently of frontend code
- Version control content changes through Git
- Switch storage backends without code changes

---

## File Upload Strategy

The upload system is designed with **pluggable storage backends**. Choose one:

### Option 1: Vercel Blob (Recommended for Getting Started)
- ✅ Simple integration
- ✅ Included with Vercel deployment
- ✅ Good for images and moderate files
- ❌ Limited to image/video optimization
- **Setup**: Add `BLOB_READ_WRITE_TOKEN` to env vars

### Option 2: Cloudinary (Best for Video)
- ✅ Automatic transcoding
- ✅ CDN optimization
- ✅ Advanced video features
- ❌ Requires paid account for large volumes
- **Setup**: Add `CLOUDINARY_API_KEY`, `CLOUDINARY_CLOUD_NAME` to env vars

### Option 3: AWS S3 (Most Scalable)
- ✅ Highly scalable
- ✅ Cost-effective at scale
- ✅ Fine-grained permissions
- ❌ More complex setup
- **Setup**: Add AWS credentials to env vars

### Implementation Steps

1. **Choose provider** (start with Vercel Blob)
2. **Add credentials** to Vercel environment variables
3. **Update `/api/upload.js`** with provider-specific code
4. **Frontend automatically works** — no changes needed
5. **Deploy** — Vercel automatically detects changes

---

## API Endpoints

### Authentication

#### POST `/api/auth/login`
Login with email and password.

**Request:**
```json
{
  "email": "admin@ransilu.com",
  "password": "secure_password"
}
```

**Response (Success):**
```json
{
  "token": "eyJ...",
  "user": {
    "email": "admin@ransilu.com",
    "name": "Admin Name",
    "role": "admin"
  }
}
```

**Response (Error):**
```json
{
  "message": "Invalid email or password"
}
```

---

#### POST `/api/auth/verify`
Verify if a token is valid.

**Request:**
```
Authorization: Bearer {token}
```

**Response:**
```json
{
  "valid": true,
  "user": { ... }
}
```

---

### Content Management (Coming Soon)

```
GET    /api/content/{type}           → List all items
GET    /api/content/{type}/{id}      → Get single item
POST   /api/content/{type}           → Create new item
PUT    /api/content/{type}/{id}      → Update item
DELETE /api/content/{type}/{id}      → Delete item
POST   /api/upload                   → Upload file
```

All endpoints require valid `Authorization: Bearer {token}` header.

---

## Frontend Architecture

### Login Flow
- **File**: `admin/index.html`
- Single-page form
- Handles credentials, shows errors
- Stores token in localStorage
- Redirects to dashboard on success

### Dashboard
- **File**: `admin/dashboard.html`
- Navigation sidebar with sections
- Content area dynamically updates
- User info display in header
- Logout functionality

### Content Panels (Future)
- Separate panel for each content type
- Form builder for creating/editing
- File upload integration
- Real-time preview
- Confirmation dialogs for destructive actions

---

## Deployment

### Automatic Deployment
Every push to main branch triggers automatic deployment:

```bash
git add admin/ api/ data/
git commit -m "Update admin panel and content"
git push origin main
```

Vercel automatically:
1. Detects changes
2. Runs build process
3. Deploys frontend and API endpoints
4. Makes live at your domain

### Environment Variables
All sensitive data (passwords, API keys) are stored in Vercel:

1. Go to Vercel Project → Settings → Environment Variables
2. Add `ADMIN_USERS_JSON` with your admin credentials
3. Add any file storage API keys needed
4. Redeploy after adding variables

---

## Development

### Local Testing

Start development server:
```bash
vercel dev
```

Visit `http://localhost:3000/admin/` to test locally.

### Adding New Features

To add a new content type:

1. Create data file: `data/{type}.json`
2. Create API handler: `api/content/{type}.js`
3. Create UI panel: `admin/{type}.html` (embedded in dashboard)
4. Add navigation link in sidebar
5. Test locally with `vercel dev`
6. Commit and deploy

---

## Maintenance & Updates

### Regular Tasks

- **Update admin credentials** quarterly (change passwords)
- **Monitor token expiration** (users auto-logged out after 7 days)
- **Backup data files** (track in Git)
- **Review access logs** (when logging implemented)

### Upgrade Path

Future enhancements:
- 🔄 Real-time collaboration (multiple admins editing)
- 📊 Content analytics dashboard
- 🔐 Two-factor authentication
- 🗄️ Database backend (Postgres via Vercel)
- 📧 Email notifications on content changes
- 🌍 Multi-language content support
- 📱 Mobile admin app

---

## Troubleshooting

### Login Issues
| Problem | Solution |
|---------|----------|
| "Server configuration error" | Verify `ADMIN_USERS_JSON` is set in Vercel env vars |
| "Invalid email or password" | Double-check credentials in env var |
| Session expires immediately | Clear localStorage, check token format |

### File Upload Issues
| Problem | Solution |
|---------|----------|
| "Upload not configured" | Choose storage provider and add API credentials |
| Upload fails silently | Check env vars for API keys |
| Files not appearing | Verify storage provider settings |

### Deployment Issues
| Problem | Solution |
|---------|----------|
| 404 on /admin/ | Ensure `admin/` folder is committed and pushed |
| API 500 errors | Check Vercel Function logs in dashboard |
| Env vars not working | Redeploy after adding env vars |

---

## Security Checklist

- [ ] Set strong passwords in `ADMIN_USERS_JSON`
- [ ] Use environment variables for all secrets
- [ ] Enable HTTPS (automatic with Vercel)
- [ ] Limit admin user access to necessary personnel only
- [ ] Regularly rotate passwords (every 90 days)
- [ ] Monitor failed login attempts
- [ ] Keep dependencies updated
- [ ] Test file upload with malicious files

---

## Support & Contact

For setup help or feature requests, refer to `admin/SETUP.md` or contact your development team.
