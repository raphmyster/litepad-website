# Litepad Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the Litepad promotional website — a static HTML/CSS/JS site hosted on GitHub Pages that drives Mac App Store downloads and educates non-technical visitors about markdown.

**Architecture:** Four static HTML pages sharing a common CSS file and minimal JS (sticky nav shadow, scroll behavior). No framework, no build step, no dependencies. Each page is a standalone `.html` file with inlined shared structure (nav/footer). CSS uses custom properties for the Litepad design token system.

**Tech Stack:** HTML5, CSS3 (custom properties, grid, flexbox), vanilla JS, GitHub Pages hosting

**Specs:**
- Content/structure: `docs/superpowers/specs/2026-03-20-litepad-website-design.md`
- Visual design: `docs/superpowers/specs/2026-03-20-litepad-website-visual-design.md`
- Brand reference: Litepad Design Guide (in Litepad app repo)
- Wireframe mockup: `.superpowers/brainstorm/13230-1774038546/homepage-v2.html`

---

## File Structure

```
/Users/raph/Developer/Projects/Litepad-Website/
├── index.html                  # Homepage
├── features.html               # Features & Guide page
├── privacy.html                # Privacy Policy
├── terms.html                  # Terms of Use
├── css/
│   └── style.css               # All styles — tokens, reset, components, pages
├── js/
│   └── main.js                 # Sticky nav shadow, smooth scroll
├── assets/
│   ├── litepad-icon.svg        # Geometric icon mark (green)
│   ├── litepad-wordmark.svg    # "Litepad." in Darker Grotesque
│   ├── favicon.png             # Favicon from app icon
│   ├── og-image.png            # Open Graph preview image (1200x630)
│   ├── apple-icon.svg          # Apple logo for download buttons
│   ├── screenshots/
│   │   ├── preview-mode.png    # App in Preview mode (white bg)
│   │   ├── split-view.png      # App in Split view
│   │   └── dark-mode.png       # App in Dark mode
│   └── logos/
│       ├── claude.svg           # AI tool logos (grayscale)
│       ├── chatgpt.svg
│       ├── gemini.svg
│       ├── cursor.svg
│       ├── sidepad.svg
│       └── notion.svg
└── docs/                        # Specs & plans (existing)
```

**Note on assets:** Screenshots and logos are placeholders at first. Tasks use placeholder images/SVGs that can be swapped for real assets later. The Litepad icon mark SVG should be extracted or recreated from the brand logo files at `/Users/raph/Developer/Projects/Litepad/assets/logo/`.

**⚠️ Screenshot warning:** The existing app screenshots in `/Users/raph/Developer/Projects/Litepad/assets/App Store Screenshots/Litepad/` are the correct style reference but the older screenshots in `/Users/raph/Developer/Projects/Litepad/Screenshots/` still show "MarkEdit" branding in titlebars and content. Do NOT use those on the website. For implementation, use styled placeholder app window frames (like the wireframe mockup does — titlebar chrome with mock content lines) until updated Litepad-branded screenshots are provided. The App Store screenshots (1.png–4.png) have correct Litepad branding and can be used as-is or cropped.

---

## Task 1: Project Scaffolding & CSS Foundation

**Files:**
- Create: `css/style.css`
- Create: `js/main.js`

This task sets up the design token system and base styles that everything else builds on.

- [ ] **Step 1: Create `css/style.css` with reset and design tokens**

