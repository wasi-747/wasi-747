# 🚀 Wasiur Rahman Sakib — Full-Stack Engineer & Architect Portfolio

A high-performance, ultra-responsive developer portfolio website built with **Next.js 16 (Turbopack)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed with a luxury dark theme featuring **Burnt Orange (`#ff8c32`)** and **Warm Amber (`#ffb347`)** accents, integrated 3D Canvas Wireframe Polyhedra, and Lenis momentum scrolling.

---

## ✨ Key Features & Highlights

- **🎲 3D Wireframe Floating Polyhedra Background**:
  - Interactive Canvas rendering 3D rotating Icosahedrons and Dodecahedrons with ultra-thin metallic wireframe geometry.
  - **Scroll-Driven 3D Perspective Zoom Out**: Smoothly scales down and pushes back into Z-space as visitors scroll down the Hero section.
  - **Hero Section Boundary**: Positioned seamlessly so the bottom cube extends into the *Technologies & Frameworks* marquee ticker.

- **⚡ Infinite Skills & Frameworks Ticker**:
  - Continuous dual-row marquee showcasing full-stack skills, AI frameworks, IoT tools, and databases with glowing amber borders.

- **📊 Live Server-Side GitHub Activity Tracker**:
  - Real-time proxy API endpoints (`/api/github-stats` & `/api/github-chart`) fetching live contribution graph commits for [`wasi-747`](https://github.com/wasi-747).
  - Interactive 365-day heat map grid with hover tooltips and dynamic color intensity levels.

- **🖼️ Profile Photo Frame**:
  - Watery morphing orange ring animation with rotating SVG borders, interactive photo carousel, and progress indicators.

- **🎯 Lerped Custom Trailing Cursor**:
  - Dual-ring custom mouse cursor with smooth linear interpolation (lerp) tracking, state detection, and hover text tooltips.

- **✨ 3D Tilt & Spotlight Project Cards**:
  - Interactive 3D card tilt physics with radial light spotlights following cursor movements over proof-of-work project cards.

- **📜 Instant Resume Download**:
  - Direct PDF resume download (`/Wasiur_Rahman_Sakib_Resume_General.pdf`).

- **🌊 Smooth Inertial Scroll**:
  - Integrated **Lenis** momentum scroll engine for buttery smooth anchor navigation.

---

## 🛠️ Architecture & Tech Stack

| Domain | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Animations** | [Framer Motion](https://framer-motion.dev/) |
| **3D Rendering** | HTML5 Canvas 3D Perspective Projection Matrix |
| **Smooth Scroll** | [@studio-freight/lenis](https://lenis.darkroom.engineering/) |
| **Icons** | [Lucide React](https://lucide.dev/) |

---

## 📁 Repository Structure

```
├── public/
│   ├── Me.jpg                     # Profile Photo 1
│   ├── Me2.jpg                    # Profile Photo 2
│   ├── Me3.jpg                    # Profile Photo 3
│   └── Wasiur_Rahman_Sakib_Resume_General.pdf
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── github-chart/      # Server-side GitHub SVG proxy endpoint
│   │   │   └── github-stats/      # Live GitHub user stats endpoint
│   │   ├── globals.css            # Custom CSS & design system tokens
│   │   ├── layout.tsx             # Root layout & font configurations
│   │   └── page.tsx               # Main portfolio landing page
│   └── components/
│       ├── AboutMeSection.tsx     # Extended bio & core specializations
│       ├── ContactSection.tsx     # Briefing form & direct contact links
│       ├── CustomCursor.tsx       # Lerped dual-ring cursor
│       ├── Experience.tsx         # Education & career timeline
│       ├── GithubContributions.tsx# Live 365-day contribution heat map
│       ├── InteractiveBackground.tsx # 3D Floating Polyhedra Canvas
│       ├── LoadingScreen.tsx      # Terminal loading initialization animation
│       ├── Navbar.tsx             # Fixed header navigation with blur
│       ├── ProfilePhotoTransition.tsx # Rotating ring & photo carousel
│       ├── ProjectsGrid.tsx       # Proof-of-work project cards
│       ├── RotatingScrollBadge.tsx# Rotating text scroll down badge
│       ├── SkillsExpertise.tsx    # Categorized skill badges
│       ├── SkillsMarquee.tsx      # Infinite technologies ticker
│       ├── SmoothScroll.tsx       # Lenis momentum smooth scroll wrapper
│       └── TiltCard.tsx           # 3D perspective tilt card container
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js `>= 18.17.0`
- npm / pnpm / yarn

### Local Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/wasi-747/wasi-747.git
   cd wasi-747
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build Production Bundle**:
   ```bash
   npm run build
   npm run start
   ```

---

## 📬 Contact & Links

- **Portfolio**: [https://wasi-747.github.io/](https://github.com/wasi-747)
- **GitHub**: [@wasi-747](https://github.com/wasi-747)
- **LinkedIn**: [wasiur-rahman-sakib](https://linkedin.com/in/wasiur-rahman-sakib)
- **Email**: `wasisakib7846@gmail.com`
- **Schedule Call**: [Cal.com/wasiur](https://cal.com/wasiur)

---

Developed by **Wasiur Rahman Sakib** © 2026. All Rights Reserved.
