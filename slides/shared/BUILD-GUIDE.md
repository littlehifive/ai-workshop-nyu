# Slide Build Guide — TAF/AWC deck (read fully before writing any slide)

## Inputs you must read first
1. `/Users/michaelfive/Code/mystuff/ai-workshop-nyu/slide-content.md` — the copy for YOUR assigned slides (use it verbatim where written; light editing for fit is OK, never invent facts)
2. `/Users/michaelfive/Code/mystuff/ai-workshop-nyu/slides/shared/taf.css` — shared tokens/components; LINK it: `<link rel="stylesheet" href="shared/taf.css">`
3. Approved showcase slides (the visual grammar — match them):
   - `/Users/michaelfive/Code/mystuff/ai-workshop-nyu/design-demos/taf/01-cover.html` (dark navy hero grammar)
   - `/Users/michaelfive/Code/mystuff/ai-workshop-nyu/design-demos/taf/02-tools.html` (light grid grammar)
   - `/Users/michaelfive/Code/mystuff/ai-workshop-nyu/design-demos/taf/03-activity.html` (steps + debrief grammar)

## File format
- One standalone HTML per slide at `/Users/michaelfive/Code/mystuff/ai-workshop-nyu/slides/NN-name.html`
- Montserrat via the same Google Fonts `<link>` as the showcase files
- `<link rel="stylesheet" href="shared/taf.css">` THEN a `<style>` block for slide-specific styles (unique class names, no generic collisions)
- Canvas locked 1920×1080 by taf.css body rule; px only; nothing may overflow
- NO page numbers/progress chrome; NO italics; NO emoji; NO gradients; NO purple; no icon-per-bullet

## Slide archetypes (pick per the [type] tag in slide-content.md)
- **[hero]/[divider]**: `<body class="dark">` navy-deep full bleed. Dividers: `.wordmark` row optional, gold "PART N" eyebrow (use `.eyebrow` with color var(--gold)), assertion sentence 88-110px Montserrat 800 white with ONE gold accent phrase, generous bottom space. Look at 01-cover.html.
- **[explainer]/[orientation]/[framework]**: light slide; eyebrow + h1 with one gold accent word; content as ONE clear arrangement: 2-3 columns, a horizontal flow, or a single annotated visual built from pure CSS (bordered boxes, arrows via CSS triangles/SVG). Keep data-ink high; whitespace is fine.
- **[timeline]**: horizontal line with 5 nodes (gold dots, navy labels, muted sublabels). Pure CSS.
- **[warning]/[privacy]/[equity]**: light slide + one navy-deep panel containing the key quote/rule with gold accent phrase (like the caveat strip in 03-activity.html).
- **[tool grid]/[tool spotlight]**: follow 02-tools.html card grammar exactly (logo chip 92px navy-deep, name 38px navy 700, desc 27px). Logos to inline from `/Users/michaelfive/Code/mystuff/ai-workshop-nyu/assets/logos/`: copy the inline SVG markup from 02-tools.html for claude/openai/googlegemini/microsoftcopilot; for notebooklm.svg read the file and inline (strip prolog, fill white). Codex = openai glyph.
- **[activity]**: follow 03-activity.html: left column numbered steps (gold 900 numerals, hairline dividers), right column debrief card (white, gold left border) + navy caveat strip where the copy has one. Activity slides get a gold "ACTIVITY N · XX MIN" eyebrow (color var(--gold-warm), same size).
- **[discussion]/[structure]/[decision]/[synthesis]/[closing]**: light slides; compose from the same vocabulary (cards, gold numerals, navy panels, footnote bar). For 2-column compares use two cards with navy headers. Closing slide may be dark like the cover.

## Typography bounds
- h1 56-64px on light content slides (longer titles → 56px); divider assertions up to 110px; body text 25-30px; never below 22px.
- Gold = 1-2 accent words per headline + numerals + marks ONLY. Never gold body text. Never navy panel adjacent to gold panel.

## Self-verification (required, per slide)
Screenshot each slide you wrote:
`npx playwright screenshot --viewport-size=1920,1080 --wait-for-timeout=3000 "file:///Users/michaelfive/Code/mystuff/ai-workshop-nyu/slides/NN-name.html" "/tmp/deckcheck/NN.png"`
Read the png. Check: no overflow/clipping, title fits, contrast OK, logos render, copy matches slide-content.md. Fix and re-shoot until clean.
