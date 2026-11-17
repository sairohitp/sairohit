// @ts-check
import { defineConfig } from 'astro/config';

// Set `site` to the production URL once the domain is known (used for canonical/OG URLs).
// If deploying to a sub-path (e.g. GitHub Pages project site), also set `base`.
export default defineConfig({
  site: 'https://example.com',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
