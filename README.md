# ✦ SparkClean Services

A modern, fully responsive cleaning service website built with **React**, **JavaScript**, and **CSS**. Designed to be professional, trustworthy, and conversion-focused — from hero to booking form.

![SparkClean Services](https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80)

---

## 🚀 Live Preview

> Run locally with `npm run dev` — see setup instructions below.

---

## ✨ Features

- **Full-screen hero** with professional cleaning background image, dark overlay, animated stats, and dual CTAs
- **Sticky navbar** — transparent over the hero, white on scroll, with active link tracking and a slide-in mobile menu
- **6 service cards** — Residential, Office, Deep Clean, Move-In/Out, Post-Construction, Carpet & Upholstery
- **About section** — two-column layout with photo, floating review badge, and 4 highlight cards
- **Why Choose Us** — dark charcoal section with 6 feature cards and stat counters
- **How It Works** — 4 connected steps with animated connectors
- **Testimonials** — 3 real-world reviews with star ratings and interactive card selector
- **Pricing** — Basic / Standard / Premium packages with monthly ↔ one-time billing toggle
- **Booking form** — name, email, phone, service type, preferred date, message — with validation, loading state, and success screen
- **Footer** — 4-column layout with service links, social icons, and trust badges
- **Scroll animations** — fade-up via `IntersectionObserver` on every section
- **Fully responsive** — desktop, tablet, and mobile down to 320px

---

## 🛠 Tech Stack

| Tool | Purpose |
|---|---|
| [React 19](https://react.dev) | UI framework |
| [Vite 8](https://vitejs.dev) | Build tool & dev server |
| CSS (plain) | Styling — no UI library |
| Inter + Playfair Display | Google Fonts typography |

---

## 📁 Project Structure

```
sparkclean/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── Services.jsx / .css
│   │   ├── About.jsx / .css
│   │   ├── WhyChooseUs.jsx / .css
│   │   ├── HowItWorks.jsx / .css
│   │   ├── Testimonials.jsx / .css
│   │   ├── Pricing.jsx / .css
│   │   ├── Contact.jsx / .css
│   │   └── Footer.jsx / .css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/derxm/sparkclean-services.git

# Navigate into the project
cd sparkclean-services

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder — ready to deploy to Vercel, Netlify, or any static host.

### Preview Production Build

```bash
npm run preview
```

---

## 🎨 Design System

| Token | Value |
|---|---|
| Primary green | `#2e7d52` |
| Dark green | `#1b5e38` |
| Charcoal | `#1e2a22` |
| Cream background | `#f9faf7` |
| Body font | Inter |
| Display font | Playfair Display |
| Border radius | 8px / 14px / 20px / 28px |

---

## 📦 Deployment

The site can be deployed to any static hosting platform:

**Vercel**
```bash
npx vercel --prod
```

**Netlify** — drag and drop the `dist/` folder at [app.netlify.com](https://app.netlify.com)

**GitHub Pages** — use the `vite-plugin-gh-pages` package or GitHub Actions.

---

## 📄 License

MIT — free to use and modify.

---

<p align="center">Made with 💚 for cleaner spaces</p>
