# QuantumHub Portfolio

Personal portfolio + engineering ecosystem for [quantumhub.me](https://quantumhub.me).

## Stack

| Layer | Tech |
|-------|------|
| Framework | Astro 4 (static output) |
| Styling | Tailwind CSS 3 |
| Content | Astro Content Collections (Markdown) |
| Server | DigitalOcean VPS |
| Reverse proxy | Nginx |
| SSL | Let's Encrypt (Certbot) |
| Automation | n8n at n8n.quantumhub.me |

---

## Project Structure

```
quantumhub/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── ProjectCard.astro
│   │   └── ProjectGrid.astro
│   ├── content/
│   │   ├── config.ts           ← Zod schemas for content collections
│   │   ├── projects/           ← One .md file per project
│   │   │   ├── ai-document-processor.md
│   │   │   └── ...
│   │   └── labs/               ← Experimental work entries
│   ├── layouts/
│   │   └── BaseLayout.astro    ← Root layout with SEO meta
│   ├── pages/
│   │   ├── index.astro         ← Home
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── labs.astro
│   │   ├── 404.astro
│   │   └── projects/
│   │       ├── index.astro     ← Project listing + filter
│   │       └── [slug].astro    ← Dynamic project detail
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── nginx.conf                  ← Drop into /etc/nginx/sites-available/
├── deploy.sh                   ← Build + rsync to VPS
└── package.json
```

---

## Adding a Project

Create a new file in `src/content/projects/`:

```bash
touch src/content/projects/my-new-project.md
```

Paste this frontmatter template:

```yaml
---
title: "Project Title"
description: "One or two sentence description shown in cards."
stack: ["Node.js", "PostgreSQL", "Redis"]
status: "production"       # production | experimental | archived
featured: false            # true = appears on homepage
date: 2024-12-01
category: "backend"        # AI | automation | web | backend | devops | data | api | tool
github: "https://github.com/yourusername/repo"   # optional
demo: "https://demo.example.com"                 # optional
tags: ["tag1", "tag2"]
---

## Overview

Your project write-up in Markdown here.
```

That's it. The project appears on `/projects` and gets its own page at `/projects/my-new-project`.

---

## Development

```bash
npm install
npm run dev          # http://localhost:4321
```

## Build + Deploy

```bash
npm run build        # outputs to ./dist
./deploy.sh          # rsync dist/ to VPS + reload Nginx
```

Or manually:
```bash
rsync -avz --delete ./dist/ deploy@quantumhub.me:/var/www/quantumhub/dist/
ssh deploy@quantumhub.me "sudo systemctl reload nginx"
```

## Nginx Setup (VPS)

```bash
sudo cp nginx.conf /etc/nginx/sites-available/quantumhub.me
sudo ln -s /etc/nginx/sites-available/quantumhub.me /etc/nginx/sites-enabled/
sudo certbot --nginx -d quantumhub.me -d www.quantumhub.me
sudo nginx -t && sudo systemctl reload nginx
```

---

## Content Collections Schema

### Projects

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `title` | string | ✓ | |
| `description` | string | ✓ | Shown in cards |
| `stack` | string[] | ✓ | Tech used |
| `status` | enum | ✓ | production / experimental / archived |
| `featured` | boolean | | Shows on homepage |
| `date` | date | ✓ | |
| `category` | enum | ✓ | AI / automation / web / backend / devops / data / api / tool |
| `github` | url | | |
| `demo` | url | | |
| `tags` | string[] | | |
| `draft` | boolean | | Hidden from listings if true |
