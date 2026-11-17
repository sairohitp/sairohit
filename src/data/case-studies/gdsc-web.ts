import { board, cap, faq, moreScreens, card, exhibit, grid, highlights, highlightsSection, img, overview, palette, section, text, tree } from '../build';
import type { CaseStudy } from '../types';

// Sources: GDSCSRM.fig, Website.fig (2023 Solution Challenge), Email Headers (2023).fig and Banners.fig.
export const gdscWeb: CaseStudy = {
  cover: img('gdsc-hero', 'Hero mockup: GDSC SRM brand guide and event visuals'),
  sections: [
    overview({
      role: 'Web and brand design: website structure, design guide, microsite and email headers',
      team: ['GDSC SRM'],
      timeline: 'GDSC SRM, 2022 to 2024',
      overview: [
        'The club needed a web presence that matched its energy: a main website, a design guide to keep everything consistent, and focused microsites for big programmes.',
        'I designed the GDSC SRM website structure and pages, a design guide built on Google’s Material colour tool, a microsite for the 2023 Solution Challenge, and email headers in the four Google colours.',
      ],
    }),
    highlightsSection(
      highlights('A website, a design guide and a microsite, all speaking the same visual language.', {
        exhibits: [{ media: img('gdsc-brand-guide', 'GDSC SRM design guide: colours'), caption: cap('0.1', 'Design', 'Design guide: colours') }],
      }),
    ),
    section('context', 'Context', 'Many teams, one club.', [
      text('Unity in diversity.', [
        'GDSC SRM spans technical, corporate and public relations, and creatives and photography teams. The website had to show all of them while feeling like one club.',
      ]),
      tree(
        'GDSC SRM website',
        [
          { label: 'About', items: ['Domains', 'Principles', 'Team'] },
          { label: 'Work', items: ['Portfolio', 'Projects', 'Programmes', 'Milestones'] },
          { label: 'Stories', items: ['Journal', 'Announcements', 'Medium'] },
          { label: 'Connect', items: ['Events', 'Contact form', 'Instagram'] },
        ],
        cap('1.0', 'Diagram', 'Navigation and footer structure'),
      ),
    ]),
    section('layout', 'Layout', 'Principles, made public.', [
      text('Mission, vision, values.', [
        'A dedicated Principles page sets out the club’s mission, vision, values and policy, with a link to the code of conduct. Header styles and a proposed footer give every page the same frame.',
      ]),
    ]),
    section('visual-design', 'Visual Design', 'A design guide for everyone.', [
      text('Built on Material colour.', [
        'The design guide takes its colours from Google’s Material Design colour tool, adds two named greys for surfaces, and defines title and subtitle styles, so every volunteer designs with the same building blocks.',
      ]),
      palette(
        [
          { name: 'Google blue', hex: '#4285F4' },
          { name: 'Google red', hex: '#EA4335' },
          { name: 'Google yellow', hex: '#FBBC05' },
          { name: 'Google green', hex: '#34A853' },
          { name: 'Obvious grey', hex: '#E0E0E0' },
          { name: 'Soft grey', hex: '#F5F5F5' },
        ],
        cap('6.0', 'Palette', 'Design guide colours'),
      ),
    ]),
    section('final-designs', 'Final Designs', 'Website, microsite and email.', [
      text('2023 Solution Challenge microsite.', [
        'A focused site for the 2023 Solution Challenge, which asked students to build a solution to a local problem using Google technologies and one or more of the UN’s 17 Sustainable Development Goals. It covered the challenge, the timeline, resources, FAQs and demo day, and celebrated the top 100 teams, top 10 finalists and top 3 winners.',
      ]),
      grid([
        card('Email headers', 'Four headers in the Google colours for club newsletters.', 'sparkle'),
        card('Event banners', 'Wide banners for event pages and social headers.', 'target'),
      ]),
      exhibit(board('gdsc', 'GDSC SRM brand and web'), cap('7.0', 'Animated view', 'Brand guide and event visuals')),
      moreScreens('gdsc', '7.1'),
    ]),
    section('retrospective', 'Retrospective', 'Consistency is a team sport.', [
      text('Looking back.', ['A design guide matters most when many people design. It turned a busy club into one recognisable voice.']),
      faq([
        { q: 'What did the design guide include?', a: 'Colours from Google’s Material Design colour tool, named greys for surfaces, and title and subtitle styles.' },
        { q: 'Where can I see the social media work?', a: 'The Visual design page collects the campaigns, posts, stories, certificates and banners for GDSC SRM.' },
      ]),
    ]),
  ],
};
