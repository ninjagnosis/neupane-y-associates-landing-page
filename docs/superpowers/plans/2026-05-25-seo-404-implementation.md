# SEO Optimization & Custom 404 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement a comprehensive SEO optimization strategy with custom 404 page, technical SEO foundations (robots.txt, sitemap verification, structured data), and on-page improvements.

**Architecture:** 
- Create a custom static 404 page with brand-consistent design and quick navigation
- Build reusable Astro schema components for JSON-LD structured data
- Add meta tags and schema markup to all layouts and key pages
- Optimize content with better titles, descriptions, headings, and internal linking
- Verify sitemap generation during build and robots.txt deployment

**Tech Stack:** Astro, Tailwind CSS, JSON-LD schema, Cloudflare deployment

---

## File Structure

**Creating:**
- `src/pages/404.astro` — Custom 404 error page
- `public/robots.txt` — Search engine crawling guidelines
- `src/components/SchemaOrg.astro` — Reusable schema markup components

**Modifying:**
- `src/layouts/BaseLayout.astro` — Add meta tags, global schema support
- `src/pages/index.astro` — Homepage with Organization/LocalBusiness schema
- `src/pages/about.astro` — About page with SEO optimization
- `src/pages/contact.astro` — Contact page with SEO optimization
- Service pages (under `src/content/services/`) — Service schema and optimization
- Insight pages (under `src/content/insights/`) — BlogPosting schema and optimization
- `astro.config.mjs` — Verify sitemap configuration

---

## Tasks

### Task 1: Create Custom 404 Error Page

**Files:**
- Create: `src/pages/404.astro`

- [ ] **Step 1: Create the 404 page file**

Create `src/pages/404.astro` with the following content:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import { site, nav } from '../data/site';
---

<BaseLayout title="Page Not Found" description="The page you're looking for doesn't exist.">
  <div class="min-h-screen flex items-center justify-center px-4">
    <div class="max-w-md text-center">
      <h1 class="text-6xl font-bold mb-4">404</h1>
      <h2 class="text-3xl font-semibold mb-4">Page Not Found</h2>
      <p class="text-lg text-gray-600 mb-8">
        The page you're looking for doesn't exist or has been moved. Let us help you find what you need.
      </p>

      <a
        href="/"
        class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg mb-12 transition"
      >
        Return to Home
      </a>

      <div class="grid grid-cols-2 gap-4 text-center">
        <a href="/services/" class="p-4 border rounded-lg hover:bg-gray-50 transition">
          <p class="font-semibold">Services</p>
          <p class="text-sm text-gray-600">Our offerings</p>
        </a>
        <a href="/about/" class="p-4 border rounded-lg hover:bg-gray-50 transition">
          <p class="font-semibold">About</p>
          <p class="text-sm text-gray-600">About the firm</p>
        </a>
        <a href="/team/" class="p-4 border rounded-lg hover:bg-gray-50 transition">
          <p class="font-semibold">Team</p>
          <p class="text-sm text-gray-600">Meet our experts</p>
        </a>
        <a href="/contact/" class="p-4 border rounded-lg hover:bg-gray-50 transition">
          <p class="font-semibold">Contact</p>
          <p class="text-sm text-gray-600">Get in touch</p>
        </a>
      </div>

      <div class="mt-12 pt-8 border-t">
        <p class="text-sm text-gray-600 mb-4">Looking for insights?</p>
        <a href="/insights/" class="text-blue-600 hover:underline font-semibold">
          Read our latest blog posts →
        </a>
      </div>
    </div>
  </div>
</BaseLayout>
```

- [ ] **Step 2: Verify page renders**

Run the dev server:
```bash
pnpm run dev
```

Navigate to `http://localhost:3000/nonexistent-page` and verify:
- Page displays with 404 heading
- "Return to Home" button is visible and clickable
- Quick links grid is displayed
- Styling matches the site theme

- [ ] **Step 3: Commit**

