import rss from '@astrojs/rss';
import { getPosts } from '../lib/blog';

export async function GET(context) {
  const posts = await getPosts();
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return rss({
    title: 'Sai Rohit | Blog',
    description: 'Notes on designing data-heavy products, design engineering, accessibility and teaching design.',
    site: new URL(`${base}/`, context.site),
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: `${base}/blog/${p.id}/`,
      categories: p.data.tags,
    })),
  });
}
