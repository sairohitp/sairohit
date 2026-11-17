# SEO and AI crawlability

## What the site already does

- Unique titles and descriptions, canonical URLs, Open Graph and Twitter cards on every page.
- schema.org JSON-LD on every page (Person, WebSite, ProfilePage, CreativeWork, BlogPosting, FAQPage, BreadcrumbList and more). Source: `src/lib/seo.ts`.
- `sitemap.xml`, `rss.xml`, an HTML sitemap at `/sitemap/`, `llms.txt` and `llms-full.txt`.
- Status pages that should not rank are marked `noindex`.

## One limitation of a project site, and the fix

Crawlers read `robots.txt` (RFC 9309) and `llms.txt` only at the root of the host: `https://sairohitp.github.io/robots.txt`. This site lives at `/sairohit/`, so its own copies at `/sairohit/robots.txt` and `/sairohit/llms.txt` are not picked up automatically. Without a root `robots.txt`, crawlers assume everything is allowed, so nothing is blocked today.

To declare the sitemap and AI-crawler rules at the root:

1. Create a public repository named `sairohitp.github.io` with Pages enabled.
2. Add a `robots.txt` with the same content as `https://sairohitp.github.io/sairohit/robots.txt`.
3. Optionally add `llms.txt` that links to `https://sairohitp.github.io/sairohit/llms.txt`.

A custom domain pointed at this repository removes the issue entirely.

## Search engines

1. Google Search Console: add the URL-prefix property `https://sairohitp.github.io/sairohit/`, verify with an HTML meta tag (add it to `src/layouts/Base.astro`), then submit `sitemap.xml`.
2. Bing Webmaster Tools: import from Search Console, or add the site and submit the same sitemap.
