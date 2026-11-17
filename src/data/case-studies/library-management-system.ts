import { board, cap, card, challenge, exhibit, flow, grid, highlights, highlightsSection, img, item, overview, palette, section, text, tree } from '../build';
import type { CaseStudy } from '../types';

export const libraryManagementSystem: CaseStudy = {
  cover: img('library-cover', 'Myshelf iOS app screens on a light canvas'),
  sections: [
    overview({
      role: 'iOS App Developer Intern: interface design, user flows, iOS prototyping',
      team: ['Cross-functional Scrum team at Infosys'],
      timeline: '2 months, April to May 2024, on site at Infosys headquarters',
      overview: [
        'Myshelf is an iOS app that puts the library in the reader’s pocket: discover books, borrow and return them, reserve titles and sign up for library events.',
        'As an iOS App Developer Intern at Infosys, I worked inside a Scrum team, translating the requirements in the SRS document into flows and high-fidelity screens, and helped plan milestones so the build stayed on schedule.',
        'The result is a dark, focused interface with four destinations (Home, Explore, Library and Events) and dedicated screens for transactions, requests, FAQs and overdue items.',
      ],
    }),
    highlightsSection(
      highlights('A pocket-sized library: borrow, reserve, return and attend events from a single iOS app.', {
        exhibits: [{ media: img('library-row', 'Onboarding, home, event and book detail screens'), caption: cap('0.1', 'Screens', 'Onboarding, home, events and book details') }],
      }),
    ),
    section('context', 'Context', 'Libraries run on paperwork. Readers run on phones.', [
      text('Bringing the library to the reader.', [
        'Borrowing still depends on visits to the desk, paper registers and reminders that arrive too late. Myshelf moves those touchpoints into one app, so a member always knows what they have, what is due and what is happening next.',
      ]),
      tree(
        'Myshelf',
        [
          { label: 'Home', items: ['Currently reading', 'Due dates', 'Popular books'] },
          { label: 'Explore', items: ['Search', 'Book details', 'Reserve'] },
          { label: 'Library', items: ['Transactions', 'Requests', 'Overdues'] },
          { label: 'Events', items: ['Upcoming events', 'Registration', 'Event overview'] },
        ],
        cap('1.0', 'Diagram', 'Information architecture'),
      ),
    ]),
    section('the-problem', 'The Problem', 'Every visit to the desk was a point of friction.', [
      text(
        'Where members lose track.',
        ['Three questions came up again and again: what have I borrowed, when is it due, and is the book I want available? Answering any of them meant a trip to the library.'],
        {
          list: [
            item('clock', 'Due dates were easy to miss, and missed dates turned into fines.'),
            item('database', 'Availability was only visible at the desk, not before the visit.'),
            item('thumbs-down', 'Fines and overdue items were discovered late, at the counter.'),
            item('users', 'Events lived on notice boards, with no simple way to register.'),
          ],
        },
      ),
      challenge('Make every library task, from finding a book to paying a fine, possible in a few taps, without a visit to the desk.'),
      text('North Star design principles:', [], {
        cards: [
          card('Glanceable status', 'Due dates and reservations are visible on the home screen.', 'target'),
          card('One action per screen', 'Each screen leads to a single, clear primary button.', 'cursor-click'),
          card('Familiar iOS patterns', 'Tab bar navigation and native controls keep learning time low.', 'check-circle'),
        ],
      }),
    ]),
    section('user-flow', 'User Flow', 'From discovery to return, in one loop.', [
      text('Mapping the borrowing loop.', [
        'I mapped the loop a member repeats: find a title, reserve it, collect it, read, then return or renew before the due date. Every screen supports one step of this loop.',
      ]),
      flow(['Discover', 'Reserve', 'Collect', 'Read', 'Return or renew'], cap('3.0', 'Diagram', 'Core borrowing loop')),
      text('Events as a second loop.', ['Library events follow a shorter path: browse, register, attend. Registration shows who else is going, which makes events feel social.']),
      flow(['Browse events', 'Event details', 'Register', 'Attend'], cap('3.1', 'Diagram', 'Event registration')),
    ]),
    section('layout', 'Layout', 'A home screen that answers the first question.', [
      text('Currently reading comes first.', [
        'Home opens with the book in hand, its due date and the time left on any reservation. Popular books sit below as the natural next step for discovery.',
      ]),
      exhibit(img('library-a', 'Onboarding and home screens'), cap('4.0', 'Screens', 'Onboarding and home')),
    ]),
    section('interactions', 'Interactions', 'Small details that prevent fines.', [
      text('Reserve, register, pay.', [
        'Primary actions such as Reserve Book, Register and Proceed to Pay share the same full-width blue button, so members learn the pattern once.',
        'Dues surface before they become fines, and fines can be settled inside the app.',
      ]),
      exhibit(img('library-b', 'Event and book detail screens'), cap('5.0', 'Screens', 'Event registration and book details')),
      grid([
        card('Due-date badge', 'The current book shows how many days are left.', 'clock'),
        card('Reservation timer', 'Reserved books count down the time left to collect them.', 'key'),
        card('Social proof', 'Event cards show who else is going.', 'users'),
        card('Single primary action', 'One blue button per screen avoids hesitation.', 'cursor-click'),
      ]),
    ]),
    section('visual-design', 'Visual Design', 'Dark, calm and book-first.', [
      text('Letting the covers carry the colour.', [
        'A near-black interface keeps attention on the book covers, which provide most of the colour. A single blue accent marks every action, and rounded cards group related information.',
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
      text('Every flow, end to end.', [
        'The final set covers onboarding, home, discovery, book details, events, transactions, requests, FAQs and overdue items.',
      ]),
      exhibit(board('library', 'Full Myshelf screen set'), cap('7.0', 'Animated view', 'Full screen set')),
    ]),
    section('retrospective', 'Retrospective', 'What working on site taught me.', [
      text('Looking back.', [
        'Designing alongside developers in a Scrum rhythm meant every decision had to be explained, estimated and delivered in short cycles.',
        'Working from an SRS document also taught me to trace each screen back to a written requirement.',
      ]),
      text('Project Takeaways:', [], {
        cards: [
          card('Requirements first', 'Mapping screens to SRS requirements kept the scope clear.', 'check-circle'),
          card('Design for the sprint', 'Breaking flows into small pieces made them easier to build and review.', 'lightbulb'),
          card('Consistency is speed', 'Reusing one button and card style made the build faster.', 'sparkle'),
          card('Explain the why', 'Sharing the reasoning behind a layout made feedback more useful.', 'users'),
        ],
      }),
    ]),
  ],
};
