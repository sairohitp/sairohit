import { img } from './build';
import type { Project } from './types';
import { libraryManagementSystem } from './case-studies/library-management-system';
import { learningManagementSystem } from './case-studies/learning-management-system';
import { evCarRentalApp } from './case-studies/ev-car-rental-app';
import { onlineStreamingPlatform } from './case-studies/online-streaming-platform';
import { recycleAndDonateApp } from './case-studies/recycle-and-donate-app';
import { placementManagementSystem } from './case-studies/placement-management-system';
import { customerRelationshipManagement } from './case-studies/customer-relationship-management';
import { eventsBookingPortal } from './case-studies/events-booking-portal';
import { bloodDonationApp } from './case-studies/blood-donation-app';
import { musicStreamingApp } from './case-studies/music-streaming-app';
import { eventRegistration } from './case-studies/event-registration';
import { gdscWeb } from './case-studies/gdsc-web';

/*
 * Projects, in the order they appear on the home page.
 * Images live in /public/images/projects; case study copy lives in ./case-studies.
 */
export const projects: Project[] = [
  {
    slug: 'learning-management-system',
    title: 'Learning Management System',
    role: 'UI/UX Designer',
    org: 'TrainingMug',
    period: '2022 to 2024',
    tags: ['Admin console'],
    platform: 'web',
    thumbnail: img('learning-cover', 'TrainingMug admin console'),
    figma: 'https://www.figma.com/design/3yI7zx0AHbJtMmlhiU9M5E/Learning-Platform?node-id=0-1',
    caseStudy: learningManagementSystem,
  },
  {
    slug: 'recycle-and-donate-app',
    title: 'Recycle & Donate App',
    role: 'Apple Developer Program',
    period: '2023 to 2024',
    platform: 'mobile',
    thumbnail: img('recycle-cover', 'Greenwealth recycling app screens'),
    figma: 'https://www.figma.com/design/oeMbz94kS64xEfsPfJay3p/Recycle-Management-System?node-id=773-460',
    caseStudy: recycleAndDonateApp,
  },
  {
    slug: 'library-management-system',
    title: 'Library Management System',
    role: 'Internship',
    org: 'Infosys',
    tags: ['Team project'],
    platform: 'mobile',
    thumbnail: img('library-cover', 'Myshelf library app screens'),
    caseStudy: libraryManagementSystem,
  },
  {
    slug: 'ev-car-rental-app',
    title: 'EV Car Rental App',
    role: 'UI/UX Design Intern',
    org: 'Pluto',
    period: '2022',
    platform: 'mobile',
    thumbnail: img('pluto-cover', 'Pluto EV rental app screens'),
    figma: 'https://www.figma.com/design/SEhaYhmGrKilSDJvZcCafZ/Pluto?node-id=36-320',
    caseStudy: evCarRentalApp,
  },
  {
    slug: 'placement-management-system',
    title: 'Placement Management System',
    role: 'Passion Project',
    tags: ['Dashboard'],
    platform: 'web',
    thumbnail: img('placement-cover', 'Placerr placement dashboard'),
    figma: 'https://www.figma.com/design/QCccBLZf567WYvVjXAMXpl/Placement-Management-System?node-id=0-1',
    caseStudy: placementManagementSystem,
  },
  {
    slug: 'customer-relationship-management',
    title: 'Customer Relationship Management',
    role: 'Passion Project',
    tags: ['Team project'],
    platform: 'mobile',
    thumbnail: img('crm-cover', 'connectwise CRM app screens'),
    figma: 'https://www.figma.com/design/gK67n9PFZEKLUmOlqj22EZ/Customer-Relationship-Management?node-id=0-1',
    caseStudy: customerRelationshipManagement,
  },
  {
    slug: 'events-booking-portal',
    title: 'Events’ Booking Portal',
    role: 'Creatives & Photography Team Lead',
    org: 'GDG SRM',
    period: '2023 to 2024',
    platform: 'web',
    thumbnail: img('events-cover', 'BookMyEvent portal'),
    figma: 'https://www.figma.com/design/XUPnWTdd9FBZw5o9qZndLg/High-Fidelity-Design?node-id=0-1',
    caseStudy: eventsBookingPortal,
  },
  {
    slug: 'online-streaming-platform',
    title: 'Online Streaming Platform',
    role: 'Passion Project',
    platform: 'web',
    thumbnail: img('streaming-cover', 'heavenns streaming title page'),
    figma: 'https://www.figma.com/design/eah794fIM34dXUxnwUH9Lf/Online-Streaming-Platform?node-id=0-1',
    caseStudy: onlineStreamingPlatform,
  },
  {
    slug: 'blood-donation-app',
    title: 'Blood Donation App',
    role: 'Academic Project',
    org: 'SRM IST',
    tags: ['Team project'],
    platform: 'mobile',
    thumbnail: img('pulse-cover', 'PULSE blood donation app screens'),
    caseStudy: bloodDonationApp,
  },
  {
    slug: 'event-registration',
    title: 'Event Registration and Check-in',
    role: 'Creatives Team',
    org: 'GDSC SRM',
    period: '2022 to 2023',
    tags: ['Website', 'Admin app'],
    platform: 'web',
    thumbnail: img('registration-cover', 'GDSC SRM registration website'),
    caseStudy: eventRegistration,
  },
  {
    slug: 'gdsc-srm-web-and-brand',
    title: 'GDSC SRM Web and Brand',
    role: 'Creatives Team',
    org: 'GDSC SRM',
    period: '2022 to 2024',
    tags: ['Website', 'Design guide'],
    platform: 'web',
    thumbnail: img('gdsc-cover', 'GDSC SRM design guide and event visuals'),
    caseStudy: gdscWeb,
  },
  {
    slug: 'music-streaming-app',
    title: 'Music Streaming App',
    role: 'Passion Project',
    tags: ['Concept'],
    platform: 'mobile',
    thumbnail: img('music-cover', 'Music streaming app screens'),
    caseStudy: musicStreamingApp,
  },
];

/** Concepts that live in Figma but are not full case studies yet. */
export const explorations = [
  {
    title: 'E-commerce Platform',
    description: 'A marketplace redesign concept: sign-up, login and OTP, a category-rich home, an explore page with filters, and a product page with exchange and EMI options.',
    tags: ['Web', 'Wireframes'],
    image: '/images/visual/thumb-e-commerce-platform.webp',
    slug: 'ecommerce',
  },
  {
    title: 'Franchise News Co.',
    description: 'A news website concept with a story-led home page and long-form article pages showing update times and reading time.',
    tags: ['Web', 'Editorial'],
    image: '/images/visual/thumb-franchise-news-co.webp',
    slug: 'franchise',
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
