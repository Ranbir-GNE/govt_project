# Performance Guidelines

> **Philosophy: Preserve the historical asset at maximum fidelity; deliver the smallest appropriate representation to the user.**

The original Phulkari imagery is part of the heritage record. Optimization happens in the *delivery pipeline* — never by destroying or degrading the archival source.

## The Goal

Not "make everything tiny." Instead:

> **Deliver the right amount of data, at the right time, at the right resolution, for the user's device and connection.**

For this project, **media will dominate performance**. A 5 MB hero image matters more than 500 KB of JavaScript.

## Optimization Hierarchy

Apply in order. Stop at the first option that works:

```
1. Don't load it
2. Load it later
3. Load a smaller version
4. Compress it
5. Cache it
6. Render it efficiently
```

---

## Media Pipeline

### Separate archival masters from web derivatives

The website is an **access layer**, not the preservation master.

```
MASTER ARCHIVE (TIFF / RAW / PNG — never sent to browser)
        │
   Image Pipeline
        │
   ┌────┴────────┬─────────────┐
   ↓             ↓             ↓
 400px WebP   800px WebP   1600px AVIF
   │             │             │
   └─────────────┴─────────────┘
                 ↓
                CDN
                 ↓
              Browser
```

Directory layout:

```
original/            # archival masters — NOT in web deliverables
    bagh-master.tif

web/                 # generated derivatives
    bagh-400.webp
    bagh-800.webp
    bagh-1200.webp
    bagh-1600.webp

motif/
    thumbnail/       # for grid cards
    full/            # for detail modals
```

### Format selection

| Asset type | Format |
|---|---|
| Textile photographs | AVIF → WebP fallback → JPEG |
| Transparent graphics | WebP / AVIF / SVG |
| Icons, line art, logos | SVG |
| Archival masters | TIFF/PNG — never delivered to browser |

### Responsive images

Always use `srcSet` + `sizes` + dimensions + lazy loading:

```jsx
<img
  src="/images/bagh-800.webp"
  srcSet="
    /images/bagh-400.webp 400w,
    /images/bagh-800.webp 800w,
    /images/bagh-1200.webp 1200w,
    /images/bagh-1600.webp 1600w
  "
  sizes="(max-width: 768px) 100vw, 66vw"
  width="1200"
  height="800"
  alt="Phulkari Bagh"
  loading="lazy"
  decoding="async"
/>
```

**Exceptions:**

- **Hero / LCP image:** `fetchPriority="high"`, `decoding="async"`, never lazy-loaded, ideally preloaded:

```html
<link rel="preload" as="image" href="/hero.avif" />
```

- **Background images:** don't put important content images in CSS backgrounds — use `<img>` or `<picture>` to gain srcset, lazy loading, dimensions, and accessibility.

### Carousels and galleries

Never load an entire carousel when 1–3 slides are visible:

```
Visible slide    → load
Adjacent slide   → maybe preload
Far-away slides  → don't load yet
```

### Thumbnails for grids

Grid cards use thumbnails; detail modals use full resolution. With 200 motifs, never ship 200 full-resolution images.

### Caching

- Content-hash filenames (`bagh-1200.a81f32.webp`) for immutable assets
- Long-lived browser + CDN caching
- Users never re-download the same textile photograph

---

## JavaScript

### Route-level code splitting

Each page loads its own JS via `React.lazy` + dynamic imports:

```jsx
const HeritageMap = lazy(() => import("./HeritageMap"));

<Suspense fallback={<MapSkeleton />}>
  <HeritageMap />
</Suspense>
```

### Lazy-load expensive components

Maps (Mapbox/Leaflet), galleries, and visualization libraries load only when the user reaches them.

### Dependency discipline

> **A dependency must solve a meaningful problem that isn't reasonably solved by existing project code.**

The app must not become React + 15 component libraries + 5 animation libraries + 3 map libraries. Prefer individual components (e.g., shadcn pattern) over UI runtimes.

### Preloading restraint

Preloading everything defeats the purpose — urgency becomes meaningless. Preload only the true LCP asset.

---

## Rendering

### Prevent layout shift (CLS)

