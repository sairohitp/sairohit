// @ts-check
import { defineConfig } from 'astro/config';

// Hosted on GitHub Pages as a project site: https://sairohitp.github.io/sairohit/
// If the repository is renamed to "sairohitp.github.io" or a custom domain is added,
// change `site` accordingly and set `base` to '/'.
export default defineConfig({
  site: 'https://sairohitp.github.io',
  base: '/sairohit',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