```css
/* === RESET === */
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: var(--charcoal-900);
  background: var(--beige-100);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }

/* === DESIGN TOKENS === */
:root {
  /* Core palette */
  --green-500: #7a8f71;
  --green-600: #5a6b52;
  --green-700: #3d4839;
  --green-400: #96a88e;
  --beige-200: #e2ded0;
  --beige-100: #edeae2;
  --beige-300: #d4d0c4;
  --charcoal-900: #101820;
  --charcoal-800: #1a2430;
  --charcoal-700: #253040;
  --charcoal-600: #354050;
  --white: #ffffff;

  /* Spacing scale (4px base) */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;

  /* Radii */
  --radius-s: 8px;
  --radius-m: 10px;
  --radius-l: 12px;
  --radius-xl: 14px;
  --radius-2xl: 16px;

  /* Layout */
  --max-width: 1120px;
  --page-padding: 48px;
}

/* === TYPOGRAPHY === */
/* Logo font — loaded via <link> in HTML <head>, not @font-face.
   Add to all pages: <link href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@700&display=swap" rel="stylesheet">
   Only used for .nav-wordmark and footer wordmark. */

.heading-hero {
  font-size: 56px;
  font-weight: 700;
  letter-spacing: -2px;
  line-height: 1.06;
}
.heading-section {
  font-size: 40px;
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 1.1;
}
.heading-card {
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.5px;
  line-height: 1.15;
}
.heading-card-title {
  font-size: 18px;
  font-weight: 700;
  line-height: 1.3;
}
.text-body { font-size: 18px; line-height: 1.5; }
.text-section { font-size: 16px; line-height: 1.6; }
.text-card { font-size: 14px; line-height: 1.5; }
.text-label { font-size: 13px; font-weight: 500; }
.text-small-label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.text-muted { color: rgba(16, 24, 32, 0.42); }
.text-muted-light { color: rgba(16, 24, 32, 0.35); }
.text-green { color: var(--green-500); }
.text-green-light { color: var(--green-400); }

/* === LAYOUT === */
.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--page-padding);
}
.section-beige { background: var(--beige-100); }
.section-white { background: var(--white); }
.section-dark { background: var(--charcoal-900); }

/* === BUTTONS === */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: var(--charcoal-900);
  color: var(--white);
  border-radius: var(--radius-m);
  font-size: 15px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-primary:hover { background: var(--charcoal-800); }

.btn-ghost {
  display: inline-flex;
  align-items: center;
  padding: 14px 28px;
  color: rgba(16, 24, 32, 0.45);
  font-size: 15px;
  font-weight: 500;
  transition: color 0.2s;
}
.btn-ghost:hover { color: var(--charcoal-900); }
```

- [ ] **Step 2: Create `js/main.js` with sticky nav shadow**

```js
// Sticky nav shadow on scroll
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  }, { passive: true });
});
```

- [ ] **Step 3: Verify by opening a blank HTML file that loads both**

Create a minimal `index.html` with just `<link>` and `<script>` tags pointing to the CSS and JS. Open in browser, confirm beige background, correct font rendering, no console errors.

- [ ] **Step 4: Commit**

```bash
git add css/style.css js/main.js index.html
git commit -m "feat: project scaffolding with CSS tokens and base styles"
```

---

## Task 2: Global Elements — Nav & Footer

**Files:**
- Modify: `index.html`
- Modify: `css/style.css`
- Create: `assets/litepad-icon.svg` (placeholder)
- Create: `assets/apple-icon.svg` (placeholder)

Build the nav and footer that will be shared across all pages.

- [ ] **Step 1: Create placeholder SVG assets**

Create `assets/litepad-icon.svg` — a simple green geometric placeholder (will be replaced with the real icon mark from the brand assets). Create `assets/apple-icon.svg` — the Apple logo for the download button.

- [ ] **Step 2: Add nav styles to `css/style.css`**

```css
/* === NAV === */
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  padding: 16px var(--page-padding);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--beige-100);
  transition: box-shadow 0.2s;
}
.nav--scrolled {
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.04);
}
.nav-logo {
  display: flex;
  align-items: center;
  gap: 8px;
}
.nav-logo img {
  width: 28px;
  height: 28px;
}
.nav-wordmark {
  font-size: 17px;
  font-weight: 700;
  color: var(--charcoal-900);
}
.nav-wordmark .dot {
  color: var(--beige-300);
}
.nav-right {
  display: flex;
  align-items: center;
  gap: 24px;
}
.nav-link {
  font-size: 14px;
  color: rgba(16, 24, 32, 0.45);
  font-weight: 500;
  transition: color 0.2s;
}
.nav-link:hover { color: var(--charcoal-900); }
.nav-cta {
  font-size: 13px;
  padding: 10px 20px;
  background: var(--charcoal-900);
  color: var(--white);
  border-radius: var(--radius-s);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: background 0.2s;
}
.nav-cta:hover { background: var(--charcoal-800); }
.nav-cta img { width: 13px; height: 13px; }
```

- [ ] **Step 3: Add footer styles to `css/style.css`**

