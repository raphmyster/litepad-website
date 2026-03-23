# Features & Guide Page Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the Features & Guide page from a generic feature tour into a curated tips page for AI-heavy users, using a hero card + 3×2 grid layout.

**Architecture:** Replace all 6 existing feature cards in `features.html` with a hero card (Set as Default) and a 3×2 grid of tip cards. Replace old CSS classes with new ones. No new files needed — this modifies `features.html` and `css/style.css` only.

**Tech Stack:** Static HTML, CSS. No build step, no dependencies. Inline SVGs for icons (Lucide-based, 1.75 stroke weight).

**Spec:** `docs/superpowers/specs/2026-03-23-features-page-redesign.md`
**Approved mockup:** `.superpowers/brainstorm/53326-1774297327/layout-grid-v2.html`

---

### Task 1: Update meta tags and page header

**Files:**
- Modify: `features.html:7-14` (meta tags)
- Modify: `features.html:40-45` (page header section)

- [ ] **Step 1: Update meta description tags**

Replace the three description meta tags to remove references to "preview mode, split view, editing":

```html
<meta name="description" content="Tips and shortcuts for getting the most out of Litepad — set it as your default, clipboard tricks, floating windows, themes, and PDF export.">
```

```html
<meta property="og:description" content="Tips and shortcuts for getting the most out of Litepad — set it as your default, clipboard tricks, floating windows, themes, and PDF export.">
```

```html
<meta name="twitter:description" content="Tips and shortcuts for getting the most out of Litepad on macOS.">
```

- [ ] **Step 2: Update page header copy**

Replace the `<section class="features-header">` content. Keep the same classes and structure:

```html
<section class="features-header">
  <div class="container">
    <h1>Features &amp; Guide</h1>
    <p>A few things worth knowing once you've downloaded Litepad. Small features that make a big difference in your day-to-day.</p>
  </div>
</section>
```

- [ ] **Step 3: Verify in browser**

Open `http://localhost:8080/features.html` (or whichever port the local server is running on). Confirm the page header and meta tags look correct. The body content will still show old cards — that's expected.

- [ ] **Step 4: Commit**

```bash
git add features.html
git commit -m "Update features page meta tags and header copy"
```

---

### Task 2: Replace HTML body with hero card and tips grid

**Files:**
- Modify: `features.html:47-181` (the entire `<section class="features-page">` and its contents)

This is the main HTML change. Replace everything inside `<section class="features-page">` with the new hero card and tips grid.

- [ ] **Step 1: Replace the features-page section**

Delete everything from `<section class="features-page">` (line 47) through its closing `</section>` (line 181). Replace with the following. Note: the section class changes from `features-page` to `features-tips`:

```html
<section class="features-tips">
  <div class="container">

    <!-- Hero Card: Set as Default -->
    <article class="tip-hero">
      <div class="tip-hero-text">
        <span class="tip-hero-label">First thing to do</span>
        <h2>Set Litepad as Your Default Markdown App</h2>
        <p>Make every <code>.md</code> file open as a clean, readable document — no more raw text in Xcode or TextEdit.</p>
        <ol class="tip-hero-steps">
          <li>Right-click any <code>.md</code> file in Finder.</li>
          <li>Choose <strong>Get Info</strong>.</li>
          <li>Under <strong>Open With</strong>, select Litepad.</li>
          <li>Click <strong>Change All</strong> to apply it to every markdown file.</li>
        </ol>
      </div>
      <div class="tip-hero-image">
        <div class="mini-window">
          <div class="mini-window-body">
            <div class="mini-lines">
              <div class="mini-line short"></div>
              <div class="mini-line long"></div>
              <div class="mini-line mid"></div>
              <div class="mini-line long"></div>
              <div class="mini-line short"></div>
            </div>
          </div>
        </div>
      </div>
    </article>

    <!-- Tips Grid -->
    <div class="tips-grid">

      <article class="tip-card">
        <div class="tip-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>
        </div>
        <h3 class="tip-title">New File from Clipboard</h3>
        <p class="tip-desc">Copy a response from ChatGPT or Claude and create an instant readable document — no file picker, no saving first.</p>
        <span class="tip-shortcut">Ctrl + Cmd + N</span>
      </article>

      <article class="tip-card">
        <div class="tip-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><line x1="9" y1="3" x2="9" y2="9"/></svg>
        </div>
        <h3 class="tip-title">Float on Top</h3>
        <p class="tip-desc">Pin a spec or README above your IDE while you code. Keeps a reference doc visible without constantly switching windows.</p>
        <span class="tip-shortcut">Window → Float on Top</span>
      </article>

      <article class="tip-card">
        <div class="tip-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><circle cx="3.5" cy="6" r="1.5"/><circle cx="3.5" cy="12" r="1.5"/><circle cx="3.5" cy="18" r="1.5"/></svg>
        </div>
        <h3 class="tip-title">Table of Contents</h3>
        <p class="tip-desc">Long AI-generated docs can be hard to scan. Open the Table of Contents to see every heading and jump to any section.</p>
        <span class="tip-shortcut">Shift + Cmd + O</span>
      </article>

      <article class="tip-card">
        <div class="tip-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        </div>
        <h3 class="tip-title">Dark Mode &amp; Themes</h3>
        <p class="tip-desc">Litepad follows your system appearance automatically. You can also pick a theme manually in preferences to match your setup.</p>
        <span class="tip-shortcut">Cmd + ,</span>
      </article>

      <article class="tip-card">
        <div class="tip-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
        </div>
        <h3 class="tip-title">Print &amp; Export to PDF</h3>
        <p class="tip-desc">Need to share a doc with someone who doesn't use markdown? Print or save as PDF from the rendered preview.</p>
        <span class="tip-shortcut">Cmd + P</span>
      </article>

      <article class="tip-card">
        <div class="tip-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14L21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
        </div>
        <h3 class="tip-title">Copy Path &amp; Reveal in Finder</h3>
        <p class="tip-desc">Quickly grab the file path to paste into your terminal or IDE, or jump straight to the file's location in Finder.</p>
        <span class="tip-shortcut">Cmd + R</span>
      </article>

    </div>
  </div>
</section>
```

- [ ] **Step 2: Verify the HTML is valid**

Open the page in the browser. It will look broken because the CSS classes don't exist yet — that's expected. Just confirm there are no HTML errors (check the browser console for parsing issues).

- [ ] **Step 3: Commit**

```bash
git add features.html
git commit -m "Replace feature cards with hero card and tips grid HTML"
```

---

### Task 3: Remove old CSS and add new styles

**Files:**
- Modify: `css/style.css`

This task removes the old feature-card CSS and adds the new hero card + tips grid styles. The old classes to remove are only used in `features.html` (verified — no other HTML file references them).

- [ ] **Step 1: Remove old feature-card CSS rules**

Delete the following CSS blocks from `css/style.css`. These are all in the features section (around lines 773-857):

- `.features-page` (line 773-775)
- `.feature-card` (line 777-787)
- `.feature-card:nth-child(even)` (line 789-791)
- `.feature-text` (line 793-795)
- `.feature-text h2` (line 797-800)
- `.feature-text p` (line 802-807)
- `.feature-instruction` (line 809-816)
- `.feature-image` (line 818-820)
- `.feature-steps` (line 822-827)
- `.feature-steps li` (line 829-839)
- `.feature-steps li:last-child` (line 841-843)
- `.feature-steps li::before` (line 845-857)

Do NOT remove `.features-header` styles (lines 757-771) — those are still used for the page header.

**Note:** Responsive overrides for `.feature-card` and `.feature-image` are handled in Step 3 alongside adding the new responsive rules. Don't touch the media query blocks in this step.