```bash
git add src/pages/404.astro
git commit -m "feat: add custom 404 error page with navigation"
```

---

### Task 2: Create robots.txt File

**Files:**
- Create: `public/robots.txt`

- [ ] **Step 1: Create robots.txt**

Create `public/robots.txt` with the following content:

```
User-agent: *
Allow: /

Sitemap: https://neupaneassociates.com.np/sitemap-index.xml
```

- [ ] **Step 2: Verify file exists**

```bash
cat /Users/trilochan/Development/code/yogesh-website/public/robots.txt
```

Expected output:
```
User-agent: *
Allow: /

Sitemap: https://neupaneassociates.com.np/sitemap-index.xml
```

- [ ] **Step 3: Commit**

```bash
git add public/robots.txt
git commit -m "feat: add robots.txt with sitemap reference"
```

---

### Task 3: Create Reusable Schema Components

**Files:**
- Create: `src/components/SchemaOrg.astro`

- [ ] **Step 1: Create schema components file**

Create `src/components/SchemaOrg.astro` with the following content:

```astro
---
import { site } from '../data/site';

interface Props {
  type: 'organization' | 'localBusiness' | 'service' | 'blogPosting' | 'breadcrumb';
  data?: Record<string, any>;
}

const { type, data = {} } = Astro.props;

// Organization schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  url: site.url,
  logo: `${site.url}/logo.png`,
  description: site.description,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.line1,
    addressLocality: site.address.line2,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: site.phoneRaw,
    email: site.email,
  },
  sameAs: [
    site.social.facebook,
    site.social.linkedin,
    site.social.twitter,
  ].filter(url => url !== '#'),
  foundingDate: String(site.founded),
};

// LocalBusiness schema
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: site.name,
  image: `${site.url}/logo.png`,
  description: site.description,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.line1,
    addressLocality: site.address.line2,
    addressRegion: site.address.region,
    postalCode: '44800',
    addressCountry: 'NP',
  },
  telephone: site.phoneRaw,
  email: site.email,
  url: site.url,
  areaServed: ['Bhaktapur', 'Kathmandu', 'Nepal'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '18:00',
    },
  ],
};

// Service schema
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: data.name || 'Professional Accounting Service',
  description: data.description || '',
  provider: {
    '@type': 'Organization',
    name: site.name,
    url: site.url,
  },
  areaServed: 'Nepal',
  ...(data.url && { url: data.url }),
};

// BlogPosting schema
const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: data.title || '',
  description: data.description || '',
  image: data.image || `${site.url}/default-image.jpg`,
  datePublished: data.publishedDate || new Date().toISOString(),
  dateModified: data.modifiedDate || new Date().toISOString(),
  author: {
    '@type': 'Organization',
    name: site.name,
    url: site.url,
  },
  publisher: {
    '@type': 'Organization',
    name: site.name,
    logo: {
      '@type': 'ImageObject',
      url: `${site.url}/logo.png`,
    },
  },
};

// BreadcrumbList schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: data.items?.map((item: any, index: number) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.label,
    item: `${site.url}${item.href}`,
  })) || [],
};

const schemas = {
  organization: organizationSchema,
  localBusiness: localBusinessSchema,
  service: serviceSchema,
  blogPosting: blogPostingSchema,
  breadcrumb: breadcrumbSchema,
};

const schemaData = schemas[type];
---

<script type="application/ld+json" set:html={JSON.stringify(schemaData)} />
```

- [ ] **Step 2: Verify component syntax**

Run TypeScript check:
```bash
cd /Users/trilochan/Development/code/yogesh-website
npx tsc --noEmit
```

Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/components/SchemaOrg.astro
git commit -m "feat: add reusable schema.org JSON-LD components"
```

---

### Task 4: Update BaseLayout with Meta Tags and Global Schema

**Files:**
- Modify: `src/layouts/BaseLayout.astro`

- [ ] **Step 1: Read the current BaseLayout**

```bash
cat /Users/trilochan/Development/code/yogesh-website/src/layouts/BaseLayout.astro
```

Take note of the current structure (header, slots, footer).

- [ ] **Step 2: Add meta tags and schema import to BaseLayout**

Update `src/layouts/BaseLayout.astro` to include:

```astro
---
import { site } from '../data/site';
import SchemaOrg from '../components/SchemaOrg.astro';