```css
/* === FOOTER === */
.footer {
  background: var(--beige-100);
  border-top: 1px solid var(--beige-300);
  padding: var(--space-6) var(--page-padding);
}
.footer-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--space-6);
}
.footer-brand {
  display: flex;
  align-items: center;
  gap: 8px;
}
.footer-brand img { width: 18px; height: 18px; opacity: 0.5; }
.footer-copyright {
  font-size: 12px;
  color: rgba(16, 24, 32, 0.25);
}
.footer-links {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}
.footer-links a {
  font-size: 12px;
  color: rgba(16, 24, 32, 0.3);
  transition: color 0.2s;
}
.footer-links a:hover { color: rgba(16, 24, 32, 0.6); }
.footer-sidepad {
  font-size: 12px;
  color: rgba(16, 24, 32, 0.3);
  margin-top: 12px;
}
.footer-sidepad a {
  color: var(--green-600);
  font-weight: 600;
}
```

- [ ] **Step 4: Write nav and footer HTML in `index.html`**

Add the full nav structure (logo, wordmark, nav link, CTA button) and footer structure (brand, copyright, links, Sidepad promo, download button). Reference the wireframe mockup for exact markup structure.

- [ ] **Step 5: Verify in browser — nav sticks, shadow appears on scroll, footer at bottom**

- [ ] **Step 6: Commit**

```bash
git add index.html css/style.css assets/
git commit -m "feat: add global nav and footer with sticky scroll behavior"
```

---

## Task 3: Homepage Hero Section

**Files:**
- Modify: `index.html`
- Modify: `css/style.css`

- [ ] **Step 1: Add hero styles to `css/style.css`**

```css
/* === HERO === */
.hero {
  text-align: center;
  padding: 72px var(--page-padding) 0;
  background: var(--beige-100);
}
.hero h1 {
  font-size: 56px;
  font-weight: 700;
  color: var(--charcoal-900);
  line-height: 1.06;
  letter-spacing: -2px;
  max-width: 640px;
  margin: 0 auto 18px;
}
.hero-sub {
  font-size: 18px;
  color: rgba(16, 24, 32, 0.42);
  max-width: 480px;
  margin: 0 auto 36px;
  line-height: 1.5;
}
.hero-ctas {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-bottom: 56px;
}
.hero-screenshot {
  max-width: 860px;
  margin: 0 auto;
  background: var(--white);
  border-radius: var(--radius-l) var(--radius-l) 0 0;
  border: 1px solid var(--beige-300);
  border-bottom: none;
  overflow: hidden;
  box-shadow: 0 -2px 60px rgba(0, 0, 0, 0.05);
}
```

- [ ] **Step 2: Add app window chrome styles (reusable across sections)**

```css
/* === APP WINDOW CHROME (shared) === */
.app-titlebar {
  padding: 11px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(237, 234, 226, 0.4);
  border-bottom: 1px solid var(--beige-300);
}
.app-dots { display: flex; gap: 6px; }
.app-dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.app-dots span:nth-child(1) { background: #ff5f57; }
.app-dots span:nth-child(2) { background: #ffbd2e; }
.app-dots span:nth-child(3) { background: #28ca42; }
.app-filename {
  font-size: 12px;
  color: rgba(16, 24, 32, 0.35);
  margin-left: 4px;
}
.app-view-pills {
  margin-left: auto;
  display: flex;
  gap: 2px;
  background: var(--beige-100);
  padding: 3px;
  border-radius: 6px;
  border: 1px solid var(--beige-300);
}
.app-view-pills span {
  font-size: 10px;
  padding: 3px 10px;
  border-radius: 4px;
  color: rgba(16, 24, 32, 0.35);
  font-weight: 500;
}
.app-view-pills .active {
  background: var(--white);
  color: var(--charcoal-900);
  font-weight: 600;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
}
.app-body {
  padding: 36px 56px;
  background: var(--white);
}
```

- [ ] **Step 3: Write hero HTML in `index.html`**

Add the hero section between nav and footer: h1 headline, subtitle paragraph, CTA buttons, and a screenshot container with the app window chrome (titlebar with traffic lights, filename "git-cheat-sheet.md", view pills). The app body will contain a placeholder screenshot image (or the actual App Store screenshot if available).

- [ ] **Step 4: Verify in browser — hero layout, screenshot frame, CTA buttons**

