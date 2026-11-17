import { site } from '../config/site';
import { profile } from '../data/profile';

/* Structured data (schema.org JSON-LD) shared across pages, so search engines and AI assistants
   can understand who the site is about and how pages relate. */

export const SITE_URL = 'https://sairohitp.github.io/sairohit/';
export const abs = (path: string) => new URL(path.replace(/^\//, ''), SITE_URL).toString();

/** Meta descriptions: whole sentences up to the limit, otherwise cut at a word boundary. */
export function clampText(text: string, max = 158): string {
  const t = text.replace(/\s+/g, ' ').trim();
  if (t.length <= max) return t;
  const sentences = t.match(/[^.!?]+[.!?]+/g) ?? [];
  let out = '';
  for (const s of sentences) {
    if ((out + s).trim().length > max) break;
    out += s;
  }
  if (out.trim().length >= 80) return out.trim();
  const cut = t.slice(0, t.lastIndexOf(' ', max - 1)).replace(/[,;:\s]+$/, '');
  return `${cut}…`;
}

export const personId = `${SITE_URL}#person`;
export const websiteId = `${SITE_URL}#website`;

export const person = {
  '@type': 'Person',
  '@id': personId,
  name: profile.name,
  alternateName: profile.shortName,
  jobTitle: profile.role,
  description: profile.headline,
  url: SITE_URL,
  image: abs('/og/home.jpg'),
  address: { '@type': 'PostalAddress', addressLocality: 'Bengaluru', addressCountry: 'IN' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'SRM Institute of Science and Technology' },
  worksFor: { '@type': 'Organization', name: 'Nasscom' },
  knowsAbout: [
    'Product design',
    'UX research',
    'User interface design',
    'Design systems',
    'Prototyping',
    'Figma',
    'React',
    'TypeScript',
    'Accessibility',
    'Enterprise software',
  ],
  sameAs: site.social.map((s) => s.href),
};

export const website = {
  '@type': 'WebSite',
  '@id': websiteId,
  url: SITE_URL,
  name: site.title,
  description: site.description,
  inLanguage: 'en',
  publisher: { '@id': personId },
  author: { '@id': personId },
};

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...items].map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

export function faqPage(items: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };
}

/** Wraps nodes in one @graph, always including the site and the person. */
export const graph = (nodes: object[]) => ({ '@context': 'https://schema.org', '@graph': [website, person, ...nodes] });
