# Dominion Deck

A 12-slide presentation summarising Chapter 1 of Tom Holland's *Dominion: How the Christian Revolution Remade the World*. Each slide pairs a key argument with a real-world artwork — from the Dying Gaul to the Winged Victory of Samothrace.

## Quick Start

```bash
npm install
node build.js
# → output/dominion_ch1.pptx
```

## For Claude Code

```bash
# Point Claude Code at this repo and say:
# "Read SPEC.md, then build the project step by step."
```

The repo uses progressive disclosure: `CLAUDE.md` gives the overview, `SPEC.md` gives the full brief, and `docs/` contains the detailed specs Claude reads as needed.

## Design

Antiquity museum catalogue aesthetic. Warm obsidian and parchment backgrounds. Georgia headings. No bullet points. Each slide shows the artwork reference alongside the takeaway text.

## Artwork

All 12 artworks are real, human-made objects spanning 1750 BC to 1653 AD. See `docs/artworks.md` for the full list with download instructions.
