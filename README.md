# Neupane Y. & Associates — Website

A modern, static website for Neupane Y. & Associates, a Bhaktapur-based chartered accountancy firm.

## Built With

- **Astro 5** — Static site generation with zero JavaScript by default
- **Tailwind CSS 4** — Utility-first styling
- **TypeScript** — Type-safe components and content
- **Content Collections** — Structured content (services, insights, team)
- **Fraunces + Inter** — Premium serif + sans-serif typography

## Project Structure

```
src/
├── components/
│   ├── layout/       # Header, Footer
│   └── ui/           # Reusable components (Button, Container, etc.)
├── content/
│   ├── services/     # Service line content (7 services)
│   ├── insights/     # Blog posts
│   └── team/         # Team member bios
├── data/             # Global site configuration
├── layouts/          # Base HTML layout with SEO
├── pages/            # Page components (home, about, contact, etc.)
├── styles/           # Global CSS with design tokens
└── types.ts          # TypeScript type definitions
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 10+

### Installation

```bash
cd yogesh-website
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
pnpm build
```

Generates a static site in `dist/` ready for deployment.

### Preview

```bash
pnpm preview
```

Serve the built site locally.

## Content Management

### Adding a Service

Create a new `.md` file in `src/content/services/`:

```markdown
---
title: Service Name
summary: Brief description
order: 8
icon: 'lucide-icon-name'
heroImage: 'https://images.unsplash.com/...'
heroAlt: 'Image description'
deliverables:
  - Deliverable 1
  - Deliverable 2
whoFor:
  - Audience 1
  - Audience 2
---

## Content in markdown
```

### Adding a Blog Post

Create a new `.md` file in `src/content/insights/`:

```markdown
---
title: Article Title
summary: Short summary
date: 2026-05-25
author: Yogesh Neupane
category: Tax | Audit | Advisory | Compliance | Firm news
readingTime: '5 min read'
heroImage: 'https://images.unsplash.com/...'
heroAlt: 'Image description'
draft: false
---

## Article content in markdown
```

### Updating Team

Edit `src/content/team/yogesh-neupane.md` or add new team members.

## Configuration

### Site Settings

Edit `src/data/site.ts` to update:
- Contact information
- Navigation links
- Statistics
- Social media handles
- Web3Forms API key (for contact form)

### Design Tokens

Editorial Luxury color palette in `src/styles/global.css`:
- **Primary Navy**: `#0b1a2a`
- **Light Cream**: `#f5efe6`
- **Gold Accent**: `#b89968`
- **Serif Font**: Fraunces Variable
- **Sans Font**: Inter Variable

## Deployment

The site is fully static and can be deployed to any static hosting:

- **Vercel**: `vercel deploy`
- **Netlify**: `netlify deploy`
- **Cloudflare Pages**: Push to git, auto-deploy
- **Any static server**: Copy `dist/` folder

### Environment Variables

For the contact form to work, set:
```
WEB3FORMS_ACCESS_KEY=your_api_key_here
```

Get a free key from [web3forms.com](https://web3forms.com)

## SEO

Includes:
- XML sitemap (auto-generated)
- RSS feed (`/rss.xml`)
- Open Graph meta tags
- JSON-LD structured data (Organization, BreadcrumbList, Article)
- robots.txt

## Performance

- **Zero JavaScript** by default (uses `astro:transitions` for navigation)
- **Automatic image optimization** via Astro Image
- **CSS inlining** for above-the-fold styles
- **Prefetch** enabled for faster navigation
- **Lighthouse targets**: 95+ across all metrics

## License

This website and its content are the property of Neupane Y. & Associates.

---

Built with attention to detail by Claude Code.
