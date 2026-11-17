import { board, cap, prototype, research, structure, wireframes, card, challenge, exhibit, flow, grid, highlights, highlightsSection, img, item, overview, palette, section, text, tree } from '../build';
import type { CaseStudy } from '../types';

export const learningManagementSystem: CaseStudy = {
  cover: img('learning-hero', 'Hero mockup: TrainingMug admin console showing the quizzes table'),
  sections: [
    overview({
      role: 'Principal UI/UX Designer: research, interaction design, visual design, prototyping',
      team: ['Product managers', 'Developers'],
      timeline: 'Ongoing since 2023, shipped iteratively',
      overview: [
        'TrainingMug is a learning platform built around courses, quizzes, exercises and projects. I redesigned its admin console, main website and user app.',
        'I pioneered AI-driven features for personalised learning and content recommendations, and worked with product managers and developers to keep one product vision across all three surfaces.',
        'Through extensive research and iterative design improvements, user drop-off rates fell by 25%.',
      ],
    }),
    highlightsSection(
      highlights('A redesigned admin console, website and user app, with AI-driven recommendations and a 25% drop in user drop-off.', {
        exhibits: [prototype('learning')],
        stats: [
          { value: 25, suffix: '%', label: 'Lower user drop-off' },
          { value: 3, label: 'Products redesigned' },
          { value: 6, label: 'Admin modules' },
        ],
      }),
    ),
    section('context', 'Context', 'Content teams needed a faster console.', [
      text('One console, many content types.', [
        'Authors manage courses, quizzes, exercises and projects across many chapters and units. Each type had its own patterns, which made everyday and bulk work slow.',
      ]),
      tree(
        'Admin console',
        [
          { label: 'Content', items: ['Courses', 'Quizzes', 'Exercises', 'Projects'] },
          { label: 'People', items: ['Instructors', 'Team'] },
          { label: 'Workflow', items: ['Active', 'Drafts', 'Approvals'] },
        ],
        cap('1.0', 'Diagram', 'Console information architecture'),
      ),
      research('learning'),
    ]),
    section('the-problem', 'The Problem', 'Learners were dropping off before finishing.', [
      text(
        'Where the experience leaked.',
        ['Research pointed to two sides of the same problem: learners lost momentum without guidance on what to do next, and admins struggled to keep content fresh and organised.'],
        {
          list: [
            item('target', 'Course paths ignored each learner’s progress and interests.'),
            item('database', 'Flows and states differed between the console, website and app.'),
            item('thumbs-down', 'Dense tables offered few cues about status, ownership or recency.'),
            item('key', 'Accessibility options were hard to find.'),
          ],
        },
      ),
      challenge('Keep learners moving with personalised guidance, while giving admins a console that makes content effortless to manage.'),
      text('North Star design principles:', [], {
        cards: [
          card('Guide the next step', 'Recommendations surface the most relevant content for each learner.', 'lightbulb'),
          card('One system, three surfaces', 'Shared components across console, website and app.', 'sparkle'),
          card('Accessible by default', 'Accessibility toggles are built into the interface.', 'check-circle'),
        ],
      }),
    ]),
    section('user-flow', 'User Flow', 'Draft, review, publish.', [
      text('An approval workflow built into the console.', [
        'Content moves through three tabs, Active, Drafts and Approvals, so authors always know where an item stands. Create sits at the top right, and search is a shortcut away.',
      ]),
      flow(['Create', 'Draft', 'Submit for approval', 'Approve', 'Active'], cap('3.0', 'Diagram', 'Content lifecycle')),
      text('A guided path for learners.', ['On the learner side, recommendations point to the next course, and practice through quizzes and exercises leads into projects.']),
      flow(['Recommended course', 'Learn', 'Quiz and exercise', 'Project', 'Progress'], cap('3.1', 'Diagram', 'Learner journey')),
      wireframes('learning'),
    ]),
    section('layout', 'Layout', 'A table that reads at a glance.', [
      text('Structure for scanning.', [
        'Each row shows the item, its course, chapter, who modified it and when. Avatars make ownership visible, and the selected row is marked with a lime accent bar.',
      ]),
      structure('learning', 'Quizzes view with sidebar navigation and table', 'Quizzes view in the admin console: structure and final. Drag to compare.'),
    ]),
    section('interactions', 'Interactions', 'Fewer clicks for everyday work.', [
      text('Built for keyboard and bulk actions.', [
        'Checkboxes enable bulk actions, a command-style search (⌘ + F) jumps straight to content, and breadcrumbs keep context deep inside a course.',
      ]),
      exhibit(img('learning-b', 'Table detail with chapters, owners and timestamps'), cap('5.0', 'Screen', 'Ownership and timestamps')),
      grid([
        card('Bulk select', 'Checkboxes on every row for batch changes.', 'check-circle'),
        card('Quick search', 'A shortcut-driven search for any item.', 'target'),
        card('Create menu', 'Start a course, chapter or topic from one Create button.', 'cursor-click'),
        card('Publish confirmation', 'A clear prompt before a course goes live.', 'sparkle'),
        card('Approval alerts', 'Authors see when a request is sent for approval.', 'lightbulb'),
        card('Sign-in states', 'Google and LinkedIn sign-in, with clear error messages.', 'key'),
      ]),
    ]),
    section('visual-design', 'Visual Design', 'Depth and translucency on a dark canvas.', [
      text('Modern, accessible styling.', [
        'I brought in modern design features such as refined iconography, accessibility toggles, depth and translucency. The dark navy base keeps long working sessions comfortable, while lime and blue come from the TrainingMug brand.',
      ]),
      palette(
        [
          { name: 'Lime', hex: '#A3C638' },
          { name: 'Blue', hex: '#4489FA' },
          { name: 'Highlight', hex: '#202030' },
          { name: 'Background', hex: '#101015' },
        ],
        cap('6.0', 'Palette', 'Colours sampled from the final screens'),
      ),
    ]),
    section('final-designs', 'Final Designs', 'Prototyped, tested, shipped.', [
      text('Validated with users.', [
        'I used interactive prototypes to test flows and validate decisions with user feedback before they reached development.',
      ]),
      exhibit(board('learning', 'TrainingMug admin console'), cap('7.0', 'Animated view', 'Admin console')),
    ]),
    section('retrospective', 'Retrospective', 'Many small fixes, one big result.', [
      text('Looking back.', [
        'Reducing drop-off was not one big redesign. It came from many small improvements to flow control, state management and interface design, each checked against user feedback.',
      ]),
      text('Project Takeaways:', [], {
        cards: [
          card('Small fixes compound', 'Iterative improvements moved the drop-off number.', 'sparkle'),
          card('Prototype to decide', 'Interactive prototypes settled debates faster than documents.', 'cursor-click'),
          card('Align early', 'Working closely with product and engineering kept one vision.', 'users'),
          card('Systems scale', 'Shared components kept three products consistent.', 'check-circle'),
        ],
      }),
    ]),
  ],
};
