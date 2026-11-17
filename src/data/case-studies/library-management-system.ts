import { board, cap, prototype, research, structure, wireframes, card, challenge, exhibit, flow, grid, highlights, highlightsSection, img, item, overview, palette, section, text, tree } from '../build';
import type { CaseStudy } from '../types';

// Source: resume (Infosys, Library Management System, Enterprise Web).
// Visuals are from the live site and will be replaced with exports from the Figma file.
export const libraryManagementSystem: CaseStudy = {
  cover: img('library-hero', 'Hero mockup: Library Management System screens'),
  sections: [
    overview({
      role: 'Design Intern: workflow research, data-dense interfaces, component library, handoff',
      team: ['Librarians and front-desk staff (research)', 'Product and engineering leads'],
      timeline: 'Internship at Infosys',
      overview: [
        'A Library Management System for the people who run a library every day: cataloguing, issues, returns, renewals and fines.',
        'I spoke with librarians and front-desk staff to map their daily workflows and find where the existing process slowed them down, then designed data-dense tables and dashboards for inventory, overdue items and member activity.',
        'I built a reusable Figma component library with variants and auto layout, presented the design rationale to product and engineering leads, and delivered detailed handoff documentation.',
      ],
    }),
    highlightsSection(
      highlights('Library operations made fast: data-dense tables and dashboards, built on a reusable component library.', {
        exhibits: [prototype('library'), { media: img('library-row', 'Library Management System screens'), caption: cap('0.1', 'Screens', 'Library Management System') }],
      }),
    ),
    section('context', 'Context', 'The front desk runs on workflows.', [
      text('Research with the people who do the work.', [
        'I spoke with librarians and front-desk staff to map their daily workflows across cataloguing, issues, returns, renewals and fines.',
      ]),
      flow(['Cataloguing', 'Issue', 'Return', 'Renewal', 'Fines'], cap('1.0', 'Diagram', 'Daily library workflows')),
      research('library'),
    ]),
    section('the-problem', 'The Problem', 'Where the process slowed people down.', [
      text(
        'What the workflow mapping revealed.',
        ['Staff handle many members and items at once, so every extra click and every unclear status adds up across a day.'],
        {
          list: [
            item('database', 'Inventory, overdue items and member activity were hard to scan quickly.'),
            item('clock', 'Repetitive tasks such as issues and returns took too many steps.'),
            item('target', 'The status of an item or a member was not always clear at a glance.'),
            item('key', 'Design decisions needed to translate cleanly into engineering.'),
          ],
        },
      ),
      challenge('Give library staff interfaces that show everything they need at a glance and let them act on many records at once.'),
      text('North Star design principles:', [], {
        cards: [
          card('Dense, not cluttered', 'Data-heavy tables that stay readable.', 'target'),
          card('Act in bulk', 'Sorting, filtering and bulk actions for everyday work.', 'cursor-click'),
          card('Status at a glance', 'Clear status indicators on every record.', 'check-circle'),
        ],
      }),
    ]),
    section('user-flow', 'User Flow', 'Designed around the desk.', [
      text('Tables and dashboards for each job.', [
        'I designed data-dense tables and dashboards for the three things staff check most: inventory, overdue items and member activity.',
      ]),
      tree(
        'Library Management System',
        [
          { label: 'Inventory', items: ['Catalogue', 'Availability', 'Bulk actions'] },
          { label: 'Circulation', items: ['Issues', 'Returns', 'Renewals'] },
          { label: 'Overdue', items: ['Overdue items', 'Fines', 'Reminders'] },
          { label: 'Members', items: ['Member activity', 'Status'] },
        ],
        cap('3.0', 'Diagram', 'Information architecture'),
      ),
      wireframes('library'),
    ]),
    section('layout', 'Layout', 'Dense, scannable, actionable.', [
      text('Built for scanning.', [
        'Sorting, filtering, bulk actions and clear status indicators let staff find and act on records quickly.',
      ]),
      structure('library', 'Library Management System screens', 'Library Management System: structure and final. Drag to compare.'),
    ]),
    section('interactions', 'Interactions', 'Fewer steps for repeated work.', [
      text('Everyday actions, faster.', ['Issues, returns, renewals and fines happen many times a day, so each action is designed to take as few steps as possible.']),
      exhibit(img('library-b', 'Library Management System screens'), cap('5.0', 'Screens', 'Library Management System')),
      grid([
        card('Sorting and filtering', 'Find the right records fast.', 'target'),
        card('Bulk actions', 'Act on many items or members at once.', 'cursor-click'),
        card('Status indicators', 'Overdue, available or reserved, at a glance.', 'check-circle'),
        card('Dashboards', 'Inventory, overdue items and member activity in one view.', 'lightbulb'),
      ]),
    ]),
    section('visual-design', 'Visual Design', 'A component library, not a set of screens.', [
      text('Built to be reused.', [
        'I built a reusable Figma component library using variants and auto layout, so tables, filters and status indicators stay consistent across every view.',
      ]),
      palette(
        [
          { name: 'Action blue', hex: '#4285F4' },
          { name: 'Surface', hex: '#222222' },
          { name: 'Background', hex: '#141414' },
          { name: 'Text', hex: '#FFFFFF' },
        ],
        cap('6.0', 'Palette', 'Colours sampled from the final screens'),
      ),
    ]),
    section('final-designs', 'Final Designs', 'Ready for engineering.', [
      text('Rationale and handoff.', [
        'I presented the design rationale to product and engineering leads and delivered detailed handoff documentation.',
      ]),
      exhibit(board('library', 'Library Management System screens'), cap('7.0', 'Animated view', 'Screen set')),
    ]),
    section('retrospective', 'Retrospective', 'Designing for operators.', [
      text('Looking back.', [
        'Talking to librarians and front-desk staff first meant the design solved the problems they actually had, not the ones we assumed.',
      ]),
      text('Project Takeaways:', [], {
        cards: [
          card('Map the workflow first', 'Real tasks shaped every table and dashboard.', 'users'),
          card('Density needs structure', 'Data-heavy screens stay readable with clear hierarchy.', 'target'),
          card('Components scale', 'Variants and auto layout kept every view consistent.', 'sparkle'),
          card('Handoff is design', 'Rationale and documentation made the build smoother.', 'check-circle'),
        ],
      }),
    ]),
  ],
};