- [ ] **Step 5: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: add homepage hero with app screenshot frame"
```

---

## Task 4: Homepage Section 2 — Education (Split Layout)

**Files:**
- Modify: `index.html`
- Modify: `css/style.css`

- [ ] **Step 1: Add education section styles**

```css
/* === EDUCATION SECTION === */
.education {
  background: var(--white);
  padding: var(--space-9) 0;
}
.education-inner {
  display: flex;
  gap: 64px;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--page-padding);
}
.education-text { flex: 0 0 340px; }
.education-text h2 {
  margin-bottom: 16px;
}
.education-text p {
  font-size: 16px;
  color: rgba(16, 24, 32, 0.5);
  line-height: 1.6;
}
.education-compare { flex: 1; display: flex; gap: 20px; }

.compare-panel {
  flex: 1;
  border-radius: var(--radius-l);
  overflow: hidden;
  border: 1px solid #e8e8e8;
  display: flex;
  flex-direction: column;
}
.compare-label {
  padding: 12px 16px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 1px solid #e8e8e8;
}
.compare-panel--raw .compare-label {
  background: #f7f7f7;
  color: rgba(16, 24, 32, 0.35);
}
.compare-panel--rendered .compare-label {
  background: rgba(122, 143, 113, 0.06);
  color: var(--green-500);
}
.compare-body {
  padding: 20px;
  flex: 1;
}
.compare-panel--raw .compare-body {
  background: #fafafa;
  font-family: 'SF Mono', Menlo, monospace;
  font-size: 11px;
  color: rgba(16, 24, 32, 0.45);
  line-height: 1.8;
  white-space: pre-wrap;
}
.compare-panel--rendered .compare-body {
  background: var(--white);
}
```

- [ ] **Step 2: Write education section HTML**

Split layout: left column with "You've seen these files." headline and explanatory paragraph. Right column with two compare panels — raw markdown (monospace, showing actual `#`, `##`, backtick syntax) and rendered Litepad output (proper headings, code blocks, paragraphs with real styled HTML).

- [ ] **Step 3: Verify — split layout renders correctly, compare panels side by side**

- [ ] **Step 4: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: add education section with before/after comparison"
```

---

## Task 5: Homepage Section 3 — Bento Grid

**Files:**
- Modify: `index.html`
- Modify: `css/style.css`

This is the most complex section — a mixed-size card grid combining the PDF comparison with app screenshot showcases.

- [ ] **Step 1: Add bento grid styles**

```css
/* === BENTO GRID === */
.bento {
  background: var(--beige-100);
  padding: var(--space-9) 0;
}
.bento-header {
  max-width: var(--max-width);
  margin: 0 auto var(--space-7);
  padding: 0 var(--page-padding);
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.bento-grid {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--page-padding);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 16px;
}
.bento-card {
  border-radius: var(--radius-2xl);
  overflow: hidden;
  border: 1px solid var(--beige-300);
  background: var(--white);
}
/* Card A: PDF comparison — spans 2 cols */
.bento-card--pdf {
  grid-column: 1 / 3;
  padding: 40px;
  display: flex;
  align-items: center;
  gap: 48px;
}
/* Card B: Preview — 1 col, spans 2 rows */
.bento-card--preview {
  grid-column: 3;
  grid-row: 1 / 3;
  display: flex;
  flex-direction: column;
}
/* Card C: Split — 1 col */
.bento-card--split {
  display: flex;
  flex-direction: column;
}
/* Card D: Dark mode — 1 col, dark bg */
.bento-card--dark {
  background: var(--charcoal-900);
  border-color: transparent;
}
.bento-card--dark .bento-card-label h3 { color: var(--white); }
.bento-card--dark .bento-card-label p { color: rgba(255, 255, 255, 0.35); }
```

- [ ] **Step 2: Add bento card inner element styles**

Styles for: PDF icon blocks (red `.pdf` and green `.md` squares), bento card labels (title + subtitle padding), mini app preview frames inside cards (beige chrome, white content), split view panels, dark mode preview. Reference the wireframe mockup for exact proportions.

- [ ] **Step 3: Write bento grid HTML**

Four cards in the grid:
- **Card A (PDF comparison):** Left text block ("PDFs had Adobe Reader. Markdown has Litepad." with green accent) + right visual equation (PDF icon → Litepad icon).
- **Card B (Preview mode):** Title + subtitle + mini app frame showing mock rendered content.
- **Card C (Split view):** Title + mini split panel (monospace source left, rendered right).
- **Card D (Dark mode):** Dark background, white text title, dark mini app frame with subtle content lines.

- [ ] **Step 4: Verify — grid renders with correct column/row spans, dark card contrasts**

- [ ] **Step 5: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: add bento grid section with PDF comparison and screenshots"
```

