import type { APIRoute } from 'astro';
import { sitePages } from '../data/routes';
import { abs } from '../lib/seo';

/* XML sitemap of every indexable page. Status pages are left out (they are noindex). */
export const GET: APIRoute = async () => {
  const today = new Date().toISOString().slice(0, 10);
  const pages = await sitePages();
  const priority = (p: string) => (p === '/' ? '1.0' : p.startsWith('/projects/') || p === '/about/' ? '0.9' : p.startsWith('/blog/') ? '0.7' : '0.6');
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .filter((p) => p !== '/status/')
  .map((p) => `  <url><loc>${abs(p)}</loc><lastmod>${today}</lastmod><priority>${priority(p)}</priority></url>`)
  .join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
