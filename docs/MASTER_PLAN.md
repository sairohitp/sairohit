# Master plan

How the 74 Figma files map onto the site, the framework that keeps it organised, and what comes next.

## 1. The information architecture

| Layer | Route | Source | What it holds |
|---|---|---|---|
| Home | `/` | `src/pages/index.astro` | Hero, glance stats, 12 case studies (2-column grid with filters), Explorations, Visual teaser, things I built, experience, writing |
| Case studies | `/projects/<slug>/` | `src/data/projects.ts` + `src/data/case-studies/<slug>.ts` | One page per product, following the UX journey below |
| Visual design | `/visual/` | `src/data/visual.ts` | 52 files grouped into 7 campaigns, with lightbox galleries |
| About | `/about/` | `src/data/profile.ts` (resume is the source of truth) | Timeline, experience, leadership, skills, education, recognition, FAQ |
| Blog | `/blog/`, `/blog/<slug>/`, `/rss.xml` | `src/content/blog/*.md` | 17 posts, each optionally tied to a case study with `related: <slug>`; 10 animated cover styles |
| Designed and built | Home, `#built-title` | `src/data/profile.ts` (`built`) | OrgGrid, FundLookup, Handl, All is All, Dhobermans and Progull |
| Colleagues | `/colleagues/` | `src/data/colleagues.ts` | People named in the files and project sites, grouped into team cards; shared work and sources listed once per team |
| Sitemap | `/sitemap/` | `src/data/routes.ts` | Every page, case study section, blog heading and external link, with a filter |
| Status | `/status/`, `/status/<code>/`, `404.html` | `src/data/statuses.ts` | 200 status page plus designed 301, 403, 404, 410, 500 and 503 pages |
| Machine-readable | `/sitemap.xml`, `/robots.txt`, `/llms.txt`, `/llms-full.txt`, `/rss.xml` | `src/pages/*.ts` | Feeds for search engines and AI assistants |

Cross-references: every case study ends with related posts and the next project; event projects link to their visual campaigns; About links to the Events case study and the Visual page; posts link back to the case studies they discuss.

## 2. The case study framework

Every case study is built from the same sections, so they read consistently and gaps are visible at a glance.

| Step | Section id | Typical blocks |
|---|---|---|
| Overview | `overview`, `highlights` | Role, team, timeline, summary, headline stats |
| Discover | `context`, `the-problem` | Brief, challenge statement, research slot (`<key>-research`) |
| Define | `user-flow` | Flow diagram, information architecture tree |
| Ideate | `layout` | Wireframes slot (`<key>-wireframes`), structure view compared with the final screens |
| Design | `interactions`, `visual-design` | Key interactions, palette, type scale, components |
| Deliver | `final-designs` | Boards, screen pairs, auto gallery of `<key>-screen-*`, prototype video slot |
| Reflect | `retrospective`, FAQ | Learnings, next steps, questions |

Project-specific sections sit between Design and Deliver: `solution-challenge` (Recycle, with UN SDG tiles), `website` (Pluto), `ai` (Placerr).

### Naming conventions (drop-in assets)

| File in `public/images/` | Effect |
|---|---|
| `projects/<key>-cover.jpg` | Replaces the generated card and page cover |
| `projects/<key>-screen-<name>.(png\|jpg)` | Added to the project's screen gallery automatically |
| `projects/<key>-research.(png\|jpg)` | Adds a research exhibit to Discover |
| `projects/<key>-wireframes.(png\|jpg)` | Adds a wireframes exhibit to Ideate |
| `projects/<key>-prototype.mp4` | Adds a looping prototype video to Deliver |
| `visual/<slug>.jpg`, `visual/<slug>-2.jpg` | Replace the Visual page thumbnail with the real exports |
| `public/og/<slug>.jpg` (1200 x 630) | Social sharing card for that case study |

Project keys: `learning`, `library`, `recycle`, `pluto`, `placement`, `crm`, `streaming`, `events`, `pulse`, `music`, `registration`, `gdsc`, plus `ecommerce` and `franchise` for the explorations.

### Every file, represented

