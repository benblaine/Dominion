# Design System

## Colour Palette

| Name       | Hex      | Usage                              |
|------------|----------|------------------------------------|
| obsidian   | `1A1714` | Dark slide backgrounds             |
| umber      | `3D2B1F` | Dark accents, divider on dark      |
| terracotta | `8B4513` | Accent colour on light slides      |
| gold       | `C9A96E` | Accent colour on dark slides       |
| parchment  | `F0E6D3` | Primary text on dark backgrounds   |
| stone      | `D4C5A9` | Body text on dark, sandstone tone  |
| cream      | `FAF5EB` | Light slide backgrounds            |
| slate      | `5C5347` | Body text on light slides          |
| muted      | `8A7E6B` | Captions, footers, secondary text  |

## Typography

| Element        | Font    | Size  | Style       |
|----------------|---------|-------|-------------|
| Slide number   | Georgia | 11pt  | Italic      |
| Title          | Georgia | 32pt  | Bold        |
| Subtitle       | Calibri | 13pt  | Italic      |
| Body text      | Calibri | 11.5pt| Regular     |
| Artwork title  | Georgia | 13pt  | Bold, charSpacing: 3 |
| Artwork detail | Calibri | 9pt   | Italic      |
| Curator note   | Calibri | 10.5pt| Italic      |
| Footer         | Calibri | 7.5pt | Regular, charSpacing: 2 |

## Layout (16:9 = 10" × 5.625")

### Two-column structure

**Left column (60% — content):**
- x: 0.6", width: 5.0"
- Slide number: y 0.4"
- Title: y 0.85", height 1.6", lineSpacingMultiple 0.9
- Subtitle: y 2.55", height 0.7", lineSpacingMultiple 1.2
- Body: y 3.4", height 1.7", lineSpacingMultiple 1.35, valign top

**Vertical divider:**
- x: 6.0", y: 0.6", height: 4.4", width: 0.5pt line

**Right column (40% — artwork):**
- Panel starts at x: 6.2", width: 3.4"
- Artwork image: x 6.2", y 0.5", w 3.4", h 2.4" — use `sizing: { type: 'cover', w: 3.4, h: 2.4 }`
- Artwork title: y 3.05"
- Artwork detail: y 3.55"
- Horizontal rule: y 4.0", width 1.2"
- Curator note: y 4.2", height 1.0"

**Footer:**
- x: 0.6", y: 5.15", text: `DOMINION — TOM HOLLAND — CHAPTER 1: ATHENS, 479 BC`

## Background Schedule

| Slide | Background |
|-------|------------|
| 01    | dark       |
| 02    | dark       |
| 03    | light      |
| 04    | light      |
| 05    | dark       |
| 06    | light      |
| 07    | dark       |
| 08    | light      |
| 09    | dark       |
| 10    | light      |
| 11    | dark       |
| 12    | dark       |

## Colour Mapping

On **dark** slides: title → parchment, subtitle → gold, body → stone, artwork title → gold, captions → muted, divider → umber

On **light** slides: title → obsidian, subtitle → terracotta, body → slate, artwork title → terracotta, captions → muted, divider → stone

## Anti-Patterns

- No bullet points. Ever. Body text is always a paragraph.
- No accent lines under titles (hallmark of AI slides).
- No `#` prefix in hex colours (corrupts pptxgenjs files).
- Never reuse option objects between calls (pptxgenjs mutates in-place). Use factory functions.
- No remote image URLs in addImage (use local paths only).
