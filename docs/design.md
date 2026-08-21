# Design Language

Design cues extracted from the reference mockups in `samples/` (Home Page, History Page, Motif Page, Stories). All UI work must follow this system.

## Color Palette

Canonical token file: [`colors.css`](./colors.css) — all components must consume the CSS variables, never hard-coded hex values.

| Role | Color | Usage |
|---|---|---|
| Archival Cream | `#F4EFE5` / `#EDE3D2` | Page backgrounds, content cards |
| Ink Charcoal | `#1E1C19` | Headlines, body text, footer background |
| Deep Maroon / Brick | `#7D2922` - `#A94438` | Eyebrow labels, dash dividers, section numerals, small-caps headings, primary buttons, active nav underline |
| Textile accents | Magenta, saffron, indigo, thread green | Only through photography - the UI itself stays neutral |

## Typography

- **Display serif** (high-contrast, editorial - Noto Serif / Playfair / Cormorant style) for headlines, e.g. "Threads that tell our stories", "Bagh", "Mor"
- **Serif italic** for subtitles, e.g. "The Peacock"
- **Letter-spaced small caps** (~11px, wide tracking) for eyebrows, nav, labels, and links, e.g. `PUNJAB'S EMBROIDERED HERITAGE`, `VIEW OBJECT ->`
- **Clean sans** (Noto Sans / Inter) for body copy and metadata
- **Bilingual pairing** - Gurmukhi script set directly beneath English headlines (e.g. ਫੁਲਕਾਰੀ ਦਾ ਇਤਿਹਾਸ)

## Signature Patterns

Repeated across all sample pages - treat these as the core component vocabulary:

1. **Section header formula**: eyebrow -> serif headline -> short red dash (`—`)
2. **Arrow links**: underlined/tracked caps + `->` (never rounded pill buttons)
3. **Numbered sections** `01-05` in red serif, connected by dotted vertical lines (Stories page)
4. **Metadata definition lists** - small-caps label left, value right (Motif page: CATEGORY / REGION / TECHNIQUE / THREAD / BACKGROUND)
5. **Square outlined carousel arrows** (`<` `>`), never circular or filled
6. **Thin hairline vertical dividers** between columns
7. **Overlapping cream cards** floating on full-bleed imagery (History page)
8. **Alternating editorial rows** - text left / image right, then flipped
9. **Circular image crops** for motif variations
10. **Closing CTA strip**: decorative motif + serif quote + arrow link (e.g. "Every motif has a story woven in threads.")

## Imagery Style

- Large, full-bleed textile close-ups as heroes - embroidery texture is the star
- **Sepia / desaturated archival photos** for historical content (B&W orchard, courtyard scenes)
- Saffron crocus flowers used as floating decorative accents
- Decorative Phulkari border strips at section edges

## Header & Footer

- **Header**: cream background; logo = floral mark + `PHULKARI` caps + `HERITAGE ARCHIVE` tracked subtitle; right-aligned nav (Collection, Motifs, Stories, Artisans, Regions, About) + `EN | ਪੰਜਾਬੀ` toggle + search icon
- **Footer**: dark charcoal; 4-column small-caps link groups (Explore / Resources / About / Follow Us); circled social icons; legal bar (Privacy Policy, Terms of Use, Accessibility)

## Page-Specific Notes

### Home Page

- Split hero: text block left on cream, large textile photo right
- "Browse the Archive": 5-column icon row (Textiles, Motifs, Techniques, Artisans, Regions) with hairline dividers and a decorative border strip at the edge
- Featured textile: split card - image left, cream metadata panel right, numbered pagination (01-04) + carousel arrows
- Stories & Heritage: 3 image cards with overlay text panels
- Newsletter strip: `STAY CONNECTED` eyebrow, serif headline, email input + maroon `SUBSCRIBE` button

### History Page

- Full-bleed desaturated B&W photo hero with back link (`<- STORIES`) and bilingual headline
- Overlapping cream content card: textile image, intro text, red dash, 4-column red line-icon row (Origins / Evolution / Craft & Community / A Living Heritage)
- Timeline section: 5-column century markers (17th C -> Today) with dot markers on a horizontal line, carousel arrows top-right

### Motif Page

- Back link (`<- BACK TO MOTIFS`)
- Full-bleed textile hero with right-side info panel: Gurmukhi word, large serif name, italic English subtitle, description, red dash, metadata definition list
- "About this Motif": small-caps red heading + dash, two-column body text
- "Variations": circular cropped images with names and short descriptions
- "Found In": horizontal carousel of textile cards with location/period captions, carousel arrows top-right
- Closing CTA: "Every motif has a story woven in threads." + `EXPLORE MORE MOTIFS ->`

### Stories Page

- Long-scroll editorial layout, sections numbered 01-05 in red with dotted vertical connectors
- Hero: left text block (eyebrow, serif headline, Gurmukhi subtitle), right draped indigo fabric photo, faded sepia landscape panorama below
- Alternating text/image rows: sepia archival photos, embroidery close-ups, saffron crocus flower accents
- Scroll indicator with dotted line in hero
- Closing CTA: "Every story is a stitch in time." + `EXPLORE THE COLLECTION ->`

