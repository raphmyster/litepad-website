# Litepad Website — Visual Design Spec

The visual design spec for the Litepad promotional website. Companion to the [content/structure spec](./2026-03-20-litepad-website-design.md). This document defines the visual direction, layout patterns, color usage, typography, and section-by-section design for the homepage and global elements.

## Design Direction

**Style:** Crisp & Confident — high contrast, bold typography, warm beige canvas with white app windows as hero elements. Inspired by Raycast's confidence and Bear's warmth.

**Core principle:** The app speaks for itself. White-rendered screenshots pop against the warm beige foundation. Green accents are strategic, not everywhere. Bold charcoal text provides Raycast-level contrast.

**Background decision:** Beige (`beige-100` / `#edeae2`) as the primary canvas rather than white. This lets app screenshots show white-background rendering (the cleanest, most expected look for document readers) and creates natural contrast where the white app windows "glow" against the warm surface.

**Section transitions:** Hard lines between sections — no gradient fades.

**Layout variety:** Each section uses a distinct layout pattern to avoid uniformity. The page includes centered layouts, split/asymmetric layouts, bento grids, a full dark band, and masonry grids.

---

## Color Usage

All colors sourced from the [Litepad Design Guide](/Users/raph/Developer/Projects/Litepad/docs/superpowers/specs/2026-03-13-litepad-design-guide.md) (in the Litepad app repo).

| Role | Token | Hex | Usage |
|------|-------|-----|-------|
| Primary canvas | `beige-100` | `#edeae2` | Default page background |
| Elevated surfaces | `white` | `#ffffff` | App screenshots, white section bands, cards |
| Headlines & body | `charcoal-900` | `#101820` | All primary text (12.7:1 on beige-100) |
| Muted text | `charcoal-900` @ 42-50% | — | Subheadlines, secondary copy |
| Brand accent | `green-500` | `#7a8f71` | Logo mark, accent text ("Litepad" in taglines), hover states, decorative elements |
| Accent hover | `green-600` | `#5a6b52` | Button/link hover states |
| Accent light | `green-400` | `#96a88e` | Accents on dark backgrounds |
| CTA buttons | `charcoal-900` | `#101820` | Primary download buttons (dark, not green) |
| Borders on beige | `beige-300` | `#d4d0c4` | Dividers, card borders on beige sections |
| Borders on white | — | `#eeeeee` | Card borders on white sections |
| Dark band bg | `charcoal-900` | `#101820` | AI tools section background |
| Dark band surfaces | `charcoal-800` | `#1a2430` | Cards/elements on dark band |
| Screenshot chrome | `beige-100` | `#edeae2` | App titlebar tint in screenshots |

**Rules:**
- Green never appears as a CTA button background — CTAs are always charcoal/dark
- Green accents specific words in headlines (e.g., "Markdown has **Litepad.**")
- Beige only appears as the page canvas and inside app screenshot chrome — never as card backgrounds on white sections (except the featured testimonial)
- The dark band (section 4) uses `green-400` for accent text since `green-500` lacks contrast on dark backgrounds

---

## Typography

