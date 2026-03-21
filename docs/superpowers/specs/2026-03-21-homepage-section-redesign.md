# Homepage Section Redesign

**Date:** 2026-03-21
**Status:** Approved

## Overview

Restructure the Litepad homepage from 7 sections to 6. Replace CSS mockups with real screenshots, reorder sections for a tighter narrative, and add a new "No IDE Required" bento card. Remove the "You've seen these files" education section entirely.

## Target Audience

Vibe coders and AI tool users who encounter .md files daily through Claude, ChatGPT, Cursor, etc. — primarily for personal/side projects rather than enterprise work.

---

## Final Section Flow

### Section 1: Hero (beige background)

**Class:** `.hero.section-beige`
**No structural changes** to the hero layout. Only the screenshot image changes.

**Change:** Replace the current `<img>` in `.hero-screenshot` from `assets/screenshots/git-hero.png` to `assets/screenshots/hero-prd-cropped.png`.

Update the `alt` text to: `"Litepad showing a product requirements document in preview mode"`

Update `width` and `height` attributes to match `hero-prd-cropped.png` dimensions (2290x1300).

The hero headline, subtitle, and CTAs remain unchanged.

---

### Section 2: PDF Analogy (white background) — REPLACES education section

**Replaces:** The `.education.section-white` section (lines 57–67 of index.html).

**Remove entirely:** All education-related HTML — the `.education` section, `.education-inner`, `.education-text`, `.education-compare`, and the split-view screenshot `<img>`.

**Add in its place:** A new section that reuses the existing PDF analogy content (currently inside the bento at `.bento-card--pdf`). This becomes a standalone section.

**HTML structure:**
```html
<section class="pdf-analogy section-white">
  <div class="container pdf-analogy-inner">
    <div class="pdf-copy">
      <h2>PDFs had Adobe Reader. Markdown has <span class="text-green">Litepad.</span></h2>
      <p>People already understand "a file opens in the right reader." Litepad gives markdown that same obvious destination: double-click, preview, and read.</p>
    </div>
    <div class="equation" aria-label="PDF compared with markdown reading app">
      <div class="format-chip format-chip--pdf">
        <div>
          <strong>.pdf</strong>
          <span>Adobe Reader</span>
        </div>
      </div>
      <div class="equation-arrow" aria-hidden="true">→</div>
      <div class="format-chip format-chip--md">
        <div>
          <strong>.md</strong>
          <span>Litepad</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

**CSS for new section:**
```css
.pdf-analogy {
  padding: 80px 0;
}

.pdf-analogy-inner {
  display: flex;
  align-items: center;
  gap: 48px;
}

.pdf-analogy-inner .pdf-copy {
  flex: 1;
}
```

The `.pdf-copy`, `.equation`, `.format-chip`, `.format-chip--pdf`, `.format-chip--md`, and `.equation-arrow` classes already exist in `style.css` and should be reused as-is. The `h2` replaces the existing `h3` since this is now a standalone section.

**Mobile (max-width: 768px):** Add `.pdf-analogy-inner` to the existing flex-direction column rule alongside `.bento-card--pdf`.

---

### Section 3: Bento (beige background) — RESTRUCTURED

**Class:** `.bento.section-beige`

**What changes:**
1. Remove the `.bento-card--pdf` card (moved to Section 2 above)
2. Restructure the grid: three view-mode cards across the top row, one full-width "No IDE Required" card as the bottom row
3. Replace CSS mini-mockup windows (`.mini-window`, `.mini-lines`) with real screenshot `<img>` tags
4. Keep the `.bento-header` (h2 "See it in action." + eyebrow "Three ways to view") unchanged

**New HTML for `.bento-grid`:**
```html
<div class="bento-grid">
  <article class="bento-card bento-card--preview">
    <div class="bento-card-body">
      <h3>Preview Mode</h3>
      <p>The default. Double-click and read without seeing the syntax unless you want to.</p>
    </div>
    <div class="bento-card-image">
      <img src="assets/screenshots/Solar System.png" alt="Solar System Research Summary rendered in Litepad preview mode">
    </div>
  </article>

  <article class="bento-card bento-card--split">
    <div class="bento-card-body">
      <h3>Split View</h3>
      <p>See source and output side by side when you need context without losing readability.</p>
    </div>
    <div class="bento-card-image">
      <img src="assets/screenshots/split-view-website.png" alt="Litepad split view showing raw markdown and rendered preview side by side">
    </div>
  </article>

  <article class="bento-card bento-card--dark">
    <div class="bento-card-body">
      <h3>Dark Mode</h3>
      <p>For late-night reading sessions, system-matched themes, and lower glare.</p>
    </div>
    <div class="bento-card-image">
      <img src="assets/screenshots/Q1.png" alt="Q1 Project Brief rendered in Litepad dark mode">
    </div>
  </article>

  <article class="bento-card bento-card--no-ide">
    <div class="no-ide-copy">
      <h3>You don't need an IDE to read a document.</h3>
      <p>VS Code, GitHub, Obsidian — they all render markdown, but they're tools you work <em>inside</em>. Litepad is the reader that lives <em>outside</em>. Double-click any .md file in Finder and it opens instantly — no project, no workspace, no account.</p>
    </div>
    <div class="no-ide-image">
      <img src="assets/screenshots/Git Final.png" alt="Git Cheat Sheet rendered in Litepad preview mode">
    </div>
  </article>
</div>
```

**CSS changes for bento grid:**

Replace the current grid layout. The new grid is 3 equal columns for the top row, with the bottom card spanning all 3.

```css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