---

## Task 6: Homepage Section 4 — AI Tools (Dark Band)

**Files:**
- Modify: `index.html`
- Modify: `css/style.css`

- [ ] **Step 1: Add AI tools section styles**

```css
/* === AI TOOLS === */
.ai-tools {
  background: var(--charcoal-900);
  padding: 80px 0;
}
.ai-tools-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--page-padding);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 64px;
}
.ai-tools-text h2 {
  font-size: 36px;
  font-weight: 700;
  color: var(--white);
  letter-spacing: -0.5px;
  line-height: 1.15;
  margin-bottom: 12px;
}
.ai-tools-text p {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.4);
  line-height: 1.5;
  max-width: 400px;
}
.ai-logos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 320px;
}
.ai-logo-item {
  width: 88px;
  height: 56px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-m);
  display: flex;
  align-items: center;
  justify-content: center;
}
.ai-logo-item img {
  max-width: 48px;
  max-height: 24px;
  opacity: 0.3;
  filter: grayscale(1) brightness(3);
}
```

- [ ] **Step 2: Write AI tools section HTML**

Split layout: left has headline ("AI speaks markdown. Litepad reads it beautifully." with `green-400` accent on "beautifully") + body text. Right has 2×3 grid of logo items — initially with text placeholders, replaced with actual grayscale SVG logos later.

- [ ] **Step 3: Verify — dark band renders, logos grid, text contrast on dark bg**

- [ ] **Step 4: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: add AI tools dark band section with logo grid"
```

---

## Task 7: Homepage Section 5 — Testimonials (Masonry)

**Files:**
- Modify: `index.html`
- Modify: `css/style.css`

- [ ] **Step 1: Add testimonials styles**

```css
/* === TESTIMONIALS === */
.testimonials {
  background: var(--white);
  padding: var(--space-9) 0;
}
.testimonials-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--page-padding);
}
.testimonials-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  margin-top: var(--space-7);
}
.t-card {
  padding: 28px;
  border-radius: var(--radius-xl);
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
}
.t-card--featured {
  background: var(--beige-100);
  border-color: var(--beige-300);
  grid-row: span 2;
}
.t-card .stars {
  color: var(--green-500);
  font-size: 14px;
  margin-bottom: 16px;
  letter-spacing: 2px;
}
.t-card .quote {
  font-size: 15px;
  color: rgba(16, 24, 32, 0.6);
  line-height: 1.6;
  flex: 1;
  margin-bottom: 20px;
}
.t-card--featured .quote {
  font-size: 18px;
  color: rgba(16, 24, 32, 0.7);
}
.t-author {
  display: flex;
  align-items: center;
  gap: 10px;
}
.t-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--beige-200);
}
.t-name { font-size: 13px; font-weight: 600; }
.t-role { font-size: 12px; color: rgba(16, 24, 32, 0.35); }
```

- [ ] **Step 2: Write testimonials HTML**

"People love it." left-aligned heading. 3-column masonry grid with 4 cards: one featured (column 1, spanning 2 rows, beige bg, longer quote, 18px) and three regular (shorter quotes, white bg). All with placeholder names, roles, and quotes per the wireframe. Green star ratings.

- [ ] **Step 3: Verify — masonry layout, featured card height, star ratings**

- [ ] **Step 4: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: add testimonials masonry section with placeholder content"
```

---

## Task 8: Homepage Section 6 — Bottom CTA + Finalize Homepage

**Files:**
- Modify: `index.html`
- Modify: `css/style.css`

- [ ] **Step 1: Add bottom CTA styles**

