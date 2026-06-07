# Full Slide Copy — AI & Knowledge Management for Researchers
~2-hour workshop · Zezhen (Michael) Wu · The Agency Fund · NYU · June 2026
All factual claims constrained by product-facts.md. Slide types noted for layout variety.

---

## OPENING

### 01 · Cover [hero]
- Eyebrow: A HANDS-ON WORKSHOP · NYU
- Title: AI & Knowledge Management for Researchers
- Subtitle: What generative AI actually is, which tools matter, and how to make them answer faithfully from your documents
- Presenter: Zezhen (Michael) Wu — The Agency Fund
- Footer: agenticworkflowsclub.org/ai-101 · June 2026

### 02 · Warm-up [discussion]
- Eyebrow: BEFORE WE START
- Title: Three questions for the room
- Q1: Did you use an AI tool this week? For what?
- Q2: What is one thing you don't trust about AI?
- Q3: What's one task in your research you wish someone else would just do?
- Presenter note: collect answers on a whiteboard; revisit at the end.

### 03 · Agenda [structure]
- Eyebrow: TODAY · 2 HOURS
- Title: Where we're going
- Part 1 — AI 101: what this technology actually is (~30 min)
- Part 2 — The tool landscape: ask, do, and remember (~25 min)
- Part 3 — Hands-on: make AI answer from YOUR documents (~50 min)
- Part 4 — Caveats and takeaways (~15 min)
- Promise line: "You'll leave with one working, document-grounded AI notebook — built by you, checked by you."

---

## PART 1 · AI 101 (~30 min)

### 04 · Section divider [divider]
- PART 1 · AI 101
- Assertion: "Generative AI is a new kind of tool — and like every tool, it has a shape."

### 05 · The arc of tools [timeline]
- Title: We have always built tools that extend us
- Timeline: Hand axe (1.7M yrs ago — extend the hand) → Writing (~5,000 yrs — extend memory) → Printing press (1450s — extend reach) → Computer (1940s — extend calculation) → Generative AI (now — extends language itself)
- Point: AI is on a long continuum; the new part is that it works in natural language — your medium as a researcher.

### 06 · How it works [explainer]
- Title: Under the hood, it predicts the next word — astonishingly well
- Visual: "The capital of France is ___" → token probabilities (Paris 97%, Lyon 1%, ...)
- Key terms: token (the unit of text AI reads/writes), model (the trained pattern-machine), context window (how much it can "see" at once)
- Point: No database lookup. No understanding guarantee. A very good guess from patterns in training data.

### 07 · Hallucination [warning]
- Title: When patterns are thin, it guesses — confidently
- Example shape: ask for a citation that doesn't exist → it invents a plausible one (authors, year, journal — all fluent, all fake)
- Quote (AI 101): "The risk is not that AI hallucinates. It is that AI gets deployed without grounding."
- Definition: grounding = forcing the model to answer from sources you supply, with citations you can check.

### 08 · From autocomplete to assistant [explainer]
- Title: Raw prediction was tamed into an assistant — by people
- Three stages: pretraining (read most of the internet) → instruction tuning (learn to follow requests) → human feedback (learn what people prefer)
- Point: helpfulness and tone are TRAINED, not intrinsic. The assistant is a designed artifact, with designers' choices baked in.

### 09 · Not all contexts are equal [equity]
- Title: It works best where the data was thickest
- Facts: performance varies sharply by language and domain; benchmark ("demo") accuracy ≠ field accuracy; underrepresented languages/communities see weaker, less safe behavior
- Researcher angle: your niche subfield is a "low-resource language" too — verify harder there.

### 10 · How do you know it works? [framework]
- Title: "Seems fine" is not an evaluation
- 4-level framework (from AI 101): L1 vibe check (try it) → L2 spot check (compare to known answers) → L3 systematic test (question set + scoring) → L4 field test (does it help real users in the real workflow?)
- Point: today's activities live at L2; you'll build a tiny L3.

### 11 · What happens to your data? [privacy]
- Title: Read the data terms before you upload anything sensitive
- Rules of thumb: consumer free tiers may use chats for training (check settings/opt-out); enterprise/workspace tiers generally don't train on your data; IRB-covered, identifiable, or unpublished sensitive data needs institutional approval first
- Today: bring only documents you'd be comfortable emailing to a colleague.

