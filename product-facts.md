# Product Facts — verified 2026-06-07

All claims below verified via WebSearch on 2026-06-07. Slide copy must not exceed these claims.

## NotebookLM (Google)
- Closed-RAG system: every answer cites specific passages from uploaded sources; designed to reduce hallucination by answering only from sources
- Free tier: 50 sources per notebook, 50 daily chats, 3 Audio Overviews/day; paid tiers raise limits (Plus: 100 sources)
- Each source up to 500,000 words; supports PDF, Google Docs/Slides, URLs, plain text, YouTube, audio, EPUB
- Studio panel (2026): Audio Overviews (Deep Dive / Brief / Critique / Debate formats), Video Overviews, Mind Maps, Slide Decks, Infographics, Data Tables, Quizzes, Flashcards
- Sources: support.google.com/notebooklm, blog.google, digitalocean.com/resources/articles/what-is-notebooklm

## Claude Cowork (Anthropic)
- Shipped product (launched Jan 2026, major update Feb 2026): desktop agentic tool — "Claude Code power for knowledge work"
- Give it a goal; it works across local files, folders, and applications to return a finished deliverable
- Permissioned: reads/edits/creates files only in folders you specify
- Target users explicitly include researchers and analysts
- Enterprise connectors: Google Drive, Gmail, DocuSign, FactSet
- Sources: anthropic.com/product/claude-cowork, claude.com/product/cowork, cnbc.com (2026-02-24)

## OpenAI Codex
- Unified agent system (2026), powered by GPT-5.5; surfaces: terminal CLI, IDE, web, screen-reading
- 4M+ weekly users; can run hundreds of sequential tool calls end-to-end
- Sources: openai.com/codex, developers.openai.com/codex/changelog

## Project features ("persistent context") in major tools
- **Claude Projects**: explicit, document-shaped — upload files + custom instructions, read in every chat in the project; Team-plan sharing, no public marketplace
- **ChatGPT Projects / Custom GPTs**: projects group chats + files; Custom GPTs are shareable assistants w/ instructions, knowledge files, actions, GPT Store; ChatGPT memory is automatic but opaque
- **Gemini Gems**: persona-shaped custom assistants with persistent instructions; live Google Drive file syncing (files stay current); ~1M token context; no document-memory "project" equivalent
- **Microsoft Copilot**: notebooks/agents inside M365; strength = lives inside Word/Excel/Outlook/Teams with org permissions
- Sources: stackviv.ai, mindlock.io, intuitionlabs.ai enterprise comparison (2026)

## AI 101 page (agenticworkflowsclub.org/ai-101) — content anchor for Part 1
Structure: arc of human tools → how it works (tokens, next-token prediction) → language inequality → from autocomplete to assistant (instruction tuning, RLHF) → 4-level evaluation framework → data governance → prompting → agents/agentic workflows → practice checklist.
Key line: "The risk is not that AI hallucinates. It is that AI gets deployed without grounding."
Case studies: health screening in rural Kenya; grant proposal analysis; SMS triage for maternal health.
Companion: 4-level eval framework (also surfaced in MCP tools as "4-level eval framework").

## Logo assets (assets/logos/)
- claude.svg, openai.svg, googlegemini.svg, notebooklm.svg, githubcopilot.svg — simple-icons via jsdelivr (monochrome glyphs; recolor via CSS fill)
- microsoftcopilot.svg — Wikimedia Commons "Microsoft 365 Copilot Icon one-color.svg" (monochrome)
- Codex has no separate mark — use openai.svg
- NOTE: all glyphs are one-color; in slides, render them in the deck's ink color or each brand's primary color (Claude #D97757, OpenAI #000/#10A37F, Gemini blue gradient → use #4285F4 flat, Copilot #0078D4 flat)

## System 3 / cognitive surrender (slide 28) — verified 2026-06-07
- Source: "Thinking, Fast, Slow — and Artificially", Wharton Executive Education, Wharton at Work, May 2026
- Researchers: Steven Shaw (Wharton postdoc) & Gideon Nave (Wharton professor)
- System 3 = AI-mediated thinking, a third system alongside Kahneman's System 1/2
- Cognitive offloading = outsourcing a task while reasoning stays in your control (calculator)
- Cognitive surrender = AI makes the decision and the person adopts it as their own without recognizing the transfer
- Experiments (1,300+ participants): AI correct → accuracy +25pp; AI wrong → accuracy −15pp below baseline; confidence rose regardless of AI accuracy

## Tool-choice recommendations (slide 19) — synthesized from 2026 comparisons
- Claude: research/depth/precision, long-document analysis, strong reasoning (intuitionlabs.ai, fieldguidetoai.com, findskill.ai)
- NotebookLM: closed RAG, citation-first answering over fixed sources
- Gemini: Workspace integration, Gems live Drive sync, ~1M token context
- Copilot: embedded in M365 apps under org permissions
- ChatGPT: most widely used, broadest ecosystem of tutorials/custom GPTs