```css
/* === BOTTOM CTA === */
.bottom-cta {
  background: var(--beige-100);
  padding: var(--space-9) 0;
  text-align: center;
}
.bottom-cta-inner {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 var(--page-padding);
}
.bottom-cta h2 {
  font-size: 44px;
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 1.1;
  margin-bottom: 16px;
}
.bottom-cta .bottom-cta-sub {
  font-size: 16px;
  color: rgba(16, 24, 32, 0.42);
  margin-bottom: 36px;
}
.sidepad-promo {
  margin-top: 56px;
  padding-top: 32px;
  border-top: 1px solid var(--beige-300);
  font-size: 13px;
  color: rgba(16, 24, 32, 0.35);
}
.sidepad-promo a {
  color: var(--green-600);
  font-weight: 600;
}
.sidepad-promo a:hover { color: var(--green-500); }
```

- [ ] **Step 2: Write bottom CTA HTML**

"Read markdown the way it was meant to be." centered headline, subtitle, download CTA button, and Sidepad cross-promo below a border separator.

- [ ] **Step 3: Review full homepage top to bottom — check section rhythm, spacing, background alternation**

Walk through every section in the browser. Confirm: beige → white → beige → dark → white → beige sequence. Check that no sections feel too similar in layout. Verify all buttons, links, and text sizes match the spec.

- [ ] **Step 4: Commit**

```bash
git add index.html css/style.css
git commit -m "feat: add bottom CTA and finalize homepage structure"
```

---

## Task 9: Features & Guide Page

**Files:**
- Create: `features.html`
- Modify: `css/style.css`

- [ ] **Step 1: Add features page styles**

```css
/* === FEATURES PAGE === */
.features-header {
  padding: 72px 0 48px;
  background: var(--beige-100);
}
.feature-card {
  background: var(--white);
  border-radius: var(--radius-2xl);
  border: 1px solid var(--beige-300);
  padding: 48px;
  margin-bottom: 24px;
  display: flex;
  gap: 48px;
  align-items: center;
}
.feature-card:nth-child(even) { flex-direction: row-reverse; }
.feature-text { flex: 1; }
.feature-text h3 {
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin-bottom: 12px;
}
.feature-text p {
  font-size: 16px;
  color: rgba(16, 24, 32, 0.5);
  line-height: 1.6;
  margin-bottom: 16px;
}
.feature-instruction {
  font-size: 14px;
  color: rgba(16, 24, 32, 0.6);
  background: var(--beige-100);
  padding: 16px 20px;
  border-radius: var(--radius-s);
  line-height: 1.5;
}
.feature-image {
  flex: 0 0 400px;
  border-radius: var(--radius-l);
  overflow: hidden;
  background: var(--beige-100);
  min-height: 280px;
}

/* Set as Default — special treatment */
.feature-steps {
  counter-reset: step;
  list-style: none;
  padding: 0;
}
.feature-steps li {
  counter-increment: step;
  padding: 12px 0;
  font-size: 15px;
  color: rgba(16, 24, 32, 0.6);
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  gap: 12px;
}
.feature-steps li::before {
  content: counter(step);
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--green-500);
  color: var(--white);
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
```

- [ ] **Step 2: Create `features.html` with page structure**

Copy nav and footer from `index.html`. Add page header ("Features & Guide" headline + intro line). Add six feature cards, alternating left/right layout:

1. **Preview Mode** — description + instruction + screenshot placeholder
2. **Split View** — description + instruction + screenshot placeholder
3. **Edit Mode** — description mentioning formatting toolbar + instruction
4. **Dark Mode & Themes** — description + instruction on theme settings
5. **Set as Default** — step-by-step numbered instructions (the special `feature-steps` list)
6. **Print & Export** — description + instruction (`File → Print` or `⌘P`)

Each feature card has a placeholder image area that will hold actual screenshots.

- [ ] **Step 3: Verify — alternating layout, card spacing, numbered steps render correctly**

- [ ] **Step 4: Commit**

```bash
git add features.html css/style.css
git commit -m "feat: add Features & Guide page with six feature cards"
```

---

## Task 10: Privacy Policy & Terms of Use Pages

**Files:**
- Create: `privacy.html`
- Create: `terms.html`
- Modify: `css/style.css`

- [ ] **Step 1: Add legal page styles**

