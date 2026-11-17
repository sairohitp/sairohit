import { board, cap, prototype, research, structure, wireframes, card, challenge, exhibit, flow, grid, highlights, highlightsSection, img, item, overview, palette, section, text, tree } from '../build';
import type { CaseStudy } from '../types';

export const customerRelationshipManagement: CaseStudy = {
  cover: img('crm-hero', 'Hero mockup: connectwise CRM app screens on a light canvas'),
  sections: [
    overview({
      role: 'Independent project: user flows, interaction design, visual design',
      timeline: 'Passion project, high-fidelity Android prototype',
      overview: [
        'connectwise is a mobile CRM that helps support teams track complaints and queries across channels, talk to customers and keep their files in one place.',
        'I designed the Android app end to end: onboarding, a statistics dashboard, customer profiles, messaging and ticket history.',
        'Every screen is built to help an agent decide what to handle next.',
      ],
    }),
    highlightsSection(
      highlights('Customer relationships on the go: track, communicate and resolve from one app.', {
        exhibits: [prototype('crm'), { media: img('crm-row', 'Onboarding, dashboard, customer and messages screens'), caption: cap('0.1', 'Screens', 'Onboarding, dashboard, customer and messages') }],
      }),
    ),
    section('context', 'Context', 'Support teams live in many inboxes.', [
      text('One customer, many channels.', [
        'Complaints and queries arrive by SMS, mail and chat apps. Without one view, agents repeat questions and critical issues wait in the queue.',
      ]),
      tree(
        'connectwise',
        [
          { label: 'Home', items: ['Dashboard', 'Audience reach'] },
          { label: 'Customers', items: ['Customer list', 'Customer profile', 'Product transactions'] },
          { label: 'Messages', items: ['Highly critical', 'Unresolved', 'Closed'] },
          { label: 'Records', items: ['Attachments', 'Ticket history', 'Customer settings'] },
        ],
        cap('1.0', 'Diagram', 'Information architecture'),
      ),
      research('crm'),
    ]),
    section('the-problem', 'The Problem', 'Critical issues looked like routine ones.', [
      text(
        'Where support breaks down.',
        ['Agents were busy, but not always busy with the right things.'],
        {
          list: [
            item('database', 'Complaints arrive through many channels and get lost.'),
            item('users', 'A customer’s history is not visible in one place.'),
            item('target', 'Critical issues look the same as routine ones.'),
            item('key', 'Files are shared over channels that are not secure.'),
          ],
        },
      ),
      challenge('Help support teams see what matters most and resolve it without switching tools.'),
      text('North Star design principles:', [], {
        cards: [
          card('Severity first', 'Critical items rise to the top.', 'target'),
          card('One customer, one view', 'Profile, messages, files and transactions together.', 'users'),
          card('Numbers that drive action', 'Every metric links to work that can be done.', 'lightbulb'),
        ],
      }),
    ]),
    section('user-flow', 'User Flow', 'From complaint to closure.', [
      text('The resolution loop.', ['Every ticket follows the same path, so agents always know the next step.']),
      flow(['Complaint arrives', 'Triage by severity', 'Open customer profile', 'Message and share files', 'Resolve and close'], cap('3.0', 'Diagram', 'Resolution loop')),
      wireframes('crm'),
    ]),
    section('layout', 'Layout', 'A dashboard that shows the queue, not just totals.', [
      text('Complaints and queries, side by side.', [
        'The dashboard pairs complaints and queries: total, critical, closed or addressed today, and outstanding, each with change versus last month, followed by weekly audience reach.',
      ]),
      structure('crm', 'Onboarding and dashboard screens', 'Onboarding and dashboard: structure and final. Drag to compare.'),
    ]),
    section('interactions', 'Interactions', 'Triage with a tap.', [
      text('Filters and tags.', [
        'Messages filter by Highly Critical, Unresolved, Closed or All, and each conversation shows its channel and type, such as SMS, Mail, Chat app, Query or Complaint.',
      ]),
      exhibit(img('crm-b', 'Customer profile and messages screens'), cap('5.0', 'Screens', 'Customer profile and messages')),
      grid([
        card('Severity filters', 'Jump straight to highly critical items.', 'target'),
        card('Channel tags', 'See where each message came from.', 'database'),
        card('Customer profile', 'Contact details, files and transactions together.', 'users'),
        card('Secure files', 'Documents stay within the customer’s scope.', 'key'),
      ]),
    ]),
    section('visual-design', 'Visual Design', 'Clear, calm and indigo.', [
      text('Colour for focus.', [
        'A cool grey background and white cards keep dense information readable, while indigo highlights key metrics, charts and actions.',
      ]),
      palette(
        [
          { name: 'Indigo', hex: '#514EF3' },
          { name: 'Background', hex: '#F2F4F8' },
          { name: 'Surface', hex: '#FFFFFF' },
          { name: 'Ink', hex: '#080909' },
        ],
        cap('6.0', 'Palette', 'Colours sampled from the final screens'),
      ),
    ]),
    section('final-designs', 'Final Designs', 'The complete screen set.', [
      text('Built for the whole queue.', ['The final set covers onboarding, dashboard, customers, profiles, conversations, attachments and ticket history.']),
      exhibit(board('crm', 'Full connectwise screen set'), cap('7.0', 'Animated view', 'Full screen set')),
    ]),
    section('retrospective', 'Retrospective', 'Designing for busy people.', [
      text('Looking back.', [
        'Support agents work under pressure. The best decisions in connectwise were the ones that removed a decision: severity filters, clear tags and one profile for each customer.',
      ]),
      text('Project Takeaways:', [], {
        cards: [
          card('Prioritise for the user', 'Severity filters do the sorting for agents.', 'target'),
          card('Context saves time', 'A full profile avoids repeated questions.', 'users'),
          card('Mobile can be dense', 'Clear grouping makes data-heavy screens usable.', 'sparkle'),
          card('Trust needs security', 'Secure file handling is part of the experience.', 'key'),
        ],
      }),
    ]),
  ],
};