- Always specify image `width`/`height` (or aspect-ratio)
- Reserve space for images, fonts, carousels, maps, embeds
- Simple skeletons are fine; skip elaborate animated skeletons

### Large collections

With 1,500 motifs, never render all DOM nodes at once. Use:

- Pagination
- Infinite scroll
- Virtualized grids (for genuinely huge datasets)

### Animations

Animate only:

```css
transform: translateY(...);
opacity: ...;
```

Never continuously animate `width`, `height`, `top`, `left`, `margin`.

Always respect:

```css
@media (prefers-reduced-motion: reduce)
```

### Core metrics to protect

- **LCP** — hero / featured textile load time
- **CLS** — no layout jumps
- **INP** — filters, maps, motif interactions, carousels, search respond quickly

---

## Architecture (future API)

### Metadata vs. media

```
Browser
   ├── API (Node/Express) → MongoDB  [metadata + URLs only]
   └── CDN → Object storage          [actual images]
```

Never send images through Node/Express. MongoDB stores URLs, never binary images.

### Small list responses

```
LIST endpoint    → id, title, thumbnail, region
DETAIL endpoint  → full record
```

Never send `hugeMetadata`, `allImages`, `allMotifs` to a card that renders a thumbnail.

### Compression

Brotli/gzip for HTML, JS, CSS, JSON, SVG. Don't expect compression to help JPEG/WebP/AVIF.

---

## Performance Budgets

Engineering targets, not laws. Museum-quality visual content may occasionally exceed them — but exceptions must be **justified**:

```
Initial JS             < 300–500 KB compressed
Initial CSS            < 100 KB compressed
Hero image             < 300–500 KB
Initial images         < 1 MB ideally
Initial page transfer  < 2 MB target
```

Treat budget regressions as bugs.

---

## Testing Tiers

Design and test for the **lowest** reasonable tier — usable, not necessarily 120 FPS gorgeous:

```
LOW    4GB RAM, older CPU, integrated graphics, slow network
MID    8GB RAM, average CPU, average broadband
HIGH   modern CPU, fast network, good GPU
```

Progressive loading beats complicated network detection. `navigator.connection` may inform decisions but must never be a dependency.

---

## Measure, Don't Guess

Before optimizing:

```
Lighthouse / PageSpeed Insights / Chrome DevTools / WebPageTest
```

Track: LCP, CLS, INP, TBT, FCP, total transfer size, JS execution time, image transfer size. Optimize the largest problems first.

---

## Rules Summary

1. Never ship archival-resolution assets to the browser.
2. Every large image must have web-optimized derivatives.
3. AVIF/WebP for photographs; SVG for simple graphics.
4. Responsive images with `srcset` and `sizes`.
5. Lazy-load below-the-fold images.
6. Never lazy-load the hero/LCP image.
7. Never load an entire carousel if only 1–3 items are visible.
8. Thumbnails for grids; full resolution for detail views.
9. Lazy-load expensive components (maps, galleries, visualizations).
10. Route-level code splitting.
11. Keep API list responses small.
12. Never send unnecessary fields to the client.
13. Serve media via CDN/object storage, never Node/Express.
14. Cache immutable assets aggressively.
15. Always specify image dimensions/aspect ratios.
16. Prevent layout shift.
17. Prefer CSS `transform`/`opacity` for animations.
18. Respect `prefers-reduced-motion`.
19. Minimize third-party dependencies.
20. Don't preload non-critical assets.
21. Don't render thousands of DOM nodes simultaneously.
22. Pagination/virtualization for large collections.
23. Limit font families and weights; use `font-display: swap`.
24. Compress HTML/CSS/JS/JSON with Brotli or gzip.
25. Test on low-end hardware and moderate networks.
26. Measure before optimizing.
27. Performance budgets are enforced; regressions are bugs.
28. Archival masters live separately from web derivatives.
29. Never sacrifice source preservation for web optimization.
30. Optimize perceived performance as well as raw performance.

## Font Discipline

For this design, two families and limited weights suffice:

- **Display serif:** Noto Serif (headings)
- **Body:** Noto Sans / Inter
- **Punjabi:** Noto Sans Gurmukhi / Noto Serif Gurmukhi — load only the weights actually used

Load via Google Fonts with `display=swap`.