---

## PART 2 · TOOL LANDSCAPE (~25 min)

### 12 · Section divider [divider]
- PART 2 · THE TOOL LANDSCAPE
- Assertion: "The tools are converging on three capabilities: ask, do, and remember."

### 13 · The confusing map [orientation]
- Title: The confusion is real — and it has a structure
- Three layers: models (Claude, GPT, Gemini — the engines) / apps (chat interfaces wrapped around engines) / modes (ask vs. do vs. remember)
- Point: stop tracking products; track the three capabilities. Products churn monthly; capabilities are stable.

### 14 · NotebookLM [tool spotlight]
- Title: NotebookLM: a librarian that only cites your shelf
- What: upload up to 50 sources (free tier) — PDFs, Docs, links, audio; ask questions; every answer cites passages you can click and verify
- Studio extras: Audio Overviews (podcast-style discussion of your sources), mind maps, flashcards
- Why researchers care: closed system — it answers from your documents, not the open internet. This is grounding, productized.

### 15 · Ask modes [tool grid]
- Title: Every major assistant has an Ask mode: you converse, it answers
- Claude — strong with long documents and careful reasoning
- ChatGPT — most widely used; broadest feature set
- Gemini — lives inside Google Workspace; reads very long context
- Microsoft Copilot — built into Word, Excel, Outlook, Teams
- Footnote: same underlying idea — a chat window over a language model. Your choice usually follows where your documents already live.

### 16 · Do modes [tool grid]
- Title: Do modes don't answer about the work — they do the work
- Claude Cowork — point it at a folder; it reads, organizes, drafts, returns a deliverable (built for non-programmers)
- Claude Code / Codex — terminal agents; run multi-step tasks end-to-end (built for technical workflows, increasingly used beyond code)
- The shift: from "what should I write?" to "draft it, I'll review."
- Caveat inline: more autonomy = more verification burden. You review the output, every time.

### 17 · Ask vs Do [decision]
- Title: Ask when you're thinking; Do when you're producing
- Two columns: ASK — exploring a topic, checking understanding, low stakes per answer / DO — repetitive multi-file work, defined deliverable, you can verify the result
- Bottom line: if you can't verify it, don't delegate it.

### 18 · Projects / memory [tool grid]
- Title: "Remember" modes keep your context so you stop re-explaining
- Claude Projects — upload files + instructions once; every chat in the project knows them
- ChatGPT Projects & Custom GPTs — grouped chats with files; shareable custom assistants
- Gemini Gems — custom assistants with live Google Drive sync (files stay current)
- Copilot — works inside your existing M365 permissions
- Point: this is where "AI tool" becomes "knowledge management."

### 19 · Choosing [decision tree]
- Title: Pick one tool and learn it deeply — switching costs more than it returns
- Decision shortcuts: docs in Google Drive → NotebookLM + Gemini; org runs on M365 → Copilot; long documents & careful writing → Claude; want the most tutorials/plugins → ChatGPT
- Anti-churn rule: re-evaluate quarterly at most. Ignore launch-day hype.

---

## PART 3 · HANDS-ON (~50 min)

### 20 · Section divider [divider]
- PART 3 · HANDS-ON
- Assertion: "You believe what you verify — so let's verify."
- Ground rules: non-sensitive documents only · work in pairs · write down every failure (failures are data)

### 21 · Activity 1: Prompt makeover [activity · 10 min]
- Goal: see how much of "AI quality" is actually request quality.
- Steps: 1. Write the laziest version of a real request from your work. 2. Run it. 3. Rewrite with: who you are, what context matters, what format you want, one example. 4. Run again; compare.
- Debrief: what changed most — accuracy, tone, or usefulness?

### 22 · Activity 2: Build your grounded Q&A [activity · 20 min · MAIN]
- Goal: a working AI interface that answers only from your documents.
- Steps: 1. Gather 3–5 documents you know well (papers, notes, reports). 2. Create a NotebookLM notebook (or a Project in your familiar tool) and upload. 3. Ask five real questions you'd ask a colleague who had read them. 4. Click every citation; check the quoted passage actually supports the answer.
- Validation checklist: Is the citation real? Does the passage say what the answer claims? What did it miss?

