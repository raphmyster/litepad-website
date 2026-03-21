# Litepad Website Design Spec

## Overview

A promotional website for Litepad hosted on GitHub Pages. The primary goal is to drive Mac App Store downloads while educating non-technical visitors about what markdown is and why they need Litepad. The target audience is people encountering `.md` files through AI tools (ChatGPT, Claude, Gemini) who don't have a clean way to read them.

**Build location:** `/Users/raph/Developer/Projects/Litepad-Website`
**Hosting:** GitHub Pages
**Tech:** Static HTML/CSS/JS — no framework, no build step, no dependencies
**Mac App Store URL:** TBD — use `#` placeholder until the app is listed

## Site Structure

### Pages

1. **Home** — conversion-focused landing page
2. **Features & Guide** — feature highlights paired with usage instructions
3. **Privacy Policy** — required for App Store, linked from footer
4. **Terms of Use** — required for App Store, linked from footer

### Global Elements

**Header:**
- Litepad logo + wordmark
- Nav links: Features & Guide
- Mac App Store download button (CTA)

**Footer:**
- Litepad logo
- Nav links: Home, Features & Guide
- Mac App Store download button
- Sidepad cross-promo link with brief description
- Support contact (email or GitHub issues link)
- Privacy Policy + Terms of Use links
- Copyright

**Meta:**
- Open Graph / social meta tags for rich link previews when shared
- Favicon using the Litepad app icon

---

## Page 1: Home

### Hero

- **Headline:** In the family of "The markdown reader for the AI era."
- **Subheadline:** One line explaining what Litepad does for someone who's never heard of it
- **Primary CTA:** "Download on the Mac App Store" badge/button
- **Hero image:** The app in Preview mode showing a beautifully rendered markdown file

### "You've seen these files" — Education Section

- Short copy acknowledging that `.md` files are everywhere now — AI tools output them, developers share them, you download them — but they're awkward to open and don't have a clean reading experience like PDFs do
- **Before/after comparison:** Raw markdown text on the left, Litepad's clean rendered preview on the right
- This is the "aha" moment for non-technical visitors

### PDF vs Markdown Infographic

- Side-by-side visual comparison:
  - `.pdf` → Adobe Reader (with PDF icon)
  - `.md` → Litepad (with Litepad icon)
- Simple, visual, immediately communicates the positioning: "PDFs had Adobe Reader. Markdown has Litepad."

### App Screenshots Showcase

- 2-3 screenshots highlighting:
  - Preview mode (the default reading experience)
  - Split view (source + preview side by side)
  - Dark mode
- Brief captions for each

### "Works with your favourite AI tools"

- Grid/row of logos: Claude, ChatGPT, Gemini, Sidepad, and 1-2 others (e.g., Cursor, Notion)
- One-liner like "AI speaks markdown. Litepad reads it beautifully."
- Sidepad is listed alongside well-known brands for positive brand association

### Social Proof

- 3-4 testimonial cards with placeholder quotes, names, and roles
- To be swapped for real testimonials as they come in

### Bottom CTA

- Repeat the Mac App Store download button
- Brief Sidepad cross-promo: description + link to Sidepad

---

## Page 2: Features & Guide

A hybrid page — each section highlights a feature and includes brief instructions on how to use it.

**Page header:**
- Title (e.g., "Features & Guide" or "Get to know Litepad")
- Brief intro line

**Feature sections:**

### 1. Preview Mode
- The default experience. Double-click a `.md` file and read it rendered beautifully.
- Screenshot of Preview mode
- Instruction: "Litepad opens in Preview by default. Just double-click any `.md` file."

### 2. Split View
- See source and preview side by side
- Screenshot of Split mode
- Instruction: "Click 'Split' in the toolbar to see your markdown source alongside the rendered output."

### 3. Edit Mode
- Full source editing when you need it
- Mention the formatting toolbar (bold, italic, headers, lists, tables, etc.)
- Instruction: "Click 'Edit' to switch to the source editor. Use the toolbar for quick formatting."

### 4. Dark Mode & Themes
- Multiple themes available, follows system preference or can be set manually
- Screenshot of dark mode
- Instruction on where to find theme settings

### 5. Set Litepad as Your Default Markdown App
- Step-by-step instructions:
  1. Right-click any `.md` file
  2. Click "Get Info"
  3. Under "Open With," select Litepad
  4. Click "Change All"
- This is a key onboarding step for non-technical users

### 6. Print & Export to PDF
- Export any markdown file as a clean, formatted PDF
- Bridges the gap for users attached to the PDF workflow
- Instruction on how to print/export (File → Print or ⌘P)

---

## Page 3: Privacy Policy

Standard privacy policy page. Litepad collects no user data, has no analytics, and runs sandboxed on macOS. Simple text page.

---

## Page 4: Terms of Use

Standard terms of use for a free macOS application. Simple text page.

---

## Assets Required

- Litepad app icon (for favicon and site branding)
- Litepad logo + wordmark (header/footer)
- App screenshots: Preview mode, Split view, Dark mode (from existing App Store screenshots)
- Before/after markdown comparison (raw text vs rendered)
- PDF icon + Adobe Reader logo (for infographic)
- AI tool logos: Claude, ChatGPT, Gemini, Sidepad, and 1-2 others
- Mac App Store download badge
- Placeholder avatar images for testimonials
