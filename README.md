# Sergey Hvostenko | Multidisciplinary Visual Artist & 3D ArchViz Studio

[![Portfolio Status](https://img.shields.io/badge/Portfolio-Live_Ready-d4af7a?style=for-the-badge)](#)
[![Stack](https://img.shields.io/badge/Stack-React_19_+_Vite-61dafb?style=for-the-badge)](#)
[![Languages](https://img.shields.io/badge/Languages-RU_%7C_EN_%7C_HE_(RTL)-1e222e?style=for-the-badge)](#)

> **Official digital gallery, architectural visualization showcase, and career archive of Sergey Hvostenko** — Fine Artist (NAOMA Monumental Painting), Senior 3D Architectural Visualizer (Unreal Engine 5 / Lumion 2024), Game Art Director, and Generative AI Creator based in Ashdod, Israel.

<p align="center">
  <img src="public/assets/sergey-portrait.jpg" alt="Sergey Hvostenko" width="680" style="border-radius: 14px;" />
</p>

---

## 🎨 About the Artist

**Sergey Hvostenko** (born May 1, 1970) bridges the worlds of classical academic fine art and real-time 3D digital production:
- **Academic Foundation:** Graduate of the *Dnipropetrovsk State Art College named after Y. V. Vuchetich* and the *National Academy of Visual Arts and Architecture (NAOMA, Kyiv)* — Specialist in Monumental Painting.
- **Fine Art & Original Graphics:** Expressive acrylic/oil canvases, gouache, and graphic series with deep symbolism and philosophical irony.
- **Architectural Visualization:** Senior 3D Visualizer collaborating since 2013 with leading Israeli architectural practices (*EFFY KWINA Architecture Design*, *Mar Design*), creating photorealistic renders and real-time cinematic walkthroughs in **Unreal Engine 5** and **Lumion 2024**.
- **Game Art Direction & 3D Concept Art:** Over a decade as Art Director and Lead Concept Artist (*Alawar*, *Rin Games*, *Absolutist*, *Butterfly iSoft*, *Fenix-Soft*) with 7+ shipped commercial titles on PC, iOS, and Android.

---

## ✨ Key Features of the Website

1. **Curated Archive of 92 Works (Locally Cached in High Resolution):**
   - **Fine Art & Graphic Series (25 works):** Original canvases and poetic graphic works (*"Yellow Nostalgia"*, *"Two Strange Clouds"*, *"Nocturne with Cat"*).
   - **Architecture & Interior Visualization (27 works):** Photorealistic residential and exterior renders (*Studio Effy Kwina* projects 1181, 1277, 1512, 1639, 1655).
   - **3D Character & GameDev Concept Art (31 works):** High-polygon ZBrush character sculpting, fantasy creatures, and isometric game worlds.
   - **AI Video & Unreal Engine Animation (9 videos):** Real-time architectural walkthroughs and generative AI motion studies with embedded playback.
2. **Full Trilingual Localization (`RU` / `EN` / `HE`):**
   - Instant language switching powered by reactive state.
   - Native **Right-to-Left (`dir="rtl"`)** layout support for Hebrew (`עברית`).
3. **Interactive Filtering, Live Search & Mobile-Optimized Lightbox:**
   - Filter by creative pillar or search across artwork titles and tools in real time.
   - Full-screen Lightbox modal with keyboard navigation (`←`, `→`, `Esc`), mobile touch swipe gestures, embedded video player, and direct links to original Flickr albums.
4. **Modern React 19 + Vite Architecture:**
   - Component-driven modular design.
   - Fast Hot Module Replacement (HMR) and optimized production build (`dist/`).
   - Enhanced mobile navigation with slide-out drawer, touch targets, and responsive layouts.

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ or v20+ recommended)

### Run Locally
```bash
# 1. Clone the repository
git clone https://github.com/hvostenko-dev/Sergey-Hvostenko-website-.git
cd Sergey-Hvostenko-website-

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Build for production
npm run build

# 5. Preview production build
npm run preview
```

---

## 📁 Project Structure

```text
Sergey-Hvostenko/
├── public/
│   └── assets/               # 92 high-resolution artworks, master portrait & media
├── src/
│   ├── components/           # Modular React components
│   │   ├── Header.jsx        # Navbar, language switcher & mobile drawer
│   │   ├── Hero.jsx          # Hero section with master portrait & Bento strip
│   │   ├── Marquee.jsx       # Infinite ticker ribbon
│   │   ├── Pillars.jsx       # 4 creative disciplines cards with filters
│   │   ├── Portfolio.jsx     # Filter bar, search & artwork grid
│   │   ├── ArtworkCard.jsx   # Individual artwork card
│   │   ├── About.jsx         # Artist biography, skills & CV timeline
│   │   ├── Games.jsx         # Shipped commercial game titles
│   │   ├── Contact.jsx       # Direct channels & interactive inquiry form
│   │   ├── Footer.jsx        # Footer & social links
│   │   └── Lightbox.jsx      # Fullscreen modal with swipe & video player
│   ├── data/
│   │   ├── portfolioWorks.js # Catalog of 92 works
│   │   └── translations.js   # RU / EN / HE dictionaries
│   ├── styles.css            # Dark Museum & Studio theme + mobile styles
│   ├── App.jsx               # Application root & reactive state
│   └── main.jsx              # Vite React entry point
├── index.html                # Vite HTML template with Google Fonts
├── vite.config.js            # Vite configuration
├── vercel.json               # Vercel deployment configuration
├── package.json              # Project dependencies & scripts
└── README.md                 # Project documentation
```

---

## 🌐 Deployment to Vercel

Configured for automatic deployment on push to `main` via Vercel CLI or GitHub Integration. Build output is set to `dist/`.
