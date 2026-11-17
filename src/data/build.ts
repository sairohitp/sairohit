import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import type { Block, Card, Caption, Exhibit, FlowStep, Media, Section, Stat, Swatch, TreeGroup } from './types';

/* Helpers that keep the case study files readable, plus automatic image discovery. */

const PUBLIC = join(process.cwd(), 'public');
/** Your own exports (png/jpg) take priority over the generated webp files with the same name. */
const IMAGE_EXT = ['png', 'jpg', 'jpeg', 'webp'];
const VIDEO_EXT = ['mp4', 'webm'];

function find(name: string, exts: string[]): string | undefined {
  for (const ext of exts) {
    const rel = `/images/projects/${name}.${ext}`;
    if (existsSync(join(PUBLIC, rel))) return rel;
  }
  return undefined;
}

/** Reads pixel dimensions from PNG, JPEG or WebP headers. */
function dimensions(buf: Buffer): [number, number] | undefined {
  if (buf.length > 24 && buf.readUInt32BE(0) === 0x89504e47) return [buf.readUInt32BE(16), buf.readUInt32BE(20)];
  if (buf.length > 30 && buf.toString('ascii', 0, 4) === 'RIFF' && buf.toString('ascii', 8, 12) === 'WEBP') {
    const chunk = buf.toString('ascii', 12, 16);
    if (chunk === 'VP8 ') return [buf.readUInt16LE(26) & 0x3fff, buf.readUInt16LE(28) & 0x3fff];
    if (chunk === 'VP8L') {
      const b0 = buf[21], b1 = buf[22], b2 = buf[23], b3 = buf[24];
      return [1 + (((b1 & 0x3f) << 8) | b0), 1 + (((b3 & 0xf) << 10) | (b2 << 2) | ((b1 & 0xc0) >> 6))];
    }
    if (chunk === 'VP8X') return [1 + buf.readUIntLE(24, 3), 1 + buf.readUIntLE(27, 3)];
  }
  if (buf[0] === 0xff && buf[1] === 0xd8) {
    let off = 2;
    while (off + 9 < buf.length && buf[off] === 0xff) {
      const marker = buf[off + 1];
      const len = buf.readUInt16BE(off + 2);
      if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
        return [buf.readUInt16BE(off + 7), buf.readUInt16BE(off + 5)];
      }
      off += 2 + len;
    }
  }
  return undefined;
}

/** Image in /public/images/projects (any of png, jpg, webp), or undefined when the file is not there. */
export function maybeImg(name: string, alt: string, extra: Partial<Media> = {}): Media | undefined {
  const src = find(name, IMAGE_EXT);
  if (!src) return undefined;
  const size = dimensions(readFileSync(join(PUBLIC, src)));
  return { src, alt, ratio: size ? `${size[0]} / ${size[1]}` : undefined, ...extra };
}

/** Required image: the build fails with a clear message if it is missing. */
export function img(name: string, alt: string, extra: Partial<Media> = {}): Media {
  const media = maybeImg(name, alt, extra);
  if (!media) throw new Error(`Missing image: public/images/projects/${name}.(png|jpg|webp)`);
  return media;
}

export function maybeVideo(name: string, alt: string, ratio = '16 / 10'): Media | undefined {
  const src = find(name, VIDEO_EXT);
  return src ? { kind: 'video', src, alt, ratio } : undefined;
}

/** Large board image that pans slowly inside a 16:9 frame. */
export const board = (key: string, alt: string): Media => img(`${key}-board`, alt, { pan: true });

export const cap = (number: string, type: string, textValue: string): Caption => ({ number, type, text: textValue });

export const exhibit = (media: Media, caption?: Caption, size?: Exhibit['size']): Block => ({
  type: 'exhibit',
  media,
  caption,
  size,
});

export const compare = (base: Media, top: Media, caption?: Caption): Block => ({ type: 'compare', base, top, caption });

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

type Maybe<T> = T | null | undefined | false;
const present = <T,>(list: Maybe<T>[]): T[] => list.filter(Boolean) as T[];

export const highlights = (statement: string, extra: { exhibits?: Maybe<Exhibit>[]; stats?: Stat[] } = {}): Block => ({
  type: 'callout',
  label: 'Highlights',
  icon: 'sparkle',
  statement,
  stats: extra.stats,
  exhibits: extra.exhibits ? present(extra.exhibits) : undefined,
});

