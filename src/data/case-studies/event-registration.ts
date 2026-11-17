import { board, cap, faq, moreScreens, card, exhibit, flow, grid, highlights, highlightsSection, img, overview, section, text } from '../build';
import type { CaseStudy } from '../types';

// Sources: Registration Portal.fig and Registration Portal2.fig.
export const eventRegistration: CaseStudy = {
  cover: img('registration-hero', 'Hero mockup: GDSC SRM registration website'),
  sections: [
    overview({
      role: 'Product and visual design: registration websites, check-in app and confirmation email',
      team: ['GDSC SRM Creatives and Technical teams'],
      timeline: 'GDSC SRM, 2022 to 2023',
      overview: [
        'Every club event starts with a form. I designed the registration experiences for Recruitments 2022, the Design and Develop workshop and Code with Node 2.0, for desktop and mobile.',
        'For Code with Node 2.0, the system went further: an admin app for checking people in and out at the venue, registering walk-ins, and a confirmation email for every registration.',
        'The goal was a front door that felt like the club: friendly, colourful and quick.',
      ],
    }),
    highlightsSection(
      highlights('From sign-up to the venue door: registration sites, a check-in app and confirmation emails.', {
        exhibits: [{ media: img('registration-recruitments', 'Recruitments 2022 registration landing page'), caption: cap('0.1', 'Screen', 'Recruitments 2022 landing page') }],
      }),
    ),
    section('context', 'Context', 'Events live and die at the door.', [
      text('Three events, one pattern.', [
        'Recruitments needed to collect applicants, workshops needed seats filled, and Code with Node 2.0 needed to know who actually arrived. Each started with the same short form.',
      ]),
      grid([
        card('Recruitments 2022', 'Applications to join the club.', 'users'),
        card('Design and Develop', 'A workshop with a Figma session by me and a Remix session by Mhd. Sami.', 'sparkle'),
        card('Code with Node 2.0', 'Registration, check-in, walk-ins and check-out.', 'check-circle'),
      ]),
    ]),
    section('user-flow', 'User Flow', 'From form to venue.', [
      text('Attendee flow.', ['A short form, a celebration, and an email with everything you need.']),
      flow(['Landing page', 'Let’s know you better', 'Congratulations', 'Confirmation email'], cap('3.0', 'Diagram', 'Attendee registration')),
      text('Volunteer flow at the venue.', ['The admin app opens on four large actions, so volunteers can work fast at a busy entrance.']),
      flow(['Check in', 'Walk in', 'Register', 'Check out'], cap('3.1', 'Diagram', 'Code with Node 2.0 admin app')),
    ]),
    section('interactions', 'Interactions', 'Short forms, clear outcomes.', [
      text('Three fields and done.', ['The form asks only for a full name, email and contact number, then confirms with a celebratory screen.']),
      exhibit(img('registration-form', 'Let’s know you better registration form'), cap('5.0', 'Screen', 'Registration form')),
      grid([
        card('Large actions', 'Check-in, walk-in, register and check-out on one screen.', 'cursor-click'),
        card('Instant feedback', 'Each check-in shows a clear message.', 'check-circle'),
        card('Email confirmation', 'Every registration gets a confirmation email.', 'lightbulb'),
        card('Desktop and mobile', 'Each page designed for both.', 'sparkle'),
      ]),
    ]),
    section('final-designs', 'Final Designs', 'Every screen.', [
      exhibit(board('registration', 'Registration website'), cap('7.0', 'Animated view', 'Registration website')),
      moreScreens('registration', '7.1'),
    ]),
    section('retrospective', 'Retrospective', 'Small forms, big events.', [
      text('Looking back.', ['Designing the volunteer side taught me that an event experience includes the people running it, not only the people attending.']),
      faq([
        { q: 'Which events used these designs?', a: 'Recruitments 2022, the Design and Develop workshop and Code with Node 2.0, all for GDSC SRM.' },
        { q: 'What did the check-in app do?', a: 'Volunteers could check attendees in and out, register walk-ins and see a confirmation message for each action.' },
      ]),
    ]),
  ],
};