```css
/* === LEGAL PAGES === */
.legal {
  background: var(--beige-100);
  padding: 72px 0 var(--space-9);
}
.legal-card {
  max-width: 720px;
  margin: 0 auto;
  background: var(--white);
  border-radius: var(--radius-2xl);
  border: 1px solid var(--beige-300);
  padding: 48px;
}
.legal-card h1 {
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin-bottom: 8px;
}
.legal-card .legal-updated {
  font-size: 13px;
  color: rgba(16, 24, 32, 0.35);
  margin-bottom: 32px;
}
.legal-card h2 {
  font-size: 20px;
  font-weight: 700;
  margin-top: 32px;
  margin-bottom: 12px;
}
.legal-card p {
  font-size: 15px;
  color: rgba(16, 24, 32, 0.6);
  line-height: 1.7;
  margin-bottom: 16px;
}
.legal-card ul {
  padding-left: 20px;
  margin-bottom: 16px;
}
.legal-card li {
  font-size: 15px;
  color: rgba(16, 24, 32, 0.6);
  line-height: 1.7;
  margin-bottom: 8px;
}
```

- [ ] **Step 2: Create `privacy.html`**

Copy nav and footer. Add a legal card with Privacy Policy content:
- Litepad collects no user data
- No analytics, no tracking
- Runs sandboxed on macOS
- No network requests (except optional update checks)
- Contact info for questions

- [ ] **Step 3: Create `terms.html`**

Copy nav and footer. Add a legal card with Terms of Use:
- Standard terms for a free macOS application
- Software provided "as is"
- Limitation of liability
- Governing law

- [ ] **Step 4: Verify both pages — card centered, text readable, links to nav/footer work**

- [ ] **Step 5: Commit**

```bash
git add privacy.html terms.html css/style.css
git commit -m "feat: add Privacy Policy and Terms of Use pages"
```

---

## Task 11: Meta Tags, Favicon & Open Graph

**Files:**
- Modify: `index.html`
- Modify: `features.html`
- Modify: `privacy.html`
- Modify: `terms.html`
- Create: `assets/favicon.png` (placeholder)

- [ ] **Step 1: Add `<head>` meta to all four pages**

Each page needs in the `<head>`:

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Litepad — the markdown reader for the AI era. Double-click any .md file and see it beautifully rendered.">
<link rel="icon" type="image/png" href="/assets/favicon.png">

<!-- Open Graph -->
<meta property="og:title" content="Litepad — The markdown reader for the AI era">
<meta property="og:description" content="AI tools speak markdown. Litepad makes it beautiful, readable, and easy to preview.">
<meta property="og:type" content="website">
<meta property="og:image" content="/assets/og-image.png">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Litepad — The markdown reader for the AI era">
<meta name="twitter:description" content="AI tools speak markdown. Litepad makes it beautiful, readable, and easy to preview.">
```

Adjust `og:title` and `<title>` per page (e.g., "Features & Guide — Litepad", "Privacy Policy — Litepad").

- [ ] **Step 2: Create placeholder `assets/favicon.png`**

A 32x32 or 64x64 PNG placeholder. Will be replaced with the actual Litepad app icon.

- [ ] **Step 3: Verify — favicon shows in browser tab, meta tags render in view-source**

- [ ] **Step 4: Commit**

```bash
git add index.html features.html privacy.html terms.html assets/favicon.png
git commit -m "feat: add meta tags, Open Graph, and favicon to all pages"
```

---

## Task 12: Responsive Styles

**Files:**
- Modify: `css/style.css`

The site needs to work at mobile (375px), tablet (768px), and desktop (1024px+).

- [ ] **Step 1: Add responsive breakpoints to `css/style.css`**

```css
/* === RESPONSIVE === */

/* Tablet and below */
@media (max-width: 1024px) {
  :root { --page-padding: 32px; }
  .hero h1 { font-size: 44px; }
  .heading-section { font-size: 32px; }

  /* Education: stack vertically */
  .education-inner { flex-direction: column; gap: 40px; }
  .education-text { flex: none; }

  /* Bento: 2 columns */
  .bento-grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }
  .bento-card--pdf { grid-column: 1 / -1; }
  .bento-card--preview { grid-column: auto; grid-row: auto; }

  /* AI tools: stack */
  .ai-tools-inner { flex-direction: column; gap: 40px; }
  .ai-logos { justify-content: flex-start; }

  /* Testimonials: 2 columns */
  .testimonials-grid { grid-template-columns: 1fr 1fr; }
  .t-card--featured { grid-row: auto; }

  /* Features: stack */
  .feature-card,
  .feature-card:nth-child(even) { flex-direction: column; }
  .feature-image { flex: none; width: 100%; }
}

