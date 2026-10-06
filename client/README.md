# Phulkari Heritage Archive

A digital archive preserving the embroidered heritage of Punjab — phulkari textiles, motifs, traditions, and living practices.

## Features

- **Collection** — Curated phulkari textiles with detailed metadata
- **Motifs** — Visual vocabulary of phulkari motifs (peacock, sunflower, diamond, bud, etc.)
- **Activities** — Faculty Development Programs (FDPs) and institutional activities
- **Reeti-Rivaz** — Wedding and ceremonial traditions
- **Artisans** — Profiles of master craftspersons
- **Regions** — Geographic styles across Punjab
- **Stories** — Oral histories and field recordings
- **About** — Mission, methodology, and team

## Activities Tab

The Activities section showcases Faculty Development Programs with:

- **Grid cards** — Image, date, mode (online/offline/hybrid), attendance
- **Modal detail view** — Full description, metadata (topic, date, mode, attendance), significance, session breakdown, image gallery with navigation
- **Multilingual** — English and Punjabi (Gurmukhi) support
- **Data structure** (`src/data/activities.js`):

```js
{
  id: 'fdp-2024-01',
  name: 'FDP on Digital Pedagogy',
  namePa: 'ਡਿਜੀਟਲ ਪੈਡਾਗੋਜੀ \'ਤੇ ਐਫਡੀਪੀ',
  subtitle: 'Enhancing Teaching with Technology',
  category: 'FDP',
  date: '2024-01-15',
  topic: 'Digital Pedagogy & Online Teaching Tools',
  mode: 'online', // online | offline | hybrid
  attendance: 45,
  description: '...',
  significance: '...',
  pictures: ['/images/activities/fdp-digital-1.jpg', ...],
  variations: [
    { name: 'Session 1: LMS Fundamentals', note: 'Moodle/Canvas basics' },
    ...
  ],
  relatedMotifs: []
}
```

## Tech Stack

- React 18 + Vite
- React Router v6
- i18next (English + Punjabi)
- Tailwind CSS
- Lucide React icons

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── activities/       # ActivityCard
│   ├── art/              # PhulkariPattern, FloralMark, MiniatureArt
│   ├── layout/           # Header, Footer, SearchOverlay
│   ├── modals/           # ActivityModal, MotifModal, TextileModal, StoryModal
│   └── ui/               # Button, Modal, primitives
├── data/
│   ├── activities.js     # FDP sample data
│   ├── motifs.js         # Motif definitions
│   ├── textiles.js       # Textile collection
│   ├── artisans.js
│   ├── regions.js
│   ├── stories.js
│   ├── traditions.js
│   └── translations/
│       ├── en.json
│       └── pa.json
├── pages/
│   ├── Activities.jsx    # Activities page with category filter
│   ├── Motifs.jsx
│   ├── Collection.jsx
│   └── ...
└── App.jsx               # Routes
```

## Adding Activities

1. Add object to `src/data/activities.js`
2. Place images in `public/images/activities/`
3. Run `npm run dev` to verify