interface Props {
  title?: string;
  description?: string;
  image?: string;
  breadcrumb?: Array<{ label: string; href: string }>;
}

const { 
  title = site.name, 
  description = site.description,
  image = `${site.url}/og-image.jpg`,
  breadcrumb = [{ label: 'Home', href: '/' }]
} = Astro.props;

const fullTitle = title === site.name ? title : `${title} | ${site.name}`;
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- SEO Meta Tags -->
    <title>{fullTitle}</title>
    <meta name="description" content={description} />
    <meta name="author" content={site.name} />
    <meta name="theme-color" content="#ffffff" />
    
    <!-- Open Graph -->
    <meta property="og:title" content={fullTitle} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={site.url} />
    <meta property="og:type" content="website" />
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={fullTitle} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    
    <!-- Canonical URL -->
    <link rel="canonical" href={`${site.url}${Astro.url.pathname}`} />
    
    <!-- Schema Markup -->
    <SchemaOrg type="organization" />
    <SchemaOrg type="localBusiness" />
    {breadcrumb.length > 1 && <SchemaOrg type="breadcrumb" data={{ items: breadcrumb }} />}
    
    <!-- Other head content (fonts, styles, etc.) -->
    <slot name="head" />
  </head>
  <body>
    <!-- Navigation, main content, footer -->
    <slot />
  </body>
</html>
```

Note: Preserve any existing `<slot name="head" />` or other custom head content from the original file. This is a structural update to add meta tags and schema support.

- [ ] **Step 3: Test layout changes**

```bash
pnpm run dev
```

Navigate to `http://localhost:3000/` and check:
- Page title appears correctly (check browser tab)
- No console errors
- Page loads normally

- [ ] **Step 4: Commit**

```bash
git add src/layouts/BaseLayout.astro
git commit -m "feat: add meta tags, schema support, and canonical URLs to base layout"
```

---

### Task 5: Optimize Homepage with Schema and Meta Tags

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Read current homepage**

```bash
cat /Users/trilochan/Development/code/yogesh-website/src/pages/index.astro
```

- [ ] **Step 2: Update homepage frontmatter**

Update the frontmatter section to include optimized title and description:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import { site, nav, stats } from '../data/site';

const title = 'Chartered Accountants in Bhaktapur, Nepal | Audit & Tax Services';
const description = 'Expert accounting, audit, and tax advisory services for Nepali businesses. Trusted by 40+ clients. Neupane Y. & Associates — your accounting excellence partner.';
const breadcrumb = [{ label: 'Home', href: '/' }];
---
```

Update the `<BaseLayout>` tag to pass these:

```astro
<BaseLayout {title} {description} {breadcrumb}>
  <!-- rest of page content -->
</BaseLayout>
```

- [ ] **Step 3: Test homepage**

```bash
pnpm run dev
```

Navigate to `http://localhost:3000/` and verify:
- Page title is updated in browser tab
- Meta description is optimized
- Schema markup is present (check page source for `<script type="application/ld+json">`)

- [ ] **Step 4: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: optimize homepage title, description, and schema"
```

---

### Task 6: Optimize About Page

**Files:**
- Modify: `src/pages/about.astro`

- [ ] **Step 1: Read current about page**

```bash
cat /Users/trilochan/Development/code/yogesh-website/src/pages/about.astro
```

- [ ] **Step 2: Update about page frontmatter**

Update the frontmatter to include optimized title, description, and breadcrumb:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';

const title = 'About Neupane Y. & Associates | Chartered Accountants';
const description = 'Learn about our firm, expertise, and commitment to accounting excellence. Founded in 2019, we serve Nepali businesses with audit, tax, and advisory services.';
const breadcrumb = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
];
---

<BaseLayout {title} {description} {breadcrumb}>
  <!-- rest of page content -->
</BaseLayout>
```

