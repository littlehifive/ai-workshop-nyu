# AI & Knowledge Management for Researchers

A hands-on workshop deck by Zezhen (Michael) Wu (The Agency Fund), for researchers at NYU.

**Live deck:** https://littlehifive.github.io/ai-workshop-nyu/

## Presenting

Open the live URL (or `index.html` locally). You land on an overview wall; click any
slide to present full-screen.

- **Arrow keys** / Space / PageUp / PageDown — move between slides
- **Home / End** — first / last slide
- **1–9** — jump to a slide
- **Esc** — back to the overview wall
- **P** — print (the browser print dialog also produces a PDF)
- Edge zones and the on-screen arrows navigate by mouse.

A pre-rendered `workshop-deck.pdf` is also generated for sharing.

## Hosting on GitHub Pages (one-time setup)

Deployment is automated by `.github/workflows/deploy-pages.yml`: every push to
`main` rebuilds the site. To turn it on the first time:

1. Push this repo to GitHub (`git push`).
2. On GitHub, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.

That's it. The next push (or a manual run from the **Actions** tab → *Deploy slides
to GitHub Pages* → *Run workflow*) publishes the deck to the URL above. The first
deploy takes a minute or two.

## Structure

- `index.html` — the deck shell (overview wall, keyboard navigation, transitions)
- `slides/` — one standalone HTML file per slide
- `slides/shared/` — shared styles (`taf.css`), animation framework (`anim.css`,
  `anim.js`), self-hosted Montserrat, and the build notes
- `assets/logos/` — tool logos used on the landscape slides
- `*.md` — working notes (content, brand spec, verified facts); not part of the site

The deck is fully self-contained: fonts and logos are local, with no external
dependencies, so it works offline and on any static host.