| Context | Stack | Notes |
|---------|-------|-------|
| Logo wordmark | Darker Grotesque | Logo only — never for body text |
| All other text | `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | System font stack per design guide |

### Scale (website-specific — larger than in-app sizes)

| Element | Size | Weight | Letter-spacing | Usage |
|---------|------|--------|----------------|-------|
| Hero headline | 56px | 700 | -2px | Homepage hero |
| Section headlines | 40px | 700 | -1px | Section titles |
| Card headlines | 28px | 700 | -0.5px | Bento card titles (e.g., PDF comparison) |
| Card titles | 18px | 700 | 0 | Bento card names (e.g., "Preview Mode") |
| Body / subheadlines | 18px | 400 | 0 | Hero subheadline |
| Section body | 16px | 400 | 0 | Section descriptive text |
| Card body | 14px | 400 | 0 | Card descriptions |
| Labels | 13px | 500 | 0 | Nav links, captions |
| Small labels | 11px | 600 | 1-1.5px | Uppercase labels, compare panel headers |
| Tiny | 9-10px | 600 | 1.5px | Section wireframe labels (dev only) |

**Rules:**
- Three weights: 400, 500, 700 (note: website uses 700 for bold headlines unlike the app's max 600)
- Muted text uses opacity: 42% for subheadlines, 35% for tertiary text, 25% for footer
- Line-height: 1.06-1.15 for headlines, 1.5-1.6 for body text
- Max line-length for body copy: ~480px (hero), ~520px (sections)

---

## Spacing & Layout

### Container
- Max content width: `1120px`, centered
- Horizontal page padding: `48px`

### Section padding
- Standard: `96px` vertical
- Compact (dark band): `80px` vertical
- Hero: `72px` top, `0` bottom (screenshot bleeds into next section)

### Spacing scale
Same 4px base as design guide, extended for web:
`0, 4, 8, 12, 16, 20, 24, 32, 48, 56, 64, 80, 96`

### Border radii (website)
| Element | Radius |
|---------|--------|
| CTA buttons | 10px |
| Bento cards | 16px |
| App screenshot frames | 12px |
| Inner app previews | 8-10px |
| Testimonial cards | 14px |
| Logo mark | 6px |
| Compare panel labels | 0 (square top) |
| AI tool logo items | 10px |

---

## Global Elements

### Header / Nav
- Background: `beige-100` (transparent — matches page)
- Sticky on scroll; gains subtle shadow (`0 1px 8px rgba(0,0,0,0.04)`) when scrolled
- Layout: Logo left, nav + CTA right
- Logo: Litepad icon mark (green geometric SVG) + "Litepad." wordmark (Darker Grotesque, black, beige period dot) — the light variant
- Nav link: "Features & Guide" — 14px, 45% opacity, weight 500
- CTA: "Download for Mac" — charcoal button, 13px, weight 600, rounded 8px, Apple icon

### Footer
- Background: `beige-100`
- Top border: 1px `beige-300`
- Layout: Logo + copyright left, nav links right
- Links: Home, Features & Guide, Privacy, Terms, Support
- Mac App Store download button (small, secondary style)
- Sidepad cross-promo link with brief description
- All text 12px, 25-30% opacity

---

## Homepage Sections

### Section 1: Hero
**Background:** Beige
**Layout:** Centered

- Headline: "The markdown reader for the AI era." — 56px, bold, charcoal, -2px tracking
- Subheadline: "AI tools speak markdown. Litepad makes it beautiful, readable, and easy to preview." — 18px, 42% opacity
- Primary CTA: "Download on the Mac App Store" — dark button with Apple icon
- Secondary: "Features & Guide ↓" — ghost text link
- Below CTAs: Large app screenshot (max-width ~860px) showing Preview mode with white rendering, rounded top corners, bottom-cropped (bleeds into next section's edge). Subtle shadow: `0 -2px 60px rgba(0,0,0,0.05)`. Shows titlebar with traffic lights, filename, Edit/Split/Preview pills.

### Section 2: "You've seen these files" — Education
**Background:** White
**Layout:** Split — text left, comparison right

- Left column (flex: 340px):
  - Headline: "You've seen these files." — 40px, bold, left-aligned
  - Body copy explaining that .md files are everywhere (AI tools, devs) but have no clean reader — 16px, 50% opacity
- Right column (flex: 1):
  - Two side-by-side panels
  - Left panel: "Raw .md file" — monospace text, gray background (`#fafafa`), showing actual raw markdown with `#`, `##`, backticks
  - Right panel: "In Litepad" — white background, clean rendered output (proper headings, code blocks, paragraphs)
  - Panel headers: 11px uppercase, 1px letter-spacing. Raw = gray label. Rendered = green label with green tint background
  - Both panels: 12px rounded, 1px border

### Section 3: Bento Grid — PDF Comparison + App Screenshots
**Background:** Beige
**Layout:** Bento grid (3 columns, 2 rows, mixed sizes)

- **Header:** Left-aligned "See it in action." (40px) with right-aligned "Three ways to view" uppercase label
- **Grid layout:**
  - **Card A — PDF Comparison** (spans 2 columns, row 1): White background. Split content: left side has headline "PDFs had Adobe Reader. Markdown has Litepad." (28px, "Litepad" in green) + body text. Right side has visual equation: red `.pdf` icon block → green `.md` icon block with labels.
  - **Card B — Preview Mode** (1 column, spans 2 rows): White background. "Preview Mode" title + "The default. Double-click and read." subtitle. Below: mini app frame (beige chrome, white content with mock lines). This card is taller, showing the full reading experience.
  - **Card C — Split View** (1 column, row 2): White background. "Split View" title. Shows a mini split panel — left half with monospace source text on beige, right half with rendered mock lines on white.
  - **Card D — Dark Mode** (1 column, row 2): **Dark background** (`charcoal-900`). White title text. Shows mini app frame with dark chrome and subtle mock content lines. This card breaks the pattern and adds drama.