### 23 · Activity 2 continued: Validate [activity]
- Title: The answer is a draft; the citation is a lead
- Score each of your 5 answers: ✓ supported / ~ partially supported / ✗ unsupported
- Write down: 1 answer that impressed you, 1 that failed, 1 question you couldn't resolve → bring all three to share-out (and questions for Zezhen)

### 24 · Activity 3: Hallucination hunt [activity · 15 min]
- Goal: feel the difference grounding makes.
- Steps: 1. Pick a question you already know the answer to from your documents. 2. Ask a bare chatbot — no files. 3. Ask your loaded notebook. 4. Fact-check both against the source.
- Debrief: which answer sounded more confident — and which one was right?
- Caveat: grounded ≠ guaranteed. Citations are leads to verify, not proof.

### 25 · Optional extensions [activity menu]
- Ask vs Do race — same task (3 PDFs → one comparison table) in a chat tool vs. an agentic tool; compare effort, quality, and failure modes
- Build-your-own evaluator — write 5 questions with known answers; score any AI tool against them (your personal L3 test from slide 10)
- For after today: rerun your evaluator whenever a tool ships a "smarter" model — measure, don't believe.

### 26 · Share-out [discussion]
- Title: What surprised you?
- Prompts: one thing that worked better than expected · one thing that broke · one question for the parking lot
- Revisit the whiteboard from slide 2: did anyone's distrust shift — in either direction?

---

## PART 4 · TAKEAWAYS (~15 min)

### 27 · Caveats [synthesis]
- Title: Three caveats to carry out of this room
- 1. Tooling: products churn; capabilities (ask/do/remember) are stable. Choose by where your documents live, re-evaluate quarterly.
- 2. Quality: "seems fine" isn't evidence. Keep your 5-question evaluator; rerun it on every new model.
- 3. Agency: AI drafts, you decide. The moment you stop verifying is the moment it stops being research.

### 28 · Closing + resources [closing]
- Title: Keep the notebook. Keep the skepticism.
- Resources: agenticworkflowsclub.org/ai-101 (today's Part 1, in full) · your own grounded notebook (keep adding sources) · contact: Zezhen (Michael) Wu — The Agency Fund
- Last line: "The goal was never to trust AI. It was to know exactly how far to trust it."

---

# REVISION LOG — 2026-06-07 (round 2, after user review)

The HTML slides are now the canonical copy. Changes relative to the outline above:
- 06: Paris bar rendering fixed (display:block); title and terms reworded, footnote elaborated
- 10: replaced with the exact 4-level framework — L1 Models Evaluation (does the AI system perform as intended?), L2 Product Evaluation (engage and retain users?), L3 User Evaluation (change thoughts/feelings/knowledge/behaviour toward the development outcome?), L4 Impact Evaluation (improve development outcomes?). Today's activities = Level 1.
- 12/13: capabilities are now FOUR — ask, do, remember, automate
- 18b (NEW): "Automate" capability slide — recurring tasks under user-defined supervision; flagged as outside today's scope
- 19: rewritten with researched recommendations (Claude: long documents/careful writing; NotebookLM: grounded Q&A; Gemini: Workspace; Copilot: M365; ChatGPT: ecosystem) + anchor-on-one-tool guidance
- 21: step 1 is now "open an AI tool you already know"
- 22: "gather as many documents as are useful" (was 3-5)
- 23 REMOVED (validate slide; checklist lives on 22)
- 24: renamed Red-teaming (file 24-red-teaming.html); activity = adversarially probe the grounded bot built in Activity 2 (unanswerable questions, false premises, overstatement requests, citation checks)
- 25 REMOVED (extensions)
- 26: prompts now: went better than expected / not exactly satisfactory / describe your ideal AI tool for your work
- 27: caveat 2 now references the red-team question set
- 28: closing on System 3 (Shaw & Nave, Wharton) — cognitive offloading vs cognitive surrender; hero line "Offload the work whenever it helps. Never surrender the judgment."
- Whole deck: humanizer + tone pass (no em dashes, no negative parallelisms, fuller sentences, serious register)
- Deck shell: English UI, hover-visible nav arrows
