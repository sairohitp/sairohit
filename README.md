# Sai Rohit Portfolio

Static portfolio site built with [Astro](https://astro.build). Dark theme, Inter (variable) across the site, global letter spacing of `-0.35px`, fully responsive.

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
| Projects (order, titles, subtitles, images) | `src/data/projects.ts` |
| Case study skeleton shared by every project | `src/data/placeholder.ts` |
| Content block types | `src/data/types.ts` |
| Design tokens (colours, font, tracking, radii) | `src/styles/global.css` |
| Resume PDF | `public/resume.pdf` |
| Project images and videos | `public/images/projects/<slug>/` |

## Replacing placeholders

Any media without a `src` renders as a striped placeholder showing the recommended export size.

```ts
// src/data/projects.ts
thumbnail: { src: '/images/projects/ev-car-rental-app/cover.webp', alt: 'EV Car Rental App screens' },
```

For a case study, edit the project's `caseStudy` (start from `placeholderCaseStudy()` and override sections), e.g. set `media: { src: '/images/projects/<slug>/flow.webp', alt: '...' }` on an exhibit. Videos (`.mp4`, `.webm`) autoplay muted on loop.
