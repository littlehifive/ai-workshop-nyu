# Visual Upgrade Guide — round 3 (animation + interactivity + visual depth)

Read this fully before touching any slide. The goal: every slide gets deliberate
entrance animation and stronger visual design; tool slides become interactive
demos. Copy stays as-is unless a note says otherwise (captions for new visuals
are allowed; keep the serious, complete-sentence register; NO em dashes).

## The animation framework (already wired into every slide)

Every slide already links `shared/anim.css` and `shared/anim.js` (do not re-add).

- `data-reveal` on any element → fades/rises in, staggered automatically in DOM order.
  Variants: `data-reveal="left" | "right" | "scale"`.
- Bars/lines that should grow: give the element its final size as an inline style
  (`style="width:62%"`) plus `data-grow-w` (or `data-grow-h` for vertical). The
  framework animates from 0 to the inline value and handles PDF/static rendering.
- Custom stagger: set `style="--reveal-delay:.8s"` to override the automatic delay.
- `.hoverable` class on cards → gentle lift on hover.
- `?static=1` renders everything at final state instantly (used by PDF export).
  Your interactive elements must look complete in their DEFAULT state, because
  that is what the PDF shows.

Apply `data-reveal` deliberately: eyebrow + title first, then content blocks,
then footnote. 4-10 reveal elements per slide. Do not animate every paragraph
separately; group into meaningful blocks. Dividers (dark slides): wordmark, then
the assertion (use "scale" or default), then any sub-row.

## Interactivity rules (tool/activity slides)

- CLICK ONLY. Arrow keys, Space, digits, Escape, P are reserved by the deck shell
  (the postMessage snippet at the bottom of each slide forwards them; never remove
  or modify that script, and do not preventDefault clicks).
- Self-contained vanilla JS inside the slide file. Unique function/class names.
- Interactions must be obvious: cursor pointer, a small uppercase hint label like
  "CLICK A QUESTION", hover feedback.
- Default state must be meaningful: pre-select the first option so the slide reads
  complete without any clicks (this is also the PDF state).
- Animate state changes with CSS transitions (0.2-0.4s), no jarring jumps.

## Visual-depth rules

- Stay inside the TAF system: Montserrat, navy #003366/#0B2341, gold #F1B505,
  surfaces #FFFFFF/#F8F9FA, border #DEE2E6, shadows hsl(210 50% 20% / 0.08-0.14).
- Semantic chart colors (use consistently when a visual encodes meaning):
  - gold #F1B505 = the human / baseline / action
  - navy #003366 = AI-assisted when correct / primary data
  - brick #B3361F = faulty AI / risk / failure (charts and warnings ONLY, never decoration)
  - muted #ADB5BD = context/grey-out
- NO stock photos, NO AI-generated imagery, NO SVG-drawn people, NO emoji,
  NO purple, NO gradients (a very subtle navy radial on dark dividers is allowed:
  radial-gradient from #0B2341 to #061A2E).
- Depth comes from: layered cards, hairline structure, big tabular numerals,
  schematic UI mocks, diagrams with real geometry, and motion. Not from icons
  scattered next to bullets.
- Anything illustrative must be labeled (small uppercase muted caption:
  "ILLUSTRATIVE" or "SCHEMATIC DEMO").

## Verification (every slide you touch)

1. Animated pass: screenshot with NO query param and --wait-for-timeout=2600 →
   confirm final layout is settled and complete.
2. Static pass: screenshot with `?static=1` and --wait-for-timeout=1200 →
   confirm identical final state (this is the PDF).
3. For interactive slides: use Playwright to click each control and screenshot the
   changed state; confirm no console errors.
   npx playwright screenshot --viewport-size=1920,1080 --wait-for-timeout=2600 "file:///<abs>.html" out.png
4. Nothing may overflow 1920×1080 at any state.

## File hygiene

- Keep the two scripts at the bottom of each file (anim.js include + deck-shell
  integration snippet) exactly as they are, always immediately before </body>.
- Keep `<link rel="stylesheet" href="shared/fonts.css">`, `shared/anim.css`, and
  (where present) `shared/taf.css` links.
