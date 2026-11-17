import { board, cap, card, challenge, exhibit, flow, grid, highlights, highlightsSection, img, item, overview, palette, section, text, tree } from '../build';
import type { CaseStudy } from '../types';

export const evCarRentalApp: CaseStudy = {
  cover: img('pluto-cover', 'Pluto EV rental app screens on a light canvas'),
  sections: [
    overview({
      role: 'Design Intern: user flows, interaction design, visual design',
      timeline: 'Internship project, delivered as a high-fidelity iOS prototype',
      overview: [
        'Pluto is an electric vehicle rental app with two sides: owners list their Plutos and earn from every rental, and riders find, reserve and unlock a vehicle nearby.',
        'I designed both journeys, from pairing a new vehicle to locking it at the end of a ride, along with an earnings dashboard for owners.',
        'The interface is built around maps, live vehicle status and a single red accent for every key action.',
      ],
    }),
    highlightsSection(
      highlights('One app for both sides of EV rental: owners track earnings, riders find, unlock and ride.', {
        exhibits: [{ media: img('pluto-row', 'Owner home, explore map, pairing and ride screens'), caption: cap('0.1', 'Screens', 'Owner home, explore, pairing and riding') }],
      }),
    ),
    section('context', 'Context', 'Two users, one vehicle.', [
      text('Owners and riders.', [
        'Owners want their vehicles to earn while staying safe. Riders want a vehicle that is close, charged and easy to unlock. Every screen serves one of these two goals.',
      ]),
      tree(
        'Pluto',
        [
          { label: 'Owner', items: ['Earnings', 'Your Plutos', 'Pair a new Pluto', 'Currently being ridden'] },
          { label: 'Rider', items: ['Explore nearby', 'Reserve', 'Unlock', 'Currently riding'] },
          { label: 'Shared', items: ['Login and sign up', 'Requests', 'Profile'] },
        ],
        cap('1.0', 'Diagram', 'Two-sided information architecture'),
      ),
    ]),
    section('the-problem', 'The Problem', 'Trust is the hardest part of sharing a vehicle.', [
      text(
        'What stands between owners and riders.',
        ['Handing a vehicle to a stranger raises questions on both sides. The app had to answer them before they were asked.'],
        {
          list: [
            item('users', 'Owners need to see who is riding their vehicle, and for how long.'),
            item('database', 'Riders need to know the charge and range before they commit.'),
            item('key', 'Pairing hardware to an account is unfamiliar to most people.'),
            item('clock', 'Ending a ride must leave the vehicle secure, every time.'),
          ],
        },
      ),
      challenge('Make handing a vehicle to a stranger feel as safe and simple as a single tap.'),
      text('North Star design principles:', [], {
        cards: [
          card('Status at a glance', 'Battery, range and parking status on every vehicle.', 'target'),
          card('Map first', 'Riders start from where they are, not from a list.', 'cursor-click'),
          card('Safe by the end', 'Every ride ends with an unmistakable lock action.', 'key'),
        ],
      }),
    ]),
    section('user-flow', 'User Flow', 'From map to ride, and back to earnings.', [
      text('The rider loop.', ['A rider opens the map, picks a zone with available Plutos, reserves, unlocks on arrival and ends the ride by locking the vehicle.']),
      flow(['Explore nearby', 'Reserve', 'Unlock', 'Ride', 'End and lock'], cap('3.0', 'Diagram', 'Rider journey')),
      text('The owner loop.', ['An owner pairs a vehicle once, then follows who is riding and what it earns.']),
      flow(['Pair a Pluto', 'Listed', 'Being ridden', 'Earnings'], cap('3.1', 'Diagram', 'Owner journey')),
    ]),
    section('layout', 'Layout', 'Owner home, built around earnings.', [
      text('Money first, then vehicles.', [
        'The owner home leads with weekly earnings as a bar chart, followed by each vehicle with its plate number, battery and status, and the current rider with dates and rating.',
      ]),
      exhibit(img('pluto-a', 'Owner home and explore nearby map'), cap('4.0', 'Screens', 'Owner home and explore nearby')),
    ]),
    section('interactions', 'Interactions', 'Hardware moments, made simple.', [
      text('Pairing and riding.', [
        'Pairing asks the owner to keep the phone close to the vehicle’s main control console, with a radar-style view of nearby Plutos and a QR code fallback.',
        'During a ride, Controls, End Ride, Help and Cancel sit in one row, and Lock Pluto is the final, unmistakable action.',
      ]),
      exhibit(img('pluto-b', 'Pairing and currently riding screens'), cap('5.0', 'Screens', 'Pairing and currently riding')),
      grid([
        card('Radar pairing', 'Nearby vehicles appear around the phone.', 'target'),
        card('QR fallback', 'Scan to pair when proximity is not enough.', 'cursor-click'),
        card('Live range', 'Charge and range stay visible during a ride.', 'lightbulb'),
        card('One-tap lock', 'A full-width red button secures the vehicle.', 'key'),
      ]),
    ]),
    section('visual-design', 'Visual Design', 'Light, map-led and unmistakably red.', [
      text('Colour with a job to do.', [
        'A light, iOS-style base keeps maps legible. Red carries the brand and marks every primary action, while green is reserved for a parked, available vehicle.',
      ]),
      palette(
        [
          { name: 'Pluto red', hex: '#EC4436' },
          { name: 'Parked green', hex: '#82F38B' },
          { name: 'Background', hex: '#F2F2F7' },
          { name: 'Ink', hex: '#000000' },
        ],
        cap('6.0', 'Palette', 'Colours sampled from the final screens'),
      ),
    ]),
    section('final-designs', 'Final Designs', 'The complete screen set.', [
      text('Both sides, end to end.', ['The final set covers sign up and login, owner home, pairing, explore, reservation, riding, unlocking and requests.']),
      exhibit(board('pluto', 'Full Pluto screen set'), cap('7.0', 'Animated view', 'Full screen set')),
    ]),
    section('retrospective', 'Retrospective', 'Designing for the physical world.', [
      text('Looking back.', [
        'Pluto taught me that a mobile flow is only half of the experience when hardware is involved. Proximity, signal and the vehicle itself shape what the screen needs to say.',
      ]),
      text('Project Takeaways:', [], {
        cards: [
          card('Design for two sides', 'Every feature had to work for owners and riders.', 'users'),
          card('Physical context matters', 'Pairing and locking happen next to the vehicle, not at a desk.', 'target'),
          card('Status beats explanation', 'Live battery and range answered questions instantly.', 'lightbulb'),
          card('Safety is UX', 'A clear end-of-ride action builds trust.', 'key'),
        ],
      }),
    ]),
  ],
};
