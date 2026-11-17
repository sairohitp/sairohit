import { placeholderCaseStudy } from './placeholder';
import type { Project } from './types';

/*
 * Projects, in the order they appear on the home page.
 * To add real content: set `thumbnail.src` and replace `caseStudy` (or edit parts of it).
 * Put images in /public/images/projects/<slug>/ and reference them as "/images/projects/<slug>/<file>".
 */
export const projects: Project[] = [
  {
    slug: 'library-management-system',
    title: 'Library Management System',
    role: 'Internship',
    org: 'Infosys',
    platform: 'mobile',
    caseStudy: placeholderCaseStudy(),
  },
  {
    slug: 'learning-management-system',
    title: 'Learning Management System',
    role: 'Internship',
    org: 'TrainingMug',
    period: "June '23",
    platform: 'web',
    caseStudy: placeholderCaseStudy(),
  },
  {
    slug: 'ev-car-rental-app',
    title: 'EV Car Rental App',
    role: 'Internship',
    org: 'Pluto',
    platform: 'mobile',
    caseStudy: placeholderCaseStudy(),
  },
  {
    slug: 'online-streaming-platform',
    title: 'Online Streaming Platform',
    role: 'Passion Project',
    platform: 'web',
    caseStudy: placeholderCaseStudy(),
  },
  {
    slug: 'recycle-and-donate-app',
    title: 'Recycle & Donate App',
    role: 'Internship',
    org: 'Apple',
    platform: 'mobile',
    caseStudy: placeholderCaseStudy(),
  },
  {
    slug: 'placement-management-system',
    title: 'Placement Management System',
    role: 'Passion Project',
    platform: 'web',
    caseStudy: placeholderCaseStudy(),
  },
  {
    slug: 'customer-relationship-management',
    title: 'Customer Relationship Management',
    role: 'Passion Project',
    platform: 'mobile',
    caseStudy: placeholderCaseStudy(),
  },
  {
    slug: 'events-booking-portal',
    title: 'Events’ Booking Portal',
    role: 'Creatives & Photography Lead',
    org: 'GDSC SRM',
    platform: 'web',
    caseStudy: placeholderCaseStudy(),
  },
];

/** "Internship, Infosys" style line used on cards. */
export const cardSubtitle = (p: Project) => (p.org ? `${p.role}, ${p.org}` : p.role);

/** "Infosys, Internship · June '23" style line used on the case study header. */
export const pageSubtitle = (p: Project) =>
  [p.org ? `${p.org}, ${p.role}` : p.role, p.period].filter(Boolean).join(' · ');

export const projectHref = (p: Project) => `/projects/${p.slug}/`;

export function nextProject(p: Project): Project {
  if (p.next) {
    const found = projects.find((x) => x.slug === p.next);
    if (found) return found;
  }
  const i = projects.findIndex((x) => x.slug === p.slug);
  return projects[(i + 1) % projects.length];
}
