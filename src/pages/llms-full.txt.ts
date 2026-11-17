import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { projects } from '../data/projects';
import { profile } from '../data/profile';
import { caseStudyText } from '../lib/plaintext';
import { abs } from '../lib/seo';

/* The full text of every case study and blog post, for AI assistants and offline reading. */
export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog', (p) => !p.data.draft)).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const body = [
    `# ${profile.name}, ${profile.role}: full portfolio text`,
    '',
    `> ${profile.headline} Summary: ${abs('/llms.txt')}`,
    '',
    '# Case studies',
    '',
    ...projects.map((p) => caseStudyText(p) + '\n'),
    '# Blog posts',
    '',
    ...posts.map((p) => [`## ${p.data.title}`, `URL: ${abs(`/blog/${p.id}/`)}`, `Published: ${p.data.date.toISOString().slice(0, 10)}`, '', p.body ?? '', ''].join('\n')),
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