All 74 files were decoded layer by layer (712,572 layers, 30,737 text layers, 2,852 frames, 1,700 prototype links, 205 canvas notes). The result lives in `src/data/figma-files.json` and appears on the site as:

- **Inside the files** on every case study (numbered section, also in the contents pane): pages and frames with sizes and prototype links, typefaces and size scale, colours by use, and components and instances. Each file is also listed under Inside the files in the contents pane.
- **Inside the file** in each Visual page tile's popup.
- **Rendered screens**: frames whose full render is embedded in the file were extracted into each project's gallery (including the Placerr and PULSE profile screens). References, moodboards, drafts and other members' versions were left out on purpose.

## 3. Inventory of all 74 files

22 product files feed 12 case studies and 2 explorations; 52 visual design files feed 7 campaigns. Every frame of every file is listed in `docs/figma-inventory.csv`.

| Figma file | Category | Pages | Frames and layers | Destination |
|---|---|---|---|---|
| 6k story.fig | Visual design | 10 | 23 | /visual/, Community, recruitment and milestones |
| About Node.fig | Visual design | 2 | 15 | /visual/, Code with Node 2.0 |
| App.fig | Product case study | 5 | 56 | /projects/ev-car-rental-app/ |
| Banners.fig | Visual design | 1 | 3 | /visual/, Design and Develop workshop |
| Blood donation app.fig | Product case study | 1 | 21 | /projects/blood-donation-app/ |
| Blood Donation.fig | Product case study | 4 | 30 | /projects/blood-donation-app/ |
| Certificates.fig | Visual design | 1 | 2 | /visual/, Design and Develop workshop |
| Certificates2.fig | Visual design | 2 | 8 | /visual/, Code with Node 2.0 |
| Chandrayaan 3.fig | Visual design | 2 | 5 | /visual/, Community, recruitment and milestones |
| Christmas 2023.fig | Visual design | 2 | 3 | /visual/, Festivals and national days |
| Cloud Study Jam.fig | Visual design | 4 | 120 | /visual/, Google Cloud Study Jam |
| Customer Relationship Management.fig | Product case study | 8 | 47 | /projects/customer-relationship-management/ |
| Dhanteras 2023.fig | Visual design | 2 | 9 | /visual/, Festivals and national days |
| Diwali 2022.fig | Visual design | 1 | 1 | /visual/, Festivals and national days |
| Diwali 2023.fig | Visual design | 2 | 11 | /visual/, Festivals and national days |
| Dussehra 2023.fig | Visual design | 2 | 41 | /visual/, Festivals and national days |
| E Commerce Platform.fig | Exploration | 5 | 12 | Home, Explorations |
| Eid.fig | Visual design | 2 | 8 | /visual/, Festivals and national days |
| Email Headers (2023).fig | Visual design | 1 | 7 | /visual/, Community, recruitment and milestones |
| Events Portal.fig | Product case study | 1 | 27 | /projects/events-booking-portal/ |
| Events' Booking Portal.fig | Product case study | 5 | 30 | /projects/events-booking-portal/ |
| events.fig | Product case study | 2 | 16 | /projects/events-booking-portal/ |
| First Draft.fig | Product case study | 2 | 18 | /projects/events-booking-portal/ |
| Franchise News Co..fig | Exploration | 1 | 15 | Home, Explorations |
| Freshers Highlights.fig | Visual design | 6 | 86 | /visual/, Community, recruitment and milestones |
| Gandhi Jayanti 2023.fig | Visual design | 3 | 15 | /visual/, Festivals and national days |
| Ganesh Chaturthi 2023.fig | Visual design | 3 | 5 | /visual/, Festivals and national days |
| GDSCSRM.fig | Product case study | 1 | 17 | /projects/gdsc-srm-web-and-brand/ |
| Grid.fig | Visual design | 1 | 1 | /visual/, Community, recruitment and milestones |
| Hacktoberfest.fig | Visual design | 3 | 15 | /visual/, Hacktoberfest |
| Holi 2024.fig | Visual design | 2 | 11 | /visual/, Festivals and national days |
| Independence Day 2023.fig | Visual design | 3 | 4 | /visual/, Festivals and national days |
| Intro Post.fig | Visual design | 2 | 39 | /visual/, Design and Develop workshop |
| Introduction.fig | Visual design | 2 | 49 | /visual/, Google Solution Challenge 2024 |
| Invoice.fig | Visual design | 1 | 4 | /visual/, Design and Develop workshop |
| Janmashtami 2024.fig | Visual design | 2 | 9 | /visual/, Festivals and national days |
| Learning Management System.fig | Product case study | 4 | 20 | /projects/learning-management-system/ |
| Learning Platform.fig | Product case study | 3 | 372 | /projects/learning-management-system/ |
| Library Management System.fig | Product case study | 6 | 152 | /projects/library-management-system/ |
| LinkedIn Post2.fig | Visual design | 2 | 8 | /visual/, Google Solution Challenge 2024 |
| Linkedin.fig | Visual design | 2 | 9 | /visual/, Design and Develop workshop |
| Lohri 24.fig | Visual design | 2 | 13 | /visual/, Festivals and national days |
| Main Post.fig | Visual design | 5 | 126 | /visual/, Design and Develop workshop |
| Music Streaming App.fig | Product case study | 4 | 11 | /projects/music-streaming-app/ |
| New year 2025.fig | Visual design | 2 | 14 | /visual/, Festivals and national days |
| New Year's 2024.fig | Visual design | 3 | 13 | /visual/, Festivals and national days |
| Online Streaming Platform.fig | Product case study | 5 | 30 | /projects/online-streaming-platform/ |
| Placement Management System.fig | Product case study | 12 | 36 | /projects/placement-management-system/ |
| Pongal'24.fig | Visual design | 3 | 34 | /visual/, Festivals and national days |
| Post.fig | Visual design | 2 | 31 | /visual/, Community, recruitment and milestones |
| Post2.fig | Visual design | 4 | 78 | /visual/, Community, recruitment and milestones |
| Poster design.fig | Visual design | 2 | 22 | /visual/, Community, recruitment and milestones |
| Posters.fig | Visual design | 2 | 8 | /visual/, Design and Develop workshop |
| Raksha Bandhan 2023.fig | Visual design | 2 | 19 | /visual/, Festivals and national days |
| Recycle Management System.fig | Product case study | 11 | 177 | /projects/recycle-and-donate-app/ |
| Reel Cover.fig | Visual design | 1 | 1 | /visual/, Code with Node 2.0 |
| Regional Bootcamp Selection Story.fig | Visual design | 1 | 2 | /visual/, Google Solution Challenge 2024 |
| Registration Portal.fig | Product case study | 2 | 10 | /projects/event-registration/ |
| Registration Portal2.fig | Product case study | 5 | 24 | /projects/event-registration/ |
| Republic Day 2024.fig | Visual design | 3 | 10 | /visual/, Festivals and national days |
| Results.fig | Visual design | 1 | 4 | /visual/, Community, recruitment and milestones |
| Results2.fig | Visual design | 3 | 87 | /visual/, Community, recruitment and milestones |
| Reveal Post.fig | Visual design | 4 | 40 | /visual/, Code with Node 2.0 |
| Rewards and Benefits.fig | Visual design | 2 | 33 | /visual/, Google Solution Challenge 2024 |
| RSVP.fig | Visual design | 1 | 2 | /visual/, Code with Node 2.0 |
| Social Media.fig | Visual design | 2 | 55 | /visual/, Community, recruitment and milestones |
| Speaker Post.fig | Visual design | 2 | 33 | /visual/, Code with Node 2.0 |
| Sponsor Post.fig | Visual design | 2 | 32 | /visual/, Design and Develop workshop |
| Sponsor.fig | Visual design | 3 | 9 | /visual/, Code with Node 2.0 |
| Stories.fig | Visual design | 2 | 4 | /visual/, Design and Develop workshop |
| Timeline.fig | Visual design | 3 | 34 | /visual/, Google Solution Challenge 2024 |
| Unused.fig | Visual design | 3 | 9 | /visual/, Festivals and national days |
| Website.fig | Product case study | 1 | 1 | /projects/gdsc-srm-web-and-brand/ |
| Website2.fig | Product case study | 1 | 2 | /projects/ev-car-rental-app/ |

