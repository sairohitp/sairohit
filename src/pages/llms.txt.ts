import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { projects, projectHref, cardSubtitle } from '../data/projects';
import { campaigns } from '../data/visual';
import { profile, experience, built } from '../data/profile';
import { site } from '../config/site';
import { abs } from '../lib/seo';
import { totals } from '../data/figma';

/* llms.txt (https://llmstxt.org): a short, link-rich summary of the site for AI assistants. */
export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog', (p) => !p.data.draft)).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const body = [
    `# ${profile.name}, ${profile.role}`,
    '',
    `> ${profile.headline} Based in ${profile.location}. ${profile.now.join('; ')}.`,
    '',
    ...profile.summary,
    '',
    `The portfolio documents ${totals.files} Figma files (${totals.frames.toLocaleString('en-US')} frames, ${totals.layers.toLocaleString('en-US')} layers). A plain-text version of every case study is at ${abs('/llms-full.txt')}.`,
    '',
    '## Case studies',
    ...projects.map((p) => `- [${p.title}](${abs(projectHref(p))}): ${cardSubtitle(p)}, ${p.platform === 'mobile' ? 'mobile' : 'web'}${p.tags?.length ? `, ${p.tags.join(', ')}` : ''}`),
    '',
    '## Designed and built',
    ...built.map((b) => `- ${b.href ? `[${b.name}](${b.href})` : b.name}: ${b.tagline}${b.role ? ` (${b.role})` : ''}. Stack: ${b.stack.join(', ')}`),
    '',
    '## Experience',
    ...experience.map((x) => `- ${x.org}: ${x.roles.map((r) => r.title).join(', ')}`),
    '',
    '## Visual design',
    `- [Visual design](${abs('/visual/')}): campaigns for Google Developer Student Clubs, SRM IST`,
    ...campaigns.map((c) => `- [${c.title}](${abs(`/visual/#${c.id}`)}): ${c.items.length} files`),
    '',
    '## Writing',
    ...posts.map((p) => `- [${p.data.title}](${abs(`/blog/${p.id}/`)}): ${p.data.description}`),
    '',
    '## More',
    `- [About](${abs('/about/')}): experience, leadership, skills, education and recognition`,
    `- [Colleagues](${abs('/colleagues/')}): people named across the Figma files`,
    `- [Sitemap](${abs('/sitemap/')}): every page and section`,
    `- [Resume](${site.resume})`,
    ...site.social.map((s) => `- [${s.label}](${s.href})`),
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
