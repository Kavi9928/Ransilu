# Vercel Hosting Guide (Separate Websites)

This repo is ready for Vercel static hosting.

## 1) Create 3 separate Vercel projects

Create these projects from the same GitHub repo:

1. Main Website
- Root Directory: `.`
- Framework Preset: `Other`
- Build Command: leave empty
- Output Directory: leave empty

2. Music Website
- Root Directory: `music`
- Framework Preset: `Other`
- Build Command: leave empty
- Output Directory: leave empty

3. Radio Website
- Root Directory: `radio`
- Framework Preset: `Other`
- Build Command: leave empty
- Output Directory: leave empty

## 2) Optional domain mapping

Suggested domains:
- Main: `ransilu.com`
- Music: `music.ransilu.com`
- Radio: `radio.ransilu.com`

## 3) Link websites together with final domains

After deployment, update links in these files to use your final production domains:
- `index.html`
- `js/views/home.js`
- `js/app.js`
- `music/index.html`
- `radio/index.html`

## 4) If you prefer one single Vercel project

You can deploy only the repo root (`.`). Then pages will be:
- `/` (main)
- `/music/`
- `/radio/`

This works too, but it is not separate hosting.
