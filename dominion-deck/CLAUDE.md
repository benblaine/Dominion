# Dominion Deck

Single-purpose project: generate a 12-slide PPTX presentation summarizing Chapter 1 of Tom Holland's *Dominion*.

## Tech Stack

- Node.js + `pptxgenjs` for PPTX generation
- `sharp` for image processing (resize/crop artwork images)
- No frameworks, no frontend, no server — just a build script

## Commands

- `npm install` — install dependencies
- `node build.js` — generate the deck to `output/dominion_ch1.pptx`

## Project Structure

```
CLAUDE.md          ← you are here
SPEC.md            ← full spec: slide content, artwork assignments, design system
package.json       ← dependencies
build.js           ← main build script (GENERATE THIS)
images/            ← artwork images (DOWNLOAD THESE FIRST)
output/            ← generated PPTX goes here
docs/
  design-system.md ← colour palette, typography, layout rules
  slides.md        ← all 12 slides: titles, body text, artwork notes
  artworks.md      ← artwork list with search queries and source URLs
```

## Workflow

1. Read `SPEC.md` first — it has everything
2. Download artwork images into `images/` (see `docs/artworks.md` for URLs/queries)
3. Write `build.js` using pptxgenjs (see `docs/design-system.md` for exact specs)
4. Run `node build.js` and verify output
5. Convert to PDF and visually inspect each slide

## Key Rules

- NEVER use `#` prefix in hex colours (pptxgenjs corrupts the file)
- NEVER reuse option objects across addShape/addImage calls (pptxgenjs mutates them)
- Use `sizing: { type: 'cover' }` for artwork images to fill their panel
- Images must be local files in `images/` — no remote URLs (they fail silently)
- No bullet points anywhere. All body text is prose paragraphs.
- Georgia for headings, Calibri for body. No Arial, no defaults.