- [ ] **Step 3: Test about page**

```bash
pnpm run dev
```

Navigate to `http://localhost:3000/about/` and verify:
- Page title and meta description are updated
- Breadcrumb schema is present in page source

- [ ] **Step 4: Commit**

```bash
git add src/pages/about.astro
git commit -m "feat: optimize about page SEO and add breadcrumb"
```

---

### Task 7: Optimize Contact Page

**Files:**
- Modify: `src/pages/contact.astro`

- [ ] **Step 1: Read current contact page**

```bash
cat /Users/trilochan/Development/code/yogesh-website/src/pages/contact.astro
```

- [ ] **Step 2: Update contact page frontmatter**

Update the frontmatter:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';

const title = 'Contact Neupane Y. & Associates | Get in Touch';
const description = 'Contact us for accounting, audit, and tax services. Based in Bhaktapur. Phone: +977 970-5459501. Email: yogeshneupane2638@gmail.com.';
const breadcrumb = [
  { label: 'Home', href: '/' },
  { label: 'Contact', href: '/contact/' },
];
---

<BaseLayout {title} {description} {breadcrumb}>
  <!-- rest of page content -->
</BaseLayout>
```

- [ ] **Step 3: Test contact page**

```bash
pnpm run dev
```

Navigate to `http://localhost:3000/contact/` and verify page loads with updated SEO.

- [ ] **Step 4: Commit**

```bash
git add src/pages/contact.astro
git commit -m "feat: optimize contact page SEO and breadcrumb"
```

---

### Task 8: Optimize Services Pages

**Files:**
- Modify: Service pages (check current structure)

- [ ] **Step 1: List all service pages**

```bash
ls -la /Users/trilochan/Development/code/yogesh-website/src/pages/services/
```

- [ ] **Step 2: Update service list page**

Update `src/pages/services/index.astro`:

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';

const title = 'Accounting Services in Nepal | Audit, Tax & Advisory';
const description = 'Professional accounting services including statutory audit, tax advisory, internal audit, business advisory, company registration, bookkeeping, and payroll. Trusted Nepali firm.';
const breadcrumb = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services/' },
];
---

<BaseLayout {title} {description} {breadcrumb}>
  <!-- rest of page content -->
</BaseLayout>
```

- [ ] **Step 3: Update individual service pages**

For each service page (e.g., `src/pages/services/statutory-audit.astro`), update the frontmatter. Example for Statutory Audit:

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import { site } from '../../data/site';

const title = 'Statutory Audit Services in Nepal | Expert Auditors';
const description = 'Statutory audit services for Nepali businesses. Comprehensive financial audits, compliance verification, and detailed reporting. Expert auditors at Neupane Y. & Associates.';
const breadcrumb = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services/' },
  { label: 'Statutory Audit', href: '/services/statutory-audit/' },
];
---

<BaseLayout {title} {description} {breadcrumb}>
  <!-- Add SchemaOrg for Service -->
  <SchemaOrg 
    type="service" 
    data={{
      name: 'Statutory Audit',
      description: description,
      url: `${site.url}/services/statutory-audit/`
    }} 
  />
  <!-- rest of page content -->
</BaseLayout>
```

Repeat for: `tax-advisory`, `internal-audit`, `business-advisory`, `company-registration`, `bookkeeping-accounting`, `payroll`.

- [ ] **Step 4: Test services pages**

```bash
pnpm run dev
```

Navigate to:
- `http://localhost:3000/services/`
- `http://localhost:3000/services/statutory-audit/`
- `http://localhost:3000/services/tax-advisory/`

Verify titles, descriptions, and schema markup appear correctly.

- [ ] **Step 5: Commit**

