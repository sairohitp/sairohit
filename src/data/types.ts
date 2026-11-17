import type { IconName } from '../icons';

/**
 * Media shown in a card, exhibit or cover.
 * Leave `src` out to render the striped placeholder (with `label` as a size hint).
 * Paths are relative to /public, e.g. "/images/projects/<slug>-cover.webp".
 */
export interface Media {
  kind?: 'image' | 'video';
  src?: string;
  /** Describes the content for screen readers. */
  alt?: string;
  /** Optional poster frame for videos. */
  poster?: string;
  /** Placeholder hint, e.g. "1600 x 1000". */
  label?: string;
  /** CSS aspect-ratio, e.g. "16 / 10". */
  ratio?: string;
  /** Slowly pan across a large image inside a 16:9 frame ("animated view"). */
  pan?: boolean;
}

export interface Caption {
  /** Short tag shown in the pill, e.g. "Screens", "Diagram". */
  type: string;
  /** Exhibit number, e.g. "1.0". */
  number: string;
  text: string;
}

export interface Card {
  icon?: IconName;
  title?: string;
  text: string;
}

export interface Exhibit {
  media?: Media;
  caption?: Caption;
  /** "half" renders the exhibit at half width, centred (for tall images). */
  size?: 'full' | 'half';
}

export interface FlowStep {
  label: string;
  note?: string;
}

export interface TreeGroup {
  label: string;
  items: string[];
}

export interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface Swatch {
  name: string;
  hex: string;
}

export type Block =
  /** Overview metadata: role, team, timeline on the left; overview copy on the right. */
  | {
      type: 'meta';
      role: string;
      team?: string[];
      timeline: string;
      overview: string[];
    }
  /** Two columns: heading on the left; paragraphs, an icon list and/or cards on the right. */
  | {
      type: 'text';
      heading: string;
      body?: string[];
      list?: Card[];
      cards?: Card[];
    }
  /** Full-width image or video with an optional caption row. */
  | ({ type: 'exhibit' } & Exhibit)
  /** Two exhibits side by side, each optionally followed by cards. */
  | {
      type: 'exhibitPair';
      items: (Exhibit & { cards?: Card[] })[];
    }
  /** Two-column grid of cards. */
  | { type: 'cardGrid'; cards: Card[] }
  /** Centred statement card (e.g. Highlights, The Challenge), optionally holding exhibits or stats. */
  | {
      type: 'callout';
      label: string;
      statement: string;
      icon?: IconName;
      exhibits?: Exhibit[];
      stats?: Stat[];
    }
  /** Animated step-by-step flow diagram. */
  | { type: 'flow'; steps: FlowStep[]; caption?: Caption }
  /** Animated information architecture diagram. */
  | { type: 'tree'; root: string; groups: TreeGroup[]; caption?: Caption }
  /** Animated colour palette. */
  | { type: 'palette'; swatches: Swatch[]; caption?: Caption }
  /** Animated counters. */
  | { type: 'stats'; items: Stat[] }
  /** Drag-to-compare: base image on the left, top image on the right. */
  | { type: 'compare'; base: Media; top: Media; caption?: Caption }
  /** Frequently asked questions, rendered as an accordion. */
  | { type: 'faq'; items: { q: string; a: string }[] }
  /** Coloured goal tiles, e.g. UN Sustainable Development Goals. */
  | { type: 'goals'; items: { number: number; name: string; color: string }[]; caption?: Caption }
  /** Image grid with a lightbox. */
  | { type: 'gallery'; items: Media[]; caption?: Caption };

export interface Section {
  /** Anchor id used by the contents list. */
  id: string;
  /** Label in the contents list and the section eyebrow. */
  label: string;
  /** Section headline. When omitted, no section header is rendered. */
  title?: string;
  /** Draw a divider above the section (default true). */
  divider?: boolean;
  blocks: Block[];
}

export interface CaseStudy {
  cover?: Media;
  sections: Section[];
}

export interface Project {
  slug: string;
  title: string;
  /** e.g. "Internship", "Passion Project". */
  role: string;
  /** Company or organisation, if any. */
  org?: string;
  /** e.g. "June '23". Shown on the case study page only. */
  period?: string;
  /** Used for the work filter and the card tags. */
  platform: 'web' | 'mobile';
  /** Extra tags shown on the card, e.g. "Enterprise". */
  tags?: string[];
  /** Image on the home page card. */
  thumbnail?: Media;
  /** Link to the Figma file, shown as a button on the case study. */
  figma?: string;
  caseStudy: CaseStudy;
  /** Slug of the "Next Project". Defaults to the following project in the list. */
  next?: string;
}
