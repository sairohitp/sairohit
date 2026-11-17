import { board, cap, faq, moreScreens, pair, sdgs, stats, prototype, research, structure, wireframes, card, challenge, exhibit, flow, grid, highlights, highlightsSection, img, item, overview, palette, section, text, tree } from '../build';
import type { CaseStudy } from '../types';

// Sources: resume (TrainingMug) and the project's Figma file.
export const learningManagementSystem: CaseStudy = {
  cover: img('learning-hero', 'Hero mockup: TrainingMug admin console showing the quizzes table'),
  sections: [
    overview({
      role: 'UI/UX Designer (UI/UX Design Intern from April to June 2022): research, interaction design, design system, responsive layouts',
      team: ['Product team', 'Engineers'],
      timeline: 'April 2022 to March 2024, remote',
      overview: [
        'At TrainingMug, I led the redesign of an existing product, turning a cluttered interface into a clear, structured experience, and created a unified design system that gave the brand one consistent identity.',
        'I designed the Learning Management System across course discovery, enrolment, the lesson player and progress tracking, including charts that show completion and assessment scores at a glance.',
        'I ran user research, synthesised feedback into design decisions, and reviewed built screens with engineers against the designs to close gaps before release.',
      ],
    }),
    highlightsSection(
      highlights('A cluttered product redesigned into a clear, structured learning platform, held together by one design system.', {
        exhibits: [prototype('learning')],
        stats: [
          { value: 4, label: 'Core learner journeys' },
          { value: 3, label: 'Breakpoints: desktop, tablet, mobile' },
          { value: 220, suffix: '+', label: 'Admin and learner frames in Figma' },
        ],
      }),
    ),
    section('context', 'Context', 'One product, many content types.', [
      text('Learners and course teams.', [
        'Learners discover, enrol in and complete courses. Behind them, course teams manage courses, quizzes, exercises and capstone projects across many chapters and units.',
        'Both sides lived with an interface that had grown cluttered over time.',
      ]),
      tree(
        'TrainingMug',
        [
          { label: 'Learner', items: ['Course discovery', 'Enrolment', 'Lesson player', 'Progress tracking'] },
          { label: 'Content', items: ['Courses', 'Quizzes', 'Exercises', 'Capstone'] },
          { label: 'People', items: ['Instructors', 'Team'] },
          { label: 'Workflow', items: ['Active', 'Drafts', 'Approvals'] },
        ],
        cap('1.0', 'Diagram', 'Information architecture'),
      ),
      research('learning'),
    ]),
    section('the-problem', 'The Problem', 'Clutter was costing clarity.', [
      text(
        'What research surfaced.',
        ['User research and feedback pointed to a product that had become hard to read and inconsistent to use.'],
        {
          list: [
            item('thumbs-down', 'A cluttered interface buried the most important actions.'),
            item('database', 'Screens and states behaved differently from one area to the next.'),
            item('target', 'Learners lacked a clear view of their completion and assessment scores.'),
            item('key', 'The brand looked different from screen to screen.'),
          ],
        },
      ),
      challenge('Turn a cluttered product into a clear, structured experience that works the same way everywhere, on every screen size.'),
      text('North Star design principles:', [], {
        cards: [
          card('Structure first', 'Clear hierarchy before decoration.', 'target'),
          card('One design system', 'A single identity across every surface.', 'sparkle'),
          card('Transparent state', 'Users always know what is happening and why.', 'lightbulb'),
        ],
      }),
    ]),
    section('user-flow', 'User Flow', 'From discovery to progress.', [
      text('The learner journey.', ['I designed the four journeys a learner moves through, from finding a course to seeing their progress.']),
      flow(['Course discovery', 'Enrolment', 'Lesson player', 'Progress tracking'], cap('3.0', 'Diagram', 'Learner journey')),
      text('The content lifecycle.', [
        'On the admin side, content moves through Active, Drafts and Approvals, so course teams always know where an item stands.',
      ]),
      flow(['Create', 'Draft', 'Submit for approval', 'Approve', 'Publish'], cap('3.1', 'Diagram', 'Content lifecycle')),
      wireframes('learning'),
    ]),
    section('layout', 'Layout', 'Tables that read at a glance.', [
      text('Structure for scanning.', [
        'Each row shows the item, its course, chapter, who modified it and when. Avatars make ownership visible, and the selected row is marked with an accent bar.',
      ]),
      structure('learning', 'Quizzes view with sidebar navigation and table', 'Quizzes view in the admin console: structure and final. Drag to compare.'),
    ]),
    section('interactions', 'Interactions', 'State you can always see.', [
      text('State management and interface transparency.', [
        'I designed complex features around clear states, so every action shows what happened and what comes next: confirmations before publishing, alerts when a request is sent for approval, and readable errors at sign-in.',
      ]),
      exhibit(img('learning-courses', 'Admin console: courses with tech stack, owner and dates'), cap('5.0', 'Screen', 'Admin console: courses')),
      text('Everything a course team creates.', [
        'Courses, chapters, topics, quizzes, coding exercises, capstones, instructors and teams each have create, edit and delete flows. Drafts move through approval, with emails for approval requests, rejections and account confirmation.',
      ]),
      text('The learner side.', [
        'Learners move between courses, quizzes, coding exercises and capstone projects. Coding exercises include custom input, hints, test cases, a run screen, solutions and a submission history; capstones run from problem statement to submission and a report.',
        'Completed courses lead to a certificate with a public verification page.',
      ]),
      exhibit(img('learning-dashboard', 'Learner dashboard with exercise progress'), cap('5.1', 'Screen', 'Learner dashboard')),
      exhibit(img('learning-submissions', 'Coding exercise submissions with scores beside the code'), cap('5.2', 'Screen', 'Coding exercise submissions')),
      exhibit(img('learning-leaderboard', 'Exercise leaderboard with score, rank and time taken'), cap('5.3', 'Screen', 'Exercise leaderboard')),
      grid([
        card('Create menu', 'Start a course, chapter or topic from one Create button.', 'cursor-click'),
        card('Publish confirmation', 'A clear prompt before a course goes live.', 'sparkle'),
        card('Approval alerts', 'Authors see when a request is sent for approval.', 'lightbulb'),
        card('Sign-in states', 'Google and LinkedIn sign-in, with clear error messages.', 'key'),
        card('Bulk select', 'Checkboxes on every row for batch changes.', 'check-circle'),
        card('Quick search', 'A shortcut-driven search for any item.', 'target'),
      ]),
    ]),
    section('visual-design', 'Visual Design', 'One identity, every screen size.', [
      text('A unified design system.', [
        'The design system gave the brand one consistent identity, and responsive layouts carry it across desktop, tablet and mobile. Lime and blue come from the TrainingMug brand.',
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
    section('final-designs', 'Final Designs', 'Reviewed against the build.', [
      text('Closing the gap before release.', [
        'I reviewed built screens with engineers against the designs, so what shipped matched what was designed.',
      ]),
      exhibit(board('learning', 'TrainingMug admin console'), cap('7.0', 'Animated view', 'Admin console')),
      moreScreens('learning', '7.1'),
    ]),
    section('retrospective', 'Retrospective', 'Clarity is a system, not a screen.', [
      text('Looking back.', [
        'Redesigning a cluttered product taught me that clarity comes from a system: consistent components, clear states and a design review loop with engineering.',
      ]),
      text('Project Takeaways:', [], {
        cards: [
          card('Research first', 'Feedback shaped every design decision.', 'users'),
          card('Systems scale', 'One design system kept the brand consistent.', 'sparkle'),
          card('Design for every screen', 'Responsive layouts from the start.', 'check-circle'),
          card('Review the build', 'Design QA with engineers closes gaps before release.', 'target'),
        ],
      }),
      faq([
        { q: 'What could learners do on the platform?', a: 'Discover and enrol in courses, take quizzes, solve coding exercises with test cases and hints, submit capstone projects, track progress in reports and earn certificates with a public verification page.' },
        { q: 'What did the admin side cover?', a: 'Creating and managing courses, chapters, topics, quizzes, coding exercises, capstones, instructors and teams, with an approval workflow and email notifications.' },
        { q: 'How did you work with engineering?', a: 'I reviewed built screens with engineers against the designs to close gaps before release.' },
      ]),
    ]),
  ],
};
