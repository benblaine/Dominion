# Artwork Images

Download each image and save to `images/` with the filename listed below. Use the search query to find a high-resolution version. Prefer Wikimedia Commons or museum source pages — these are all public domain or widely reproduced.

IMPORTANT: Images should be landscape-oriented or square crops where possible. They'll be displayed at 3.4" × 2.4" (roughly 16:10 aspect). If the original is portrait (like a full statue), crop to the most compelling detail.

| # | Filename | Search Query | Source Hint |
|---|----------|-------------|-------------|
| 01 | `01-dying-gaul.jpg` | `Dying Gaul sculpture Capitoline Museums marble` | Wikimedia Commons, front 3/4 angle |
| 02 | `02-behistun.jpg` | `Behistun inscription rock relief Darius close-up` | Wikimedia Commons, the relief panel showing Darius and prisoners |
| 03 | `03-hammurabi.jpg` | `Stele of Hammurabi Louvre top relief detail` | Wikimedia, the top portion showing Hammurabi before Shamash |
| 04 | `04-theatre-mask.jpg` | `ancient Greek comedy theatre mask terracotta` | Met Museum open access collection, or Wikimedia |
| 05 | `05-apollo-belvedere.jpg` | `Apollo Belvedere Vatican sculpture` | Wikimedia, the recently restored version |
| 06 | `06-antigone-lytras.jpg` | `Nikiforos Lytras Antigone painting 1865` | National Gallery Athens, or Wikimedia |
| 07 | `07-school-of-athens.jpg` | `Raphael School of Athens fresco full` | Wikimedia Commons high-res |
| 08 | `08-rembrandt-aristotle.jpg` | `Rembrandt Aristotle with a Bust of Homer 1653` | Met Museum open access |
| 09 | `09-alexander-mosaic.jpg` | `Alexander Mosaic Pompeii Naples museum full` | Wikimedia Commons |
| 10 | `10-farnese-atlas.jpg` | `Farnese Atlas sculpture Naples celestial sphere` | Wikimedia Commons |
| 11 | `11-augustus-prima-porta.jpg` | `Augustus Prima Porta statue Vatican` | Wikimedia Commons |
| 12 | `12-winged-victory.jpg` | `Winged Victory Samothrace Louvre` | Wikimedia Commons |

## Download Instructions

For Claude Code: use `curl` or `wget` to download from Wikimedia Commons URLs. Example pattern:

```bash
# Find the image on Wikimedia Commons, get the direct file URL, then:
curl -L -o images/01-dying-gaul.jpg "https://upload.wikimedia.org/wikipedia/commons/thumb/..."

# Or use a search API if available
```

If a direct URL isn't available, search Google Images with the query above and download the highest-resolution result that's clearly the correct artwork.

After downloading, resize all images to a consistent width of 1200px for optimal PPTX embedding:

```bash
# Requires sharp-cli or ImageMagick
for f in images/*.jpg; do
  convert "$f" -resize 1200x -quality 90 "$f"
done
```