## 4. What was integrated

- 12 case studies, including three new ones from the files: Music Streaming App, Event Registration and GDSC SRM Web and Brand.
- Real screens harvested from the files: Learning dashboard, courses, submissions, history and leaderboard; Placerr tracker, companies and AI assistant; Pluto vehicle renders and specs; Myshelf librarian, events and book screens; Recycle Solution Challenge with SDG goals; streaming title page; registration flows; GDSC brand guide.
- Visual page with 7 campaigns (Design and Develop, Code with Node, Solution Challenge, Cloud Study Jam, Hacktoberfest, Community, Festivals), with team pieces labelled.
- FAQs on every case study and on About, tech stacks, flows, structure views, related posts and visual links.

## 5. SEO and AI crawlability

| Layer | What is in place |
|---|---|
| Every page | Unique title (under 65 characters) and description (70 to 160), canonical URL, robots directives, Open Graph and Twitter cards, author link |
| Structured data | One JSON-LD graph per page: WebSite and Person always; ProfilePage (Home, About), CreativeWork (case studies), BlogPosting and Blog, CollectionPage (Visual, Colleagues), ItemList, BreadcrumbList and FAQPage wherever there are FAQs |
| Discovery | `sitemap.xml` (all indexable pages), RSS feed, HTML sitemap, internal links from every page |
| AI assistants | `llms.txt` (summary with links) and `llms-full.txt` (full text of every case study and post); robots rules that allow GPTBot, ClaudeBot, PerplexityBot, Google-Extended and others |
| Content | Each file's pages, frames, typefaces, colours and components are rendered as HTML text, readable by crawlers |
| Audit | All 22 indexable pages pass: one h1, alt text on every image, valid JSON-LD, title and description lengths |

