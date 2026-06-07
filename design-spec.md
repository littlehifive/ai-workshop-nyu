# Design Spec — NYU Workshop Deck Showcase (3 directions)

## What this is
A ~28-slide workshop deck: "AI & Knowledge Management for Researchers." Presenter: Zezhen (Michael) Wu of The Agency Fund, presenting to a small group of researchers at NYU, June 2026. Right now we are producing a 3-SLIDE SHOWCASE per design direction so the user can pick a direction before the full build.

## Audience & tone
Non-technical academic researchers; some are skeptical of AI hype. The deck must feel CREDIBLE, CALM, and ANTI-HYPE — like a good seminar, not a startup pitch. Information-forward, never salesy. The presenter's goal is to build trust: "here is what this technology actually is, here is where it fails, here is how to verify it."

## Hard format requirements (every direction, no exceptions)
- Each slide = ONE standalone HTML file, fixed canvas `body { width:1920px; height:1080px; margin:0; overflow:hidden; }`
- px units only — NO vw/vh/%, no responsive logic
- NO page numbers, progress bars, or slide counters inside slides (deck shell handles those)
- Google Fonts via `<link>` allowed; choose per direction's rules
- All text must fit — no overflow, no clipping at 1920×1080
- Anti-slop: NO purple gradients, NO emoji-as-icons, NO invented statistics, NO decorative icon-per-bullet, NO SVG-drawn people

## Logo assets (REQUIRED on Slide B)
Monochrome SVG glyphs at `/Users/michaelfive/Code/mystuff/ai-workshop-nyu/assets/logos/`:
- `claude.svg` (Claude/Anthropic), `openai.svg` (ChatGPT), `googlegemini.svg` (Gemini), `microsoftcopilot.svg` (Microsoft Copilot)
- They are single-color. INLINE the SVG markup into the HTML and set `fill` to a color that fits your direction (the deck's ink color, or each brand's primary: Claude #D97757, OpenAI #10A37F or black, Gemini #4285F4, Copilot #0078D4). Do not hotlink; do not leave them default-black on a dark background.
- microsoftcopilot.svg comes from Wikimedia (Inkscape-generated): strip its XML prolog when inlining; ensure its fill is overridden (it may use explicit fill attributes — replace them).

## The 3 showcase slides — EXACT shared copy (all directions use this same content)

### Slide A — Cover (file: 01-cover.html)
- Eyebrow/kicker: "A HANDS-ON WORKSHOP · NYU"
- Title: "AI & Knowledge Management for Researchers"
- Subtitle: "What generative AI actually is, which tools matter, and how to make them answer faithfully from your documents"
- Presenter line: "Zezhen (Michael) Wu — The Agency Fund"
- Footer line: "agenticworkflowsclub.org/ai-101 · June 2026"

### Slide B — Tool landscape (file: 02-tools.html)
- Section label: "PART 2 · THE TOOL LANDSCAPE"
- Title (assertion sentence): "Every major assistant has an Ask mode: you converse, it answers"
- Four tools, each with its logo + name + one line:
  - Claude — "Strong with long documents and careful reasoning"
  - ChatGPT — "The most widely used; broadest feature set"
  - Gemini — "Lives inside Google Workspace; reads very long context"
  - Microsoft Copilot — "Built into Word, Excel, Outlook, and Teams"
- Footnote: "Same underlying idea — a chat window over a large language model. Your choice usually follows where your documents already live."

### Slide C — Activity (file: 03-activity.html)
- Kicker: "ACTIVITY 3 · 15 MIN"
- Title: "Hallucination hunt"
- Goal line: "Feel the difference grounding makes."
- Steps (numbered):
  1. "Pick a question you already know the answer to, from your own documents"
  2. "Ask a bare chatbot — no files attached"
  3. "Ask the same question in your notebook with documents loaded"
  4. "Fact-check both answers against the source"
- Debrief question: "Which answer sounded more confident — and which one was right?"
- Caveat strip: "Grounded ≠ guaranteed. Citations are leads to verify, not proof."

## Deliverables per direction
Write 3 HTML files into your assigned folder under `design-demos/`, then screenshot each at 1920×1080 with:
`npx playwright screenshot --viewport-size=1920,1080 file:///<abs-path>.html <abs-path>.png`
Verify screenshots yourself (no overflow, logos visible, fonts loaded) before finishing. If a font fails to load in screenshot, wait/retry with `--wait-for-timeout=3000`.
