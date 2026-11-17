import { board, cap, faq, moreScreens, pair, sdgs, stats, prototype, research, structure, wireframes, card, challenge, exhibit, flow, grid, highlights, highlightsSection, img, item, overview, palette, section, text, tree } from '../build';
import type { CaseStudy } from '../types';

export const eventsBookingPortal: CaseStudy = {
  cover: img('events-hero', 'Hero mockup: BookMyEvent portal for GDSC SRM'),
  sections: [
    overview({
      role: 'Creatives & Photography Team Lead: designed the club’s Event Booking Portal as high-fidelity Figma screens',
      timeline: 'Google Developer Group, SRM IST: Team Lead from September 2023 to September 2024',
      overview: [
        'BookMyEvent is a full-fledged, responsive events portal designed for Google Developer Group at SRM, and open to every organisation that runs events.',
        'I designed the web application, from the chapter page with upcoming and previous events to filtering, registration and a dashboard.',
        'It brings event discovery and sign-ups, which usually happen across forms and social posts, into one branded place.',
      ],
    }),
    highlightsSection(
      highlights('A responsive events portal for GDG SRM, open to every organisation.', {
        exhibits: [prototype('events'), { media: img('events-a', 'Chapter header with GDSC SRM team photo'), caption: cap('0.1', 'Screen', 'Chapter page header') }],
      }),
    ),
    section('context', 'Context', 'Events deserve a better front door.', [
      text('Many events, many forms.', [
        'Student chapters run workshops, hackathons and talks all year. Each one usually comes with its own form, poster and announcement, which makes events easy to miss.',
      ]),
      tree(
        'BookMyEvent',
        [
          { label: 'Events', items: ['Upcoming events', 'Previous events', 'Event details'] },
          { label: 'Discover', items: ['Search', 'Date', 'Mode', 'Category'] },
          { label: 'Account', items: ['Sign up', 'Dashboard'] },
          { label: 'Contact', items: ['Chapter information'] },
        ],
        cap('1.0', 'Diagram', 'Information architecture'),
      ),
      research('events'),
    ]),
    section('the-problem', 'The Problem', 'Great events, hard to find.', [
      text(
        'What got in the way.',
        ['The events were good. Getting to them was the hard part.'],
        {
          list: [
            item('database', 'Registrations lived in a separate form for every event.'),
            item('clock', 'Students missed events announced only on social media.'),
            item('thumbs-down', 'Organisers had no shared place to showcase past events.'),
            item('users', 'The experience had to work on phones as well as laptops.'),
          ],
        },
      ),
      challenge('Give every event one place to be discovered, understood and booked, on any screen.'),
      text('North Star design principles:', [], {
        cards: [
          card('Discover by filter', 'Date, mode and category narrow the list fast.', 'target'),
          card('Register in one click', 'A single button on every event card.', 'cursor-click'),
          card('Open to everyone', 'A structure any organisation can adopt.', 'users'),
        ],
      }),
    ]),
    section('user-flow', 'User Flow', 'From browsing to booked.', [
      text('Short and predictable.', [
        'A visitor signs in with Google, narrows events with filters and registers from the event card or the event page. After the event, attendees receive a certificate they can download and share.',
      ]),
      flow(['Sign in with Google', 'Filter events', 'Event page', 'Register', 'Certificate'], cap('3.0', 'Diagram', 'Booking flow')),
      text('The flow plan, from the wireframes.', [
        'My wireframe page mapped the whole product before any pixels: sign-up, then the main app and menu; an events gallery leading to an event info page with the certificate, an authenticity message and share options; a new-event flow through registration, RSVP and confirmation; and a dashboard with upcoming events, past events, settings and contact.',
      ]),
      flow(['New event', 'Register', 'RSVP', 'Confirmation'], cap('3.1', 'Diagram', 'Event creation and RSVP, from the flow plan')),
      wireframes('events'),
    ]),
    section('layout', 'Layout', 'Filters on the left, events on the right.', [
      text('A familiar structure.', [
        'A calendar date picker and collapsible filters for events, mode and category sit beside a grid of upcoming event cards. Each card shows the date, mode, description, tech stack tags and a Register button.',
      ]),
      structure('events', 'Filters and upcoming event cards', 'Filters and upcoming events: structure and final. Drag to compare.', 'b'),
    ]),
    section('interactions', 'Interactions', 'Details that save a click.', [
      text('Everything about an event, on one page.', [
        'Each event page carries the description, topic tags, when and where (with a link to Google Maps), whether it is offline or online, the organising team, sponsors and discussions, with Register Now always in reach.',
        'Once the event is over, attendees can download their certificate or share their accomplishment straight from the portal.',
      ]),
      exhibit(img('events-certificate', 'Certificate of appreciation for Code with Node 2.0'), cap('5.0', 'Design', 'Certificate issued through the portal')),
      grid([
        card('Calendar filter', 'Pick a date to see what is on.', 'clock'),
        card('Mode tags', 'Offline or online at a glance.', 'target'),
        card('Tech stack tags', 'Know what you will learn before registering.', 'lightbulb'),
        card('Shareable certificates', 'Download or share a certificate after attending.', 'check-circle'),
      ]),
    ]),
    section('visual-design', 'Visual Design', 'A dark canvas with a Google spark.', [
      text('Brand-ready by design.', [
        'A dark interface lets the colourful Google Developer imagery stand out, and a soft lavender accent marks sign-up and registration.',
      ]),
      palette(
        [
          { name: 'Lavender', hex: '#B69DF8' },
          { name: 'Background', hex: '#101214' },
          { name: 'Surface', hex: '#202224' },
          { name: 'Text', hex: '#FFFFFF' },
        ],
        cap('6.0', 'Palette', 'Colours sampled from the final screens'),
      ),
      exhibit(img('events-banner', 'Code with Node 2.0 event key visual'), cap('6.1', 'Design', 'Event key visual for Code with Node 2.0')),
    ]),
    section('final-designs', 'Final Designs', 'The chapter page, in full.', [
      text('One page for every event.', ['Header, about, filters, upcoming events and previous events come together in one responsive page.']),
      exhibit(board('events', 'BookMyEvent chapter page'), cap('7.0', 'Animated view', 'Chapter page')),
      text('Every screen size, both themes.', [
        'The high-fidelity designs cover web in dark and light themes, tablet in portrait and landscape, and mobile, plus alerts, the account flow, the create-event flow, feedback screens and a minimised chatbot.',
        'Even the type scale was worked out on the wireframes: 22 ÷ 2 × 1.5 = 16.5, rounded to a 16 px body size.',
      ]),
      pair([
        { media: img('events-node', 'Code with Node 2.0 key visual'), caption: cap('7.1', 'Design', 'Event visual: Code with Node 2.0') },
        { media: img('events-studyjam', 'Google Cloud Study Jam key visual'), caption: cap('7.2', 'Design', 'Event visual: Google Cloud Study Jam') },
      ]),
      moreScreens('events', '7.3'),
    ]),
    section('retrospective', 'Retrospective', 'Designing for a community.', [
      text('Looking back.', [
        'Leading visual design for a 25+ member team taught me that a portal like this is as much about consistency as it is about features. Every event looks and works the same way, which makes the next one easier to run.',
      ]),
      text('Project Takeaways:', [], {
        cards: [
          card('Consistency scales', 'One card pattern works for every event.', 'check-circle'),
          card('Filters beat feeds', 'Structured discovery beats scrolling posts.', 'target'),
          card('Design for adoption', 'Open to all organisations from day one.', 'users'),
          card('Responsive from the start', 'Students arrive from phones first.', 'sparkle'),
        ],
      }),
      faq([
        { q: 'Who could use the portal?', a: 'It was designed for GDG SRM and open to every organisation that runs events.' },
        { q: 'What happens after an event?', a: 'Attendees can download a certificate, check its authenticity and share it from the event page.' },
        { q: 'Where are the event visuals?', a: 'The Visual design page collects every campaign, from Code with Node 2.0 to the Google Cloud Study Jam.' },
      ]),
    ]),
  ],
};