Important: crawlers read `robots.txt` and `llms.txt` only at the host root, `https://sairohitp.github.io/`. A project site at `/sairohit/` cannot serve them there. See `docs/SEO.md` for the two-minute fix.

## 6. Mobile, accessibility and preferences

- Every page is checked at 390, 768 and 1440 px, in dark and light themes: no sideways scroll, no script errors, no failed requests.
- Sticky navigation condenses into a card on scroll, hides while reading and returns on scroll up; on phones the links move into a sheet.
- Preferences: theme (system, dark, light), motion, text size, contrast, underlined links, reading spacing, region (date and number formats), currency (rupee figures converted at the Xe mid-market reference of 6 Nov 2026, marked approximate) and language (opens Google Translate; the site itself is written in English).

## 7. Phases

| Phase | Scope | Owner | Status |
|---|---|---|---|
| 1 | Framework, content from the resume and files, embedded screens, Visual page, blog | Claude | Done |
| 2 | Optional: P1 exports from `docs/EXPORTS.md` for sharper screens and posts | Sai | Optional |
| 3 | Optional: prototype videos and research boards (drop-in slots) | Sai | Optional |
| 4 | Every file represented, colleagues, sitemap, status pages, SEO, preferences, sticky nav | Claude | Done |
| 5 | "View in Figma" links set to "Anyone with the link can view", OG cards for the 3 new projects, root robots.txt, Search Console | Sai | Waiting |

## 8. Open questions

1. Library (Myshelf): the files show an iOS app built in SwiftUI, while the resume calls it "Enterprise Web". Which is right for the card?
2. Visual design: which pieces are yours alone and which are the Creatives team's? Five files carry other names and are labelled "With the team".
9. Dhobermans: what was your role (founder, designer and builder, or client work)? Progull: did you also design and build the website, beyond the identity and logo?
8. Colleagues: "Aksh Kalyan" appears three times and "Aksh Kalyani" once; which is right? Creatives team members appear by first name only; full names welcome.
3. Figma links: please share view-only links (Share, Anyone with the link, can view) for each product file.
4. Placerr: startup, internship or passion project?
5. Design and Develop workshop: answered by the certificate file, 11 March 2024.
6. Pluto 3D renders: yours or sourced?
7. Is the Google Developer Solution Challenge 2025 runner-up result the Recycle (Greenwealth) project?