/* Remove old .bento-card--pdf styles (grid-column: 1/3, flex layout, etc.) */

/* All three view-mode cards: equal columns, same structure */
.bento-card--preview,
.bento-card--split,
.bento-card--dark {
  display: flex;
  flex-direction: column;
  /* Remove old grid-column/grid-row overrides for --preview */
}

.bento-card-image {
  margin-top: auto;
  padding: 16px;
}

.bento-card-image img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-m);
}

/* No IDE card spans full width */
.bento-card--no-ide {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  gap: 48px;
  padding: 40px;
}

.no-ide-copy {
  flex: 1;
}

.no-ide-copy p {
  max-width: 440px;
  margin-top: 16px;
  font-size: 15px;
  line-height: 1.65;
  color: rgba(16, 24, 32, 0.55);
}

.no-ide-image {
  flex: 1;
}

.no-ide-image img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-l);
  box-shadow: var(--shadow-soft);
}
```

**Responsive — tablet (max-width: 1024px):**

In the existing `@media (max-width: 1024px)` block:
- Remove the `.bento-card--pdf { grid-column: 1 / -1; }` rule (card no longer exists in bento)
- Remove the `.bento-card--preview { grid-column: auto; grid-row: auto; }` rule (no longer needed — the old `grid-column: 3; grid-row: 1/3` override it was resetting is also being removed)
- Add `.bento-card--no-ide { grid-column: 1 / -1; }` so the No IDE card stays full-width at tablet
- Remove `.education-inner` from the flex-direction column rule (education section is deleted)
- Remove `.education-text` from the `flex: none; width: 100%` rule
- Add `.pdf-analogy-inner` to the flex-direction column rule alongside `.ai-tools-inner` and `.feature-card`

**Responsive — mobile (max-width: 768px):**

In the existing `@media (max-width: 768px)` block:
- `.bento-grid` already collapses to `grid-template-columns: 1fr` — no change needed
- Replace `.bento-card--pdf` with `.bento-card--no-ide` in the flex-direction column rule (around line 1319-1325)
- Replace `.bento-card--pdf` with `.bento-card--no-ide` in the padding override rule (around line 1347-1351)
- Remove `.education-compare` from the flex-direction column rule and the `display: flex` rule
- Remove `.doc-grid` from both the flex-direction column rule and the `display: flex` rule
- Add `.pdf-analogy-inner` to the flex-direction column rule

---

### Section 4: AI Tools (dark background) — UNCHANGED

**Class:** `.ai-tools.section-dark`

No changes. Keep the headline, subtitle, and logo strip as-is.

---

### Section 5: Testimonials (white background) — UNCHANGED

**Class:** `.testimonials.section-white`

No changes. Keep the social proof grid as-is.

---

### Section 6: Bottom CTA (beige background) — UNCHANGED

**Class:** `.bottom-cta.section-beige`

No changes. Keep headline, subtitle, download button, and Sidepad cross-promo as-is.

---

## CSS Cleanup

After the restructure, the following CSS classes are no longer used and should be removed from the main stylesheet:

- `.education`, `.education-inner`, `.education-text`, `.education-text h2`, `.education-text p`, `.education-compare`, `.education-compare img`
- `.compare-panel`, `.compare-label`, `.compare-label.raw`, `.compare-label.rendered`, `.compare-content`, `.compare-content.raw`, `.compare-content.raw pre`, `.compare-content.rendered`, `.render-demo`, `.render-demo h3`, `.render-demo ul`
- `.mini-window`, `.mini-lines`, `.mini-line`, `.mini-line.short`, `.mini-line.mid`, `.mini-line.long`
- `.split-preview`, `.split-pane`, `.split-pane.raw`, `.split-pane.rendered`, `.split-pane.raw pre`
- `.doc-grid`, `.doc-card`, `.doc-meta`, `.rendered-sheet`, `.check-list`, `.code-slab`
- `.bento-card--pdf` (the card is removed from bento; its styles like `grid-column: 1/3`, flex layout, padding are no longer needed)

**Keep** the `.pdf-copy`, `.equation`, `.format-chip`, `.format-chip--pdf`, `.format-chip--md`, and `.equation-arrow` styles — they're reused in the new Section 2 (PDF Analogy).

Responsive overrides to clean up are detailed in the Section 3 responsive instructions above.

---

## Screenshot Assignments

| Location | File | Content |
|----------|------|---------|
| Hero | `assets/screenshots/hero-prd-cropped.png` | TaskFlow PRD in preview mode (2290x1300) |
| Bento — Preview | `assets/screenshots/Solar System.png` | Solar System Research Summary |
| Bento — Split | `assets/screenshots/split-view-website.png` | Weekly Notes in split view |
| Bento — Dark | `assets/screenshots/Q1.png` | Q1 Project Brief in dark mode |
| Bento — No IDE | `assets/screenshots/Git Final.png` | Git Cheat Sheet in preview mode |

All screenshots already exist in `assets/screenshots/`. No new images need to be created.

---

## Background Rhythm

```
Beige → White → Beige → Dark → White → Beige
```

Clean alternation with the dark band as a visual reset in the middle.

---

## Files to Modify

1. **`index.html`** — Remove education section, restructure bento, add PDF analogy section, update hero image
2. **`css/style.css`** — Add `.pdf-analogy-inner` styles, restructure bento grid styles, add `.bento-card--no-ide` and `.no-ide-copy`/`.no-ide-image` styles, add `.bento-card-image` styles, remove unused CSS classes listed above