```bash
git add src/pages/services/
git commit -m "feat: optimize service pages with SEO titles, descriptions, and service schema"
```

---

### Task 9: Optimize Insights (Blog) Pages

**Files:**
- Modify: Insight pages and list page

- [ ] **Step 1: Update insights list page**

Update `src/pages/insights/index.astro`:

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';

const title = 'Insights & Resources | Accounting Tips & Tax News';
const description = 'Read our latest insights on Nepal tax compliance, audit readiness, VAT registration, and accounting best practices for Nepali businesses.';
const breadcrumb = [
  { label: 'Home', href: '/' },
  { label: 'Insights', href: '/insights/' },
];
---

<BaseLayout {title} {description} {breadcrumb}>
  <!-- rest of page content -->
</BaseLayout>
```

- [ ] **Step 2: Check insight post structure**

```bash
cat /Users/trilochan/Development/code/yogesh-website/src/content/insights/audit-readiness-checklist.md | head -30
```

Check if the markdown files use frontmatter with title, description, pubDate.

- [ ] **Step 3: Update insight layout**

For each insight post, check if using a layout. If there's a layout for insights (e.g., `src/layouts/InsightLayout.astro`), update it to:

```astro
---
import BaseLayout from './BaseLayout.astro';
import SchemaOrg from '../components/SchemaOrg.astro';
import { site } from '../data/site';

interface Props {
  title: string;
  description: string;
  pubDate: Date;
  image?: string;
}

const { title, description, pubDate, image } = Astro.props;
const breadcrumb = [
  { label: 'Home', href: '/' },
  { label: 'Insights', href: '/insights/' },
  { label: title, href: Astro.url.pathname },
];
---

<BaseLayout {title} {description} {breadcrumb}>
  <SchemaOrg 
    type="blogPosting" 
    data={{
      title,
      description,
      publishedDate: pubDate.toISOString(),
      image: image || `${site.url}/default-blog-image.jpg`
    }} 
  />
  <slot />
</BaseLayout>
```

If no layout exists, create `src/layouts/InsightLayout.astro` with the above content.

- [ ] **Step 4: Test insights pages**

```bash
pnpm run dev
```

Navigate to:
- `http://localhost:3000/insights/`
- `http://localhost:3000/insights/audit-readiness-checklist/`

Verify titles, descriptions, and BlogPosting schema are present.

- [ ] **Step 5: Commit**

```bash
git add src/pages/insights/ src/layouts/InsightLayout.astro src/content/insights/
git commit -m "feat: optimize insights pages with BlogPosting schema and SEO"
```

---

### Task 10: Optimize Team Page

**Files:**
- Modify: `src/pages/team.astro`

- [ ] **Step 1: Read current team page**

```bash
cat /Users/trilochan/Development/code/yogesh-website/src/pages/team.astro
```

- [ ] **Step 2: Update team page frontmatter**

Update the frontmatter:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';

const title = 'Our Team | Chartered Accountants & Experts';
const description = 'Meet the expert team at Neupane Y. & Associates. Experienced chartered accountants dedicated to your business success.';
const breadcrumb = [
  { label: 'Home', href: '/' },
  { label: 'Team', href: '/team/' },
];
---

<BaseLayout {title} {description} {breadcrumb}>
  <!-- rest of page content -->
</BaseLayout>
```

- [ ] **Step 3: Test team page**

```bash
pnpm run dev
```

Navigate to `http://localhost:3000/team/` and verify SEO updates.

- [ ] **Step 4: Commit**

```bash
git add src/pages/team.astro
git commit -m "feat: optimize team page SEO and breadcrumb"
```

---

### Task 11: Verify Sitemap Generation and Build

**Files:**
- Verify: `astro.config.mjs` (already configured)

- [ ] **Step 1: Run production build**

```bash
cd /Users/trilochan/Development/code/yogesh-website
pnpm run build
```

Expected output: Build succeeds without errors. Watch for:
- "✓ Completed in Xms"
- No warnings about missing schema or meta tags

