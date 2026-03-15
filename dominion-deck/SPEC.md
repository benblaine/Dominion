# SPEC: Dominion Chapter 1 Slide Deck

## Overview

A 12-slide 16:9 PPTX presentation summarising Chapter 1 ("Athens, 479 BC") of Tom Holland's *Dominion: How the Christian Revolution Remade the World*. Each slide pairs a key takeaway from the chapter with a specific real-world artwork — sculpture, relief, painting, or mosaic — that thematically matches the point.

The aesthetic is "antiquity museum catalogue" — warm, restrained, dignified. Not gaudy, not corporate. Think Phaidon art book or British Museum exhibition design.

## Implementation Steps

1. `npm install` to get dependencies
2. Download all 12 artwork images into `images/` (see `docs/artworks.md`)
3. Create `build.js` that generates the PPTX (see `docs/design-system.md` for layout)
4. Each slide uses a two-column layout: text left (60%), artwork + caption right (40%)
5. Run `node build.js` → outputs to `output/dominion_ch1.pptx`
6. Visually verify: convert to PDF, then to JPGs, inspect each slide

## File References

- **Design system** (palette, fonts, layout, spacing): `docs/design-system.md`
- **Slide content** (all 12 slides with full text): `docs/slides.md`
- **Artwork list** (image filenames, search queries, museums): `docs/artworks.md`

## Acceptance Criteria

- [ ] All 12 slides present with correct content
- [ ] Each slide has its artwork image embedded and filling the right panel
- [ ] Dark/light backgrounds alternate correctly per the schedule
- [ ] No text overflow, no overlapping elements
- [ ] Footer present on every slide
- [ ] File opens cleanly in PowerPoint/Keynote/Google Slides
