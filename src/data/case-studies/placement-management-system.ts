import { board, cap, faq, moreScreens, pair, sdgs, stats, prototype, research, structure, wireframes, card, challenge, exhibit, flow, grid, highlights, highlightsSection, img, item, overview, palette, section, text, tree } from '../build';
import type { CaseStudy } from '../types';

export const placementManagementSystem: CaseStudy = {
  cover: img('placement-hero', 'Hero mockup: Placerr placement dashboard'),
  sections: [
    overview({
      role: 'Independent project: product concept, information architecture, dashboard design, marketing website',
      timeline: 'Passion project, high-fidelity web design and website',
      overview: [
        'Placerr is a concept for AI-enabled, end-to-end campus placement automation: one place for students to discover roles and track applications, and for placement admins to post jobs, review candidates and manage shortlists.',
        'I designed the student dashboard and its information architecture, the tracker, company pages, AI-assisted interview and proctoring summaries, and a marketing website built around a fair, unbiased process.',
        'The aim was to replace scattered updates with one place that tells every student exactly where they stand.',
      ],
    }),
    highlightsSection(
      highlights('One placement dashboard: discover roles, track every application and prepare with tips.', {
        exhibits: [prototype('placement'), { media: img('placement-a', 'Overview statistics and company spotlight'), caption: cap('0.1', 'Screen', 'Overview and company spotlight') }],
      }),
    ),
    section('context', 'Context', 'Placement season is a full-time job.', [
      text('Too many places to look.', [
        'During placement season, students juggle openings, deadlines, tests and interviews across many channels. Placerr gives that season one home.',
      ]),
      tree(
        'Placerr',
        [
          { label: 'Welcome', items: ['Dashboard', 'Analytics', 'Flash'] },
          { label: 'Job management', items: ['Companies', 'Full time jobs', 'Internships', 'Tracker'] },
          { label: 'Student management', items: ['Profile', 'Calendar', 'Attendance'] },
          { label: 'Company', items: ['About us', 'Language and region', 'Support and feedback'] },
        ],
        cap('1.0', 'Diagram', 'Sidebar information architecture'),
      ),
      research('placement'),
    ]),
    section('the-problem', 'The Problem', 'Students did not know where they stood.', [
      text(
        'Signals lost in the noise.',
        ['The information existed, but it was spread out. Students had to piece together their own status.'],
        {
          list: [
            item('database', 'Openings were shared across channels and easy to miss.'),
            item('clock', 'Application updates arrived late, if at all.'),
            item('target', 'Students rarely knew which stage they had reached.'),
            item('lightbulb', 'Preparation advice was generic and hard to find.'),
          ],
        },
      ),
      challenge('Give every student a clear, live picture of their placement journey.'),
      text('North Star design principles:', [], {
        cards: [
          card('Status first', 'Four numbers summarise the whole season.', 'target'),
          card('Timelines over tables', 'Each application reads as a sequence of stages.', 'clock'),
          card('Prepare in context', 'Tips sit beside the roles they help with.', 'lightbulb'),
        ],
      }),
    ]),
    section('user-flow', 'User Flow', 'From opening to offer.', [
      text('Every stage, visible.', ['Each application follows the same stages, and each stage carries its own date and status.']),
      flow(['Discover role', 'Apply', 'Profile shortlisting', 'Online screening test', 'Selected'], cap('3.0', 'Diagram', 'Application stages')),
      wireframes('placement'),
    ]),
    section('layout', 'Layout', 'Applications as timelines.', [
      text('Reading progress top to bottom.', [
        'Each ongoing application is a vertical timeline with dates and colour-coded statuses: green for selected and cleared, amber for upcoming.',
      ]),
      structure('placement', 'Ongoing applications with stage timelines', 'Ongoing applications: structure and final. Drag to compare.', 'b'),
    ]),
    section('interactions', 'Interactions', 'Recommendations beside the work.', [
      text('A helpful right rail.', [
        'Recommended roles show the company, location, stipend and type, with quick bookmark and preview actions. Preparation tips such as keeping skills up to date and leveraging the alumni network sit right below.',
      ]),
      exhibit(img('placement-c', 'Recommended roles and preparation tips'), cap('5.0', 'Screen', 'Recommended roles and tips'), 'half'),
      grid([
        card('Bookmark', 'Save a role to revisit later.', 'check-circle'),
        card('Quick preview', 'See role details without leaving the dashboard.', 'cursor-click'),
        card('Review tips', 'Preparation advice one click away.', 'lightbulb'),
        card('Dark mode', 'A theme toggle for late-night prep.', 'sun'),
      ]),
    ]),
    section('visual-design', 'Visual Design', 'Clean, calm and status-driven.', [
      text('Colour reserved for meaning.', [
        'A white canvas with an indigo accent handles navigation and calls to action. Status colours are kept for application outcomes, so they always mean something.',
      ]),
      palette(
        [
          { name: 'Indigo', hex: '#4D4EDD' },
          { name: 'Success', hex: '#07CE1E' },
          { name: 'Indigo tint', hex: '#EDEDFB' },
          { name: 'Surface', hex: '#FFFFFF' },
        ],
        cap('6.0', 'Palette', 'Colours sampled from the final screens'),
      ),
    ]),
    section('final-designs', 'Final Designs', 'The full dashboard.', [
      text('Everything in one view.', ['Overview, spotlight, applications, recommendations and tips come together on a single screen.']),
      exhibit(board('placement', 'Placerr dashboard'), cap('7.0', 'Animated view', 'Dashboard')),
      moreScreens('placement', '7.1'),
    ]),
    section('ai', 'AI Assist', 'Fair, fast and explainable screening.', [
      text('Summaries, not just scores.', [
        'For each candidate, Placerr pairs an interview summary with a proctoring summary (webcam, full-screen exits and tab switches), a personality type, vetted skills and AI tools, and a skills chart.',
        'The marketing site frames it simply: a fair and unbiased process. No bias, just brains.',
      ]),
      exhibit(img('placement-ai', 'Interview summary, proctoring summary, vetted skills and skills chart'), cap('8.0', 'Screen', 'AI-assisted candidate summary')),
      text('For placement admins.', ['Admins can post jobs, view candidate profiles, control shortlisted candidates and send emails, all from the same system.']),
      pair([
        { media: img('placement-tracker', 'Application tracker with stages and statuses'), caption: cap('8.1', 'Screen', 'Application tracker') },
        { media: img('placement-companies', 'Companies with positions, CTC range and locations'), caption: cap('8.2', 'Screen', 'Companies') },
      ]),
    ]),
    section('retrospective', 'Retrospective', 'Clarity is the feature.', [
      text('Looking back.', [
        'The most valuable part of Placerr is not any single widget. It is the feeling of knowing exactly where you stand, which comes from consistent stages and honest status colours.',
      ]),
      text('Project Takeaways:', [], {
        cards: [
          card('Model the process', 'Defining the stages first shaped every screen.', 'check-circle'),
          card('Numbers need context', 'Counts work best beside the details behind them.', 'target'),
          card('Colour is a promise', 'Status colours must mean one thing only.', 'sparkle'),
          card('Help where it is needed', 'Tips next to roles get read.', 'lightbulb'),
        ],
      }),
      faq([
        { q: 'What is Placerr?', a: 'A concept for AI-enabled, end-to-end campus placement automation, with a student dashboard, admin tools and a marketing website.' },
        { q: 'What does the AI assist do?', a: 'It summarises each interview, flags proctoring signals such as tab switches and full-screen exits, and shows vetted skills and a skills chart, so decisions are explainable.' },
        { q: 'Who is it for?', a: 'Students tracking their placement journey, and placement admins who post jobs, review candidates and manage shortlists.' },
      ]),
    ]),
  ],
};
