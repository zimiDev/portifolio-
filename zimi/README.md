# zimiDEV — Collage-Art Portfolio

A personal portfolio for Azimjon “Zimi”, designed as a digital engineering scrapbook. The visual language combines torn paper, masking tape, pinned notes, terminal fragments, stickers, and subtle motion to document an evolving path through software engineering, systems, algorithms, and artificial intelligence.

## Highlights

- Editorial collage-art interface with a dark engineering-notebook aesthetic
- Responsive layout for desktop and mobile devices
- Repeating hero sequence: `AZIMJON → ZIMI`
- Scroll-reveal, hover, sticker, and graffiti animations
- Original PDP University logo and technology stickers
- Dedicated sections for profile, current focus, technical stack, fields of study, projects, and contact links
- Project placeholders designed to grow with the portfolio

## Run Locally

This is a static website with no build step required. Open `index.html` directly in a browser, or serve the directory locally:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## Project Structure

```text
index.html                 Page structure and primary content
styles.css                 Base layout and collage styling
motion.css                 Scroll-reveal and hover interactions
looping.css                Repeating hero-name and graffiti animations
design.css                 Paper, tape, and decorative details
hero-stickers.css          Hero technology-sticker placement
about.css                  Editorial About Me paper
refinement.css             Contact, fact-scrap, and logo refinements
role.css                   Primary Software Engineer role treatment
script.js                  Lightweight DOM enhancements and interactions
assets/
  pdp-university.png       Original PDP University logo
```

## Hero Narrative

The hero animation reflects the identity behind the portfolio:

```text
AZIMJON → A and JON are crossed out → J becomes I → ZIMI
```

The sequence repeats every six seconds alongside the animated `zimiDEV` graffiti signature.

## Adding a Project

Locate the `PROJECTS START` comment in `index.html`. Duplicate a `.project-paper` element and update its number, title, description, tags, and destination link.

```html
<article class="project-paper building">
  <span class="project-no">PROJECT 003</span>
  <div class="tape"></div>
  <h3>PROJECT NAME</h3>
  <p>A concise description of what the project does.</p>
  <div class="tags"><b>PYTHON</b><b>FASTAPI</b></div>
  <a href="https://github.com/username/project">view source ↗</a>
</article>
```

## Updating Content

- Hero, sections, project cards, and contact links: `index.html`
- About Me narrative and AI field copy: `script.js`
- PDP University logo: `assets/pdp-university.png`
- Visual customisation: the relevant CSS file listed above

## Notes

Technology and social-media icons are loaded from public CDNs. An internet connection is required for those external assets to render.

---

Built as an honest record of continuous learning: scraps of knowledge, connected into systems.
