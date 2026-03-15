const pptxgen = require('pptxgenjs');
const path = require('path');

// ── Colour Palette (no # prefix!) ──────────────────────────────────────
const C = {
  obsidian:   '1A1714',
  umber:      '3D2B1F',
  terracotta: '8B4513',
  gold:       'C9A96E',
  parchment:  'F0E6D3',
  stone:      'D4C5A9',
  cream:      'FAF5EB',
  slate:      '5C5347',
  muted:      '8A7E6B',
};

// ── Theme helpers ──────────────────────────────────────────────────────
function theme(bg) {
  if (bg === 'dark') {
    return {
      background:    C.obsidian,
      title:         C.parchment,
      subtitle:      C.gold,
      body:          C.stone,
      artworkTitle:  C.gold,
      caption:       C.muted,
      divider:       C.umber,
      footer:        C.muted,
    };
  }
  return {
    background:    C.cream,
    title:         C.obsidian,
    subtitle:      C.terracotta,
    body:          C.slate,
    artworkTitle:  C.terracotta,
    caption:       C.muted,
    divider:       C.stone,
    footer:        C.muted,
  };
}

// ── Slide Data ─────────────────────────────────────────────────────────
const slides = [
  {
    num: '01', bg: 'dark',
    title: 'THE NAIL\nAND THE BOARD',
    subtitle: 'Crucifixion-style execution predates\nChristianity by centuries',
    body: 'In 479 BC, Athenians nailed the Persian governor Artaÿctes to a wooden board at the Hellespont — on the very spot where Xerxes had bridged two continents. The spectacle was a message: imperial power can be unmade where it was made.',
    artworkTitle: 'THE DYING GAUL',
    artworkDetail: 'Roman marble copy, c. 230–220 BC\nCapitoline Museums, Rome',
    curatorNote: 'A defeated warrior\'s final moments — vulnerability and defiance made eternal in stone.',
    image: '01-dying-gaul.jpg',
  },
  {
    num: '02', bg: 'dark',
    title: 'THE COSMIC\nCRUSADE',
    subtitle: 'Persia believed its empire\nwas a moral project',
    body: 'Darius and his heirs ruled in the name of Ahura Mazda, the god of light and truth. All resistance was allegiance to \'the Lie\' — a cosmic darkness threatening the universe. Punishment wasn\'t cruelty; it was spiritual hygiene.',
    artworkTitle: 'BEHISTUN INSCRIPTION',
    artworkDetail: 'Rock relief, c. 520 BC\nMount Behistun, Kermanshah, Iran',
    curatorNote: 'Darius tramples a rebel beneath the winged figure of Ahura Mazda — carved 100 metres above the road, meant to be seen but never touched.',
    image: '02-behistun.jpg',
  },
  {
    num: '03', bg: 'light',
    title: 'DIVINE\nMANDATE',
    subtitle: 'The first universal moral order\nbacked by empire',
    body: 'Drawing on Mesopotamian traditions stretching back to Hammurabi, the Persian kings claimed a sacred charge: to bring justice to the world. Their precedent — a king receiving law from a god — would echo across millennia.',
    artworkTitle: 'STELE OF HAMMURABI',
    artworkDetail: 'Basalt, c. 1792–1750 BC\nMusée du Louvre, Paris',
    curatorNote: 'The sun-god Shamash hands Hammurabi the rod and ring of justice — the earliest surviving monument of law as sacred trust.',
    image: '03-hammurabi.jpg',
  },
  {
    num: '04', bg: 'light',
    title: 'THE EYE\nON STAGE',
    subtitle: 'Greeks saw Persian universalism\nas terrifying despotism',
    body: 'Aristophanes put an actor on stage wearing an enormous eye on his head — mocking the Persian \'King\'s Eye\' surveillance network. Where Persia saw cosmic order, Athens saw tyranny. Comedy became resistance.',
    artworkTitle: 'TERRACOTTA THEATRE MASK',
    artworkDetail: 'Greek, 2nd–1st century BC\nThe Metropolitan Museum of Art, New York',
    curatorNote: 'The exaggerated mouth of the comic mask — designed to carry laughter to 15,000 people in an open-air theatre.',
    image: '04-theatre-mask.jpg',
  },
  {
    num: '05', bg: 'dark',
    title: 'THE OBLIQUE\nONE',
    subtitle: 'Greek gods were capricious, amoral,\nand radically contradictory',
    body: 'Apollo was healer and plague-bringer. Zeus raped mortals as a shower of gold. The gods demanded sacrifice and punished insults — but offered no ethical code. Light itself had a darkness to it.',
    artworkTitle: 'APOLLO BELVEDERE',
    artworkDetail: 'Roman marble copy, c. AD 120–140\nMusei Vaticani, Vatican City',
    curatorNote: 'The god of light, music, healing — and plague. Perfect beauty concealing perfect indifference.',
    image: '05-apollo-belvedere.jpg',
  },
  {
    num: '06', bg: 'light',
    title: 'THE UNWRITTEN\nLAW',
    subtitle: 'Greeks intuited a higher law\nbut couldn\'t pin down its source',
    body: 'In Sophocles\' Antigone, a princess defies a king\'s decree to honour unwritten divine laws — \'neither today nor yesterday were they born; they are eternal.\' The tension between human legislation and timeless moral order remains unresolved.',
    artworkTitle: 'ANTIGONE BEFORE THE BODY OF POLYNICES',
    artworkDetail: 'Nikiforos Lytras, oil on canvas, 1865\nNational Gallery, Athens',
    curatorNote: 'The solitary act of conscience against the machinery of the state — a woman, dust in her hands, over a forbidden corpse.',
    image: '06-antigone-lytras.jpg',
  },
  {
    num: '07', bg: 'dark',
    title: 'BEYOND\nTHE ALTAR',
    subtitle: 'Philosophy emerged to resolve\nthe contradictions of myth',
    body: 'From Xenophanes to Aristotle, thinkers rejected Homer\'s quarrelsome gods and searched for rational, mathematical principles governing the cosmos. The \'unmoved mover\' replaced Zeus — but at the cost of a god who cared.',
    artworkTitle: 'THE SCHOOL OF ATHENS',
    artworkDetail: 'Raphael, fresco, 1509–1511\nApostolic Palace, Vatican City',
    curatorNote: 'Plato points upward to the ideal; Aristotle gestures toward the earth. Twenty-five centuries of philosophy framed in a single gesture.',
    image: '07-school-of-athens.jpg',
  },
  {
    num: '08', bg: 'light',
    title: 'THE NATURAL\nORDER',
    subtitle: 'Aristotle\'s rational universe\njustified brutal hierarchies',
    body: 'The same cosmic framework that found divine pattern in the stars also concluded that men should rule women, Greeks should rule barbarians, and the poor were unfit for citizenship. Philosopher-rule in Athens stripped the masses of their votes.',
    artworkTitle: 'ARISTOTLE WITH A BUST OF HOMER',
    artworkDetail: 'Rembrandt van Rijn, oil on canvas, 1653\nThe Metropolitan Museum of Art, New York',
    curatorNote: 'The philosopher\'s hand rests on the blind poet — reason confronting the mythos it claims to supersede, unable to let go.',
    image: '08-rembrandt-aristotle.jpg',
  },
  {
    num: '09', bg: 'dark',
    title: 'THE WORLD\nBROKEN OPEN',
    subtitle: 'Alexander\'s conquests shattered\nthe old Greek world',
    body: 'The scale of the new Macedonian empires dwarfed the city-state. Traditional gods seemed inadequate to explain events this enormous. People turned to Fortune — Tyche — a terrifying, impersonal force of blind chance.',
    artworkTitle: 'ALEXANDER MOSAIC',
    artworkDetail: 'Floor mosaic, c. 100 BC (after a c. 310 BC painting)\nNational Archaeological Museum, Naples',
    curatorNote: 'Alexander charges Darius III at Issus — the moment one world-order collapses into another.',
    image: '09-alexander-mosaic.jpg',
  },
  {
    num: '10', bg: 'light',
    title: 'THE SPARK\nWITHIN',
    subtitle: 'The Stoics offered the most radical\nresponse: nature itself is God',
    body: 'A divine rational principle — the Logos — pervaded all matter. Every human, regardless of sex, ethnicity, or status, carried a divine spark: syneidesis, conscience. This was a genuinely universalist claim — and it would seed the future.',
    artworkTitle: 'FARNESE ATLAS',
    artworkDetail: 'Roman marble, 2nd century AD\nNational Archaeological Museum, Naples',
    curatorNote: 'Atlas bears the celestial sphere — the oldest known depiction of the classical constellations. The cosmos as burden, as beauty, as order.',
    image: '10-farnese-atlas.jpg',
  },
  {
    num: '11', bg: 'dark',
    title: 'EMPIRE\nAS DESTINY',
    subtitle: 'Rome co-opted Greek philosophy\nto justify its conquests',
    body: 'Posidonius and Cicero repackaged Stoic natural law as vindication. Wars, slavery, plunder — all fated, rational, in accordance with cosmic order. \'Natural law\' became the moral armour of an empire.',
    artworkTitle: 'AUGUSTUS OF PRIMA PORTA',
    artworkDetail: 'Marble, 1st century AD\nMusei Vaticani, Vatican City',
    curatorNote: 'The emperor as god-touched commander — barefoot like a deity, breastplate telling the story of cosmic victory.',
    image: '11-augustus-prima-porta.jpg',
  },
  {
    num: '12', bg: 'dark',
    title: 'THE FUTURE\nBELONGS\nTO THE STRONG',
    subtitle: 'Before Christianity, competing visions\nof power all served the powerful',
    body: 'Persian cosmic justice. Greek divine caprice. Philosophical rational order. Imperial destiny. Each claimed universality. Each ultimately served the strong. The stage is set — for a revolution that would invert it all.',
    artworkTitle: 'WINGED VICTORY OF SAMOTHRACE',
    artworkDetail: 'Parian marble, c. 190 BC\nMusée du Louvre, Paris',
    curatorNote: 'Striding into the wind at the prow of a ship — triumph without a face, momentum without mercy.',
    image: '12-winged-victory.jpg',
  },
];