- [ ] **Step 2: Verify sitemap was generated**

```bash
ls -la /Users/trilochan/Development/code/yogesh-website/dist/ | grep sitemap
```

Expected: See `sitemap-index.xml` and `sitemap-0.xml` (or similar) files.

- [ ] **Step 3: Check sitemap content**

```bash
cat /Users/trilochan/Development/code/yogesh-website/dist/sitemap-0.xml
```

Expected output: Contains entries for all pages (home, about, services, team, insights, contact, etc.) with:
- Correct URLs starting with `https://neupaneassociates.com.np/`
- Proper XML structure

- [ ] **Step 4: Verify robots.txt is in dist**

```bash
cat /Users/trilochan/Development/code/yogesh-website/dist/robots.txt
```

Expected:
```
User-agent: *
Allow: /

Sitemap: https://neupaneassociates.com.np/sitemap-index.xml
```

- [ ] **Step 5: Verify 404 page exists in dist**

```bash
ls -la /Users/trilochan/Development/code/yogesh-website/dist/ | grep -i 404
```

Or check:
```bash
cat /Users/trilochan/Development/code/yogesh-website/dist/404.html | head -20
```

Expected: 404.html file exists with the custom 404 page content.

- [ ] **Step 6: Commit build verification**

No code changes in this step, but document what you verified:

```bash
git status
```

Should show no modified source files (only build artifacts in dist/). If all is good, proceed to next task.

---

### Task 12: Final Verification and Cleanup

**Files:**
- Review all changes

- [ ] **Step 1: Check for any console warnings**

Re-run dev server:
```bash
pnpm run dev
```

Let it run for a few seconds and check terminal for any warnings about:
- Missing schema properties
- Invalid meta tags
- TypeScript errors

- [ ] **Step 2: Manual spot-check of key pages**

Visit in browser:
- `http://localhost:3000/` — Check title, description, schema
- `http://localhost:3000/404` — Verify 404 page loads (or visit nonexistent page)
- `http://localhost:3000/services/` — Check service schema
- `http://localhost:3000/insights/` — Check blog schema

Use browser DevTools to inspect:
- `<meta name="description">` tag content
- `<script type="application/ld+json">` schema blocks
- `<title>` tag

- [ ] **Step 3: Verify no broken links**

Check that all internal links on 404 page lead to valid pages:
- /services/
- /about/
- /team/
- /contact/
- /insights/

- [ ] **Step 4: Final build and test**

```bash
pnpm run build
```

Verify:
- Build completes successfully
- Sitemap is generated
- robots.txt is copied
- 404.html exists in dist/
- No errors or warnings

- [ ] **Step 5: Clean up and final commit**

If no uncommitted changes remain:
```bash
git status
```

If there are any uncommitted changes, review and commit:
```bash
git add .
git commit -m "chore: verify SEO and 404 implementation complete"
```

If nothing to commit, you're done!

---

## Success Criteria Checklist

After completing all tasks, verify:

- [ ] 404 page exists at `src/pages/404.astro` and is branded
- [ ] robots.txt exists at `public/robots.txt` with sitemap reference
- [ ] `src/components/SchemaOrg.astro` provides reusable schema components
- [ ] BaseLayout includes meta tags (title, description, og:*, twitter:*)
- [ ] Homepage has Organization and LocalBusiness schema
- [ ] All pages have unique, keyword-aware title and description
- [ ] Service pages have Service schema markup
- [ ] Insight pages have BlogPosting schema markup
- [ ] All pages have breadcrumb schema (except homepage)
- [ ] `pnpm run build` succeeds without errors
- [ ] Sitemap is generated at `dist/sitemap-index.xml`
- [ ] robots.txt is present in `dist/robots.txt`
- [ ] 404.html exists in dist/ and displays correctly
- [ ] No broken links or console errors
- [ ] All heading hierarchy is correct (one H1 per page)
