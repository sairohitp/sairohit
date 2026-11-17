# Image list

All project images live in `public/images/projects/`. To replace one, push a file with the **same name** in `.png`, `.jpg` or `.webp`. A PNG or JPG you add takes priority over the existing `.webp`, so you never need to delete anything or touch code. Sizes and aspect ratios are read automatically at build time.

**Export tips:** JPG at 80 to 85% quality is ideal (much lighter than PNG). Keep files under about 1.5 MB each, and export at 2x.

Project keys used in file names:

| Project | Key |
| --- | --- |
| Library Management System | `library` |
| Learning Management System | `learning` |
| EV Car Rental App | `pluto` |
| Online Streaming Platform | `streaming` |
| Recycle & Donate App | `recycle` |
| Placement Management System | `placement` |
| Customer Relationship Management | `crm` |
| Events' Booking Portal | `events` |
| Blood Donation App (PULSE) | `pulse` |

## 1. Optional, only you have these (they appear automatically once pushed)

These sections stay hidden until the file exists. No code changes needed.

| File | Where it appears | What to export |
| --- | --- | --- |
| `<key>-prototype.mp4` | Highlights, first item (autoplays muted, loops) | Screen recording of the Figma prototype. Landscape 1600 x 1000, 10 to 20 seconds, under 8 MB. |
| `<key>-wireframes.jpg` | User Flow section | Early wireframes or sketches, laid out on one canvas. About 3200 px wide. |
| `<key>-research.jpg` | Context section | Research synthesis: personas, survey results or affinity map. About 3200 px wide. |

Example: pushing `public/images/projects/pluto-prototype.mp4` adds a looping prototype video to the EV Car Rental App page.

## 2. Recommended replacements (currently cropped from your live-site boards)

These work today but are crops of the composite boards. Clean Figma frame exports will be sharper. The `structure` views (blueprint outlines in each Layout section) regenerate automatically from these files on every build.

| File | Section | Currently shows | Suggested export |
| --- | --- | --- | --- |
| `library-row` | Highlights | Welcome, Home, Event, Book details | Those 4 frames side by side, about 3200 x 1580 |
| `library-a` | Layout (compare) | Welcome + Home | 2 frames side by side, about 3200 x 3170 |
| `library-b` | Interactions | Event + Book details | 2 frames side by side, about 3200 x 3170 |
| `learning-a` | Layout (compare) | Quizzes view: sidebar and table | Quizzes screen, about 3200 x 2190 |
| `learning-b` | Interactions | Table detail: owners and timestamps | Cropped table frame, about 3200 x 2630 |
| `pluto-row` | Highlights | Owner home, Explore, Pair, Currently riding | 4 frames side by side, about 3200 x 1580 |
| `pluto-a` | Layout (compare) | Owner home + Explore nearby | 2 frames side by side, about 3200 x 3170 |
| `pluto-b` | Interactions | Pair a new Pluto + Currently riding | 2 frames side by side, about 3200 x 3170 |
| `streaming-a` | Highlights | Navigation + hero | Top of the title page, about 3200 x 1140 |
| `streaming-b` | Layout (compare) | Title details and actions | Details panel, about 3200 x 1240 |
| `recycle-row` | Highlights | Welcome, Dashboard, New order, Leaderboard | 4 frames side by side, about 3200 x 1580 |
| `recycle-a` | Layout (compare) | Welcome + Dashboard | 2 frames side by side, about 3200 x 3170 |
| `recycle-b` | Interactions | New order + Leaderboard | 2 frames side by side, about 3200 x 3170 |
| `placement-a` | Highlights | Overview stats + Company spotlight | About 3200 x 1560 |
| `placement-b` | Layout (compare) | Ongoing applications | About 3200 x 1740 |
| `placement-c` | Interactions | Recommended roles + Preparation tips | Tall right rail, about 1800 x 4280 |
| `events-a` | Highlights | Chapter header | About 3200 x 960 |
| `events-b` | Layout (compare) | Filters + Upcoming events | About 3200 x 2150 |

## Already done from your .fig files

| Files | Source |
| --- | --- |
| `crm-row`, `crm-a`, `crm-b`, `crm-c`, `crm-d` | Clean screen exports from Customer Relationship Management.fig |
| `pulse-*` (cover, board, hero, row, a, b, c, d) | Screens from Blood Donation.fig |
| `events-banner`, `events-certificate` | Designs from events.fig |

## 3. Optional upgrades (already good, replace only if you want to)

| File | Where it appears | Current source | Suggested export |
| --- | --- | --- | --- |
| `<key>-cover` | Home page card | Original board from your live site | Full board, 3600 px wide |
| `<key>-board` | Final Designs (slow pan) | Original board, 2600 px wide | Same board at 4000 px wide JPG |
| `<key>-hero` | Top of each case study | Mockup made from your real screens | Your own hero mockup, 3200 x 1840 |

## 4. Generated, nothing needed from you

| Files | What they are |
| --- | --- |
| `<key>-structure.webp` | Blueprint outline traced from the final screens, shown in the drag-to-compare slider. Rebuilt automatically. |
| `public/og/*.jpg` | Link preview cards (1200 x 630) for LinkedIn, WhatsApp and similar apps. |
| `public/images/about/*` | About page photos, from your live site. |
