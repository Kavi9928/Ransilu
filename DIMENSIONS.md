

## Banner Sizes

### Main Site (Ransilu Root)
- **Hero Banner**: `min-height: calc(108vh - 72px)` with `padding: 145px 0 112px`
- **Navigation Height**: `72px` (--nav-h)
- **Container Max-Width**: `1320px`

### Music Subproject
- **Hero Section**: `min-height: 92vh` (without nav adjustment)
- **Navigation Height**: `68px`
- **Container Max-Width**: `1320px`
- **Hero Layout**: Grid `1.08fr 0.92fr` (2-column split)

#### Spotlight & Modal Banners
- **Spotlight Modal**: `min(1120px, calc(100% - 2rem))` width × `min(690px, calc(100vh - 3.8rem))` height
- **Featured Shell**: `min(1120px, calc(100% - 2rem))` width × `min(690px, calc(100vh - 3.8rem))` height

### Teledrama Section (Main Site)
- **Featured Shell**: `min(1240px, 100%)` width × `min(760px, calc(100vh - 4rem))` height
- **Star Modal Dialog**: `min(1240px, calc(100% - 2rem))` width × `min(760px, calc(100vh - 4rem))` height
- **Modal Dialog**: `min(1120px, calc(100% - 2rem))` width × `min(690px, calc(100vh - 3.8rem))` height

### Cartoon Section (Main Site)
- **Featured Shell**: Grid-based layout with responsive columns
- **Modal Dialog**: `min(1120px, calc(100% - 2rem))` width × `min(690px, calc(100vh - 3.8rem))` height

### Radio Section
- **Navigation Height**: `68px`
- **Container Max-Width**: `1320px`

---

## Image Dimensions

### Artist Cards & Profiles

| Component | Width | Height | Notes |
|-----------|-------|--------|-------|
| **Home Artist Card** | 100% (container) | 292px (mobile), 330px+ (desktop) | Full-width card wrapper |
| **Home Artist Image** | 100% | 220px (desktop), 194px (mobile) | Image inside card |
| **Artist Talent Card** | flex-basis: 220px (desktop), 190px (mobile) | 380px (desktop), 330px (mobile) | Clickable artist card |
| **Talent Poster** | 100% | 220px | Image portion of talent card |
| **Format Card Image** | 100% | 180px | Music format/genre cards |
| **Artist Grid** | repeat(6, 1fr) desktop; repeat(4, 1fr) tablet; repeat(2, 1fr) mobile | Aspect ratio: 1:1 | Dynamic grid layout |

### Spotlight & Modal Thumbnails

| Component | Width | Height | Desktop/Mobile |
|-----------|-------|--------|----------------|
| **Spotlight Thumb** | 84px | 112px | Desktop |
| **Spotlight Thumb** | 64px | 84px | Mobile (≤540px) |
| **Teledrama Thumb** | 92px | 122px | Desktop |
| **Teledrama Thumb** | 78px | 106px | Mobile (≤640px) |
| **Star Thumb** | 92px | 122px | Desktop |
| **Star Thumb** | 78px | 106px | Mobile (≤640px) |
| **Modal Thumb** | 92px | 122px | General modals |

### Featured & Hero Media

| Component | Width | Height | Min-Height |
|-----------|-------|--------|-----------|
| **Featured Media** | 100% | 100% | Inherits container |
| **Featured Media Image** | 100% | 100% | Inherits container |
| **About Media** | 100% | 100% | `min-height: 420px` |
| **Artist Strip** | 100% | 100% | `height: 430px` |
| **Hero Side Card** | Auto | Auto | Variable |
| **Modal Media** | 100% | 100% | `min-height: inherit` |

### Video/Content Player Areas
- **Featured Section**: Full container with gradient overlays
- **Spotlight Modal Background**: Full modal with brightness filter (0.72)
- **Star Modal Background**: Full modal with brightness filter (0.72)

---

## Responsive Grid Layouts

### Desktop (≥1100px)
| Section | Grid Layout | Notes |
|---------|------------|-------|
| **Bento Cards** | `repeat(3, minmax(0, 1fr))` | Main content area |
| **Records/Label** | `repeat(4, 1fr)` | 4-column grid |
| **Teledrama** | `repeat(5, minmax(120px, 1fr))` | Flexible card sizing |
| **Cartoon** | `repeat(4, minmax(130px, 1fr))` | Talent cards |
| **Album Grid** | `repeat(4, minmax(0, 1fr))` | Products |
| **Artist Grid** | `repeat(6, 1fr)` | 6 columns |
| **Format Grid** | `repeat(4, 1fr)` | 4 columns |
| **Label Grid** | `repeat(4, minmax(0, 1fr))` | 4 columns |
| **Footer** | `2fr 1fr 1fr` | 3-column split |