**Note:** The old HTML used classes like `.mini-window`, `.mini-lines`, `.split-preview`, `.code-slab`, `.render-demo` — but these have NO corresponding CSS rules in `style.css`. They were unstyled or styled inline. Do not search for them — there's nothing to remove.

Also remove the `.app-*` family of CSS rules. These are only used in `features.html` (verified — not in `index.html` or any other HTML file):

- `.app-titlebar` (line 356-363)
- `.app-dots` (line 365-368)
- `.app-dots span` (line 370-374)
- `.app-dots span:nth-child(1)` (line 376-378)
- `.app-dots span:nth-child(2)` (line 380-382)
- `.app-dots span:nth-child(3)` (line 384-386)
- `.app-filename` (line 388-391)
- `.app-view-pills` and related rules (lines 393-416)
- `.app-body` (line 418-421)
- `.app-body` responsive override inside `@media (max-width: 768px)` (lines 1073-1075)

- [ ] **Step 2: Add new CSS for the hero card and tips grid**

Add the following CSS right after the `.features-header p` rule (after the existing line 771). Insert it before the `.legal` section.

**Note:** The `.tip-hero-image .mini-window` rules below are purely additive — there are no existing `.mini-window` CSS rules in `style.css` to conflict with.

```css
/* ── Features Tips ── */

.features-tips {
  padding-bottom: 96px;
}

.tip-hero {
  display: flex;
  align-items: center;
  gap: 32px;
  margin-bottom: 24px;
  padding: 32px;
  border-radius: var(--radius-xl);
  background: var(--white);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 8px 24px rgba(0, 0, 0, 0.06);
}

.tip-hero-text {
  flex: 1;
}

.tip-hero-label {
  display: block;
  margin-bottom: 8px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: var(--green-500);
}

.tip-hero h2 {
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.3px;
  line-height: 1.25;
}

.tip-hero p {
  margin-bottom: 14px;
  font-size: 14.5px;
  line-height: 1.55;
  color: rgba(16, 24, 32, 0.55);
}

.tip-hero p code {
  background: var(--beige-100);
  padding: 2px 5px;
  border-radius: 4px;
  font-size: 13px;
}

.tip-hero-steps {
  list-style: none;
  counter-reset: step;
  display: grid;
  gap: 4px;
}

.tip-hero-steps li {
  counter-increment: step;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: 13.5px;
  line-height: 1.6;
  color: rgba(16, 24, 32, 0.65);
}

.tip-hero-steps li:last-child {
  border-bottom: 0;
}

.tip-hero-steps li::before {
  content: counter(step);
  flex: 0 0 28px;
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--green-500);
  color: var(--white);
  font-size: 13px;
  font-weight: 600;
}

.tip-hero-steps li code {
  background: var(--beige-100);
  padding: 1px 4px;
  border-radius: 3px;
  font-size: 12px;
}

.tip-hero-image {
  flex: 0 0 180px;
}

.tip-hero-image .mini-window {
  border: 1px solid var(--beige-300);
  border-radius: var(--radius-m);
  overflow: hidden;
}

.tip-hero-image .mini-window-body {
  padding: 20px;
  background: var(--white);
}

.tip-hero-image .mini-lines {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tip-hero-image .mini-line {
  height: 6px;
  border-radius: 3px;
  background: var(--beige-200);
}

.tip-hero-image .mini-line.short { width: 40%; }
.tip-hero-image .mini-line.mid { width: 65%; }
.tip-hero-image .mini-line.long { width: 90%; }

/* Tips Grid */

.tips-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.tip-card {
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: var(--radius-xl);
  background: var(--white);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 8px 24px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.tip-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 12px 32px rgba(0, 0, 0, 0.09);
}

.tip-icon {
  width: 42px;
  height: 42px;
  margin-bottom: 16px;
  border-radius: 11px;
  background: linear-gradient(135deg, var(--green-500) 0%, var(--green-400) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.tip-icon svg {
  width: 22px;
  height: 22px;
}

.tip-title {
  margin-bottom: 6px;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.2px;
  line-height: 1.3;
}

.tip-desc {
  flex: 1;
  font-size: 13.5px;
  line-height: 1.5;
  color: rgba(16, 24, 32, 0.5);
}

.tip-shortcut {
  display: inline-flex;
  align-self: flex-start;
  margin-top: 14px;
  padding: 4px 10px;
  border-radius: 7px;
  background: var(--beige-100);
  font-size: 11.5px;
  font-family: ui-monospace, "SF Mono", Menlo, monospace;
  color: rgba(16, 24, 32, 0.5);
  letter-spacing: 0.2px;
}
```

