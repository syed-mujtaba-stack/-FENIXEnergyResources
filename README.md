# FENIX ENERGY RESOURCES — Website (React + Vite)

Premium Coal. Reliable Supply. Proven Performance.

Modern **React 18 + Vite 5 + React Router 6** rebuild of the FENIX ENERGY RESOURCES website — same content, same dark navy/emerald/gold theme, same animations, now component-based.

## Quick start

```bash
cd fenix-react
npm install      # already done in this workspace
npm run dev      # dev server → http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Project structure

```
fenix-react/
├── index.html               # Vite entry (fonts, favicon, SEO meta)
├── package.json
├── vite.config.js           # dev/preview host config
├── public/
│   └── images/              # 25 optimized images (logo + 24 coal/mining/industry photos)
│   └── robots.txt
├── src/
│   ├── main.jsx             # React root + BrowserRouter
│   ├── App.jsx              # routes
│   ├── index.css            # full design system (dark theme, animations, responsive)
│   ├── hooks/
│   │   └── useInView.js     # IntersectionObserver hook (scroll reveal + counters)
│   ├── components/
│   │   ├── Layout.jsx       # app shell: header state, scroll progress, back-to-top, route-change scroll reset
│   │   ├── Header.jsx       # sticky nav + mobile drawer (NavLink active states)
│   │   ├── Footer.jsx       # 4-column footer with contact info
│   │   ├── Preloader.jsx    # animated logo preloader
│   │   ├── Reveal.jsx       # scroll-reveal wrapper (up/left/right/zoom + delay)
│   │   ├── Counter.jsx      # count-up animation
│   │   ├── HeroParticles.jsx# canvas particle field (coal dust / embers)
│   │   ├── Marquee.jsx      # infinite coal-grade marquee
│   │   ├── PageHero.jsx     # shared sub-page hero
│   │   └── CtaBand.jsx      # reusable CTA band
│   ├── pages/
│   │   ├── Home.jsx  About.jsx  Services.jsx  Sourcing.jsx
│   │   ├── Industries.jsx  WhyUs.jsx  Contact.jsx  NotFound.jsx
│   └── test/smoke.mjs       # SSR smoke test — all routes render
└── dist/                    # production build output
```

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/services` | Services (all six) |
| `/sourcing` | Local & Global Sourcing |
| `/industries` | Industries We Serve |
| `/why-us` | Why Choose Us |
| `/contact` | Contact + quote form |
| `*` | Branded 404 |

## What was converted from the vanilla version

| Vanilla | React |
|---|---|
| 7 separate HTML files | 8 route components + shared Layout |
| `main.js` scroll/reveal/counter logic | `useInView` hook + `Reveal` / `Counter` components |
| Per-page duplicated header/footer | `Header.jsx` / `Footer.jsx` rendered once in `Layout.jsx` |
| Manual `class="active"` per page | `NavLink` handles active state automatically |
| DOM form validation | Controlled React state + validation |
| `window.scrollTo` on load | `useEffect` in Layout resets scroll on route change |

## Deploy

`npm run build` → upload the **`dist/`** folder to any static host (Netlify, Vercel, cPanel, Hostinger).
Because this is an SPA, add a rewrite rule so deep links work:

- **Netlify** — `public/_redirects`: `/*  /index.html  200`
- **Vercel** — `vercel.json`: `{ "rewrites": [{ "source": "/(.*)", "destination": "/" }] }`
- **Apache/cPanel** — `.htaccess`:
  ```apache
  <IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
  </IfModule>
  ```

## Notes

- **Contact form** is front-end only (validates + shows success). Connect Formspree/Web3Forms or your own endpoint in `src/pages/Contact.jsx`.
- Email `info@fenixsevener.com` is a placeholder — update in `Contact.jsx` and `Footer.jsx`.
- Verified: `npm run build` passes with 0 errors and all 8 routes render (SSR smoke test).
# -FENIXEnergyResources
