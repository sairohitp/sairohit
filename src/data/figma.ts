import data from './figma-files.json';

/*
 * Everything decoded from the 74 Figma files: pages, frames, text labels, fonts, colours,
 * components, prototype links and notes left on the canvas. Generated from the .fig files
 * (see docs/MASTER_PLAN.md); regenerate rather than edit by hand.
 */

export interface FigFrame {
  n: string;
  w: number;
  h: number;
  /** Section on the canvas, if the frame sits inside one. */
  s?: string;
  /** Prototype connections starting in this frame. */
  l?: number;
}

export interface FigPage {
  name: string;
  frames: FigFrame[];
  text: string[];
  textTotal: number;
}

export interface FigFile {
  key: string;
  title: string;
  target: { kind: 'project' | 'visual' | 'exploration'; slug: string | null };
  stats: {
    pages: number;
    frames: number;
    layers: number;
    textLayers: number;
    components: number;
    instances: number;
    prototypeLinks: number;
    images: number;
    vectors: number;
  };
  pages: FigPage[];
  fonts: { family: string; styles: string[]; count: number }[];
  sizes: [number, number][];
  colors: [string, number][];
  components: [string, number][];
  instances: [string, number][];
  notes: { page: string; text: string }[];
}

export const figFiles: FigFile[] = Object.entries(data as Record<string, Omit<FigFile, 'key'>>).map(([key, f]) => ({ key, ...f }));

export const filesFor = (kind: FigFile['target']['kind'], slug: string) =>
  figFiles.filter((f) => f.target.kind === kind && f.target.slug === slug);

export const totals = figFiles.reduce(
  (t, f) => ({
    files: t.files + 1,
    pages: t.pages + f.stats.pages,
    frames: t.frames + f.stats.frames,
    layers: t.layers + f.stats.layers,
    textLayers: t.textLayers + f.stats.textLayers,
    prototypeLinks: t.prototypeLinks + f.stats.prototypeLinks,
  }),
  { files: 0, pages: 0, frames: 0, layers: 0, textLayers: 0, prototypeLinks: 0 },
);

/** "Mobile", "Tablet", "Desktop" and so on, from a frame's size. */
export function frameKind(w: number, h: number): string {
  if (w === 1080 && h === 1080) return 'Square post';
  if (w === 1080 && (h === 1920 || h === 1350)) return 'Story';
  if (w <= 480) return 'Mobile';
  if (w <= 1024) return w > h ? 'Landscape' : 'Tablet';
  if (h > 2600) return 'Long page';
  return 'Desktop';
}
