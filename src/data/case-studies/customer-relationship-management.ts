import { board, cap, prototype, research, structure, wireframes, card, challenge, exhibit, flow, grid, highlights, highlightsSection, img, item, overview, palette, section, text, tree } from '../build';
import type { CaseStudy } from '../types';

// Sources: the project's Figma file (Readme, High Fidelity, Presentation pages).
export const customerRelationshipManagement: CaseStudy = {
  cover: img('crm-hero', 'Hero mockup: connectwise CRM app screens'),
  sections: [
    overview({
      role: 'UI/UX design: wireframes, high-fidelity screens, asset library and a complete prototype',
      team: ['Team Wireshark', 'Sai Rohit', 'Aman Agrawal', 'Shahid Ahamed', 'Kanishk Kumar'],
      timeline: 'Team project built to a “Digital Box” brief set by industry mentors',
      overview: [
        'connectwise is a mobile CRM built around a Digital Box: one place that stores every customer communication, supports two-way conversations about complaints and queries, and lets colleagues upload and download documents securely for each customer.',
        'With Team Wireshark, I designed the app end to end, from wireframes and high-fidelity screens to the asset library and a complete prototype.',
        'Every screen helps a colleague see a customer’s full history and decide what to handle next.',
      ],
    }),
    highlightsSection(
      highlights('Customer relationships on the go: insights, profiles, chat and secure files in one app.', {
        exhibits: [prototype('crm'), { media: img('crm-row', 'Welcome, dashboard, customer profile and messages screens'), caption: cap('0.1', 'Screens', 'Welcome, dashboard, customer and messages') }],
      }),
    ),
    section('context', 'Context', 'Many channels, many logs.', [
      text('What the brief asked for.', [
        'Customers reach out through SMS, in-app notifications and email, depending on the products they hold, and each channel stores its logs differently.',
        'The brief called for a Digital Box that keeps every document, communication, complaint and resolution together, with an audit log for each customer.',
      ]),
      tree(
        'connectwise',
        [
          { label: 'Home', items: ['Dashboard', 'Audience reach'] },
          { label: 'Customers', items: ['Customer list', 'Customer profile', 'Product transactions'] },
          { label: 'Messages', items: ['Highly critical', 'Unresolved', 'Closed', 'Chat'] },
          { label: 'Records', items: ['Attachments', 'Ticket history', 'Customer settings'] },
        ],
        cap('1.0', 'Diagram', 'Information architecture'),
      ),
      research('crm'),
    ]),
    section('the-problem', 'The Problem', 'Scattered data, slower support.', [
      text(
        'Problem statement.',
        ['Current CRM systems lack centralised data access and streamlined communication across diverse products and channels. The result is inefficiency that ultimately hurts customer satisfaction.'],
        {
          list: [
            item('database', 'Communications are spread across channels that each keep their own logs.'),
            item('users', 'A customer’s documents, queries and complaints are not visible in one place.'),
            item('target', 'Urgent and negative complaints are hard to spot and prioritise.'),
            item('key', 'Documents need secure upload and download at the customer level.'),
          ],
        },
      ),
      challenge('Give colleagues one view of every customer, so complaints are handled faster and communication stays simple across products.'),
      text('North Star design principles:', [], {
        cards: [
          card('Insights at a glance', 'Key metrics on the dashboard, before any digging.', 'target'),
          card('One customer, one view', 'Profile, documents, messages and transactions together.', 'users'),
          card('Secure by default', 'Files stay within each customer’s scope.', 'key'),
        ],
      }),
    ]),
    section('user-flow', 'User Flow', 'From complaint to closure.', [
      text('The resolution loop.', ['Every ticket follows the same path, so colleagues always know the next step.']),
      flow(['Complaint arrives', 'Triage by severity', 'Open customer profile', 'Chat and share files', 'Resolve and close'], cap('3.0', 'Diagram', 'Resolution loop')),
      wireframes('crm'),
    ]),
    section('layout', 'Layout', 'A dashboard that shows the queue, not just totals.', [
      text('Complaints and queries, side by side.', [
        'The dashboard pairs complaints and queries: total, critical, closed or addressed today, and outstanding, each compared with last month, followed by weekly audience reach.',
      ]),
      structure('crm', 'Welcome and dashboard screens', 'Welcome and dashboard: structure and final. Drag to compare.'),
    ]),
    section('interactions', 'Interactions', 'Everything about a customer, one tap away.', [
      text('Profiles and triage.', [
        'Customer profiles bring together personal details, media, documents and links, queries and complaints, and product transactions.',
        'Messages filter by Highly Critical, Unresolved, Closed or All, and each conversation shows its channel and type, such as SMS, Mail, Query or Complaint.',
      ]),
      exhibit(img('crm-b', 'Customer profile and messages screens'), cap('5.0', 'Screens', 'Customer profile and messages')),
      text('Chat, files and history.', [
        'Colleagues can talk one-on-one with a customer through integrated chat, and manage previous queries, tickets and files associated with each customer.',
      ]),
      exhibit(img('crm-c', 'Customer list and chat screens'), cap('5.1', 'Screens', 'Customers and integrated chat')),
      exhibit(img('crm-d', 'Attachments and ticket history screens'), cap('5.2', 'Screens', 'Attachments and ticket history')),
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
      text('Proposed tech stack:', [], {
        cards: [
          card('ETL', 'Data integration across customer channels.', 'database'),
          card('Firebase', 'Data storage.', 'check-circle'),
          card('Open-source encryption', 'Secure handling of customer documents.', 'key'),
          card('QlikView ML', 'Analytics on complaints and queries.', 'lightbulb'),
          card('Flutter', 'Wrapping the app for mobile.', 'sparkle'),
        ],
      }),
    ]),
    section('retrospective', 'Retrospective', 'Designing for busy people.', [
      text('Looking back.', [
        'Support teams work under pressure. The strongest decisions in connectwise were the ones that removed a decision: severity filters, clear channel tags and one profile for each customer.',
      ]),
      text('Project Takeaways:', [], {
        cards: [
          card('Start from the brief', 'A clear problem statement kept the scope focused.', 'check-circle'),
          card('Context saves time', 'A full profile avoids repeated questions.', 'users'),
          card('Mobile can be dense', 'Clear grouping makes data-heavy screens usable.', 'sparkle'),
          card('Trust needs security', 'Secure file handling is part of the experience.', 'key'),
        ],
      }),
    ]),
  ],
};
