import { getCollection, render } from 'astro:content';
import { projects, projectHref } from './projects';
import { campaigns } from './visual';
import { site } from '../config/site';

/* One map of every page and in-page section. Used by the Sitemap page, llms.txt and the XML sitemap. */

export interface RouteLink {
  label: string;
  href: string;
  external?: boolean;
  children?: RouteLink[];
}

export interface RouteGroup {
  title: string;
  href?: string;
  description: string;
  links: RouteLink[];
}

export const aboutToc = [
  { id: 'intro', label: 'About me' },
  { id: 'timeline', label: 'Career at a glance' },
  { id: 'experience', label: 'Experience' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'skills', label: 'Skills and education' },
  { id: 'recognition', label: 'Recognition' },
  { id: 'faq', label: 'Questions' },
];

export async function siteTree(): Promise<RouteGroup[]> {
  const posts = (await getCollection('blog', (p) => !p.data.draft)).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const postLinks: RouteLink[] = [];
  for (const p of posts) {
    const { headings } = await render(p);
    postLinks.push({
      label: p.data.title,
      href: `/blog/${p.id}/`,
      children: headings.filter((h) => h.depth === 2).map((h) => ({ label: h.text, href: `/blog/${p.id}/#${h.slug}` })),
    });
  }

  return [
    {
      title: 'Home',
      href: '/',
      description: 'Introduction, selected work and recent writing.',
      links: [
        { label: 'Introduction', href: '/#hero-title' },
        { label: 'Case studies', href: '/#work' },
        { label: 'Explorations', href: '/#explorations-title' },
        { label: 'Visual design', href: '/#visual-teaser-title' },
        { label: 'Designed and built', href: '/#built-title' },
        { label: 'Where I have worked', href: '/#xp-title' },
        { label: 'From the blog', href: '/#writing-title' },
      ],
    },
    {
      title: 'Case studies',
      href: '/#work',
      description: `${projects.length} product case studies, each with its sections.`,
      links: projects.map((p) => ({
        label: p.title,
        href: projectHref(p),
        children: p.caseStudy.sections.map((s) => ({ label: s.label, href: `${projectHref(p)}#${s.id}` })),
      })),
    },
    {
      title: 'Visual design',
      href: '/visual/',
      description: 'Campaigns for Google Developer Student Clubs, SRM IST.',
      links: [{ label: 'Event identities', href: '/visual/#key-title' }, ...campaigns.map((c) => ({ label: c.title, href: `/visual/#${c.id}` }))],
    },
    {
      title: 'About',
      href: '/about/',
      description: 'Experience, leadership, skills, education and recognition.',
      links: aboutToc.map((t) => ({ label: t.label, href: `/about/#${t.id}` })),
    },
    {
      title: 'Blog',
      href: '/blog/',
      description: `${posts.length} posts on design, building and teaching.`,
      links: postLinks,
    },
    {
      title: 'People and site',
      description: 'Credits, this map and machine-readable feeds.',
      links: [
        { label: 'Colleagues', href: '/colleagues/' },
        { label: 'Explorations', href: '/explorations/' },
        { label: 'Sitemap', href: '/sitemap/' },
        { label: 'Site status', href: '/status/' },
        { label: 'RSS feed', href: '/rss.xml' },
        { label: 'XML sitemap', href: '/sitemap.xml' },
        { label: 'llms.txt', href: '/llms.txt' },
      ],
    },
    {
      title: 'Elsewhere',
      description: 'Resume, profiles and the Figma files behind the case studies.',
      links: [
        { label: 'Resume', href: site.resume, external: true },
        ...site.social.map((s) => ({ label: s.label, href: s.href, external: true })),
        ...projects.filter((p) => p.figma).map((p) => ({ label: `${p.title} in Figma`, href: p.figma!, external: true })),
      ],
    },
  ];
}

/** Every internal page path (no anchors), for the XML sitemap and llms.txt. */
export async function sitePages(): Promise<string[]> {
  const posts = await getCollection('blog', (p) => !p.data.draft);
  return [
    '/',
    '/about/',
    '/visual/',
    '/blog/',
    ...posts.map((p) => `/blog/${p.id}/`),
    ...projects.map((p) => projectHref(p)),
    '/colleagues/',
    '/explorations/',
    '/sitemap/',
    '/status/',
  ];
}
