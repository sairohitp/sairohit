import { board, cap, card, challenge, exhibit, flow, grid, highlights, highlightsSection, img, item, overview, palette, section, text, tree } from '../build';
import type { CaseStudy } from '../types';

export const placementManagementSystem: CaseStudy = {
  cover: img('placement-cover', 'Placerr placement dashboard'),
  sections: [
    overview({
      role: 'Independent project: information architecture, dashboard design, visual design',
      timeline: 'Passion project, high-fidelity web design',
      overview: [
        'Placerr is a placement portal for students. It brings job listings, internships, applications and preparation into one dashboard.',
        'I designed the dashboard and its information architecture, from job discovery and application tracking to student records such as attendance and calendar.',
        'The aim was to replace scattered updates with one place that tells every student exactly where they stand.',
      ],
    }),
    highlightsSection(
      highlights('One placement dashboard: discover roles, track every application and prepare with tips.', {
        exhibits: [{ media: img('placement-a', 'Overview statistics and company spotlight'), caption: cap('0.1', 'Screen', 'Overview and company spotlight') }],
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
    ]),
    section('layout', 'Layout', 'Applications as timelines.', [
      text('Reading progress top to bottom.', [
        'Each ongoing application is a vertical timeline with dates and colour-coded statuses: green for selected and cleared, amber for upcoming.',
      ]),
      exhibit(img('placement-b', 'Ongoing applications with stage timelines'), cap('4.0', 'Screen', 'Ongoing applications')),
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
    ]),
  ],
};
