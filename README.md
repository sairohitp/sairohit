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
| Images | `public/images/projects/`, `public/images/about/` |

## Adding or replacing images

1. Export the image as WebP into `public/images/projects/` (e.g. `pluto-onboarding.webp`).
2. Refresh the size manifest so aspect ratios stay correct:

```bash
python3 -c "import json,glob;from PIL import Image;json.dump({f[6:]:list(Image.open(f).size) for f in sorted(glob.glob('public/images/**/*.webp',recursive=True))},open('src/data/image-sizes.json','w'),indent=1)"
```

3. Reference it in a case study with `img('pluto-onboarding', 'Alt text')`.

## Motion

Elements animate in on scroll via `data-reveal` (`fade`, `left`, `right`, `rise`, `pop`, `scale`, `blur`, `clip`, `line`), with `data-stagger` on a parent to sequence children. Diagrams draw themselves, numbers count up, boards pan slowly ("animated view"), and pages cross-fade between routes. All motion is disabled for visitors who prefer reduced motion.