- All cards: 16px radius, 1px `beige-300` border (dark card has no visible border)
- Gap between cards: 16px

### Section 4: "Works with your favourite AI tools"
**Background:** Charcoal-900 (full dark band)
**Layout:** Split — text left, logo grid right

- Left:
  - Headline: "AI speaks markdown. Litepad reads it beautifully." — 36px, white, "beautifully" in `green-400`
  - Body: "Works with the tools you already use. Every AI assistant outputs markdown — Litepad is how you read it." — 16px, 40% white
- Right:
  - 2×3 grid of logo items (88×56px each)
  - Items: Claude, ChatGPT, Gemini, Cursor, Sidepad, Notion
  - Grayscale/muted treatment: dark card backgrounds (`rgba(255,255,255,0.04)`), subtle borders, text labels at 25% white
  - Actual SVG logos in final implementation (grayscale)

### Section 5: Social Proof / Testimonials
**Background:** White
**Layout:** Masonry-style 3-column grid

- Header: "People love it." — 40px, bold, left-aligned
- Grid:
  - **Featured card** (column 1, spans 2 rows): Beige background (`beige-100`), `beige-300` border. Longer quote, larger text (18px). Green star ratings.
  - **Regular cards** (columns 2-3): White background, `#eee` border. Shorter quotes, 15px text. Green star ratings.
- Each card: quote text, then author block (avatar circle, name 13px/600, role 12px/35%)
- Card radius: 14px
- Gap: 16px
- Placeholder content — to be replaced with real testimonials

### Section 6: Bottom CTA
**Background:** Beige
**Layout:** Centered

- Headline: "Read markdown the way it was meant to be." — 44px, bold, centered
- Subheadline: "Free on the Mac App Store. No account needed." — 16px, 42% opacity
- CTA: Same dark download button as hero
- Below, separated by `beige-300` top border: Sidepad cross-promo one-liner. "Also from our team: **Sidepad** — capture AI conversations from your browser." — Sidepad name in `green-600`

---

## Background Rhythm

| Section | Background | Layout Style |
|---------|-----------|--------------|
| Nav | Beige | Horizontal bar |
| 1. Hero | Beige | Centered |
| 2. Education | **White** | Split (text left, panels right) |
| 3. Bento Grid | Beige | Bento grid (mixed card sizes) |
| 4. AI Tools | **Dark (charcoal-900)** | Split (text left, logos right) |
| 5. Testimonials | **White** | Masonry grid |
| 6. Bottom CTA | Beige | Centered |
| Footer | Beige | Horizontal bar |

Sequence: beige → white → beige → **dark** → white → beige. The dark band in the middle creates a dramatic contrast moment and breaks the alternating pattern.

---

## Page 2: Features & Guide

A hybrid features/guide page. Follows the same visual system but uses a more linear, instructional layout.

- **Background:** Beige base, white content cards
- **Page header:** Left-aligned title "Features & Guide" (40px) + brief intro line
- **Feature sections:** Each feature is a white card on the beige canvas. Card contains:
  - Feature name + description on one side
  - Screenshot or illustration on the other side
  - Alternating left/right layout per feature for visual rhythm
- **Features covered:** Preview Mode, Split View, Edit Mode, Dark Mode & Themes, Set as Default App, Print & Export to PDF
- **"Set as Default" section** gets special treatment — step-by-step numbered instructions, possibly with a small illustration

---

## Pages 3 & 4: Privacy Policy / Terms of Use

Simple text pages.
- Beige background
- White content card (max-width ~720px, centered, padded)
- Standard legal text formatting
- Link back to home in header

---

## Assets Required

Per the content spec, plus:
- Litepad logo SVG (geometric icon mark) — for nav, footer, favicon
- "Litepad." wordmark — Darker Grotesque, for nav/footer
- App screenshots with **white rendering backgrounds** (Preview mode, Split view, Dark mode)
- Before/after raw markdown content (real text, not lorem ipsum)
- PDF icon and Litepad icon for the comparison visual
- AI tool logos (Claude, ChatGPT, Gemini, Cursor, Sidepad, Notion) — grayscale SVGs
- Mac App Store download badge or styled button
- Placeholder testimonial avatars

---

## Mockup Reference

Interactive wireframe mockup: `.superpowers/brainstorm/13230-1774038546/homepage-v2.html`
