import { board, cap, card, challenge, exhibit, flow, grid, highlights, highlightsSection, img, item, overview, palette, section, text, tree } from '../build';
import type { CaseStudy } from '../types';

export const onlineStreamingPlatform: CaseStudy = {
  cover: img('streaming-cover', 'heavenns streaming platform title page'),
  sections: [
    overview({
      role: 'Independent project: concept, information architecture, visual design',
      timeline: 'Passion project, high-fidelity web design',
      overview: [
        'heavenns is a concept for a single streaming home that brings TV shows, movies, music, games, podcasts, audiobooks, anime and children’s content into one place.',
        'I designed the browsing experience and the title page, focusing on how quickly a viewer can decide whether to watch something.',
        'The design explores a cinematic, dark interface where artwork leads and controls stay out of the way.',
      ],
    }),
    highlightsSection(
      highlights('One home for every kind of entertainment, with a title page built for fast decisions.', {
        exhibits: [{ media: img('streaming-a', 'Home hero with navigation'), caption: cap('0.1', 'Screen', 'Navigation and hero') }],
      }),
    ),
    section('context', 'Context', 'Entertainment is scattered across too many apps.', [
      text('Many services, one viewer.', [
        'Viewers move between separate apps for shows, music, podcasts and games, each with its own navigation and recommendations. heavenns imagines one home for all of them.',
      ]),
      tree(
        'heavenns',
        [
          { label: 'Watch', items: ['TV Shows', 'Movies', 'Anime', 'Children'] },
          { label: 'Listen', items: ['Music', 'Podcasts', 'Audiobooks'] },
          { label: 'Play', items: ['Games'] },
          { label: 'Personal', items: ['Watchlist', 'Moodboards'] },
        ],
        cap('1.0', 'Diagram', 'Content categories'),
      ),
    ]),
    section('the-problem', 'The Problem', 'Choice overload is the real competitor.', [
      text(
        'Why viewers keep scrolling.',
        ['A larger library does not guarantee a better evening. The more there is to choose from, the harder it becomes to choose.'],
        {
          list: [
            item('database', 'Many categories compete for attention in a single navigation.'),
            item('clock', 'Viewers decide in seconds, often from artwork alone.'),
            item('lightbulb', 'Recommendations rarely explain why a title is suggested.'),
            item('thumbs-down', 'Feedback is limited, so the feed is slow to learn.'),
          ],
        },
      ),
      challenge('Help viewers decide what to watch in seconds, across every type of content.'),
      text('North Star design principles:', [], {
        cards: [
          card('Artwork first', 'Let the imagery do the selling.', 'sparkle'),
          card('Context before commitment', 'Match score, years, seasons and genres before Play.', 'target'),
          card('Tune the feed', 'Explicit feedback that improves recommendations.', 'check-circle'),
        ],
      }),
    ]),
    section('user-flow', 'User Flow', 'Browse, decide, play.', [
      text('The decision path.', ['Every step gives the viewer one more reason to press Play, or to move on quickly.']),
      flow(['Browse home', 'Open title', 'Check match and details', 'Play or add to My List'], cap('3.0', 'Diagram', 'Decision path')),
      text('Teaching the feed.', ['Two explicit signals, I Like This and Don’t Suggest, feed straight back into recommendations.']),
      flow(['Watch or browse', 'I Like This or Don’t Suggest', 'Better recommendations'], cap('3.1', 'Diagram', 'Feedback loop')),
    ]),
    section('layout', 'Layout', 'A title page that answers every question.', [
      text('Everything above the fold.', [
        'The title page stacks a full-bleed hero, then the poster, match score, years, seasons, episodes, network and genres, followed by actions, tagline and synopsis. Badges such as Dolby Vision and 4K sit to the right.',
      ]),
      exhibit(img('streaming-b', 'Title details with actions and synopsis'), cap('4.0', 'Screen', 'Title details and actions')),
    ]),
    section('interactions', 'Interactions', 'Feedback that shapes the feed.', [
      text('More than play and pause.', [
        'Beyond Play and Add to My List, viewers can mark I Like This or Don’t Suggest, giving the recommendation engine explicit signals instead of guessing from watch history alone.',
      ]),
      grid([
        card('Play', 'The primary action, always first in the row.', 'cursor-click'),
        card('Add to My List', 'Save for later without leaving the page.', 'check-circle'),
        card('I Like This', 'A positive signal for similar titles.', 'sparkle'),
        card('Don’t Suggest', 'Remove a title and its lookalikes from the feed.', 'thumbs-down'),
      ]),
    ]),
    section('visual-design', 'Visual Design', 'Cinematic dark, with one bright accent.', [
      text('Let the artwork glow.', [
        'Near-black surfaces let artwork stand out. The yellow wordmark and match score provide a single bright accent, and a light and dark toggle sits in the header.',
      ]),
      palette(
        [
          { name: 'Signal yellow', hex: '#FFFE00' },
          { name: 'Background', hex: '#0F0F0F' },
          { name: 'Surface', hex: '#1D1F22' },
          { name: 'Text', hex: '#FFFFFF' },
        ],
        cap('6.0', 'Palette', 'Colours sampled from the final screens'),
      ),
    ]),
    section('final-designs', 'Final Designs', 'The title page, in full.', [
      text('A cinematic first impression.', ['The final design brings navigation, hero, details and actions together on one screen.']),
      exhibit(board('streaming', 'heavenns title page'), cap('7.0', 'Animated view', 'Title page')),
    ]),
    section('retrospective', 'Retrospective', 'What I would explore next.', [
      text('Looking back.', [
        'Bringing every kind of content into one place makes the navigation the hardest problem. A next iteration would group the eleven top-level items into fewer, clearer spaces.',
      ]),
      text('Project Takeaways:', [], {
        cards: [
          card('Content is the interface', 'Artwork carries most of the decision.', 'sparkle'),
          card('Explain recommendations', 'A match score builds trust in the feed.', 'lightbulb'),
          card('Navigation needs limits', 'More categories means more grouping.', 'target'),
          card('Feedback is a feature', 'Explicit signals make personalisation visible.', 'check-circle'),
        ],
      }),
    ]),
  ],
};
