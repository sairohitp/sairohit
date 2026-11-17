import { board, cap, faq, moreScreens, pair, sdgs, stats, prototype, research, structure, wireframes, card, challenge, exhibit, flow, grid, highlights, highlightsSection, img, item, overview, palette, section, text, tree } from '../build';
import type { CaseStudy } from '../types';

// Sources: resume (Apple Developer Program) and the screens on the live site.
export const recycleAndDonateApp: CaseStudy = {
  cover: img('recycle-hero', 'Hero mockup: Greenwealth recycling app screens'),
  sections: [
    overview({
      role: 'Designer and iOS developer: user research, information architecture, prototyping, accessibility',
      team: ['Apple Developer Program: Abeer Mathur, Rishi Charray', 'Google Solution Challenge: Aman Agrawal'],
      timeline: 'Apple Developer Program, May 2023 to March 2024 (Chennai and Mysuru), followed by an iOS internship in April 2024',
      overview: [
        'Greenwealth is a Recycle and Donate app: people list an item, choose whether to recycle or donate it, and schedule a pickup, earning eco-points along the way.',
        'I designed it during the 11-month Apple Developer Program, which combined Apple’s design principles with iOS development, from user interviews to an interactive prototype built to Apple’s Human Interface Guidelines.',
        'I also built features from detailed software requirements specifications in an agile team, contributing to sprint planning, peer reviews and technical presentations.',
      ],
    }),
    highlightsSection(
      highlights('Recycle or donate in as few steps as possible, designed and prototyped to Apple’s Human Interface Guidelines.', {
        exhibits: [prototype('recycle'), { media: img('recycle-row', 'Onboarding, dashboard, new order and leaderboard screens'), caption: cap('0.1', 'Screens', 'Onboarding, dashboard, new order and leaderboard') }],
      }),
    ),
    section('context', 'Context', 'Good intentions, missing incentives.', [
      text('Starting with research.', [
        'I ran user interviews and a competitive review of donation and recycling apps, then turned the findings into personas, journey maps and a prioritised problem list.',
      ]),
      flow(['User interviews', 'Competitive review', 'Personas', 'Journey maps', 'Prioritised problems'], cap('1.0', 'Diagram', 'Research process')),
      research('recycle'),
      tree(
        'Greenwealth',
        [
          { label: 'Dashboard', items: ['Impact summary', 'Leaderboard position', 'Ongoing order'] },
          { label: 'Orders', items: ['List an item', 'Recycle or donate', 'Schedule pickup', 'Past orders'] },
          { label: 'Leaderboard', items: ['Top recycler of the month', 'Rankings'] },
          { label: 'Profile', items: ['Feedback', 'Help and support'] },
        ],
        cap('1.1', 'Diagram', 'Information architecture'),
      ),
    ]),
    section('the-problem', 'The Problem', 'Recycling asked for effort and gave little back.', [
      text(
        'What the research prioritised.',
        ['The problem statement was simple: household recyclable waste collection is ineffective. Each barrier was small on its own; together, they kept old goods in the cupboard.'],
        {
          list: [
            item('database', 'No easy way to know what an item is worth, or where it should go.'),
            item('clock', 'Pickups needed calls and back-and-forth coordination.'),
            item('thumbs-down', 'Impact was invisible, so the habit did not stick.'),
            item('users', 'Accessibility had to be designed in from the start, not added later.'),
          ],
        },
      ),
      challenge('Keep every task, from listing an item to scheduling a pickup, to as few steps as possible, for everyone.'),
      text('North Star design principles:', [], {
        cards: [
          card('As few steps as possible', 'List, choose, schedule. Nothing more.', 'cursor-click'),
          card('Show the impact', 'Kilograms, rupees and eco-points up front.', 'target'),
          card('Accessible by default', 'Dynamic Type, VoiceOver and contrast from day one.', 'check-circle'),
        ],
      }),
    ]),
    section('user-flow', 'User Flow', 'List, choose, schedule.', [
      text('The core flow.', ['I defined the information architecture and core flows for listing an item, choosing to recycle or donate it, and scheduling a pickup.']),
      flow(['List an item', 'Recycle or donate', 'Schedule a pickup', 'Track the order'], cap('3.0', 'Diagram', 'Core flow')),
      text('Selling for recycling.', ['A new recycling order collects only what is needed for a fair estimate and a pickup, then shows the price before the user commits.']),
      flow(
        [
          { label: 'Picture', note: 'Approximate weight' },
          { label: 'Categories', note: 'Paper, plastic, furniture, clothes' },
          { label: 'Pickup location' },
          { label: 'Pickup slot' },
          { label: 'Estimate and proceed' },
        ],
        cap('3.1', 'Diagram', 'New order flow'),
      ),
      wireframes('recycle'),
    ]),
    section('layout', 'Layout', 'A dashboard that celebrates progress.', [
      text('Impact, then action.', [
        'The dashboard greets the user, then shows total recycled, total earned and eco-points, followed by their leaderboard position and two clear actions: Order History and Place a New Order.',
      ]),
      structure('recycle', 'Onboarding and dashboard screens', 'Onboarding and dashboard: structure and final. Drag to compare.'),
    ]),
    section('interactions', 'Interactions', 'Built to Apple’s guidelines.', [
      text('Accessible and familiar.', [
        'I built an interactive Figma prototype to Apple’s Human Interface Guidelines, with Dynamic Type, VoiceOver labels and colour contrast checked against accessibility standards.',
        'The leaderboard celebrates the top recycler of the month and pins the user’s own rank, so progress is visible without searching.',
      ]),
      exhibit(img('recycle-b', 'New order and leaderboard screens'), cap('5.0', 'Screens', 'New order and leaderboard')),
      grid([
        card('Dynamic Type', 'Text scales with the user’s preferred size.', 'sparkle'),
        card('VoiceOver labels', 'Every control is described for screen readers.', 'users'),
        card('Colour contrast', 'Checked against accessibility standards.', 'check-circle'),
        card('Instant estimate', 'See the expected price before proceeding.', 'lightbulb'),
      ]),
    ]),
    section('solution-challenge', 'Solution Challenge', 'Taking Greenwealth to the Google Solution Challenge.', [
      text('Sell and donate, for the planet.', [
        'As team Greenwealth with Aman Agrawal, both of us pre-final-year computer science students at SRM, we extended the app for the Google Solution Challenge: sell and donate old goods, and earn money, rewards and eco-points.',
        'The prototype added Recycling 101 guides, community stories about clean-up drives, more waste categories (paper, plastic, metal, furniture, electronics, clothes or your own), detailed pickup addresses, a slot picker, order history, FAQs and support.',
      ]),
      sdgs([11, 12, 13, 15], cap('6.0', 'Goals', 'UN Sustainable Development Goals the solution addresses')),
      text('Two apps, one loop.', ['A user app for households, and a collector app where collectors see open requests nearby and accept them.']),
      exhibit(img('recycle-solution', 'Welcome screen and collector app open requests'), cap('6.1', 'Screens', 'Welcome and the collector app')),
    ]),
    section('visual-design', 'Visual Design', 'Fresh, friendly and green.', [
      text('Colour that rewards.', [
        'Green signals progress and every primary action, yellow is saved for rewards and achievements, and a soft grey background keeps cards easy to scan.',
      ]),
      palette(
        [
          { name: 'Green', hex: '#34C759' },
          { name: 'Reward yellow', hex: '#FFB801' },
          { name: 'Background', hex: '#F2F3F8' },
          { name: 'Ink', hex: '#000000' },
        ],
        cap('7.0', 'Palette', 'Colours sampled from the final screens'),
      ),
    ]),
    section('final-designs', 'Final Designs', 'The complete screen set.', [
      text('Every step of the journey.', ['The final set covers onboarding, dashboard, new orders, ongoing orders, leaderboard, feedback, help and past orders.']),
      exhibit(board('recycle', 'Full Greenwealth screen set'), cap('8.0', 'Animated view', 'Full screen set')),
      moreScreens('recycle', '8.1'),
      text('Tech stack:', [], {
        cards: [
          card('SwiftUI', 'The iOS app.', 'sparkle'),
          card('MapKit', 'Tracking pickups.', 'target'),
          card('Firebase', 'Data storage.', 'database'),
          card('Supabase', 'Backend logic.', 'check-circle'),
        ],
      }),
    ]),
    section('retrospective', 'Retrospective', 'Design and build, side by side.', [
      text('Looking back.', [
        'Designing and building in the same programme meant every flow had to survive a software requirements specification, a sprint and a peer review.',
      ]),
      text('Project Takeaways:', [], {
        cards: [
          card('Research earns the roadmap', 'Personas and journey maps set the priorities.', 'users'),
          card('Fewer steps win', 'Each task kept as short as possible.', 'cursor-click'),
          card('Accessibility is design', 'Dynamic Type and VoiceOver shaped the layouts.', 'check-circle'),
          card('Build what you design', 'Working from SRS documents kept design honest.', 'lightbulb'),
        ],
      }),
      faq([
        { q: 'Why are there two versions?', a: 'Greenwealth started in the Apple Developer Program with Abeer Mathur and Rishi Charray, as a user app and a collector app. With Aman Agrawal, I then extended it for the Google Solution Challenge, mapped to UN Sustainable Development Goals 11, 12, 13 and 15.' },
        { q: 'What was it built with?', a: 'SwiftUI for the app, MapKit for tracking pickups, Firebase for data storage and Supabase for backend logic.' },
        { q: 'How was accessibility handled?', a: 'The prototype followed Apple’s Human Interface Guidelines, with Dynamic Type, VoiceOver labels and colour contrast checked against accessibility standards.' },
      ]),
    ]),
  ],
};
