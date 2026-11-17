import { board, cap, prototype, research, structure, wireframes, card, challenge, exhibit, flow, grid, highlights, highlightsSection, img, item, overview, palette, section, text, tree } from '../build';
import type { CaseStudy } from '../types';

export const recycleAndDonateApp: CaseStudy = {
  cover: img('recycle-hero', 'Hero mockup: Greenwealth recycling app screens on a light canvas'),
  sections: [
    overview({
      role: 'Design Intern: user flows, interaction design, visual design',
      timeline: 'Internship project, delivered as a high-fidelity iOS prototype',
      overview: [
        'Greenwealth turns household waste into rewards. Users sell their old goods in four steps, earn eco-points and compete on a community leaderboard.',
        'I designed the end-to-end experience, from onboarding to placing a pickup order, tracking it and reviewing past orders.',
        'The design makes impact visible: kilograms recycled, money earned and eco-points sit at the top of the dashboard.',
      ],
    }),
    highlightsSection(
      highlights('Recycling made rewarding: sell in four steps, earn eco-points, climb the leaderboard.', {
        exhibits: [prototype('recycle'), { media: img('recycle-row', 'Onboarding, dashboard, new order and leaderboard screens'), caption: cap('0.1', 'Screens', 'Onboarding, dashboard, new order and leaderboard') }],
      }),
    ),
    section('context', 'Context', 'Good intentions, missing incentives.', [
      text('Why recycling stalls.', [
        'Most people want to recycle, but sorting, finding a buyer and arranging transport takes effort with little visible reward. Greenwealth removes the effort and makes the reward obvious.',
      ]),
      tree(
        'Greenwealth',
        [
          { label: 'Dashboard', items: ['Impact summary', 'Leaderboard position', 'Ongoing order'] },
          { label: 'Orders', items: ['Place a new order', 'Order history', 'Past orders'] },
          { label: 'Leaderboard', items: ['Top recycler of the month', 'Rankings'] },
          { label: 'Profile', items: ['Feedback', 'Help and support'] },
        ],
        cap('1.0', 'Diagram', 'Information architecture'),
      ),
      research('recycle'),
    ]),
    section('the-problem', 'The Problem', 'Recycling asked for effort and gave little back.', [
      text(
        'Four barriers to a habit.',
        ['Each barrier was small on its own. Together, they were enough to keep old goods in the cupboard.'],
        {
          list: [
            item('database', 'No easy way to know what waste is worth.'),
            item('clock', 'Pickups needed calls and back-and-forth coordination.'),
            item('thumbs-down', 'Impact was invisible, so the habit did not stick.'),
            item('users', 'No sense of community around recycling.'),
          ],
        },
      ),
      challenge('Make recycling as easy as ordering food, and as motivating as a game.'),
      text('North Star design principles:', [], {
        cards: [
          card('Four steps, no more', 'Picture, categories, location and slot.', 'cursor-click'),
          card('Show the impact', 'Kilograms, rupees and eco-points up front.', 'target'),
          card('Reward consistency', 'Eco-points and a monthly leaderboard.', 'sparkle'),
        ],
      }),
    ]),
    section('user-flow', 'User Flow', 'Sell in four steps.', [
      text('From cupboard to pickup.', ['A new order collects only what is needed for a fair estimate and a pickup, then shows the price before the user commits.']),
      flow(
        [
          { label: 'Picture', note: 'Approximate weight' },
          { label: 'Categories', note: 'Paper, plastic, furniture, clothes' },
          { label: 'Pickup location' },
          { label: 'Pickup slot' },
          { label: 'Estimate and proceed' },
        ],
        cap('3.0', 'Diagram', 'New order flow'),
      ),
      wireframes('recycle'),
    ]),
    section('layout', 'Layout', 'A dashboard that celebrates progress.', [
      text('Impact, then action.', [
        'The dashboard greets the user, then shows total recycled, total earned and eco-points, followed by their leaderboard position and two clear actions: Order History and Place a New Order.',
      ]),
      structure('recycle', 'Onboarding and dashboard screens', 'Onboarding and dashboard: structure and final. Drag to compare.'),
    ]),
    section('interactions', 'Interactions', 'Gamification without the noise.', [
      text('Progress that is always visible.', [
        'The leaderboard celebrates the top recycler of the month with a trophy and pins the user’s own rank in green, so progress is visible without searching.',
      ]),
      exhibit(img('recycle-b', 'New order and leaderboard screens'), cap('5.0', 'Screens', 'New order and leaderboard')),
      grid([
        card('Instant estimate', 'See the expected price before proceeding.', 'lightbulb'),
        card('Pinned rank', 'Your position is highlighted in the list.', 'target'),
        card('Order tracking', 'Ongoing order status on the dashboard.', 'check-circle'),
        card('Slot picker', 'Choose a pickup window that suits you.', 'clock'),
      ]),
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
        cap('6.0', 'Palette', 'Colours sampled from the final screens'),
      ),
    ]),
    section('final-designs', 'Final Designs', 'The complete screen set.', [
      text('Every step of the journey.', ['The final set covers onboarding, dashboard, new orders, ongoing orders, leaderboard, feedback, help and past orders.']),
      exhibit(board('recycle', 'Full Greenwealth screen set'), cap('7.0', 'Animated view', 'Full screen set')),
    ]),
    section('retrospective', 'Retrospective', 'Motivation is a design material.', [
      text('Looking back.', [
        'Greenwealth showed me how much behaviour depends on feedback. Showing the impact of each order made the next one more likely.',
      ]),
      text('Project Takeaways:', [], {
        cards: [
          card('Make impact visible', 'Numbers on the dashboard turned effort into progress.', 'target'),
          card('Reduce, then reward', 'Fewer steps first, incentives second.', 'cursor-click'),
          card('Community motivates', 'A leaderboard adds a social reason to return.', 'users'),
          card('Price builds trust', 'An upfront estimate removes hesitation.', 'check-circle'),
        ],
      }),
    ]),
  ],
};
