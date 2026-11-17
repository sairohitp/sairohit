// Generated from the decoded Figma files (see docs/MASTER_PLAN.md). Edit freely.
import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

export interface VisualItem {
  slug: string;
  title: string;
  /** Source Figma file. */
  file: string;
  formats: string[];
  /** Final frames, and other frames (drafts and explorations) in the file. */
  finals: number;
  explorations: number;
  year: number | null;
  /** Pages in the file carry other Creatives team members' names. */
  team: boolean;
}

export interface Campaign {
  id: string;
  title: string;
  description: string;
  items: VisualItem[];
}

export const campaigns: Campaign[] = [
  {
    "id": "design-and-develop",
    "title": "Design and Develop workshop",
    "description": "A hands-on workshop pairing design with development: a Figma session I led and a Remix session by Mhd. Sami, on 11 March at Hippocrates Hall. The campaign covered intro and speaker posts, posters, stories, banners, LinkedIn posts, certificates and sponsor invoices.",
    "items": [
      {
        "slug": "intro-post",
        "title": "Intro posts",
        "file": "Intro Post.fig",
        "formats": [
          "Post"
        ],
        "finals": 3,
        "explorations": 16,
        "year": null,
        "team": false
      },
      {
        "slug": "main-post",
        "title": "Main post",
        "file": "Main Post.fig",
        "formats": [
          "Post"
        ],
        "finals": 2,
        "explorations": 22,
        "year": null,
        "team": false
      },
      {
        "slug": "posters",
        "title": "Posters",
        "file": "Posters.fig",
        "formats": [
          "Poster"
        ],
        "finals": 1,
        "explorations": 7,
        "year": null,
        "team": false
      },
      {
        "slug": "stories",
        "title": "Stories",
        "file": "Stories.fig",
        "formats": [
          "Story"
        ],
        "finals": 4,
        "explorations": 0,
        "year": null,
        "team": false
      },
      {
        "slug": "linkedin",
        "title": "LinkedIn posts",
        "file": "Linkedin.fig",
        "formats": [
          "Post"
        ],
        "finals": 5,
        "explorations": 4,
        "year": null,
        "team": false
      },
      {
        "slug": "banners",
        "title": "Banners",
        "file": "Banners.fig",
        "formats": [
          "Banner",
          "Post"
        ],
        "finals": 3,
        "explorations": 0,
        "year": null,
        "team": false
      },
      {
        "slug": "sponsor-post",
        "title": "Sponsor posts",
        "file": "Sponsor Post.fig",
        "formats": [
          "Post"
        ],
        "finals": 6,
        "explorations": 26,
        "year": null,
        "team": false
      },
      {
        "slug": "certificates",
        "title": "Certificates",
        "file": "Certificates.fig",
        "formats": [
          "Slide"
        ],
        "finals": 1,
        "explorations": 0,
        "year": null,
        "team": false
      },
      {
        "slug": "invoice",
        "title": "Sponsor invoices",
        "file": "Invoice.fig",
        "formats": [
          "A4"
        ],
        "finals": 4,
        "explorations": 0,
        "year": null,
        "team": false
      }
    ]
  },
  {
    "id": "code-with-node",
    "title": "Code with Node 2.0",
    "description": "A teaching-learning event on web development with an emphasis on Node.js, held on 30 January 2023 in Mini Hall 2 at SRM IST. Reveal, speaker, sponsor and RSVP posts, a reel cover and certificates, alongside the registration site and check-in app.",
    "items": [
      {
        "slug": "about-node",
        "title": "About the event",
        "file": "About Node.fig",
        "formats": [
          "Post"
        ],
        "finals": 1,
        "explorations": 14,
        "year": null,
        "team": false
      },
      {
        "slug": "reveal-post",
        "title": "Reveal post and C2C poster",
        "file": "Reveal Post.fig",
        "formats": [
          "Post"
        ],
        "finals": 1,
        "explorations": 7,
        "year": null,
        "team": false
      },
      {
        "slug": "speaker-post",
        "title": "Speaker post",
        "file": "Speaker Post.fig",
        "formats": [
          "Post"
        ],
        "finals": 1,
        "explorations": 27,
        "year": null,
        "team": false
      },
      {
        "slug": "sponsor",
        "title": "Sponsor post",
        "file": "Sponsor.fig",
        "formats": [
          "Post"
        ],
        "finals": 1,
        "explorations": 5,
        "year": null,
        "team": false
      },
      {
        "slug": "rsvp",
        "title": "RSVP",
        "file": "RSVP.fig",
        "formats": [
          "Poster"
        ],
        "finals": 2,
        "explorations": 0,
        "year": null,
        "team": false
      },
      {
        "slug": "reel-cover",
        "title": "Reel cover",
        "file": "Reel Cover.fig",
        "formats": [
          "Story"
        ],
        "finals": 1,
        "explorations": 0,
        "year": null,
        "team": false
      },
      {
        "slug": "certificates2",
        "title": "Certificates",
        "file": "Certificates2.fig",
        "formats": [
          "Slide"
        ],
        "finals": 1,
        "explorations": 7,
        "year": null,
        "team": false
      }
    ]
  },
  {
    "id": "solution-challenge",
    "title": "Google Solution Challenge 2024",
    "description": "Posts that walked students through the 2024 Solution Challenge: an introduction, the timeline, rewards and benefits, and the story of the teams selected for the regional bootcamp.",
    "items": [
      {
        "slug": "introduction",
        "title": "Introduction",
        "file": "Introduction.fig",
        "formats": [
          "Banner"
        ],
        "finals": 1,
        "explorations": 29,
        "year": null,
        "team": false
      },
      {
        "slug": "timeline",
        "title": "Timeline",
        "file": "Timeline.fig",
        "formats": [
          "Post"
        ],
        "finals": 4,
        "explorations": 22,
        "year": null,
        "team": false
      },
      {
        "slug": "rewards-and-benefits",
        "title": "Rewards and benefits",
        "file": "Rewards and Benefits.fig",
        "formats": [
          "Post"
        ],
        "finals": 3,
        "explorations": 26,
        "year": null,
        "team": false
      },
      {
        "slug": "regional-bootcamp-selection-story",
        "title": "Regional bootcamp selection",
        "file": "Regional Bootcamp Selection Story.fig",
        "formats": [
          "Story"
        ],
        "finals": 2,
        "explorations": 0,
        "year": null,
        "team": false
      },
      {
        "slug": "linkedin-post2",
        "title": "LinkedIn carousel",
        "file": "LinkedIn Post2.fig",
        "formats": [
          "Post"
        ],
        "finals": 7,
        "explorations": 1,
        "year": null,
        "team": false
      }
    ]
  },
  {
    "id": "cloud-study-jam",
    "title": "Google Cloud Study Jam",
    "description": "Posts, stories and certificates for the Google Cloud Study Jam programme.",
    "items": [
      {
        "slug": "cloud-study-jam",
        "title": "Cloud Study Jam",
        "file": "Cloud Study Jam.fig",
        "formats": [
          "Banner",
          "Story"
        ],
        "finals": 4,
        "explorations": 113,
        "year": null,
        "team": false
      }
    ]
  },
  {
    "id": "hacktoberfest",
    "title": "Hacktoberfest",
    "description": "Posts and an event banner welcoming students to a month of open-source contribution.",
    "items": [
      {
        "slug": "hacktoberfest",
        "title": "Hacktoberfest",
        "file": "Hacktoberfest.fig",
        "formats": [
          "Post"
        ],
        "finals": 1,
        "explorations": 11,
        "year": null,
        "team": false
      }
    ]
  },
  {
    "id": "community",
    "title": "Community, recruitment and milestones",
    "description": "Recruitment results, core team introductions, the freshers’ welcome, follower milestones, email headers and feed planning for the club’s channels.",
    "items": [
      {
        "slug": "results",
        "title": "Recruitment results",
        "file": "Results.fig",
        "formats": [
          "Post"
        ],
        "finals": 4,
        "explorations": 0,
        "year": null,
        "team": false
      },
      {
        "slug": "results2",
        "title": "Recruitment results 2023",
        "file": "Results2.fig",
        "formats": [
          "Post"
        ],
        "finals": 4,
        "explorations": 14,
        "year": null,
        "team": false
      },
      {
        "slug": "post2",
        "title": "Core Team 2022 to 2023",
        "file": "Post2.fig",
        "formats": [
          "Post"
        ],
        "finals": 6,
        "explorations": 56,
        "year": null,
        "team": true
      },
      {
        "slug": "post",
        "title": "Community posts",
        "file": "Post.fig",
        "formats": [
          "Post",
          "Story"
        ],
        "finals": 3,
        "explorations": 12,
        "year": null,
        "team": false
      },
      {
        "slug": "social-media",
        "title": "Social media posts",
        "file": "Social Media.fig",
        "formats": [
          "Post"
        ],
        "finals": 47,
        "explorations": 8,
        "year": null,
        "team": false
      },
      {
        "slug": "freshers-highlights",
        "title": "Freshers’ welcome",
        "file": "Freshers Highlights.fig",
        "formats": [
          "Story"
        ],
        "finals": 1,
        "explorations": 62,
        "year": null,
        "team": true
      },
      {
        "slug": "6k-story",
        "title": "6K followers story",
        "file": "6k story.fig",
        "formats": [
          "Story"
        ],
        "finals": 1,
        "explorations": 19,
        "year": null,
        "team": true
      },
      {
        "slug": "grid",
        "title": "Instagram feed grid",
        "file": "Grid.fig",
        "formats": [],
        "finals": 0,
        "explorations": 0,
        "year": null,
        "team": false
      },
      {
        "slug": "email-headers-2023",
        "title": "Email headers 2023",
        "file": "Email Headers (2023).fig",
        "formats": [
          "A4",
          "Email header"
        ],
        "finals": 6,
        "explorations": 0,
        "year": 2023,
        "team": false
      },
      {
        "slug": "poster-design",
        "title": "Ideathon posters",
        "file": "Poster design.fig",
        "formats": [
          "Post",
          "Poster"
        ],
        "finals": 6,
        "explorations": 2,
        "year": null,
        "team": false
      },
      {
        "slug": "chandrayaan-3",
        "title": "Chandrayaan-3",
        "file": "Chandrayaan 3.fig",
        "formats": [
          "Story"
        ],
        "finals": 1,
        "explorations": 3,
        "year": null,
        "team": false
      }
    ]
  },
  {
    "id": "festivals",
    "title": "Festivals and national days",
    "description": "Greetings for festivals and national days, published as Instagram stories through the year.",
    "items": [
      {
        "slug": "diwali-2022",
        "title": "Diwali 2022",
        "file": "Diwali 2022.fig",
        "formats": [
          "Story"
        ],
        "finals": 1,
        "explorations": 0,
        "year": 2022,
        "team": false
      },
      {
        "slug": "independence-day-2023",
        "title": "Independence Day 2023",
        "file": "Independence Day 2023.fig",
        "formats": [
          "Story"
        ],
        "finals": 1,
        "explorations": 3,
        "year": 2023,
        "team": true
      },
      {
        "slug": "raksha-bandhan-2023",
        "title": "Raksha Bandhan 2023",
        "file": "Raksha Bandhan 2023.fig",
        "formats": [
          "Story"
        ],
        "finals": 1,
        "explorations": 11,
        "year": 2023,
        "team": false
      },
      {
        "slug": "ganesh-chaturthi-2023",
        "title": "Ganesh Chaturthi 2023",
        "file": "Ganesh Chaturthi 2023.fig",
        "formats": [
          "Story"
        ],
        "finals": 1,
        "explorations": 4,
        "year": 2023,
        "team": false
      },
      {
        "slug": "gandhi-jayanti-2023",
        "title": "Gandhi Jayanti 2023",
        "file": "Gandhi Jayanti 2023.fig",
        "formats": [
          "Story"
        ],
        "finals": 1,
        "explorations": 14,
        "year": 2023,
        "team": false
      },
      {
        "slug": "dussehra-2023",
        "title": "Dussehra 2023",
        "file": "Dussehra 2023.fig",
        "formats": [
          "Story"
        ],
        "finals": 1,
        "explorations": 22,
        "year": 2023,
        "team": true
      },
      {
        "slug": "dhanteras-2023",
        "title": "Dhanteras 2023",
        "file": "Dhanteras 2023.fig",
        "formats": [
          "Story"
        ],
        "finals": 1,
        "explorations": 7,
        "year": 2023,
        "team": false
      },
      {
        "slug": "diwali-2023",
        "title": "Diwali 2023",
        "file": "Diwali 2023.fig",
        "formats": [
          "Story"
        ],
        "finals": 1,
        "explorations": 2,
        "year": 2023,
        "team": false
      },
      {
        "slug": "christmas-2023",
        "title": "Christmas 2023",
        "file": "Christmas 2023.fig",
        "formats": [
          "Story"
        ],
        "finals": 1,
        "explorations": 2,
        "year": 2023,
        "team": false
      },
      {
        "slug": "new-year-s-2024",
        "title": "New Year 2024",
        "file": "New Year's 2024.fig",
        "formats": [
          "Story"
        ],
        "finals": 1,
        "explorations": 4,
        "year": 2024,
        "team": false
      },
      {
        "slug": "lohri-24",
        "title": "Lohri 2024",
        "file": "Lohri 24.fig",
        "formats": [
          "Story"
        ],
        "finals": 1,
        "explorations": 7,
        "year": 2024,
        "team": false
      },
      {
        "slug": "pongal-24",
        "title": "Pongal 2024",
        "file": "Pongal'24.fig",
        "formats": [
          "Story"
        ],
        "finals": 9,
        "explorations": 6,
        "year": 2024,
        "team": false
      },
      {
        "slug": "republic-day-2024",
        "title": "Republic Day 2024",
        "file": "Republic Day 2024.fig",
        "formats": [
          "Story"
        ],
        "finals": 1,
        "explorations": 4,
        "year": 2024,
        "team": false
      },
      {
        "slug": "holi-2024",
        "title": "Holi 2024",
        "file": "Holi 2024.fig",
        "formats": [
          "Story"
        ],
        "finals": 1,
        "explorations": 7,
        "year": 2024,
        "team": false
      },
      {
        "slug": "janmashtami-2024",
        "title": "Janmashtami 2024",
        "file": "Janmashtami 2024.fig",
        "formats": [
          "Story"
        ],
        "finals": 1,
        "explorations": 8,
        "year": 2024,
        "team": false
      },
      {
        "slug": "eid",
        "title": "Eid",
        "file": "Eid.fig",
        "formats": [
          "Story"
        ],
        "finals": 1,
        "explorations": 6,
        "year": null,
        "team": false
      },
      {
        "slug": "new-year-2025",
        "title": "New Year 2025",
        "file": "New year 2025.fig",
        "formats": [
          "Story"
        ],
        "finals": 1,
        "explorations": 5,
        "year": 2025,
        "team": false
      },
      {
        "slug": "unused",
        "title": "More occasions (unpublished)",
        "file": "Unused.fig",
        "formats": [
          "Story"
        ],
        "finals": 7,
        "explorations": 0,
        "year": null,
        "team": false
      }
    ]
  }
];

const DIR = join(process.cwd(), 'public/images/visual');

/**
 * Images for an item: exports named <slug>.jpg|png|webp and <slug>-2, -3 ... come first;
 * until they exist, the file's own Figma thumbnail is used.
 */
export function visualImages(slug: string): { src: string; exported: boolean }[] {
  const files = existsSync(DIR) ? readdirSync(DIR) : [];
  const re = new RegExp(`^${slug}(-\\d+)?\\.(jpe?g|png|webp)$`, 'i');
  const exported = files.filter((f) => re.test(f)).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  if (exported.length) return exported.map((f) => ({ src: `/images/visual/${f}`, exported: true }));
  return [{ src: `/images/visual/thumb-${slug}.webp`, exported: false }];
}
