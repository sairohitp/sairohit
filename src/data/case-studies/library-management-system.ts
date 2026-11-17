import { board, cap, faq, moreScreens, prototype, research, structure, wireframes, card, challenge, exhibit, flow, grid, highlights, highlightsSection, img, item, overview, palette, section, text, tree } from '../build';
import type { CaseStudy } from '../types';

// Sources: resume (Infosys internship) and Library Management System.fig (Presentation, High Fidelity, Behance pages).
export const libraryManagementSystem: CaseStudy = {
  cover: img('library-hero', 'Hero mockup: Myshelf library app screens'),
  sections: [
    overview({
      role: 'Design Intern: workflow research, information architecture, interface design, component library and handoff',
      team: ['Team Four', 'Sai Rohit', 'Sristi Kumari', 'Shivesh Rathore', 'Vansh Pitalia', 'Amogh Jain', 'Dewashish Dubey'],
      timeline: 'Internship at Infosys',
      overview: [
        'Myshelf is a library management system with three experiences: members who borrow, reserve and attend events; librarians who issue, return and catalogue; and admins who manage librarians and events.',
        'I spoke with librarians and front-desk staff to map their daily workflows across cataloguing, issues, returns, renewals and fines, and identified where the existing process slowed them down.',
        'I designed the screens, built a reusable Figma component library with variants and auto layout, presented the design rationale to product and engineering leads, and delivered detailed handoff documentation.',
      ],
    }),
    highlightsSection(
      highlights('One system, three roles: members, librarians and admins, each with the tools they need.', {
        exhibits: [prototype('library'), { media: img('library-row', 'Myshelf member screens: onboarding, home, events and book details'), caption: cap('0.1', 'Screens', 'Member app') }],
        stats: [
          { value: 3, label: 'Roles: member, librarian, admin' },
          { value: 70, suffix: '+', label: 'High-fidelity screens' },
          { value: 5, label: 'Daily workflows mapped' },
        ],
      }),
    ),
    section('context', 'Context', 'Libraries run on workflows.', [
      text('Problem statement.', [
        'Current library management systems lack efficient organisation and accessibility, hindering a seamless experience for members and oversight for administrators.',
        'Myshelf set out to empower librarians and members alike, making knowledge easier to reach and libraries easier to run.',
      ]),
      flow(['Cataloguing', 'Issue', 'Return', 'Renewal', 'Fines'], cap('1.0', 'Diagram', 'Daily library workflows, mapped with front-desk staff')),
      research('library'),
    ]),
    section('the-problem', 'The Problem', 'Where the process slowed people down.', [
      text(
        'What the workflow mapping revealed.',
        ['Staff handle many members and books at once, so every extra step and every unclear status adds up over a day.'],
        {
          list: [
            item('database', 'Inventory, overdue items and member activity were hard to scan quickly.'),
            item('clock', 'Issues, returns and renewals took too many steps.'),
            item('users', 'Members could not reserve a book or register for an event ahead of a visit.'),
            item('key', 'Admins had no single place to manage librarians and events.'),
          ],
        },
      ),
      challenge('Give each role exactly the tools it needs: fast circulation for librarians, easy discovery for members and clear oversight for admins.'),
      text('North Star design principles:', [], {
        cards: [
          card('Role first', 'Each role sees its own home and actions.', 'users'),
          card('Status at a glance', 'Copies available, borrowed and reserved on every book.', 'check-circle'),
          card('Act in bulk', 'Approve or reject requests from one list.', 'cursor-click'),
        ],
      }),
    ]),
    section('user-flow', 'User Flow', 'Three roles, one system.', [
      tree(
        'Myshelf',
        [
          { label: 'Member', items: ['Home and current reads', 'Goal tracking', 'Book reservation', 'Events', 'Premium subscription'] },
          { label: 'Librarian', items: ['High-level dashboard', 'Issuing and return', 'Catalogue management', 'Reservations and renewals'] },
          { label: 'Admin', items: ['Librarian management', 'Event management'] },
        ],
        cap('3.0', 'Diagram', 'Features by role, from the project presentation'),
      ),
      text('The circulation loop.', ['For librarians, every book moves through the same loop, and each step has one clear screen.']),
      flow(['Reserve or request', 'Approve', 'Issue', 'Return or renew', 'Fine if overdue'], cap('3.1', 'Diagram', 'Circulation loop')),
      wireframes('library'),
    ]),
    section('layout', 'Layout', 'Member home, built around the current read.', [
      text('Currently reading comes first.', [
        'Home opens with the book in hand, its due date and the time left on any reservation, with popular books below for discovery.',
      ]),
      structure('library', 'Onboarding and member home screens', 'Member onboarding and home: structure and final. Drag to compare.'),
    ]),
    section('interactions', 'Interactions', 'Librarian tools that save steps.', [
      text('Issue, approve, track.', [
        'A transaction summary confirms the book, the member and the dates in one step. Reservations and renewals sit in one list with approve and reject on every row.',
      ]),
      exhibit(img('library-librarian', 'Transaction summary and requests screens'), cap('5.0', 'Screens', 'Librarian: transaction summary and requests')),
      text('Events and book records.', [
        'Librarians can see every event and who has registered, and each book shows copies available, copies borrowed, reservation requests and its shelf location.',
      ]),
      exhibit(img('library-events', 'All events and event activity screens'), cap('5.1', 'Screens', 'Events and registrations')),
      exhibit(img('library-book', 'Book record screen'), cap('5.2', 'Screen', 'Book record with availability and location'), 'half'),
    ]),
    section('visual-design', 'Visual Design', 'Dark, calm and book-first.', [
      text('A component library, not a set of screens.', [
        'A near-black interface keeps attention on book covers, a single blue accent marks every action, and variants with auto layout keep lists, cards and status chips consistent across all three roles.',
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
    section('final-designs', 'Final Designs', 'The complete screen set.', [
      text('Ready for engineering.', ['I presented the design rationale to product and engineering leads and delivered detailed handoff documentation.']),
      exhibit(board('library', 'Myshelf screen set'), cap('7.0', 'Animated view', 'Screen set')),
      moreScreens('library', '7.1'),
      text('Tech stack:', [], {
        cards: [
          card('SwiftUI', 'Native iOS interface.', 'sparkle'),
          card('Google Books API', 'Book data and covers.', 'database'),
          card('CodeScanner', 'Scanning books at the desk.', 'cursor-click'),
          card('StoreKit', 'Premium subscriptions.', 'key'),
          card('Firebase and Firestore', 'Data and sync.', 'check-circle'),
        ],
      }),
    ]),
    section('retrospective', 'Retrospective', 'Designing for operators.', [
      text('Looking back.', [
        'Talking to librarians and front-desk staff first meant the design solved the problems they actually had, not the ones we assumed.',
      ]),
      text('Project Takeaways:', [], {
        cards: [
          card('Map the workflow first', 'Real tasks shaped every screen.', 'users'),
          card('Design per role', 'Members, librarians and admins need different homes.', 'target'),
          card('Components scale', 'Variants and auto layout kept 70+ screens consistent.', 'sparkle'),
          card('Handoff is design', 'Rationale and documentation made the build smoother.', 'check-circle'),
        ],
      }),
      faq([
        { q: 'Was this a team project?', a: 'Yes. Myshelf was built by Team Four: Sristi Kumari, Shivesh Rathore, Vansh Pitalia, Amogh Jain, Dewashish Dubey and me.' },
        { q: 'What did you own?', a: 'Workflow research with librarians and front-desk staff, the interface design, the Figma component library, the design rationale and the handoff documentation.' },
        { q: 'What was it built with?', a: 'SwiftUI, the Google Books API, Core Image, AVFoundation, StoreKit, CodeScanner, and Firebase with Firestore.' },
      ]),
    ]),
  ],
};