/* Mobile */
@media (max-width: 768px) {
  :root { --page-padding: 20px; }
  .hero h1 { font-size: 36px; letter-spacing: -1px; }
  .hero-sub { font-size: 16px; }
  .hero-ctas { flex-direction: column; align-items: center; }
  .heading-section { font-size: 28px; }
  .heading-card { font-size: 22px; }

  /* Education: compare panels stack */
  .education-compare { flex-direction: column; }

  /* Bento: single column */
  .bento-grid { grid-template-columns: 1fr; }
  .bento-card--pdf {
    grid-column: auto;
    flex-direction: column;
    gap: 24px;
  }

  /* AI logos: 2 columns */
  .ai-logos { grid-template-columns: repeat(2, 1fr); }

  /* Testimonials: single column */
  .testimonials-grid { grid-template-columns: 1fr; }

  /* Bottom CTA */
  .bottom-cta h2 { font-size: 32px; }

  /* Nav — hide text links on mobile; Features link available in footer.
     The site is only 2 content pages so a hamburger menu is unnecessary. */
  .nav { padding: 12px var(--page-padding); }
  .nav-link { display: none; }

  /* Footer: stack */
  .footer-inner { flex-direction: column; gap: 16px; }
}
```

- [ ] **Step 2: Test at 375px, 768px, 1024px, and 1440px**

Use browser DevTools responsive mode. Check each breakpoint for:
- No horizontal scroll
- Text readable (minimum 16px body)
- Touch targets at least 44px
- Stacking order makes sense
- Bento grid collapses gracefully

- [ ] **Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat: add responsive styles for mobile, tablet, desktop"
```

---

## Task 13: Cross-Page Link Verification & Final Polish

**Files:**
- Modify: all HTML files

- [ ] **Step 1: Verify all internal links**

Check every `<a>` tag across all four pages:
- Nav "Features & Guide" → `features.html`
- Nav "Download for Mac" → `#` (placeholder for App Store URL)
- Footer Home → `index.html`
- Footer Features & Guide → `features.html`
- Footer Privacy → `privacy.html`
- Footer Terms → `terms.html`
- Footer Support → GitHub issues URL or email
- Footer Sidepad → external Sidepad link
- Hero CTA → `#` (placeholder)
- Bottom CTA → `#` (placeholder)
- "Features & Guide ↓" in hero → `features.html`

- [ ] **Step 2: Add active nav state**

```css
.nav-link[aria-current="page"] {
  color: var(--charcoal-900);
}
```

Add `aria-current="page"` to the nav link on each respective page.

- [ ] **Step 3: Check accessibility basics**

- All images have `alt` text
- Buttons/links have descriptive text (not just icons)
- Color contrast passes (already verified: 12.7:1 for charcoal on beige)
- Focus states visible (add `:focus-visible` outlines if missing)
- Semantic HTML: `<header>`, `<main>`, `<footer>`, `<section>`, `<nav>`

- [ ] **Step 4: Add focus-visible styles if missing**

```css
:focus-visible {
  outline: 2px solid var(--green-500);
  outline-offset: 2px;
}
```

- [ ] **Step 5: Final commit**

```bash
git add .
git commit -m "feat: link verification, active nav states, accessibility pass"
```

---

## Summary

| Task | What it builds | Key files |
|------|---------------|-----------|
| 1 | CSS tokens, reset, base styles | `css/style.css`, `js/main.js` |
| 2 | Nav + Footer | `index.html`, `css/style.css` |
| 3 | Hero section | `index.html`, `css/style.css` |
| 4 | Education section (split) | `index.html`, `css/style.css` |
| 5 | Bento grid section | `index.html`, `css/style.css` |
| 6 | AI tools dark band | `index.html`, `css/style.css` |
| 7 | Testimonials masonry | `index.html`, `css/style.css` |
| 8 | Bottom CTA + homepage review | `index.html`, `css/style.css` |
| 9 | Features & Guide page | `features.html`, `css/style.css` |
| 10 | Privacy + Terms pages | `privacy.html`, `terms.html`, `css/style.css` |
| 11 | Meta tags + favicon | All HTML files |
| 12 | Responsive styles | `css/style.css` |
| 13 | Links + accessibility | All HTML files |
