# ES Clinical Research — Corporate Website

> Official website for **ES Clinical Research (ESCR)**, a leading Contract Research Organization (CRO) based in Algiers, Algeria.  
> **Domain**: [esclinical.com](https://esclinical.com)

---

## Table of Contents

1. [Overview](#overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Pages & Routing](#pages--routing)
5. [Key Components](#key-components)
6. [Contact Form & Email Handler](#contact-form--email-handler)
7. [Design System & Brand Identity](#design-system--brand-identity)
8. [SEO & Performance](#seo--performance)
9. [AI Chatbot Assistant](#ai-chatbot-assistant)
10. [Getting Started](#getting-started)
11. [Build & Automated CI/CD Deployment](#build--automated-cicd-deployment)
12. [Post-Mortem & Troubleshooting Guide](#post-mortem--troubleshooting-guide)

---

## Overview

This is a single-page application (SPA) built to serve as the corporate digital presence for ES Clinical Research. The website showcases 7 specialized CRO services, company information, a blog section, and a full contact system — all designed with a premium, modern aesthetic aligned with the ESCR brand identity.

**Key Features:**
- 12+ pages with dedicated service detail pages
- Responsive design optimized for desktop, tablet, and mobile
- Prerendered HTML pages for full SEO indexing
- Full SEO implementation (meta tags, Open Graph, Twitter Cards, Structured Data)
- Interactive AI-powered chatbot for visitor navigation and support
- Scroll navigation system (scroll-to-top / scroll-to-bottom)
- Animated sections with motion transitions
- Branded HTML Contact form with rate limiting, honeypot anti-spam, and CORS protection
- Blog system with article detail pages
- Automated CI/CD pipeline via GitHub Actions to cPanel hosting (`esclinical.com`)

---

## Technology Stack

| Category          | Technology                       | Version  |
|-------------------|----------------------------------|----------|
| **Framework**     | React                            | 19.x     |
| **Language**      | TypeScript                       | 5.8.x    |
| **Build Tool**    | Vite                             | 6.x      |
| **Styling**       | Tailwind CSS                     | 4.x      |
| **Routing**       | React Router DOM                 | 7.x      |
| **Animations**    | Motion (Framer Motion)           | 12.x     |
| **Icons**         | Lucide React                     | 0.546.x  |
| **Backend Mailer**| PHP 8.x (`contact.php`)          | Native   |
| **Deployer**      | Direct PHP Deployer + cPanel UAPI| Native   |

---

## Project Structure

```
escr-website/
├── .github/workflows/         # CI/CD deployment pipelines
│   └── deploy.yml             # Dual-strategy automated build & deployment
├── public/                    # Static assets & server scripts
│   ├── .htaccess              # Apache SPA routing fallback (clean cPanel config)
│   ├── .user.ini              # PHP upload limits (64M)
│   ├── api-deploy.php         # Secure direct deployment receiver
│   ├── contact.php            # Branded HTML contact form email handler
│   ├── logo-es-cr-primary.svg # Brand logo
│   ├── robots.txt             # Search engine directives
│   └── sitemap.xml            # XML sitemap
│
├── dist/                      # Production build output (tracked in git)
├── scripts/
│   └── prerender.mjs          # SEO HTML prerendering script
├── src/
│   ├── components/            # Reusable UI components
│   ├── data/                  # Service definitions & chatbot database
│   ├── pages/                 # Route components (17 routes)
│   ├── App.tsx                # Route router configuration
│   └── index.css              # Global styles & Tailwind CSS v4
│
├── package.json               # Build scripts & dependencies
└── vite.config.mjs            # Vite bundle configuration
```

---

## Contact Form & Email Handler

The contact form sends branded HTML emails directly to `contact@esclinical.com`.

### Features (`public/contact.php`)
- **Recipient**: `contact@esclinical.com`
- **Sender**: `noreply@esclinical.com` with `Reply-To` set to visitor's email address
- **Security & Protection**:
  - **CORS Protection**: Restricted to `https://esclinical.com` and `https://www.esclinical.com`
  - **Rate Limiting**: Maximum 5 submissions per hour per user session
  - **Honeypot Trap**: Silent block for automated spam bots (`website_url` field)
  - **Input Sanitization**: Full HTML entity encoding and header injection protection (`\r\n` stripping)
- **Branded HTML Template**: Clean purple gradient header (`#7f2191` → `#50298e`), subject badge, structured contact info grid, message block, and a direct "Reply" button.

---

## Build & Automated CI/CD Deployment

### How to Make & Deploy Changes

Deployment is **100% automated**. To release a new update to `esclinical.com`:

1. **Make your code edits** locally.
2. **Commit and push** to the `main` branch on GitHub:
   ```bash
   git add .
   git commit -m "feat: description of your updates"
   git push origin main
   ```
3. **GitHub Actions** will automatically:
   - Install dependencies and run `npm run build`
   - Run `scripts/prerender.mjs` to generate SEO HTML pages for all 17 routes
   - Create `esclinical-dist.zip`
   - Send the zip archive to `https://esclinical.com/api-deploy.php` via secure token authentication
   - Extract files in `public_html` on the server in under 2 seconds.

---

### Manual Deployment Procedure (Fallback)

If you ever need to manually deploy the site via cPanel File Manager:

1. **Build locally**:
   ```bash
   npm run build
   powershell -Command "Compress-Archive -Path 'dist\*' -DestinationPath 'esclinical-dist.zip' -Force"
   ```
2. **Log into cPanel** (`esclinical.com:2083`).
3. Open **File Manager** → navigate to `public_html`.
4. Click **Upload** → upload `esclinical-dist.zip`.
5. Right-click `esclinical-dist.zip` in `public_html` → click **Extract**.

---

## Post-Mortem & Troubleshooting Guide

### What Caused the Initial Deployment Failures?

1. **The 500 Internal Server Error**:
   - *Cause*: The original `.htaccess` file contained the directive `Options -MultiViews`. On cPanel shared hosting (specifically Algerian hosting servers like `41.111.146.138`), the `Options` directive is restricted in `httpd.conf` (`AllowOverride Options` is disabled). Apache returned an immediate 500 Server Error for all HTTP requests.
   - *Fix*: Removed `Options` and restricted header modules from `.htaccess`, creating a minimal, safe Apache rewrite ruleset for React Router SPA fallback.

2. **FTP & cPanel UAPI Failures**:
   - *Cause*: The hosting server firewall (CSF/ModSecurity) blocks incoming FTP connections (port 21) and external UAPI requests (port 2083) from GitHub Actions runner IP addresses.
   - *Fix*: Implemented `api-deploy.php`, a secure direct deployment endpoint operating on standard Web HTTPS port 443 (which is always open), authenticated via an `X-Deploy-Token` header.

3. **PHP 2M Upload Limit**:
   - *Cause*: Default cPanel `upload_max_filesize` in `php.ini` was set to `2M`, while `esclinical-dist.zip` is ~5.6 MB.
   - *Fix*: Increased `upload_max_filesize` to `64M` via cPanel MultiPHP INI Editor and `.user.ini`.

---

## License

This project is proprietary and confidential. All rights reserved by **ES Clinical Research (ESCR)**.
