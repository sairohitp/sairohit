# Sai Rohit Portfolio

Static portfolio site built with [Astro](https://astro.build). Dark theme, Inter (variable) across the site, global letter spacing of `-0.35px`, fully responsive, with subtle motion throughout.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Where things live

| What | File |
| --- | --- |
| Name, nav, social and footer links | `src/config/site.ts` |
| Projects (order, titles, subtitles, thumbnails, Figma links) | `src/data/projects.ts` |
| Case study copy and blocks, one file per project | `src/data/case-studies/*.ts` |
| Block helpers (`text`, `exhibit`, `flow`, `tree`, `palette`, ...) | `src/data/build.ts` |
| About page | `src/pages/about.astro` |
| Design tokens (colours, font, tracking, radii) | `src/styles/global.css` |
| Motion (reveals, loops, page transitions) | `src/styles/motion.css`, `src/scripts/motion.ts` |
| Images | `public/images/projects/`, `public/images/about/`, list in `docs/IMAGES.md` |
| Structure views generator (runs before every build) | `scripts/structure.mjs` |

## Images

See [docs/IMAGES.md](docs/IMAGES.md) for the full list. In short: push a file with the same name as an existing image into `public/images/projects/` (`.png`, `.jpg` or `.webp`) and it replaces the old one automatically. Optional prototype videos, wireframes and research boards appear on their own once their files exist.

## Hosting (GitHub Pages)

`.github/workflows/deploy.yml` builds and deploys the site on every push to the repository's default branch. One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**. The site is served at https://sairohitp.github.io/sairohit/ (base path configured in `astro.config.mjs`).

## Motion

Elements animate in on scroll via `data-reveal` (`fade`, `left`, `right`, `rise`, `pop`, `scale`, `blur`, `clip`, `line`), with `data-stagger` on a parent to sequence children. Diagrams draw themselves, numbers count up, boards pan slowly ("animated view"), and pages cross-fade between routes. All motion is disabled for visitors who prefer reduced motion.

## Framework at a glance

- Case studies: `src/data/projects.ts` plus `src/data/case-studies/<slug>.ts`, built from typed blocks (`src/data/build.ts`).
- Figma anatomy: `src/data/figma-files.json`, rendered by `src/components/case/FileAnatomy.astro`.
- Screens: any `public/images/projects/<key>-screen-*.{png,jpg,webp}` joins that project's gallery automatically.
- Pages: Home, About, Visual, Blog, Colleagues, Sitemap, Status (200 and designed error pages), 404.
- Preferences and sticky navigation: `src/scripts/prefs.ts`, `src/config/prefs.ts`, `src/styles/nav.css`.
- SEO: `src/lib/seo.ts`, `sitemap.xml`, `robots.txt`, `llms.txt`, `llms-full.txt`. See `docs/SEO.md`.
- Plan and inventory: `docs/MASTER_PLAN.md`, `docs/figma-inventory.csv`, optional exports in `docs/EXPORTS.md`.
