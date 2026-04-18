# ES Clinical Research — Corporate Website

> Official website for **ES Clinical Research (ESCR)**, a leading Contract Research Organization (CRO) based in Algiers, Algeria.

---

## Table of Contents

1. [Overview](#overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Pages & Routing](#pages--routing)
5. [Key Components](#key-components)
6. [Design System & Brand Identity](#design-system--brand-identity)
7. [SEO & Performance](#seo--performance)
8. [AI Chatbot Assistant](#ai-chatbot-assistant)
9. [Getting Started](#getting-started)
10. [Build & Deployment](#build--deployment)

---

## Overview

This is a single-page application (SPA) built to serve as the corporate digital presence for ES Clinical Research. The website showcases 7 specialized CRO services, company information, a blog section, and a full contact system — all designed with a premium, modern aesthetic aligned with the ESCR brand identity.

**Key Features:**
- 12+ pages with dedicated service detail pages
- Responsive design optimized for desktop, tablet, and mobile
- Lazy-loaded routes with code splitting for optimized performance
- Full SEO implementation (meta tags, Open Graph, Twitter Cards, Structured Data)
- Interactive AI-powered chatbot for visitor navigation and support
- Scroll navigation system (scroll-to-top / scroll-to-bottom)
- Animated sections with motion transitions
- Contact form with subject categorization
- Blog system with article detail pages
- Language selector ready for multilingual support (EN/FR)

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
| **Typography**    | Google Fonts (Inter 400–700)     | —        |

---

## Project Structure

```
escr-website/
├── public/                    # Static assets
│   ├── about/                 # About page images
│   ├── blog/                  # Blog post images
│   ├── hero/                  # Hero section images
│   ├── services/              # Service page images
│   ├── favicon.svg            # Site favicon
│   ├── logo.svg               # Primary logo
│   ├── footer-logo.svg        # Footer logo variant
│   ├── manifest.json          # PWA manifest
│   ├── robots.txt             # Search engine directives
│   └── sitemap.xml            # XML sitemap
│
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── AnimatedSection.tsx   # Scroll-triggered animations
│   │   ├── BlogCard.tsx          # Blog post card component
│   │   ├── Button.tsx            # CTA button variants
│   │   ├── Chatbot.tsx           # AI chatbot widget
│   │   ├── CheckList.tsx         # Checkmark list component
│   │   ├── CTA.tsx               # Call-to-action section
│   │   ├── Footer.tsx            # Site footer
│   │   ├── Navbar.tsx            # Navigation bar
│   │   ├── PageHero.tsx          # Page header hero section
│   │   ├── ScrollNav.tsx         # Scroll up/down buttons
│   │   ├── ScrollToTop.tsx       # Route change scroll reset
│   │   ├── SEO.tsx               # Dynamic SEO head tags
│   │   ├── ServiceBottom.tsx     # Service page bottom CTA
│   │   ├── ServiceLayout.tsx     # Service page layout template
│   │   ├── ShadowBox.tsx         # Branded shadow container
│   │   ├── StructuredData.tsx    # JSON-LD structured data
│   │   └── Typography.tsx        # Heading/text components
│   │
│   ├── data/                  # Static data & configuration
│   │   ├── blogPosts.ts          # Blog post metadata
│   │   ├── chatbotFaq.ts         # Chatbot knowledge base & engine
│   │   └── services.ts           # Centralized service definitions
│   │
│   ├── pages/                 # Route-level page components
│   │   ├── services/             # Individual service pages (7 pages)
│   │   ├── About.tsx
│   │   ├── Blog.tsx
│   │   ├── BlogPost.tsx
│   │   ├── BlogPostOne.tsx
│   │   ├── BlogPostTwo.tsx
│   │   ├── Contact.tsx
│   │   ├── Home.tsx
│   │   ├── Legal.tsx
│   │   ├── NotFound.tsx
│   │   ├── Privacy.tsx
│   │   ├── Services.tsx
│   │   └── Terms.tsx
│   │
│   ├── types/                 # TypeScript type definitions
│   ├── App.tsx                # Root component & route definitions
│   ├── index.css              # Global styles & Tailwind config
│   └── main.tsx               # Application entry point
│
├── index.html                 # HTML entry point with SEO defaults
├── package.json               # Dependencies & scripts
├── tsconfig.json              # TypeScript configuration
└── vite.config.mjs            # Vite build configuration
```

---

## Pages & Routing

| Route                               | Page Component        | Description                               |
|--------------------------------------|-----------------------|-------------------------------------------|
| `/`                                  | `Home`                | Landing page with hero, DNA, stats, CTA   |
| `/about`                             | `About`               | Company mission, story, values, and team  |
| `/services`                          | `Services`            | Overview of all 7 CRO services            |
| `/services/clinical-studies`         | `ClinicalStudies`     | Phase I–III trial management              |
| `/services/pharmacoeconomic-studies` | `Pharmacoeconomic`    | Value assessment & market access          |
| `/services/patient-support-program`  | `PatientSupportProgram` | Patient adherence & support             |
| `/services/real-world-evidence`      | `RealWorld`           | Phase IV & observational studies          |
| `/services/medical-writing`          | `MedicalWriting`      | Scientific publications & editorial       |
| `/services/expert-support`           | `ExpertSupport`       | Advisory boards & KOL engagement          |
| `/services/training`                 | `Training`            | INEAS-accredited professional courses     |
| `/blog`                              | `Blog`                | Article listing with featured post        |
| `/blog/:id`                          | `BlogPost`            | Individual blog article                   |
| `/contact`                           | `Contact`             | Contact form, map, and info               |
| `/terms-of-use`                      | `Terms`               | Terms & conditions                        |
| `/privacy-policy`                    | `Privacy`             | Privacy policy                            |
| `/legal-notice`                      | `Legal`               | Legal information                         |
| `*`                                  | `NotFound`            | Custom 404 error page                     |

All pages are **lazy-loaded** via `React.lazy()` with a loading spinner fallback.

---

## Key Components

### Navbar (`Navbar.tsx`)
Responsive navigation with dropdown service menu, language selector, and mobile hamburger menu. Includes smooth scroll behavior and active route highlighting.

### Footer (`Footer.tsx`)
Full-width footer with company info, service links, legal links, contact details, LinkedIn link, and branded decorative elements.

### ServiceLayout (`ServiceLayout.tsx`)
Shared layout template used by all 7 service detail pages. Provides consistent structure: hero, description, feature checklist, bottom CTA.

### CTA (`CTA.tsx`)
Reusable call-to-action section with gradient background, used across multiple pages to drive user engagement toward the Contact page.

### SEO (`SEO.tsx`)
Dynamic component that injects page-specific `<title>`, `<meta>`, Open Graph, and Twitter Card tags into the document head.

### ScrollNav (`ScrollNav.tsx`)
Fixed scroll-to-top and scroll-to-bottom buttons on the left side. Automatically hides near the header and footer zones.

### Chatbot (`Chatbot.tsx`)
AI-powered chatbot widget. See [dedicated section below](#ai-chatbot-assistant).

---

## Design System & Brand Identity

### Color Palette

| Color       | Hex Code   | Usage                                     |
|-------------|------------|-------------------------------------------|
| Primary     | `#7f2191`  | Brand primary, buttons, headers            |
| Secondary   | `#6f1888`  | Bold text, links, hover accents            |
| Tertiary    | `#392874`  | Body text, dark accents                    |
| Deep Violet | `#50298e`  | Hover states, user message bubbles         |
| Dark        | `#4c005a`  | Gradient endpoints                         |
| White       | `#ffffff`  | Backgrounds, borders                       |

### Gradients

```css
/* Brand Radial Gradient (Headers, CTAs) */
background: radial-gradient(circle at 0% 0%, #7f2191 0%, #4c005a 100%);
```

### Box Shadow (Signature)

```css
box-shadow: 0 0 25px rgba(80, 41, 142, 0.18);
```

### Typography

- **Font Family**: Inter (Google Fonts)
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

### Design Principles

- Premium and institutional aesthetic
- Consistent radial gradients across interactive elements
- White borders (`2px`) on floating elements (chatbot, scroll buttons)
- Micro-animations powered by Framer Motion
- Smooth transitions (300–500ms easing)

---

## SEO & Performance

### SEO Features
- Per-page `<title>` and `<meta description>` tags via `SEO.tsx` component
- Open Graph tags for Facebook and LinkedIn sharing
- Twitter Card tags for Twitter sharing
- JSON-LD structured data (Organization + WebSite schemas)
- Canonical URLs
- `robots.txt` and `sitemap.xml`
- Semantic HTML5 structure with proper heading hierarchy
- PWA `manifest.json`

### Performance Optimizations
- **Code splitting**: All pages lazy-loaded with `React.lazy()`
- **Font optimization**: Preconnect + preload for Google Fonts
- **Image optimization**: Properly sized assets in `/public`
- **Tree shaking**: Vite production build with dead code elimination
- **CSS purging**: Tailwind CSS v4 with automatic unused CSS removal

---

## AI Chatbot Assistant

The ESCR website includes a custom-built, privacy-first **AI chatbot** that serves as a navigation and support tool for site visitors. It operates entirely client-side with zero external API calls.

### Architecture

```
Chatbot.tsx (UI Component)
    └── chatbotFaq.ts (Knowledge Base + Intent Engine)
           ├── CHATBOT_DATABASE      → 35+ response categories
           ├── CHATBOT_KEYWORDS      → 30+ keyword groups (500+ keywords)
           ├── Pattern Matchers      → Greetings, Thanks, Bye, Compliments, etc.
           └── matchKeyword()        → Intent recognition engine
```

### Features

| Feature                    | Description                                              |
|----------------------------|----------------------------------------------------------|
| **Bilingual Understanding** | Processes inputs in English and French                  |
| **Intent Recognition**      | Weighted keyword scoring with multi-word phrase matching |
| **Pattern Detection**       | Sentence-level detection for 9 pattern categories        |
| **Gibberish Handling**      | Detects random/meaningless input and responds gracefully |
| **Navigation Integration**  | `nav:/path` links trigger React Router navigation        |
| **Session Persistence**     | Chat history saved to `localStorage`                     |
| **Expand/Collapse**         | Toggle between compact and wide view                     |
| **Auto-hide at Footer**     | Toggle button hides when user reaches page bottom        |
| **Typing Animation**        | Realistic typing indicator with staggered dots           |
| **Tooltip Prompt**          | Periodic "How can I help you?" prompt with animation     |

### Supported Intents (35+ categories)

| Category               | Examples of Recognized Input                                         |
|------------------------|----------------------------------------------------------------------|
| **Services Overview**  | "What services do you offer?", "Que faites-vous?"                    |
| **Clinical Studies**   | "clinical trials", "Phase III", "essai clinique"                     |
| **Pharmacoeconomic**   | "cost-effectiveness", "market access", "HTA"                        |
| **Patient Support**    | "PSP", "adherence program", "patient education"                     |
| **Real-World Evidence**| "RWE", "Phase IV", "observational study"                             |
| **Medical Writing**    | "publication", "manuscript", "rédaction médicale"                    |
| **Expert Support**     | "advisory board", "KOL", "avis expert"                              |
| **Training**           | "GCP course", "INEAS", "formation"                                   |
| **Contact**            | "email", "phone", "rendez-vous"                                      |
| **About**              | "who are you", "your mission", "CRO"                                |
| **Team**               | "team", "CEO", "Chalal"                                              |
| **Careers**            | "job", "apply", "stage", "internship"                                |
| **Blog**               | "articles", "insights", "actualités"                                 |
| **Location**           | "address", "where", "Cheraga"                                        |
| **Working Hours**      | "open", "schedule", "horaires"                                       |
| **Pricing**            | "how much", "devis", "quote"                                         |
| **Partnership**        | "collaborate", "partenariat"                                         |
| **LinkedIn**           | "social media", "LinkedIn", "réseaux"                                |
| **Legal / Privacy**    | "terms", "GDPR", "mentions légales"                                  |
| **Language**           | "français", "English", "traduction"                                  |
| **Pharma General**     | "drug development", "biotech", "médicament"                         |
| **Regulatory / GCP**   | "ICH", "compliance", "réglementation"                                |
| **Safety / PV**        | "pharmacovigilance", "adverse event", "RMP"                         |
| **Data / Biostats**    | "EDC", "biostatistics", "data management"                            |
| **Standards**          | "ISO", "quality assurance", "normes"                                 |
| **Navigation Help**    | "navigate", "find", "show me around"                                 |
| **Compare Services**   | "difference between", "vs", "which service"                         |
| **How It Works**       | "how to start", "get started", "process"                             |
| **AI Identity**        | "who are you", "are you a robot", "chatbot"                         |
| **Greetings**          | "hello", "bonjour", "salam", "yo"                                    |
| **Thanks**             | "merci", "thanks", "appreciate"                                      |
| **Goodbye**            | "bye", "au revoir", "à bientôt"                                     |
| **Compliments**        | "amazing", "great", "bravo"                                          |
| **Frustration**        | "help me", "confused", "ça marche pas"                               |
| **Gibberish**          | Random characters, keyboard smashes, ultra-short input               |

### Extending the Chatbot

To add a new topic:

1. Add a new entry in `CHATBOT_DATABASE` in `src/data/chatbotFaq.ts`:
   ```typescript
   "new_topic": {
     id: "new_topic",
     label: "Button Label",
     response: "Your response text with **bold** and *italic* formatting.",
     followUpIds: ["contact", "services", "main_menu"]
   }
   ```

2. Add keywords in `CHATBOT_KEYWORDS`:
   ```typescript
   { keywords: ["keyword1", "keyword2", "mot_clé_fr"], responseId: "new_topic", weight: 3 }
   ```

3. (Optional) Add a navigation link:
   ```typescript
   "link_new_topic": {
     id: "link_new_topic",
     label: "Visit New Topic Page",
     response: "nav:/new-route"
   }
   ```

### Privacy & Data

- **Zero external API calls** — All processing is client-side
- **No user data collection** — Chat history is stored only in the user's browser (`localStorage`)
- **No third-party AI services** — The chatbot runs entirely on a local rule-based engine
- **GDPR-compliant** — No personal data leaves the browser

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The development server starts at **http://localhost:5175** by default.

### Available Scripts

| Command            | Description                                |
|--------------------|--------------------------------------------|
| `npm run dev`      | Start development server (port 5175)       |
| `npm run build`    | Production build to `/dist`                |
| `npm run preview`  | Preview production build locally           |
| `npm run serve:dist` | Serve the dist folder with custom script |
| `npm run lint`     | TypeScript type checking                   |
| `npm run clean`    | Remove `/dist` folder                      |

---

## Build & Deployment

### Production Build

```bash
npm run build
```

This generates an optimized production bundle in the `/dist` directory with:
- Minified JavaScript bundles with code splitting
- Optimized CSS with unused styles removed
- Hashed filenames for cache busting
- Pre-rendered static assets

### Deployment

The `/dist` folder can be deployed to any static hosting provider:
- **Netlify** — Drag & drop or Git integration
- **Vercel** — Connect GitHub repository
- **AWS S3 + CloudFront** — Static hosting with CDN
- **Traditional hosting** — Upload `/dist` contents to web root

**Important**: Since this is an SPA with client-side routing, configure your hosting to redirect all routes to `index.html`. Example for Netlify (`_redirects` file):

```
/*    /index.html   200
```

---

## License

This project is proprietary and confidential. All rights reserved by ES Clinical Research.

---

*Built for ES Clinical Research — Improving Patient Care Through Innovation.*