export const flow = (steps: (string | FlowStep)[], caption?: Caption): Block => ({
  type: 'flow',
  steps: steps.map((s) => (typeof s === 'string' ? { label: s } : s)),
  caption,
});

export const tree = (root: string, groups: TreeGroup[], caption?: Caption): Block => ({ type: 'tree', root, groups, caption });

export const palette = (swatches: Swatch[], caption?: Caption): Block => ({ type: 'palette', swatches, caption });

export const stats = (items: Stat[]): Block => ({ type: 'stats', items });

export const section = (id: string, label: string, title: string, blocks: Maybe<Block>[]): Section => ({
  id,
  label,
  title,
  blocks: present(blocks),
});

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

/* ---------------------------------------------------------------
   Optional slots: these appear automatically once the file exists.
   --------------------------------------------------------------- */

/** public/images/projects/<key>-prototype.mp4 (or .webm): a screen recording of the prototype. */
export function prototype(key: string): Exhibit | null {
  const media = maybeVideo(`${key}-prototype`, 'Prototype walkthrough');
  return media ? { media, caption: cap('0.0', 'Video loop', 'Prototype walkthrough') } : null;
}

/** public/images/projects/<key>-research.(png|jpg): research synthesis, personas or survey results. */
export function research(key: string): Block | null {
  const media = maybeImg(`${key}-research`, 'Research synthesis');
  return media ? exhibit(media, cap('1.1', 'Research', 'Research synthesis')) : null;
}

/** public/images/projects/<key>-wireframes.(png|jpg): early wireframes or sketches. */
export function wireframes(key: string): Block | null {
  const media = maybeImg(`${key}-wireframes`, 'Early wireframes');
  return media ? exhibit(media, cap('3.2', 'Wireframes', 'Early wireframes')) : null;
}

/** Layout block: structure view traced from the final screens, compared with the final screens. */
export function structure(key: string, alt: string, captionText: string, crop = 'a'): Block {
  return compare(
    img(`${key}-structure`, 'Layout structure traced from the final screens'),
    img(`${key}-${crop}`, alt),
    cap('4.0', 'Structure', captionText),
  );
}

/* ---------------------------------------------------------------
   FAQs, goals and auto-discovered screen galleries
   --------------------------------------------------------------- */

export const faq = (items: { q: string; a: string }[]): Block => ({ type: 'faq', items });

const SDG: Record<number, [string, string]> = {
  3: ['Good Health and Well-being', '#4C9F38'],
  9: ['Industry, Innovation and Infrastructure', '#FD6925'],
  11: ['Sustainable Cities and Communities', '#FD9D24'],
  12: ['Responsible Consumption and Production', '#BF8B2E'],
  13: ['Climate Action', '#3F7E44'],
  15: ['Life on Land', '#56C02B'],
};

export const sdgs = (numbers: number[], caption?: Caption): Block => ({
  type: 'goals',
  items: numbers.map((n) => ({ number: n, name: SDG[n][0], color: SDG[n][1] })),
  caption,
});

/**
 * Every file named public/images/projects/<key>-screen-*.{png,jpg,webp} becomes part of a gallery.
 * Export screens with that naming (see docs/EXPORTS.md) and they appear automatically.
 */
export function moreScreens(key: string, number: string): Block | null {
  const dir = join(PUBLIC, 'images/projects');
  const names = readdirSync(dir)
    .filter((f) => f.startsWith(`${key}-screen-`) && /\.(png|jpe?g|webp)$/i.test(f))
    .map((f) => f.replace(/\.(png|jpe?g|webp)$/i, ''));
  const unique = [...new Set(names)].sort();
  if (!unique.length) return null;
  const label = (n: string) => {
    const s = n.replace(`${key}-screen-`, '');
    if (s.startsWith('behance')) return 'Behance presentation board';
    const t = s.replace(/-/g, ' ');
    return t.charAt(0).toUpperCase() + t.slice(1);
  };
  const items = unique.map((n) => maybeImg(n, label(n))).filter(Boolean) as Media[];
  return {
    type: 'gallery',
    items,
    caption: cap(number, 'Screens', `${items.length} ${items.length === 1 ? 'screen' : 'screens and boards'} rendered inside the Figma files`),
  };
}
