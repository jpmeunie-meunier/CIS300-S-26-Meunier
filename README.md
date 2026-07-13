# J&W Windows

Website for J&W Windows, a family-owned window and exterior cleaning company serving Chester, Montgomery, Delaware, and Carbon counties in Pennsylvania.

## Stack

| Tool | Purpose |
|------|---------|
| [Vite](https://vitejs.dev) | Dev server and multi-page build |
| [Tailwind CSS 3](https://tailwindcss.com) | Utility-first styling |
| [Alpine.js](https://alpinejs.dev) | Scroll-triggered nav, mobile menu |
| [DM Serif Display + Inter](https://fonts.google.com) | Typography via Google Fonts |

## Getting Started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # preview the production build locally
```

## Structure

```
/
├── index.html              # Homepage
├── about/index.html        # /about/
├── services/index.html     # /services/
├── gallery/index.html      # /gallery/
├── reviews/index.html      # /reviews/
├── contact/index.html      # /contact/
├── src/
│   ├── main.css            # Tailwind + all component styles
│   └── main.js             # Alpine.js setup
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── dist/                   # Production build output (git-ignored)
```

Media assets (images and videos) live at the project root and are referenced via relative paths from each page (`../filename.ext` from subdirectories).

## Pages

| Route | File | Description |
|-------|------|-------------|
| `/` | `index.html` | Hero video, services grid, testimonial, about teaser |
| `/about/` | `about/index.html` | Company story, founders, differentiators |
| `/services/` | `services/index.html` | Full service descriptions + pricing table |
| `/gallery/` | `gallery/index.html` | Before/after photos, demo video |
| `/reviews/` | `reviews/index.html` | Customer testimonials, Google review link |
| `/contact/` | `contact/index.html` | Quote request form, contact info |

## Deployment

The `dist/` folder is the deployable output. Each page builds to a subdirectory (`dist/about/index.html`, etc.) which gives clean URLs on any static host.

**GitHub Pages:** Deploy from the `dist/` folder via a GitHub Actions workflow, or push `dist/` contents to a `gh-pages` branch. The `.nojekyll` file should be included in the output (add it to a `public/` folder or copy it in CI).

**Netlify / Vercel:** Point the publish directory to `dist/`. Clean URLs work out of the box.

> If deploying to a GitHub Pages project site at a sub-path (e.g. `username.github.io/repo-name/`), set `base: '/repo-name/'` in `vite.config.js`.

## Contact

- Phone: +1 (484)-356-4168
- Email: 23jmeunier@gmail.com
- Google Business: [Leave a review](https://g.page/r/CaxtA_Q3yh1cEAI/review)