- [ ] **Step 3: Add responsive rules for tips grid**

Inside the `@media (max-width: 1024px)` block, add:

```css
.tips-grid {
  grid-template-columns: repeat(2, 1fr);
}

.tip-hero {
  gap: 24px;
}

.tip-hero h2 {
  font-size: 18px;
}
```

Inside the `@media (max-width: 768px)` block, add:

```css
.tip-hero {
  flex-direction: column;
}

.tip-hero-image {
  flex: none;
  width: 100%;
}

.tips-grid {
  grid-template-columns: 1fr;
}
```

Also in the 768px block, remove the `.feature-card` reference from any existing rules. Specifically:
- The rule `.bento-card--no-ide, .feature-card, .footer-inner { flex-direction: column; }` — remove `.feature-card` from the selector list so it becomes `.bento-card--no-ide, .footer-inner { flex-direction: column; }`
- The rule `.feature-card, .legal-card { padding: 24px; }` — remove `.feature-card` so it becomes `.legal-card { padding: 24px; }`
- Delete the `.feature-image { flex-basis: auto; }` rule entirely.

In the 1024px block, remove:
- The rule `.ai-tools-inner, .feature-card, .feature-card:nth-child(even) { ... }` — remove the two `.feature-card` selectors so it becomes `.ai-tools-inner { grid-template-columns: 1fr; flex-direction: column; }`
- Delete the `.feature-image { flex: none; width: 100%; }` rule entirely.

- [ ] **Step 4: Verify in browser**

Open `http://localhost:8080/features.html`. Confirm:
- Hero card displays with text left, placeholder right
- 3×2 grid of tip cards displays below
- Green gradient icon badges are visible
- Shortcut badges are at the bottom of each card
- Hover effect works on tip cards (slight lift)
- Resize browser to check tablet (2-col) and mobile (1-col) breakpoints

- [ ] **Step 5: Commit**

```bash
git add css/style.css
git commit -m "Replace feature card CSS with hero card and tips grid styles"
```

---

### Task 4: Visual QA and polish

**Files:**
- Possibly modify: `features.html`, `css/style.css`

- [ ] **Step 1: Check spacing and alignment**

Open `http://localhost:8080/features.html` and verify:
- The gap between the page header and hero card looks right
- The gap between hero card and tips grid is 24px
- Tip card heights are equal across each row (flexbox should handle this)
- Shortcut badges are consistently positioned at the bottom of each card
- The hero card numbered steps have green circle numbers

- [ ] **Step 2: Check responsive breakpoints**

Test at these widths:
- 1200px+ (desktop, 3-column grid)
- 900px (tablet, should be 2-column grid)
- 500px (mobile, should be 1-column, hero card stacked)

Verify no horizontal overflow occurs at any width.

- [ ] **Step 3: Fix any issues found**

If spacing, alignment, or responsive behavior needs adjustment, make targeted CSS fixes.

- [ ] **Step 4: Final commit**

```bash
git add features.html css/style.css
git commit -m "Polish features page layout and responsive behavior"
```

Only create this commit if changes were made in step 3. If everything looks good, skip this step.
