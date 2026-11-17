import { board, cap, faq, moreScreens, prototype, card, exhibit, flow, highlights, highlightsSection, img, overview, palette, section, text, tree } from '../build';
import type { CaseStudy } from '../types';

// Source: Music Streaming App.fig (Cover, High Fidelity, Behance pages).
export const musicStreamingApp: CaseStudy = {
  cover: img('music-hero', 'Hero mockup: music streaming app library and player screens'),
  sections: [
    overview({
      role: 'Independent project: interaction design and visual design',
      timeline: 'Passion project, high-fidelity iOS screens',
      overview: [
        'A streaming app that keeps music, podcasts, audiobooks and radio in one library, with a player built around lyrics.',
        'I designed the home, library and player screens and the components behind them: headers, list items and the tab bar.',
        'The design leans on artwork and a dark canvas, so covers and moods do the talking.',
      ],
    }),
    highlightsSection(
      highlights('Music, podcasts, audiobooks and radio in one library, with lyrics front and centre while you listen.', {
        exhibits: [prototype('music'), { media: img('music-pair', 'My Library and player screens'), caption: cap('0.1', 'Screens', 'My Library and the player') }],
      }),
    ),
    section('context', 'Context', 'One app for everything you listen to.', [
      text('Many formats, one habit.', [
        'Listening moves between songs, podcast episodes and audiobooks through the day. The app treats them as one library rather than separate apps.',
      ]),
      tree(
        'Library',
        [
          { label: 'Music', items: ['Recently played', 'Favourite artists', 'Liked songs'] },
          { label: 'Podcasts', items: ['Latest episodes'] },
          { label: 'Audiobooks', items: ['Currently reading'] },
          { label: 'Radio', items: ['Stations'] },
        ],
        cap('1.0', 'Diagram', 'Library structure and tabs'),
      ),
    ]),
    section('user-flow', 'User Flow', 'From home to the chorus.', [
      text('Two taps to play.', ['Home surfaces what you played recently and the artists you love, so the next song is never more than two taps away.']),
      flow(['Home', 'Recently played or favourite artist', 'Player', 'Lyrics'], cap('3.0', 'Diagram', 'Listening flow')),
    ]),
    section('interactions', 'Interactions', 'A player you can read.', [
      text('Lyrics, not just controls.', [
        'The player shows where the track is playing from, large artwork, a scrubber with elapsed and total time, and lyrics that scroll with the song.',
        'My Library filters by albums, artists and playlists, and keeps liked songs, podcast episodes and audiobooks one tap away.',
      ]),
      exhibit(img('music-pair', 'My Library and player screens'), cap('5.0', 'Screens', 'Library filters and player')),
    ]),
    section('visual-design', 'Visual Design', 'Dark canvas, loud artwork.', [
      text('Let the covers set the mood.', ['A dark interface with soft dividers lets album art and mood playlists such as Party, Sad and Bollywood Classics carry the colour.']),
      palette(
        [
          { name: 'Background', hex: '#101010' },
          { name: 'Surface', hex: '#161616' },
          { name: 'Raised', hex: '#1C1C1C' },
          { name: 'Text', hex: '#FFFFFF' },
        ],
        cap('6.0', 'Palette', 'Colours sampled from the final screens; artwork brings the colour'),
      ),
    ]),
    section('final-designs', 'Final Designs', 'The screen set.', [
      exhibit(board('music', 'Music streaming app'), cap('7.0', 'Animated view', 'Library and player')),
      moreScreens('music', '7.1'),
    ]),
    section('retrospective', 'Retrospective', 'What I would add next.', [
      text('Looking back.', ['The next step would be the home screen in full and a dedicated podcast player with chapters and playback speed.']),
      faq([
        { q: 'Is this a real app?', a: 'It is a design concept: high-fidelity iOS screens designed in Figma.' },
        { q: 'Which screens are designed?', a: 'Home, My Library and the player, along with the header, list item and tab bar components.' },
      ]),
    ]),
  ],
};
