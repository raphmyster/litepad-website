# Litepad Website

A promotional website for Litepad — a native macOS markdown reader. Static HTML/CSS/JS, hosted on GitHub Pages.

## Specs & Plans

- **Content/structure spec:** `docs/superpowers/specs/2026-03-20-litepad-website-design.md`
- **Visual design spec:** `docs/superpowers/specs/2026-03-20-litepad-website-visual-design.md`
- **Implementation plan:** `docs/superpowers/plans/2026-03-20-litepad-website.md`
- **Wireframe mockup:** `.superpowers/brainstorm/13230-1774038546/homepage-v2.html` (open locally to see the approved layout)

## Key Design Decisions

- **Beige background** (`#edeae2`) as the primary canvas — NOT white. App screenshots show white-background rendering so they "pop" against the warm surface. This was a deliberate choice to avoid implying the app only renders in beige.
- **CTAs are always charcoal/dark** — green is NEVER used as a button background. Green is an accent color for specific words in headlines and hover states only.
- **Hard lines between sections** — no gradient fades between background colors.
- **Layout variety is critical** — each homepage section uses a distinct layout (centered, split, bento grid, dark band, masonry). Avoid uniform centered-heading-subtitle-content patterns.
- **Section background rhythm:** beige → white → beige → dark → white → beige
- **Typography:** System font stack for all text. Darker Grotesque loaded via Google Fonts `<link>` tag ONLY for the logo wordmark.

## Brand Assets

- Logo and icon mark source files: `/Users/raph/Developer/Projects/Litepad/assets/logo/`
- App Store screenshots: `/Users/raph/Developer/Projects/Litepad/assets/App Store Screenshots/Litepad/`
- Design guide (colors, spacing, component patterns): `/Users/raph/Developer/Projects/Litepad/docs/superpowers/specs/2026-03-13-litepad-design-guide.md`

## Tech Constraints

- Static HTML/CSS/JS only — no framework, no build step, no dependencies
- Hosted on GitHub Pages
- Mac App Store URL is TBD — use `#` placeholder
- No hamburger menu on mobile — the site is only 2 content pages, footer provides all navigation