// ── Build ──────────────────────────────────────────────────────────────
async function build() {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9'; // 10" × 5.625"
  const SHAPES = pptx.ShapeType;

  for (const s of slides) {
    const t = theme(s.bg);
    const slide = pptx.addSlide();

    // Background
    slide.background = { fill: t.background };

    // Slide number (top-left)
    slide.addText(s.num, {
      x: 0.6, y: 0.4, w: 1.0, h: 0.3,
      fontFace: 'Georgia', fontSize: 11, italic: true,
      color: t.caption, align: 'left',
    });

    // Title
    slide.addText(s.title, {
      x: 0.6, y: 0.85, w: 5.0, h: 1.6,
      fontFace: 'Georgia', fontSize: 32, bold: true,
      color: t.title, align: 'left', valign: 'top',
      lineSpacingMultiple: 0.9,
    });

    // Subtitle
    slide.addText(s.subtitle, {
      x: 0.6, y: 2.55, w: 5.0, h: 0.7,
      fontFace: 'Calibri', fontSize: 13, italic: true,
      color: t.subtitle, align: 'left', valign: 'top',
      lineSpacingMultiple: 1.2,
    });

    // Body text
    slide.addText(s.body, {
      x: 0.6, y: 3.4, w: 5.0, h: 1.7,
      fontFace: 'Calibri', fontSize: 11.5,
      color: t.body, align: 'left', valign: 'top',
      lineSpacingMultiple: 1.35,
    });

    // Vertical divider line
    slide.addShape(SHAPES.line, {
      x: 6.0, y: 0.6, w: 0, h: 4.4,
      line: { color: t.divider, width: 0.5 },
    });

    // Artwork image
    const imgPath = path.join(__dirname, 'images', s.image);
    slide.addImage({
      path: imgPath,
      x: 6.2, y: 0.5, w: 3.4, h: 2.4,
      sizing: { type: 'cover', w: 3.4, h: 2.4 },
    });

    // Artwork title
    slide.addText(s.artworkTitle, {
      x: 6.2, y: 3.05, w: 3.4, h: 0.4,
      fontFace: 'Georgia', fontSize: 13, bold: true,
      color: t.artworkTitle, align: 'left',
      charSpacing: 3,
    });

    // Artwork detail
    slide.addText(s.artworkDetail, {
      x: 6.2, y: 3.55, w: 3.4, h: 0.4,
      fontFace: 'Calibri', fontSize: 9, italic: true,
      color: t.caption, align: 'left',
    });

    // Horizontal rule under detail
    slide.addShape(SHAPES.line, {
      x: 6.2, y: 4.0, w: 1.2, h: 0,
      line: { color: t.divider, width: 0.5 },
    });

    // Curator note
    slide.addText(s.curatorNote, {
      x: 6.2, y: 4.2, w: 3.4, h: 1.0,
      fontFace: 'Calibri', fontSize: 10.5, italic: true,
      color: t.caption, align: 'left', valign: 'top',
      lineSpacingMultiple: 1.3,
    });

    // Footer
    slide.addText('DOMINION — TOM HOLLAND — CHAPTER 1: ATHENS, 479 BC', {
      x: 0.6, y: 5.15, w: 8.8, h: 0.3,
      fontFace: 'Calibri', fontSize: 7.5,
      color: t.footer, align: 'left',
      charSpacing: 2,
    });
  }

  const outPath = path.join(__dirname, 'output', 'dominion_ch1.pptx');
  await pptx.writeFile({ fileName: outPath });
  console.log(`Deck saved to ${outPath}`);
  console.log(`${slides.length} slides generated.`);
}

build().catch(err => {
  console.error('Build failed:', err);
  process.exit(1);
});
