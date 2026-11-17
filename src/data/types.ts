import type { IconName } from '../icons';

/**
 * Media shown in a card, exhibit or cover.
 * Leave `src` out to render the striped placeholder (with `label` as a size hint).
 * Paths are relative to /public, e.g. "/images/projects/<slug>/cover.webp".
 */
export interface Media {
  kind?: 'image' | 'video';
  src?: string;
  /** Required for images once `src` is set; describes the content for screen readers. */
  alt?: string;
  /** Optional poster frame for videos. */
  poster?: string;
  /** Placeholder hint, e.g. "1600 x 1000". */
  label?: string;
  /** CSS aspect-ratio, e.g. "16 / 10". Defaults depend on the component. */
  ratio?: string;
}

export interface Caption {
  /** Short tag shown in the pill, e.g. "Image", "Video loop", "Prototype". */
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
}

export type Block =
  /** Overview metadata: role, team, timeline on the left; overview copy on the right. */
  | {
      type: 'meta';
      role: string;
      team: string[];
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
  /** Centred statement card (e.g. Highlights, The Challenge), optionally holding exhibits. */
  | {
      type: 'callout';
      label: string;
      statement: string;
      icon?: IconName;
      exhibits?: Exhibit[];
    };

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
  /** Hint for the placeholder cover. */
  platform: 'web' | 'mobile';
  /** Image on the home page card. */
  thumbnail?: Media;
  caseStudy: CaseStudy;
  /** Slug of the "Next Project". Defaults to the following project in the list. */
  next?: string;
}