### Tablet (900px–1099px)
| Section | Grid Layout |
|---------|------------|
| **Bento Cards** | `1fr` (stacked) |
| **Records/Label** | `repeat(2, 1fr)` (2 columns) |
| **Teledrama** | `repeat(2, 1fr)` (2 columns) |
| **Cartoon** | Responsive (auto-fill) |
| **Album Grid** | `repeat(2, 1fr)` |
| **Artist Grid** | `repeat(4, 1fr)` |
| **Format Grid** | `repeat(2, 1fr)` |
| **Footer** | `1fr` (single column) |

### Mobile (≤540px)
| Section | Grid Layout |
|---------|------------|
| **Bento Cards** | `1fr` (stacked) |
| **Records/Label** | `1fr` (single) |
| **Teledrama** | `1fr` (single) |
| **Cartoon** | `1fr` (single) |
| **Album Grid** | `1fr` |
| **Artist Grid** | `repeat(2, 1fr)` |
| **Format Grid** | `1fr` |
| **Label Grid** | `1fr` |
| **Footer** | `1fr` |
| **Hero Stats** | `repeat(2, 1fr)` |

---

## UI Element Sizes

### Navigation & Buttons

| Element | Width | Height | Notes |
|---------|-------|--------|-------|
| **Logo Circle** | 40px | 40px | Square with border-radius: 8px |
| **Navigation Hamburger** | 24px | Auto | Icon buttons in navbar |
| **Nav Button** | 36px | 36px | Standard action buttons |
| **Large Button** | 44px | 44px | Featured action buttons |
| **XL Button** | 48px | 48px | Carousel/section controls |
| **Close Button** | 38px | 38px | Modal close icon |
| **Close Button (Large)** | 42px | 42px | Featured modal close |
| **Live Dot** | 8px | 8px | Live broadcast indicator |
| **Scrollbar (webkit)** | 6px | Auto | Custom scrollbar width |

### Hero & Section Elements

| Element | Dimensions |
|---------|-----------|
| **Neon Line** | `width: 110px; height: 3px; border-radius: 999px` |
| **Accent Line** | `width: 180px; height: 2px` |
| **Divider Line** | `width: 1px; height: auto` (full height) |
| **Floating Orb 1** | `width: 460px; height: 460px` |
| **Floating Orb 2** | `width: 380px; height: 380px` |
| **Music Visualizer Bar** | `width: 4px; height: varies (8–40px)` |

### Modal & Overlay Dialogs

| Component | Width | Height | Notes |
|-----------|-------|--------|-------|
| **Voice Modal Dialog** | `min(1120px, calc(100% - 2rem))` | `min(690px, calc(100vh - 3.8rem))` | Modal with padding |
| **Featured Shell** | `min(1240px, 100%)` | `min(760px, calc(100vh - 4rem))` | Teledrama featured |
| **Star Modal** | `min(1240px, calc(100% - 2rem))` | `min(760px, calc(100vh - 4rem))` | Star profile modal |

---

## Decorative Elements

### Gradient & Shimmer Effects
- **Background Shimmer**: `background-size: 300% auto`
- **Spotlight Glow**: Box-shadow with primary color at 0.4 opacity
- **Hover Glow**: Red/hover color shadow effects
- **Gradient Overlays**: Linear & radial gradients on hero sections

### Animations & Transforms
- **Hero Float**: Width/height 460px to 380px with continuous animation
- **Parallax Zoom**: Scale transforms from 0.5 to 2.5
- **Carousel Scroll**: Variable based on card width + gap
- **Fade Overlays**: Brightness filter 0.72–0.82 on featured images

### Hero Decorative Orbs
- **Orb 1 (Right)**: `width: 460px; height: 460px; right: -120px; top: 40px`
- **Orb 2 (Left)**: `width: 380px; height: 380px; left: -120px; bottom: -80px`

---

## Key CSS Variables

```css
:root {
  --nav-h: 72px;           /* Main site nav height */
  --radius: 14px;          /* Standard border radius */
  --radius-lg: 22px;       /* Large border radius */
  --font-display: 'Bebas Neue', sans-serif;
  --font-body: 'Inter', sans-serif;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
}
```

---

## Notes

- **Responsive Design**: All dimensions use `clamp()`, `min()`, `calc()`, and `minmax()` for flexible scaling.
- **Viewport-Based Heights**: Hero sections use `vh` units; modals use `calc()` to account for navbar.
- **Aspect Ratios**: Artist grids use `aspect-ratio: 1/1` for square cards on smaller screens.
- **Container Queries**: Some modern layouts use `min()` to respect viewport and max-width constraints.
- **Mobile-First**: Breakpoints at `900px`, `640px`, and `540px`.

---

**For Questions**: Refer to specific CSS files (`css/style.css`, `music/style.css`, `js/views/*.js`) for exact implementation details.
