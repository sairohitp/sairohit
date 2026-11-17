import { board, cap, prototype, research, structure, wireframes, card, challenge, exhibit, flow, grid, highlights, highlightsSection, img, item, overview, palette, section, text, tree } from '../build';
import type { CaseStudy } from '../types';

// Sources: the project's Figma files (High Fidelity and Presentation pages).
export const bloodDonationApp: CaseStudy = {
  cover: img('pulse-hero', 'Hero mockup: PULSE blood donation app screens'),
  sections: [
    overview({
      role: 'UI/UX design: user flows, screening experience, high-fidelity screens',
      team: ['Sai Rohit', 'Aman Agrawal', 'Faculty guide: Prof. G. Manoj Kumar'],
      timeline: 'Academic project at SRM Institute of Science and Technology',
      overview: [
        'PULSE is a mobile app that connects blood donors with recipients, tackling blood shortages and logistical hurdles by streamlining the process, protecting donor privacy and raising awareness.',
        'I designed the experience from onboarding and donor screening to placing a blood request, finding nearby blood banks and tracking requests.',
        'The aim: timely access to life-saving blood, with every step designed for moments when time matters.',
      ],
    }),
    highlightsSection(
      highlights('Your lifeline to efficient blood donation: request, find and donate from one app.', {
        exhibits: [prototype('pulse'), { media: img('pulse-row', 'Splash, home, request and blood bank screens'), caption: cap('0.1', 'Screens', 'Splash, home, request and nearby blood banks') }],
      }),
    ),
    section('context', 'Context', 'When blood is needed, every minute counts.', [
      text('Bridging donors and recipients.', [
        'Finding a matching donor or an open blood bank usually means phone calls and word of mouth. PULSE brings donors, recipients, blood banks and campaigns into one place.',
      ]),
      tree(
        'PULSE',
        [
          { label: 'Onboarding', items: ['Create account', 'Verify', 'Screening questions'] },
          { label: 'Donate', items: ['Find blood banks', 'Open requests', 'Campaigns', 'Guide'] },
          { label: 'Request', items: ['Blood group and units', 'Location', 'Schedule or request now'] },
          { label: 'Logs and profile', items: ['Previous requests', 'Screening profile'] },
        ],
        cap('1.0', 'Diagram', 'Information architecture'),
      ),
      research('pulse'),
    ]),
    section('the-problem', 'The Problem', 'Shortages, logistics and trust.', [
      text(
        'Problem statement.',
        ['Blood shortages are made worse by slow coordination. Recipients need a match quickly, donors need to know whether they are eligible, and both need to trust that their details are safe.'],
        {
          list: [
            item('clock', 'Urgent requests rely on calls and messages that reach too few people.'),
            item('target', 'Donors rarely know which blood banks or drives are nearby and open.'),
            item('lightbulb', 'Eligibility rules are unclear, so willing donors hesitate.'),
            item('key', 'Personal and medical details must stay private.'),
          ],
        },
      ),
      challenge('Connect donors and recipients securely, and make every request fast enough for an emergency.'),
      text('North Star design principles:', [], {
        cards: [
          card('Emergency first', 'An emergency path is available from the very first screen.', 'clock'),
          card('Clear eligibility', 'Short screening questions and plain-language answers.', 'check-circle'),
          card('Private by design', 'Donors and recipients connect securely.', 'key'),
        ],
      }),
    ]),
    section('user-flow', 'User Flow', 'From request to response.', [
      text('Placing a request.', [
        'A recipient picks the blood group and units needed, confirms the location, and either schedules a request with patient and venue details or requests immediately. Donors are notified, and the recipient hears back when someone accepts.',
      ]),
      flow(['Blood group and units', 'Confirm location', 'Schedule or request now', 'Patient and venue details', 'Request placed'], cap('3.0', 'Diagram', 'Request flow')),
      text('Becoming a donor.', ['New donors create an account, verify it, and answer three short screening questions that build their screening profile.']),
      flow(['Create account', 'Verify', 'Screening questions', 'Screening profile'], cap('3.1', 'Diagram', 'Donor onboarding')),
      exhibit(img('pulse-d', 'Create account, details and verification screens'), cap('3.2', 'Screens', 'Onboarding')),
      wireframes('pulse'),
    ]),
    section('layout', 'Layout', 'A home screen built around six actions.', [
      text('Everything a donor needs, in one grid.', [
        'Home greets the donor and offers six clear actions: find blood banks, open requests, eligibility, how much to donate, campaigns and a guide. Request, Logs and Profile sit in the tab bar.',
      ]),
      structure('pulse', 'Home and request screens', 'Home and request: structure and final. Drag to compare.'),
    ]),
    section('interactions', 'Interactions', 'Reassurance at every step.', [
      text('Confirmation and guidance.', [
        'After a request, a clear confirmation explains what happens next and links to previous requests and nearby clinics. Eligibility answers are written in plain language, based on the donor’s screening results.',
      ]),
      exhibit(img('pulse-b', 'Schedule request and request placed screens'), cap('5.0', 'Screens', 'Schedule a request and confirmation')),
      exhibit(img('pulse-c', 'Eligibility information and donor list screens'), cap('5.1', 'Screens', 'Eligibility and donors nearby')),
      grid([
        card('Nearby blood banks', 'Centres listed with distance and opening status.', 'target'),
        card('Two ways to request', 'Schedule ahead or request immediately.', 'clock'),
        card('Urgent notifications', 'Donors hear about urgent needs in their area.', 'lightbulb'),
        card('Screening profile', 'Eligibility stays up to date on the profile.', 'check-circle'),
      ]),
    ]),
    section('visual-design', 'Visual Design', 'One colour, one purpose.', [
      text('Red, used with care.', [
        'A bold red carries the brand and every primary action, set against white surfaces and soft pink fields so forms stay calm and readable.',
      ]),
      palette(
        [
          { name: 'Pulse red', hex: '#F52646' },
          { name: 'Soft red', hex: '#F7516B' },
          { name: 'Surface', hex: '#FFFFFF' },
          { name: 'Ink', hex: '#000000' },
        ],
        cap('6.0', 'Palette', 'Colours sampled from the final screens'),
      ),
    ]),
    section('final-designs', 'Final Designs', 'The complete screen set.', [
      text('From splash to request.', ['The final set covers the splash screen, onboarding, screening, home, requests, confirmation, blood banks and donors.']),
      exhibit(board('pulse', 'Full PULSE screen set'), cap('7.0', 'Animated view', 'Full screen set')),
      text('Proposed tech stack:', [], {
        cards: [
          card('ETL', 'Data integration.', 'database'),
          card('Firebase', 'Data storage.', 'check-circle'),
          card('Flutter', 'Wrapping the app for mobile.', 'sparkle'),
        ],
      }),
    ]),
    section('retrospective', 'Retrospective', 'Designing for urgent moments.', [
      text('Looking back.', [
        'PULSE taught me to design for people under stress: fewer choices, clearer words and constant reassurance about what happens next.',
      ]),
      text('Project Takeaways:', [], {
        cards: [
          card('Urgency shapes flow', 'An immediate path matters as much as a scheduled one.', 'clock'),
          card('Explain eligibility', 'Plain-language answers turn hesitation into action.', 'lightbulb'),
          card('Reassure after action', 'Confirmations should say what happens next.', 'check-circle'),
          card('Privacy builds trust', 'Secure connections encourage people to take part.', 'key'),
        ],
      }),
    ]),
  ],
};
