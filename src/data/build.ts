import sizes from './image-sizes.json';
import type { Block, Card, Caption, Exhibit, FlowStep, Media, Section, Stat, Swatch, TreeGroup } from './types';

/* Small helpers that keep the case study files readable. */

const sizeMap = sizes as Record<string, [number, number]>;

/** Image in /public/images/projects with its real aspect ratio. */
export function img(name: string, alt: string, extra: Partial<Media> = {}): Media {
  const src = `/images/projects/${name}.webp`;
  const size = sizeMap[src];
  if (!size) throw new Error(`Unknown image: ${src}`);
  return { src, alt, ratio: `${size[0]} / ${size[1]}`, ...extra };
}

/** Large board image that pans slowly inside a 16:9 frame. */
export const board = (slug: string, alt: string): Media => img(`${slug}-board`, alt, { pan: true });

export const cap = (number: string, type: string, text: string): Caption => ({ number, type, text });

export const exhibit = (media: Media, caption?: Caption, size?: Exhibit['size']): Block => ({
  type: 'exhibit',
  media,
  caption,
  size,
});

export const pair = (items: (Exhibit & { cards?: Card[] })[]): Block => ({ type: 'exhibitPair', items });

export const text = (heading: string, body: string[], extra: { list?: Card[]; cards?: Card[] } = {}): Block => ({
  type: 'text',
  heading,
  body,
  ...extra,
});

export const card = (title: string, textValue: string, icon: Card['icon'] = 'sun'): Card => ({ icon, title, text: textValue });

export const item = (icon: Card['icon'], textValue: string): Card => ({ icon, text: textValue });

export const grid = (cards: Card[]): Block => ({ type: 'cardGrid', cards });

export const challenge = (statement: string): Block => ({
  type: 'callout',
  label: 'The Challenge',
  icon: 'sun-light',
  statement,
});

export const highlights = (statement: string, extra: { exhibits?: Exhibit[]; stats?: Stat[] } = {}): Block => ({
  type: 'callout',
  label: 'Highlights',
  icon: 'sparkle',
  statement,
  ...extra,
});

export const flow = (steps: (string | FlowStep)[], caption?: Caption): Block => ({
  type: 'flow',
  steps: steps.map((s) => (typeof s === 'string' ? { label: s } : s)),
  caption,
});

export const tree = (root: string, groups: TreeGroup[], caption?: Caption): Block => ({ type: 'tree', root, groups, caption });

export const palette = (swatches: Swatch[], caption?: Caption): Block => ({ type: 'palette', swatches, caption });

export const stats = (items: Stat[]): Block => ({ type: 'stats', items });

export const section = (id: string, label: string, title: string, blocks: Block[]): Section => ({ id, label, title, blocks });

export const overview = (meta: { role: string; team?: string[]; timeline: string; overview: string[] }): Section => ({
  id: 'overview',
  label: 'Overview',
  divider: false,
  blocks: [{ type: 'meta', ...meta }],
});

export const highlightsSection = (block: Block): Section => ({
  id: 'highlights',
  label: 'Highlights',
  divider: false,
  blocks: [block],
});
