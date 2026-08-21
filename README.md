# Phulkari Heritage Archive

A museum-style editorial website preserving and presenting Punjabi Phulkari textile art and cultural heritage.

## Overview

This is a frontend-only React application built with Vite, JavaScript, and Tailwind CSS. It serves as a digital heritage archive for documenting, preserving, and presenting Phulkari textiles, motifs, artisans, and cultural stories. Detail views use modal popups instead of separate routes for a seamless browsing experience.

## Design Principles

- **Editorial & Institutional** — Museum-quality design, not a generic SaaS dashboard
- **Image-Led** — Large textile photography as the primary visual element
- **Culturally Rooted** — Warm, sophisticated, and respectful presentation of heritage
- **Accessible** — WCAG 2.2 AA compliance with bilingual support (English & Punjabi)
- **Archival** — Emphasis on provenance, metadata, and historical context

## Project Structure

```
phulkari-heritage/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/             # Reusable UI (Modal, Button, etc.)
│   │   │   ├── modals/         # Detail modals (Textile, Motif, Story)
│   │   │   ├── layout/         # Header, Footer
│   │   │   ├── archive/        # Search, Filter components
│   │   │   ├── textiles/       # Textile card components
│   │   │   └── motifs/         # Motif card components
│   │   ├── pages/              # Page components for routes
│   │   ├── data/               # Static content and seed data
│   │   ├── lib/                # Utilities (i18n, format, etc.)
│   │   ├── hooks/              # Custom React hooks
│   │   ├── App.jsx             # Root component
│   │   ├── main.jsx            # Entry point
│   │   └── index.css           # Global styles
│   ├── public/                 # Static assets
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
├── docs/                       # Documentation
├── .env.example
├── package.json
└── README.md
```

## Tech Stack

- **Frontend Framework:** React 18.3
- **Language:** JavaScript (JSX)
- **Build Tool:** Vite 5.1
- **Styling:** Tailwind CSS 3.4
- **Routing:** React Router 6.28
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Internationalization:** i18next
- **Code Quality:** ESLint, Prettier

## Color Palette

```css
Archival Paper    #F4EFE5
Warm Cream        #EDE3D2
Ink / Charcoal    #1E1C19
Deep Maroon       #7D2922
Muted Terracotta  #A94B3D
Thread Green      #596B42
Indigo            #294F68
Saffron           #C88A27
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Navigate to the client folder:

```bash
cd client
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file from `.env.example`:

```bash
cp .env.example .env
```

### Development

Start the development server:

```bash
npm run dev
```

The application will open at `http://localhost:5173`

### Building

Create a production build:

```bash
npm run build
```

Preview the build locally:

```bash
npm run preview
```

### Code Quality

Run ESLint:

```bash
npm run lint
```

Format code with Prettier:

```bash
npm run format
```

## Features

### Core Pages

- **Home** — Editorial hero and archive overview
- **Collection** — Searchable textile archive with filters (opens modal for details)
- **Motifs** — Categorized embroidery motifs (opens modal for details)
- **Stories** — Editorial content about heritage and traditions (opens modal for details)
- **Artisans** — People-focused profiles
- **Regions** — Geographic organization of heritage
- **About** — Institutional information

### Detail Modals

All detail views use modal popups instead of separate routes:
- **TextileModal** — Museum-quality object record with metadata, techniques, and provenance
- **MotifModal** — Visual and cultural exploration with symbolism and variations
- **StoryModal** — Full editorial story with sections and imagery

### Key Capabilities

- ✅ Bilingual support (English & Punjabi/Gurmukhi)
- ✅ Image-rich responsive layouts
- ✅ Advanced search and filtering
- ✅ Accessible navigation and keyboard support
- ✅ High-resolution textile viewing
- ✅ Editorial storytelling sections
- ✅ WCAG 2.2 AA accessibility
- ✅ Modal-based detail views (no page navigation)

## Data Structure

All content is stored as static JavaScript files in `src/data/text/`:

- `textiles.js` — Textile objects
- `motifs.js` — Motif definitions
- `stories.js` — Editorial content
- `artisans.js` — Artisan profiles
- `regions.js` — Geographic data
- `translations/` — i18n resources (en.json, pa.json)

## Typography

**Headings:** Noto Serif
**Body:** Noto Sans / Inter
**Punjabi:** Noto Sans Gurmukhi / Noto Serif Gurmukhi

Fonts are loaded via Google Fonts CDN in `index.html`.

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Deployment

The frontend can be deployed to:

- Vercel
- Netlify
- Cloudflare Pages
- Any static hosting service

## Future Enhancements

- Backend API integration (Node.js/Express + MongoDB)
- User authentication for researchers
- Advanced search with full-text indexing
- Interactive geographic mapping
- Conservation and research tools
- Editorial publishing workflow

## Contributing

This is a government cultural initiative. Contributions welcome for:

- Translation and localization
- Content documentation
- Accessibility improvements
- Performance optimization

## License

MIT License — See LICENSE file for details

## Contact

For inquiries and collaboration:
- Email: info@phulkari.in
- Website: https://phulkari-heritage.gov.in

## Acknowledgments

- State Museum of Punjab
- Punjabi Cultural Institute
- Heritage artisans and communities
- Research partners and contributors
