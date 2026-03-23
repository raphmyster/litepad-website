# Features & Guide Page Redesign

## Summary

Redesign the Features & Guide page to serve AI-heavy users and vibecoders who primarily use Litepad to read markdown as clean documents. Replace the current feature-tour layout (Preview Mode, Split View, Edit Mode, etc.) with a curated set of tips — things a new user would want to know after downloading the app.

## Target Persona

Someone who is a heavy AI user and getting into vibecoding. They generate lots of markdown via ChatGPT, Claude, Cursor, and similar tools. They primarily use Litepad as a reader — clean, PDF-like rendering of `.md` files — and occasionally make small edits.

## Page Structure

### Page Header

- Title: "Features & Guide"
- Subtitle: "A few things worth knowing once you've downloaded Litepad. Small features that make a big difference in your day-to-day."

### Hero Card: Set Litepad as Your Default Markdown App

- Full-width card at the top, visually distinct from the grid below.
- Keeps the existing layout: text on the left with step-by-step instructions, screenshot/image on the right.
- Label: "First thing to do"
- Copy explains why (every AI-generated `.md` opens as a clean doc automatically, no more raw text in Xcode or TextEdit).
- Steps: Right-click `.md` → Get Info → Open With → Litepad → Change All.
- The current page uses a CSS placeholder (mini-window with drawn lines), not a real screenshot. Keep this placeholder for now; a real screenshot can be swapped in later.

### Tips Grid: 3×2 Card Grid

Six tip cards arranged in a 3-column, 2-row grid below the hero card.

Each card contains:
1. **Icon** — 42×42px green gradient badge (`linear-gradient(135deg, #7a8f71, #96a88e)`), rounded corners (11px). White SVG stroke icon inside, 1.75 stroke weight, 22px size.
2. **Title** — 15px, bold (700).
3. **Description** — 13.5px, 1-2 sentences, color `#666`.
4. **Shortcut badge** — Anchored to the bottom of the card. Beige background (`#f0efe9`), monospace font, 11.5px. Uses text labels: `Cmd`, `Shift`, `Ctrl` — not symbols like `⌘` or `⇧`.

Card styling: white background, 14px border-radius, 24px padding, box-shadow `0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)`. Subtle lift on hover (translateY -2px, shadow deepens to `0 12px 32px rgba(0,0,0,0.09)`).

#### Card 1: New File from Clipboard
- **Icon:** Clipboard (Lucide `clipboard`)
- **Description:** Copy a response from ChatGPT or Claude and create an instant readable document — no file picker, no saving first.
- **Shortcut:** `Ctrl + Cmd + N`

#### Card 2: Float on Top
- **Icon:** Window with pinned indicator (Lucide `app-window` or similar)
- **Description:** Pin a spec or README above your IDE while you code. Keeps a reference doc visible without constantly switching windows.
- **Shortcut:** `Window → Float on Top`

#### Card 3: Table of Contents
- **Icon:** List with bullet points (Lucide `list`)
- **Description:** Long AI-generated docs can be hard to scan. Open the Table of Contents to see every heading and jump to any section.
- **Shortcut:** `Shift + Cmd + O`

#### Card 4: Dark Mode & Themes
- **Icon:** Moon (Lucide `moon`)
- **Description:** Litepad follows your system appearance automatically. You can also pick a theme manually in preferences to match your setup.
- **Shortcut:** `Cmd + ,`

#### Card 5: Print & Export to PDF
- **Icon:** Printer (Lucide `printer`)
- **Description:** Need to share a doc with someone who doesn't use markdown? Print or save as PDF from the rendered preview.
- **Shortcut:** `Cmd + P`

#### Card 6: Copy Path & Reveal in Finder
- **Icon:** External link / open arrow (Lucide `external-link`)
- **Description:** Quickly grab the file path to paste into your terminal or IDE, or jump straight to the file's location in Finder.
- **Shortcut:** `Cmd + R`

## What Gets Removed

The following cards from the current page are deleted entirely:
- Preview Mode
- Split View
- Edit Mode

These are self-explanatory features that don't need a guide entry.

### CSS Cleanup

Remove the following CSS rules from `style.css` that are no longer used:
- `.mini-window`, `.app-titlebar`, `.app-dots`, `.app-filename`, `.app-body`, `.mini-lines`, `.mini-line` and variants
- `.split-preview`, `.split-pane`, `.raw`, `.rendered`
- `.code-slab`
- `.render-demo`

The existing `.feature-card`, `.feature-text`, `.feature-image`, `.feature-instruction`, `.feature-steps` classes should be replaced with new classes for the hero card and tips grid.

### Meta Tag Updates

Update `<meta name="description">`, `<meta property="og:description">`, and `<meta name="twitter:description">` to reflect the new content — remove references to "preview mode, split view, editing."

## What Gets Kept (Modified)

- **Set as Default App** — kept as hero card, same content and step-by-step format.
- **Dark Mode & Themes** — moved into the grid, condensed to card format.
- **Print & Export to PDF** — moved into the grid, condensed to card format.

## Visual Design Details

- Page background: beige (`#edeae2`), consistent with the rest of the site.
- Card backgrounds: white (`#fff`).
- Grid gap: 16px between cards.
- Hero card has slightly larger padding (32px) and same shadow as tip cards.
- Hero card label ("First thing to do"): 11px, uppercase, letter-spacing 1.2px, color `#7a8f71`, font-weight 700.
- Cards use flexbox column layout so the shortcut badge anchors to the bottom regardless of description length.
- Green gradient icon badges match the site's brand green (`#7a8f71` → `#96a88e`).

## Icons

All icons are inline SVGs (no icon font or CDN — the project has no build step or dependencies). Source shapes based on Lucide icon set, rendered at 22×22px with 1.75 stroke weight, white stroke on the green gradient badge.

## Responsive Behavior

- Desktop (>1024px): 3-column grid.
- Tablet (768px–1024px): 2-column grid.
- Mobile (<768px): 1-column stack. Hero card stacks vertically (image below text).

## Mockup Reference

Approved mockup: `.superpowers/brainstorm/53326-1774297327/layout-grid-v2.html`
