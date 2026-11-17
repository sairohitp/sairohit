import { board, cap, prototype, research, structure, wireframes, card, challenge, exhibit, flow, grid, highlights, highlightsSection, img, item, overview, palette, section, text, tree } from '../build';
import type { CaseStudy } from '../types';

export const eventsBookingPortal: CaseStudy = {
  cover: img('events-hero', 'Hero mockup: BookMyEvent portal for GDSC SRM'),
  sections: [
    overview({
      role: 'Creatives & Photography Lead: product design, visual design',
      timeline: 'Designed during my 2023 to 2024 tenure at GDSC SRM',
      overview: [
        'BookMyEvent is a full-fledged, responsive events portal designed for GDSC SRM and open to every organisation that runs events.',
        'I designed the web application, from the chapter page with upcoming and previous events to filtering, registration and a dashboard.',
        'It brings event discovery and sign-ups, which usually happen across forms and social posts, into one branded place.',
      ],
    }),
    highlightsSection(
      highlights('A responsive events portal for GDSC SRM, open to every organisation.', {
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
    ]),
    section('retrospective', 'Retrospective', 'Designing for a community.', [
      text('Looking back.', [
        'Leading the creative outflow of a 20-person team taught me that a portal like this is as much about consistency as it is about features. Every event looks and works the same way, which makes the next one easier to run.',
      ]),
      text('Project Takeaways:', [], {
        cards: [
          card('Consistency scales', 'One card pattern works for every event.', 'check-circle'),
          card('Filters beat feeds', 'Structured discovery beats scrolling posts.', 'target'),
          card('Design for adoption', 'Open to all organisations from day one.', 'users'),
          card('Responsive from the start', 'Students arrive from phones first.', 'sparkle'),
        ],
      }),
    ]),
  ],
};
