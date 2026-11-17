# Screens to export (optional)

Not required: the site already shows every file through its decoded contents and the renders embedded in the files. Exports only make screens sharper. Drop any of these in and they appear automatically.

Generated from the decoded catalogue of all 74 Figma files. The full list is also in `docs/exports.csv`, and every frame in every file is listed in `docs/figma-inventory.csv` (2,348 rows).

## How to export

| Frame type | Format | Scale | Notes |
|---|---|---|---|
| Mobile screens (width 650 px or less) | PNG | 2x | Crisp UI text on retina screens |
| Desktop and tablet screens up to 1300 px | PNG | 2x | |
| Desktop screens wider than 1300 px | JPG, quality 90% | 1x | |
| Long pages (taller than 2,600 px) | JPG, quality 85% | 1x | They pan inside the case study |
| Social posts and stories (1080 x 1080, 1080 x 1920, 1080 x 1350) | JPG, quality 90% | 1x | |
| Posters, A3, A4 and RSVP cards | JPG, quality 90% | 2x | Print sizes are small in pixels |
| Certificates and banners | JPG, quality 90% | 1x | |

Rules that keep this simple:

1. Save each file under `public/images/` with the exact name in the "Save as" column, then commit. Nothing else is needed: the site picks files up by name on the next build.
2. `projects/<key>-screen-*` files join that project's screen gallery automatically, sorted by name. `projects/<key>-cover.jpg` replaces the generated cover.
3. `visual/<slug>.jpg`, `visual/<slug>-2.jpg` and so on replace the thumbnail on the Visual page and open in the lightbox.
4. Turn off "Include ID" in the Figma export panel and keep the frame clipped. Remove any personal details (phone numbers, emails, addresses) before exporting.
5. Priority: P1 first (final screens and posts). P2 adds wireframes, drafts and templates to the process sections. P3 needs a privacy check first.

## Summary by file

| Figma file | Destination | P1 | P2 | P3 | Save as |
|---|---|---|---|---|---|
| 6k story.fig | Visual: Community, recruitment and milestones | 1 |  |  | `visual/6k-story*.jpg` |
| About Node.fig | Visual: Code with Node 2.0 | 1 |  |  | `visual/about-node*.jpg` |
| App.fig | /projects/ev-car-rental-app/ | 7 | 9 |  | `projects/pluto-screen-*` |
| Banners.fig | Visual: Design and Develop workshop | 3 |  |  | `visual/banners*.jpg` |
| Blood donation app.fig | /projects/blood-donation-app/ | 2 |  |  | `projects/pulse-screen-*` |
| Blood Donation.fig | /projects/blood-donation-app/ | 15 |  |  | `projects/pulse-screen-*` |
| Certificates.fig | Visual: Design and Develop workshop | 1 |  |  | `visual/certificates*.jpg` |
| Certificates2.fig | Visual: Code with Node 2.0 | 1 |  |  | `visual/certificates2*.jpg` |
| Chandrayaan 3.fig | Visual: Community, recruitment and milestones | 1 |  |  | `visual/chandrayaan-3*.jpg` |
| Christmas 2023.fig | Visual: Festivals and national days | 1 |  |  | `visual/christmas-2023*.jpg` |
| Cloud Study Jam.fig | Visual: Google Cloud Study Jam | 4 | 8 |  | `visual/cloud-study-jam*.jpg` |
| Customer Relationship Management.fig | /projects/customer-relationship-management/ | 6 | 2 |  | `projects/crm-screen-*` |
| Dhanteras 2023.fig | Visual: Festivals and national days | 1 |  |  | `visual/dhanteras-2023*.jpg` |
| Diwali 2022.fig | Visual: Festivals and national days | 1 |  |  | `visual/diwali-2022*.jpg` |
| Diwali 2023.fig | Visual: Festivals and national days | 1 |  |  | `visual/diwali-2023*.jpg` |
| Dussehra 2023.fig | Visual: Festivals and national days | 1 |  |  | `visual/dussehra-2023*.jpg` |
| E Commerce Platform.fig | Home, Explorations | 1 | 6 |  | `projects/ecommerce-screen-*` |
| Eid.fig | Visual: Festivals and national days | 1 |  |  | `visual/eid*.jpg` |
| Email Headers (2023).fig | Visual: Community, recruitment and milestones | 6 |  |  | `visual/email-headers-2023*.jpg` |
| Events Portal.fig | /projects/events-booking-portal/ | 22 |  |  | `projects/events-screen-*` |
| Events' Booking Portal.fig | /projects/events-booking-portal/ | 10 | 3 |  | `projects/events-screen-*` |
| events.fig | /projects/events-booking-portal/ | 1 |  |  | `projects/events-screen-*` |
| Franchise News Co..fig | Home, Explorations | 2 |  |  | `projects/franchise-screen-*` |
| Freshers Highlights.fig | Visual: Community, recruitment and milestones | 1 |  |  | `visual/freshers-highlights*.jpg` |
| Gandhi Jayanti 2023.fig | Visual: Festivals and national days | 1 |  |  | `visual/gandhi-jayanti-2023*.jpg` |
| Ganesh Chaturthi 2023.fig | Visual: Festivals and national days | 1 |  |  | `visual/ganesh-chaturthi-2023*.jpg` |
| GDSCSRM.fig | /projects/gdsc-srm-web-and-brand/ | 14 |  |  | `projects/gdsc-screen-*` |
| Grid.fig | Visual: Community, recruitment and milestones | 1 |  |  | `visual/grid*.jpg` |
| Hacktoberfest.fig | Visual: Hacktoberfest | 1 | 1 |  | `visual/hacktoberfest*.jpg` |
| Holi 2024.fig | Visual: Festivals and national days | 1 |  |  | `visual/holi-2024*.jpg` |
| Independence Day 2023.fig | Visual: Festivals and national days | 1 |  |  | `visual/independence-day-2023*.jpg` |
| Intro Post.fig | Visual: Design and Develop workshop | 3 |  |  | `visual/intro-post*.jpg` |
| Introduction.fig | Visual: Google Solution Challenge 2024 | 1 |  |  | `visual/introduction*.jpg` |
| Invoice.fig | Visual: Design and Develop workshop |  |  | 4 | `visual/invoice*.jpg` |
| Janmashtami 2024.fig | Visual: Festivals and national days | 1 |  |  | `visual/janmashtami-2024*.jpg` |
| Learning Management System.fig | /projects/learning-management-system/ | 5 |  |  | `projects/learning-screen-*` |
| Learning Platform.fig | /projects/learning-management-system/ | 24 |  |  | `projects/learning-screen-*` |
| Library Management System.fig | /projects/library-management-system/ | 24 |  |  | `projects/library-screen-*` |
| LinkedIn Post2.fig | Visual: Google Solution Challenge 2024 | 7 |  |  | `visual/linkedin-post2*.jpg` |
| Linkedin.fig | Visual: Design and Develop workshop | 5 | 4 |  | `visual/linkedin*.jpg` |
| Lohri 24.fig | Visual: Festivals and national days | 1 |  |  | `visual/lohri-24*.jpg` |
| Main Post.fig | Visual: Design and Develop workshop | 2 |  |  | `visual/main-post*.jpg` |
| Music Streaming App.fig | /projects/music-streaming-app/ | 4 |  |  | `projects/music-screen-*` |
| New year 2025.fig | Visual: Festivals and national days | 1 |  |  | `visual/new-year-2025*.jpg` |
| New Year's 2024.fig | Visual: Festivals and national days | 1 |  |  | `visual/new-year-s-2024*.jpg` |
| Online Streaming Platform.fig | /projects/online-streaming-platform/ | 7 |  |  | `projects/streaming-screen-*` |
| Placement Management System.fig | /projects/placement-management-system/ | 8 |  |  | `projects/placement-screen-*` |
| Pongal'24.fig | Visual: Festivals and national days | 9 |  |  | `visual/pongal-24*.jpg` |
| Post.fig | Visual: Community, recruitment and milestones | 3 |  |  | `visual/post*.jpg` |
| Post2.fig | Visual: Community, recruitment and milestones | 6 |  |  | `visual/post2*.jpg` |
| Poster design.fig | Visual: Community, recruitment and milestones | 6 |  |  | `visual/poster-design*.jpg` |
| Posters.fig | Visual: Design and Develop workshop | 1 |  |  | `visual/posters*.jpg` |
| Raksha Bandhan 2023.fig | Visual: Festivals and national days | 1 |  |  | `visual/raksha-bandhan-2023*.jpg` |
| Recycle Management System.fig | /projects/recycle-and-donate-app/ | 13 | 11 |  | `projects/recycle-screen-*` |
| Reel Cover.fig | Visual: Code with Node 2.0 | 1 |  |  | `visual/reel-cover*.jpg` |
| Regional Bootcamp Selection Story.fig | Visual: Google Solution Challenge 2024 | 2 |  |  | `visual/regional-bootcamp-selection-story*.jpg` |
| Registration Portal.fig | /projects/event-registration/ | 4 |  |  | `projects/registration-screen-*` |
| Registration Portal2.fig | /projects/event-registration/ | 15 |  |  | `projects/registration-screen-*` |
| Republic Day 2024.fig | Visual: Festivals and national days | 1 |  |  | `visual/republic-day-2024*.jpg` |
| Results.fig | Visual: Community, recruitment and milestones | 4 |  |  | `visual/results*.jpg` |
| Results2.fig | Visual: Community, recruitment and milestones | 4 |  |  | `visual/results2*.jpg` |
| Reveal Post.fig | Visual: Code with Node 2.0 | 1 | 3 |  | `visual/reveal-post*.jpg` |
| Rewards and Benefits.fig | Visual: Google Solution Challenge 2024 | 3 |  |  | `visual/rewards-and-benefits*.jpg` |
| RSVP.fig | Visual: Code with Node 2.0 | 2 |  |  | `visual/rsvp*.jpg` |
| Social Media.fig | Visual: Community, recruitment and milestones | 12 |  |  | `visual/social-media*.jpg` |
| Speaker Post.fig | Visual: Code with Node 2.0 | 1 |  |  | `visual/speaker-post*.jpg` |
| Sponsor Post.fig | Visual: Design and Develop workshop | 6 |  |  | `visual/sponsor-post*.jpg` |
| Sponsor.fig | Visual: Code with Node 2.0 | 1 |  |  | `visual/sponsor*.jpg` |
| Stories.fig | Visual: Design and Develop workshop | 2 | 2 |  | `visual/stories*.jpg` |
| Timeline.fig | Visual: Google Solution Challenge 2024 | 4 |  |  | `visual/timeline*.jpg` |
| Website2.fig | /projects/ev-car-rental-app/ | 1 |  |  | `projects/pluto-screen-*` |

Total: 361 frames (308 P1, 49 P2, 4 P3).

Excluded on purpose: profile screens with personal data (Placerr and PULSE), frames named Screenshot, components, archives, references, playgrounds and legacy pages.

## Full list

### 6k story.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Final | Instagram story 8.1 | 1080 x 1920 | JPG 90% | 1x | `visual/6k-story.jpg` |

### About Node.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Main | 1 | 1080 x 1080 | JPG 90% | 1x | `visual/about-node.jpg` |

### App.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | cover | cover | 1920 x 1080 | JPG 90% | 1x | `projects/pluto-cover.jpg` (Replaces the generated cover) |
| P1 | high-fidelity | Login (Auth) | 393 x 852 | PNG | 2x | `projects/pluto-screen-login-auth.png` |
| P1 | high-fidelity | Complete Pairing | 393 x 852 | PNG | 2x | `projects/pluto-screen-complete-pairing.png` |
| P1 | high-fidelity | Pluto | 393 x 852 | PNG | 2x | `projects/pluto-screen-pluto.png` |
| P1 | high-fidelity | Orders | 393 x 852 | PNG | 2x | `projects/pluto-screen-orders.png` |
| P1 | high-fidelity | Confirmed Booking | 393 x 852 | PNG | 2x | `projects/pluto-screen-confirmed-booking.png` |
| P1 | high-fidelity | Unlock your Pluto | 393 x 852 | PNG | 2x | `projects/pluto-screen-unlock-your-pluto.png` |
| P2 | wireframe | Login | 393 x 852 | PNG | 2x | `projects/pluto-screen-login.png` |
| P2 | wireframe | Signup | 393 x 852 | PNG | 2x | `projects/pluto-screen-signup.png` |
| P2 | wireframe | Signup (KYC) | 393 x 852 | PNG | 2x | `projects/pluto-screen-signup-kyc.png` |
| P2 | wireframe | Signup (Auth) | 393 x 852 | PNG | 2x | `projects/pluto-screen-signup-auth.png` |
| P2 | wireframe | Homepage | 393 x 852 | PNG | 2x | `projects/pluto-screen-homepage.png` |
| P2 | wireframe | Pluto Page | 393 x 852 | PNG | 2x | `projects/pluto-screen-pluto-page.png` |
| P2 | wireframe | Requests | 393 x 852 | PNG | 2x | `projects/pluto-screen-requests.png` |
| P2 | wireframe | Pair a New Pluto | 393 x 852 | PNG | 2x | `projects/pluto-screen-pair-a-new-pluto.png` |
| P2 | wireframe | See requests | 393 x 852 | PNG | 2x | `projects/pluto-screen-see-requests.png` |

### Banners.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Final | Email Header | 1866 x 630 | JPG 90% | 1x | `visual/banners.jpg` |
| P1 | Final | Event Banner | 2560 x 650 | JPG 90% | 1x | `visual/banners-2.jpg` |
| P1 | Final | Logo | 1080 x 1080 | JPG 90% | 1x | `visual/banners-3.jpg` |

### Blood donation app.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Page 1 | Hospitals | 598 x 1344 | PNG | 2x | `projects/pulse-screen-hospitals.png` |
| P1 | Page 1 | Home / Donate | 598 x 1344 | PNG | 2x | `projects/pulse-screen-home-donate.png` |

### Blood Donation.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Cover | Cover | 1920 x 1152 | JPG 90% | 1x | `projects/pulse-cover.jpg` (Replaces the generated cover) |
| P1 | High Fidelity | Screening Question 2 | 598 x 1344 | PNG | 2x | `projects/pulse-screen-screening-question-2.png` |
| P1 | High Fidelity | Screening Question 1 | 598 x 1344 | PNG | 2x | `projects/pulse-screen-screening-question-1.png` |
| P1 | High Fidelity | Splashscreen | 598 x 1344 | PNG | 2x | `projects/pulse-screen-splashscreen.png` |
| P1 | High Fidelity | Screening Question 3 | 598 x 1344 | PNG | 2x | `projects/pulse-screen-screening-question-3.png` |
| P1 | High Fidelity | Request | 598 x 1344 | PNG | 2x | `projects/pulse-screen-request.png` |
| P1 | High Fidelity | Onboarding | 598 x 1344 | PNG | 2x | `projects/pulse-screen-onboarding.png` |
| P1 | High Fidelity | Home | 598 x 1344 | PNG | 2x | `projects/pulse-screen-home.png` |
| P1 | High Fidelity | Info | 598 x 1344 | PNG | 2x | `projects/pulse-screen-info.png` |
| P1 | High Fidelity | Request Successful | 598 x 1344 | PNG | 2x | `projects/pulse-screen-request-successful.png` |
| P1 | High Fidelity | Signup | 598 x 1344 | PNG | 2x | `projects/pulse-screen-signup.png` |
| P1 | High Fidelity | Login | 598 x 1344 | PNG | 2x | `projects/pulse-screen-login.png` |
| P1 | High Fidelity | Open Requests | 598 x 1344 | PNG | 2x | `projects/pulse-screen-open-requests.png` |
| P1 | High Fidelity | Donors / Donation Centers List | 598 x 1344 | PNG | 2x | `projects/pulse-screen-donors-donation-centers-list.png` |
| P1 | High Fidelity | Schedule Request | 598 x 1344 | PNG | 2x | `projects/pulse-screen-schedule-request.png` |

### Certificates.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Final | Final | 1920 x 1080 | JPG 90% | 1x | `visual/certificates.jpg` |

### Certificates2.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Main | Final | 1920 x 1080 | JPG 90% | 1x | `visual/certificates2.jpg` |

### Chandrayaan 3.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Main | Final | 1080 x 1920 | JPG 90% | 1x | `visual/chandrayaan-3.jpg` |

### Christmas 2023.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Main | 1 | 1080 x 1920 | JPG 90% | 1x | `visual/christmas-2023.jpg` |

### Cloud Study Jam.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Main | Frame 9 | 3340 x 1080 | JPG 90% | 1x | `visual/cloud-study-jam.jpg` |
| P1 | Main | Frame 8 | 3340 x 1080 | JPG 90% | 1x | `visual/cloud-study-jam-2.jpg` |
| P1 | Main | 1 | 1080 x 1920 | JPG 90% | 1x | `visual/cloud-study-jam-3.jpg` |
| P1 | Main | 2 | 1080 x 1920 | JPG 90% | 1x | `visual/cloud-study-jam-4.jpg` |
| P2 | Certificates | Frame 20 | 1920 x 1080 | JPG 90% | 1x | `visual/cloud-study-jam-5.jpg` |
| P2 | Certificates | Frame 26 | 1920 x 1080 | JPG 90% | 1x | `visual/cloud-study-jam-6.jpg` |
| P2 | Certificates | Frame 21 | 1920 x 1080 | JPG 90% | 1x | `visual/cloud-study-jam-7.jpg` |
| P2 | Certificates | Certificate | 1920 x 1080 | JPG 90% | 1x | `visual/cloud-study-jam-8.jpg` |
| P2 | Certificates | Certificate | 1920 x 1080 | JPG 90% | 1x | `visual/cloud-study-jam-9.jpg` |
| P2 | Certificates | Certificate | 1920 x 1080 | JPG 90% | 1x | `visual/cloud-study-jam-10.jpg` |
| P2 | Certificates | Certificate | 1920 x 1080 | JPG 90% | 1x | `visual/cloud-study-jam-11.jpg` |
| P2 | Certificates | Certificate | 1920 x 1080 | JPG 90% | 1x | `visual/cloud-study-jam-12.jpg` |

### Customer Relationship Management.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Cover | Cover | 1920 x 1080 | JPG 90% | 1x | `projects/crm-cover.jpg` (Replaces the generated cover) |
| P1 | High Fidelity | Splash | 412 x 915 | PNG | 2x | `projects/crm-screen-splash.png` |
| P1 | High Fidelity | Chat | 412 x 915 | PNG | 2x | `projects/crm-screen-chat.png` |
| P1 | High Fidelity | Dashboard | 412 x 915 | PNG | 2x | `projects/crm-screen-dashboard.png` |
| P1 | High Fidelity | Customer | 412 x 915 | PNG | 2x | `projects/crm-screen-customer.png` |
| P1 | High Fidelity | Messages | 412 x 915 | PNG | 2x | `projects/crm-screen-messages.png` |
| P2 | Wireframe | Home | 1680 x 1200 | JPG 90% | 1x | `projects/crm-screen-home.jpg` |
| P2 | Wireframe | Authentication | 1680 x 1200 | JPG 90% | 1x | `projects/crm-screen-authentication.jpg` |

### Dhanteras 2023.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Main | 1 | 1080 x 1920 | JPG 90% | 1x | `visual/dhanteras-2023.jpg` |

### Diwali 2022.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Page 1 | Frame 1 | 1080 x 1920 | JPG 90% | 1x | `visual/diwali-2022.jpg` |

### Diwali 2023.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Main | 1 | 1080 x 1920 | JPG 90% | 1x | `visual/diwali-2023.jpg` |

### Dussehra 2023.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Main | Final | 1080 x 1920 | JPG 90% | 1x | `visual/dussehra-2023.jpg` |

### E Commerce Platform.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Cover | Cover | 1920 x 1080 | JPG 90% | 1x | `projects/ecommerce-cover.jpg` (Replaces the generated cover) |
| P2 | Wireframe | Product | 1920 x 3288 | JPG 85% | 1x | `projects/ecommerce-screen-product.jpg` |
| P2 | Wireframe | Authentication – Signup | 1920 x 1080 | JPG 90% | 1x | `projects/ecommerce-screen-authentication-signup.jpg` |
| P2 | Wireframe | Explore | 1920 x 2950 | JPG 85% | 1x | `projects/ecommerce-screen-explore.jpg` |
| P2 | Wireframe | Home | 1920 x 3597 | JPG 85% | 1x | `projects/ecommerce-screen-home.jpg` |
| P2 | Wireframe | Authentication – OTP | 1920 x 1080 | JPG 90% | 1x | `projects/ecommerce-screen-authentication-otp.jpg` |
| P2 | Wireframe | Authentication – Login | 1920 x 1080 | JPG 90% | 1x | `projects/ecommerce-screen-authentication-login.jpg` |

### Eid.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Main | Eid | 1080 x 1920 | JPG 90% | 1x | `visual/eid.jpg` |

### Email Headers (2023).fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Page 1 | GDSC23-Email-Header-Blue | 1244 x 388 | PNG | 2x | `visual/email-headers-2023.png` |
| P1 | Page 1 | GDSC23-Email-Header-Green | 1244 x 388 | PNG | 2x | `visual/email-headers-2023-2.png` |
| P1 | Page 1 | GDSC23-Email-Header-Yellow | 1244 x 388 | PNG | 2x | `visual/email-headers-2023-3.png` |
| P1 | Page 1 | GDSC23-Email-Header-Red | 1244 x 388 | PNG | 2x | `visual/email-headers-2023-4.png` |
| P1 | Page 1 | A4 - 1 | 595 x 842 | JPG 90% | 2x | `visual/email-headers-2023-5.jpg` |
| P1 | Page 1 | Group 16 | 1244 x 388 | PNG | 2x | `visual/email-headers-2023-6.png` |

### Events Portal.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Page 1 | Events Page | 1680 x 2571 | JPG 90% | 1x | `projects/events-screen-events-page.jpg` |
| P1 | Page 1 | Dashboard | 1680 x 1723 | JPG 90% | 1x | `projects/events-screen-dashboard.jpg` |
| P1 | Page 1 | Event Page | 1680 x 4055 | JPG 85% | 1x | `projects/events-screen-event-page.jpg` |
| P1 | Page 1 | Final Certificate | 1680 x 1126 | JPG 90% | 1x | `projects/events-screen-final-certificate.jpg` |
| P1 | Page 1 | Feedback | 1680 x 2094 | JPG 90% | 1x | `projects/events-screen-feedback.jpg` |
| P1 | Page 1 | Minimized Chatbot | 1680 x 1120 | JPG 90% | 1x | `projects/events-screen-minimized-chatbot.jpg` |
| P1 | Page 1 | Maximised Chatbot | 1680 x 1099 | JPG 90% | 1x | `projects/events-screen-maximised-chatbot.jpg` |
| P1 | Page 1 | Events (List) (w/ filter sec) (TAB) | 834 x 2135 | JPG 90% | 1x | `projects/events-screen-events-list-w-filter-sec-tab.jpg` |
| P1 | Page 1 | Event (TAB) | 834 x 3860 | JPG 85% | 1x | `projects/events-screen-event-tab.jpg` |
| P1 | Page 1 | Events (Gallery) (w/ filter sec) (TAB) | 834 x 2135 | JPG 90% | 1x | `projects/events-screen-events-gallery-w-filter-sec-tab.jpg` |
| P1 | Page 1 | Certificate (TAB) | 834 x 1290 | PNG | 2x | `projects/events-screen-certificate-tab.png` |
| P1 | Page 1 | Feedabck (TAB) | 834 x 1517 | JPG 90% | 1x | `projects/events-screen-feedabck-tab.jpg` |
| P1 | Page 1 | Chat (TAB) | 834 x 1290 | PNG | 2x | `projects/events-screen-chat-tab.png` |
| P1 | Page 1 | Events (Gallery) (TAB) | 834 x 2265 | JPG 90% | 1x | `projects/events-screen-events-gallery-tab.jpg` |
| P1 | Page 1 | Events (List) (TAB) | 834 x 2028 | JPG 90% | 1x | `projects/events-screen-events-list-tab.jpg` |
| P1 | Page 1 | Dashboard (TAB) | 834 x 2135 | JPG 90% | 1x | `projects/events-screen-dashboard-tab.jpg` |
| P1 | Page 1 | Events (List) (Mobile) | 390 x 1491 | PNG | 2x | `projects/events-screen-events-list-mobile.png` |
| P1 | Page 1 | Certificate (Mobile) | 390 x 1009 | PNG | 2x | `projects/events-screen-certificate-mobile.png` |
| P1 | Page 1 | Event (Mobile) | 390 x 3578 | PNG | 2x | `projects/events-screen-event-mobile.png` |
| P1 | Page 1 | Chat (Mobile) | 390 x 938 | PNG | 2x | `projects/events-screen-chat-mobile.png` |
| P1 | Page 1 | Events (Card) (Mobile) | 390 x 2239 | PNG | 2x | `projects/events-screen-events-card-mobile.png` |
| P1 | Page 1 | Dashboard (Mobile) | 390 x 2153 | PNG | 2x | `projects/events-screen-dashboard-mobile.png` |

### Events' Booking Portal.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Cover | Thumbnail | 1200 x 627 | JPG 90% | 1x | `projects/events-cover.jpg` (Replaces the generated cover) |
| P1 | High Fidelity | Web (Dark) | 14794 x 5895 | JPG 85% | 1x | `projects/events-screen-web-dark.jpg` |
| P1 | High Fidelity | Tab (Portrait) | 9121 x 4330 | JPG 85% | 1x | `projects/events-screen-tab-portrait.jpg` |
| P1 | High Fidelity | Tab (Landscape) | 3496 x 2157 | JPG 90% | 1x | `projects/events-screen-tab-landscape.jpg` |
| P1 | High Fidelity | Web (Light) | 11265 x 4876 | JPG 85% | 1x | `projects/events-screen-web-light.jpg` |
| P1 | High Fidelity | Mobile | 3733 x 4050 | JPG 85% | 1x | `projects/events-screen-mobile.jpg` |
| P1 | High Fidelity | Alerts | 4116 x 1184 | JPG 90% | 1x | `projects/events-screen-alerts.jpg` |
| P1 | High Fidelity | Create Event Flow | 4116 x 1253 | JPG 90% | 1x | `projects/events-screen-create-event-flow.jpg` |
| P1 | High Fidelity | Account Flow | 1720 x 1253 | JPG 90% | 1x | `projects/events-screen-account-flow.jpg` |
| P1 | High Fidelity | App | 4740 x 5866 | JPG 85% | 1x | `projects/events-screen-app.jpg` |
| P2 | Wireframe | Landing Page | 1680 x 1000 | JPG 90% | 1x | `projects/events-screen-landing-page.jpg` |
| P2 | Wireframe | Flow Plan | 1863 x 1388 | JPG 90% | 1x | `projects/events-screen-flow-plan.jpg` |
| P2 | Wireframe | Contact | 1680 x 1154 | JPG 90% | 1x | `projects/events-screen-contact.jpg` |

### events.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Main | Sign-in | 1680 x 1000 | JPG 90% | 1x | `projects/events-screen-sign-in.jpg` |

### Franchise News Co..fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Page 1 | Home | 1920 x 4159 | JPG 85% | 1x | `projects/franchise-screen-home.jpg` |
| P1 | Page 1 | Article | 1920 x 5171 | JPG 85% | 1x | `projects/franchise-screen-article.jpg` |

### Freshers Highlights.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Main | 1 | 1080 x 1920 | JPG 90% | 1x | `visual/freshers-highlights.jpg` |

### Gandhi Jayanti 2023.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Main | 1 | 1080 x 1920 | JPG 90% | 1x | `visual/gandhi-jayanti-2023.jpg` |

### Ganesh Chaturthi 2023.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Main | 1 | 1080 x 1920 | JPG 90% | 1x | `visual/ganesh-chaturthi-2023.jpg` |

### GDSCSRM.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Page 1 | Main Page | 1680 x 10154 | JPG 85% | 1x | `projects/gdsc-screen-main-page.jpg` |
| P1 | Page 1 | Policy in principles | 1680 x 600 | JPG 90% | 1x | `projects/gdsc-screen-policy-in-principles.jpg` |
| P1 | Page 1 | Header-style-1 | 1680 x 1375 | JPG 90% | 1x | `projects/gdsc-screen-header-style-1.jpg` |
| P1 | Page 1 | Design Guide | 1756 x 963 | JPG 90% | 1x | `projects/gdsc-screen-design-guide.jpg` |
| P1 | Page 1 | Footer (Proposed) | 1680 x 500 | JPG 90% | 1x | `projects/gdsc-screen-footer-proposed.jpg` |
| P1 | Page 1 | Landing Navbar | 1680 x 300 | JPG 90% | 1x | `projects/gdsc-screen-landing-navbar.jpg` |
| P1 | Page 1 | Navbar (Post landing scroll) | 1680 x 300 | JPG 90% | 1x | `projects/gdsc-screen-navbar-post-landing-scroll.jpg` |
| P1 | Page 1 | Navbar Link (in-use) | 1680 x 300 | JPG 90% | 1x | `projects/gdsc-screen-navbar-link-in-use.jpg` |
| P1 | Page 1 | Navbar Link (on-hover) | 1680 x 300 | JPG 90% | 1x | `projects/gdsc-screen-navbar-link-on-hover.jpg` |
| P1 | Page 1 | Events Page (Detailed) | 1680 x 4881 | JPG 85% | 1x | `projects/gdsc-screen-events-page-detailed.jpg` |
| P1 | Page 1 | Events Page (Compressed) | 1680 x 1872 | JPG 90% | 1x | `projects/gdsc-screen-events-page-compressed.jpg` |
| P1 | Page 1 | Legacy events' page | 1680 x 543 | JPG 90% | 1x | `projects/gdsc-screen-legacy-events-page.jpg` |
| P1 | Page 1 | Teams Page | 1680 x 2727 | JPG 85% | 1x | `projects/gdsc-screen-teams-page.jpg` |
| P1 | Page 1 | Teams Page (Detailed) | 1680 x 1366 | JPG 90% | 1x | `projects/gdsc-screen-teams-page-detailed.jpg` |

### Grid.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Main | Frame 1 | 2450 x 5750 | JPG 85% | 1x | `visual/grid.jpg` |

### Hacktoberfest.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Main | 1 | 1080 x 1080 | JPG 90% | 1x | `visual/hacktoberfest.jpg` |
| P2 | Banner | event-banner | 2560 x 650 | JPG 90% | 1x | `visual/hacktoberfest-2.jpg` |

### Holi 2024.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Final | Final | 1080 x 1920 | JPG 90% | 1x | `visual/holi-2024.jpg` |

### Independence Day 2023.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Main | Final | 1080 x 1920 | JPG 90% | 1x | `visual/independence-day-2023.jpg` |

### Intro Post.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Final | Instagram post - 1 | 1080 x 1080 | JPG 90% | 1x | `visual/intro-post.jpg` |
| P1 | Final | Instagram post - 7 | 1080 x 1080 | JPG 90% | 1x | `visual/intro-post-2.jpg` |
| P1 | Final | Instagram post - 8 | 1080 x 1080 | JPG 90% | 1x | `visual/intro-post-3.jpg` |

### Introduction.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Main | Frame 1 | 4620 x 1080 | JPG 90% | 1x | `visual/introduction.jpg` |

### Invoice.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P3 | Page 1 | 1 | 595 x 842 | JPG 90% | 2x | `visual/invoice.jpg` (Review for private details first) |
| P3 | Page 1 | Codegiant | 595 x 842 | JPG 90% | 2x | `visual/invoice-2.jpg` (Review for private details first) |
| P3 | Page 1 | Kickdrum | 595 x 842 | JPG 90% | 2x | `visual/invoice-3.jpg` (Review for private details first) |
| P3 | Page 1 | Uvisoft | 595 x 842 | JPG 90% | 2x | `visual/invoice-4.jpg` (Review for private details first) |

### Janmashtami 2024.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Main | Main | 1080 x 1920 | JPG 90% | 1x | `visual/janmashtami-2024.jpg` |

### Learning Management System.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Cover | Cover | 1920 x 1080 | JPG 90% | 1x | `projects/learning-cover.jpg` (Replaces the generated cover) |
| P1 | High Fidelity | Authentication | 1194 x 834 | PNG | 2x | `projects/learning-screen-authentication.png` |
| P1 | High Fidelity | Home | 1194 x 834 | PNG | 2x | `projects/learning-screen-home.png` |
| P1 | High Fidelity | Login | 1920 x 1100 | JPG 90% | 1x | `projects/learning-screen-login.jpg` |
| P1 | High Fidelity | Login (Error) | 1920 x 1100 | JPG 90% | 1x | `projects/learning-screen-login-error.jpg` |

### Learning Platform.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Admin | Quizzes (Pending) | 1920 x 1100 | JPG 90% | 1x | `projects/learning-screen-quizzes-pending.jpg` |
| P1 | Admin | Quizzes (Drafts) | 1920 x 1100 | JPG 90% | 1x | `projects/learning-screen-quizzes-drafts.jpg` |
| P1 | Admin | Courses (Drafts) | 1920 x 1100 | JPG 90% | 1x | `projects/learning-screen-courses-drafts.jpg` |
| P1 | Admin | Courses (Pending) | 1920 x 1100 | JPG 90% | 1x | `projects/learning-screen-courses-pending.jpg` |
| P1 | Admin | Capstone | 1920 x 1100 | JPG 90% | 1x | `projects/learning-screen-capstone.jpg` |
| P1 | Admin | Coding Exercises | 1920 x 1100 | JPG 90% | 1x | `projects/learning-screen-coding-exercises.jpg` |
| P1 | Admin | Sidenav (Quizes) (onHover) | 1920 x 1100 | JPG 90% | 1x | `projects/learning-screen-sidenav-quizes-onhover.jpg` |
| P1 | Admin | Topics (Active) | 1920 x 1100 | JPG 90% | 1x | `projects/learning-screen-topics-active.jpg` |
| P1 | Admin | Chapters (Active) | 1920 x 1100 | JPG 90% | 1x | `projects/learning-screen-chapters-active.jpg` |
| P1 | Admin | Forgot Password | 1920 x 1100 | JPG 90% | 1x | `projects/learning-screen-forgot-password.jpg` |
| P1 | Admin | Reset–PWD–Confirmation | 1920 x 1100 | JPG 90% | 1x | `projects/learning-screen-reset-pwd-confirmation.jpg` |
| P1 | Admin | Reset–pwd | 1920 x 1100 | JPG 90% | 1x | `projects/learning-screen-reset-pwd.jpg` |
| P1 | Admin | pwd–reset–confirmation | 1920 x 1100 | JPG 90% | 1x | `projects/learning-screen-pwd-reset-confirmation.jpg` |
| P1 | Admin | Sign–up | 1920 x 1100 | JPG 90% | 1x | `projects/learning-screen-sign-up.jpg` |
| P1 | Admin | Mail Two Step Verification | 1920 x 1100 | JPG 90% | 1x | `projects/learning-screen-mail-two-step-verification.jpg` |
| P1 | Admin | Account Confirmation | 1920 x 1100 | JPG 90% | 1x | `projects/learning-screen-account-confirmation.jpg` |
| P1 | Admin | Mail/Phone Two Step Verification (Error) | 1920 x 1100 | JPG 90% | 1x | `projects/learning-screen-mail-phone-two-step-verification-error.jpg` |
| P1 | Admin | Mail Two Step Verification (Code Resent Message) | 1920 x 1100 | JPG 90% | 1x | `projects/learning-screen-mail-two-step-verification-code-resent-message.jpg` |
| P1 | Admin | PWD–reset–emailer | 1920 x 975 | JPG 90% | 1x | `projects/learning-screen-pwd-reset-emailer.jpg` |
| P1 | Admin | Confirm Mail Emailer | 1920 x 1062 | JPG 90% | 1x | `projects/learning-screen-confirm-mail-emailer.jpg` |
| P1 | Admin | Approval Request Mailer | 1920 x 1070 | JPG 90% | 1x | `projects/learning-screen-approval-request-mailer.jpg` |
| P1 | Admin | Approval Rejected | 1920 x 1006 | JPG 90% | 1x | `projects/learning-screen-approval-rejected.jpg` |
| P1 | Admin | Support incoming mail | 1920 x 968 | JPG 90% | 1x | `projects/learning-screen-support-incoming-mail.jpg` |
| P1 | Admin | User registered successfully | 1920 x 1167 | JPG 90% | 1x | `projects/learning-screen-user-registered-successfully.jpg` |

### Library Management System.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Cover | Cover | 1920 x 1080 | JPG 90% | 1x | `projects/library-cover.jpg` (Replaces the generated cover) |
| P1 | High Fidelity | Home | 1194 x 834 | PNG | 2x | `projects/library-screen-home.png` |
| P1 | High Fidelity | Register | 393 x 852 | PNG | 2x | `projects/library-screen-register.png` |
| P1 | High Fidelity | Login | 393 x 852 | PNG | 2x | `projects/library-screen-login.png` |
| P1 | High Fidelity | Verify | 393 x 852 | PNG | 2x | `projects/library-screen-verify.png` |
| P1 | High Fidelity | Superuser Login | 393 x 852 | PNG | 2x | `projects/library-screen-superuser-login.png` |
| P1 | High Fidelity | Library (Card View) | 393 x 852 | PNG | 2x | `projects/library-screen-library-card-view.png` |
| P1 | High Fidelity | Already a Premium Member | 393 x 852 | PNG | 2x | `projects/library-screen-already-a-premium-member.png` |
| P1 | High Fidelity | FAQ | 393 x 852 | PNG | 2x | `projects/library-screen-faq.png` |
| P1 | High Fidelity | Location | 393 x 852 | PNG | 2x | `projects/library-screen-location.png` |
| P1 | High Fidelity | FAQ (Topic) | 393 x 852 | PNG | 2x | `projects/library-screen-faq-topic.png` |
| P1 | High Fidelity | Library (List View) | 393 x 852 | PNG | 2x | `projects/library-screen-library-list-view.png` |
| P1 | High Fidelity | Help and Support | 393 x 852 | PNG | 2x | `projects/library-screen-help-and-support.png` |
| P1 | High Fidelity | Events | 393 x 852 | PNG | 2x | `projects/library-screen-events.png` |
| P1 | High Fidelity | Profile | 393 x 852 | PNG | 2x | `projects/library-screen-profile.png` |
| P1 | High Fidelity | Event – Detailed | 393 x 852 | PNG | 2x | `projects/library-screen-event-detailed.png` |
| P1 | High Fidelity | Overdues | 393 x 852 | PNG | 2x | `projects/library-screen-overdues.png` |
| P1 | High Fidelity | Author | 393 x 852 | PNG | 2x | `projects/library-screen-author.png` |
| P1 | High Fidelity | Apply for Premium | 393 x 852 | PNG | 2x | `projects/library-screen-apply-for-premium.png` |
| P1 | High Fidelity | Book (Borrowed) | 393 x 852 | PNG | 2x | `projects/library-screen-book-borrowed.png` |
| P1 | High Fidelity | Book | 393 x 852 | PNG | 2x | `projects/library-screen-book.png` |
| P1 | High Fidelity | Onboarding | 393 x 852 | PNG | 2x | `projects/library-screen-onboarding.png` |
| P1 | High Fidelity | Explore | 393 x 852 | PNG | 2x | `projects/library-screen-explore.png` |
| P1 | High Fidelity | Book (Returned) | 393 x 852 | PNG | 2x | `projects/library-screen-book-returned.png` |

### LinkedIn Post2.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Main | 6 | 1080 x 1080 | JPG 90% | 1x | `visual/linkedin-post2.jpg` |
| P1 | Main | 2 | 1080 x 1080 | JPG 90% | 1x | `visual/linkedin-post2-2.jpg` |
| P1 | Main | 3 | 1080 x 1080 | JPG 90% | 1x | `visual/linkedin-post2-3.jpg` |
| P1 | Main | 4 | 1080 x 1080 | JPG 90% | 1x | `visual/linkedin-post2-4.jpg` |
| P1 | Main | 5 | 1080 x 1080 | JPG 90% | 1x | `visual/linkedin-post2-5.jpg` |
| P1 | Main | 1 | 1080 x 1080 | JPG 90% | 1x | `visual/linkedin-post2-6.jpg` |
| P1 | Main | 7 | 1080 x 1080 | JPG 90% | 1x | `visual/linkedin-post2-7.jpg` |

### Linkedin.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Page 1 | 1 | 1080 x 1080 | JPG 90% | 1x | `visual/linkedin.jpg` |
| P1 | Page 1 | 9 | 1080 x 1080 | JPG 90% | 1x | `visual/linkedin-2.jpg` |
| P1 | Page 1 | 5 | 1080 x 1080 | JPG 90% | 1x | `visual/linkedin-3.jpg` |
| P1 | Page 1 | 6 | 1080 x 1080 | JPG 90% | 1x | `visual/linkedin-4.jpg` |
| P1 | Page 1 | 7 | 1080 x 1080 | JPG 90% | 1x | `visual/linkedin-5.jpg` |
| P2 | Page 2 | 8 | 1080 x 1080 | JPG 90% | 1x | `visual/linkedin-6.jpg` |
| P2 | Page 2 | 4 | 1080 x 1080 | JPG 90% | 1x | `visual/linkedin-7.jpg` |
| P2 | Page 2 | 2 | 1080 x 1080 | JPG 90% | 1x | `visual/linkedin-8.jpg` |
| P2 | Page 2 | 3 | 1080 x 1080 | JPG 90% | 1x | `visual/linkedin-9.jpg` |

### Lohri 24.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Main | Lohri | 1080 x 1920 | JPG 90% | 1x | `visual/lohri-24.jpg` |

### Main Post.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Final | new-1 | 1080 x 1080 | JPG 90% | 1x | `visual/main-post.jpg` |
| P1 | Final | new-2 | 1080 x 1080 | JPG 90% | 1x | `visual/main-post-2.jpg` |

### Music Streaming App.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Cover | Cover | 1920 x 1080 | JPG 90% | 1x | `projects/music-cover.jpg` (Replaces the generated cover) |
| P1 | High Fidelity | Home | 393 x 852 | PNG | 2x | `projects/music-screen-home.png` |
| P1 | High Fidelity | Player | 393 x 852 | PNG | 2x | `projects/music-screen-player.png` |
| P1 | High Fidelity | My Library | 393 x 852 | PNG | 2x | `projects/music-screen-my-library.png` |

### New year 2025.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Final | Instagram story - 18 | 1080 x 1920 | JPG 90% | 1x | `visual/new-year-2025.jpg` |

### New Year's 2024.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Main | 1 | 1080 x 1920 | JPG 90% | 1x | `visual/new-year-s-2024.jpg` |

### Online Streaming Platform.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Cover | Cover | 1920 x 1080 | JPG 90% | 1x | `projects/streaming-cover.jpg` (Replaces the generated cover) |
| P1 | Design | Home | 1680 x 4245 | JPG 85% | 1x | `projects/streaming-screen-home.jpg` |
| P1 | Design | AudiobooksGallery | 1480 x 402 | JPG 90% | 1x | `projects/streaming-screen-audiobooksgallery.jpg` |
| P1 | Design | GamesGallery | 1480 x 352 | JPG 90% | 1x | `projects/streaming-screen-gamesgallery.jpg` |
| P1 | Design | Movie | 1680 x 5214 | JPG 85% | 1x | `projects/streaming-screen-movie.jpg` |
| P1 | Design | TV Show | 1680 x 9086 | JPG 85% | 1x | `projects/streaming-screen-tv-show.jpg` |
| P1 | Design | Previews | 609 x 1449 | PNG | 2x | `projects/streaming-screen-previews.png` |

### Placement Management System.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Cover | Cover | 1920 x 1080 | JPG 90% | 1x | `projects/placement-cover.jpg` (Replaces the generated cover) |
| P1 | High Fidelity | Dashboard | 1920 x 1080 | JPG 90% | 1x | `projects/placement-screen-dashboard.jpg` |
| P1 | High Fidelity | Companies | 1920 x 1080 | JPG 90% | 1x | `projects/placement-screen-companies.jpg` |
| P1 | High Fidelity | Full Time Jobs | 1920 x 1080 | JPG 90% | 1x | `projects/placement-screen-full-time-jobs.jpg` |
| P1 | High Fidelity | Tracker | 1920 x 1080 | JPG 90% | 1x | `projects/placement-screen-tracker.jpg` |
| P1 | High Fidelity | Sidenav | 342 x 1080 | PNG | 2x | `projects/placement-screen-sidenav.png` |
| P1 | High Fidelity | Company | 332 x 924 | PNG | 2x | `projects/placement-screen-company.png` |
| P1 | Socials | Instagram post - 1 | 1080 x 1080 | JPG 90% | 1x | `projects/placement-screen-instagram-post-1.jpg` |

### Pongal'24.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Main | Pongal | 1080 x 1920 | JPG 90% | 1x | `visual/pongal-24.jpg` |
| P1 | Page 1 | Instagram story - 1 | 1080 x 1920 | JPG 90% | 1x | `visual/pongal-24-2.jpg` |
| P1 | Page 1 | Instagram story - 8 | 1080 x 1920 | JPG 90% | 1x | `visual/pongal-24-3.jpg` |
| P1 | Page 1 | Instagram story - 2 | 1080 x 1920 | JPG 90% | 1x | `visual/pongal-24-4.jpg` |
| P1 | Page 1 | Instagram story - 7 | 1080 x 1920 | JPG 90% | 1x | `visual/pongal-24-5.jpg` |
| P1 | Page 1 | Instagram story - 3 | 1080 x 1920 | JPG 90% | 1x | `visual/pongal-24-6.jpg` |
| P1 | Page 1 | Instagram story - 5 | 1080 x 1920 | JPG 90% | 1x | `visual/pongal-24-7.jpg` |
| P1 | Page 1 | Instagram story - 4 | 1080 x 1920 | JPG 90% | 1x | `visual/pongal-24-8.jpg` |
| P1 | Page 1 | Instagram story - 6 | 1080 x 1920 | JPG 90% | 1x | `visual/pongal-24-9.jpg` |

### Post.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Final | FINAL | 1080 x 1920 | JPG 90% | 1x | `visual/post.jpg` |
| P1 | Final | Instagram story - 7 | 1080 x 1920 | JPG 90% | 1x | `visual/post-2.jpg` |
| P1 | Final | front | 1080 x 1320 | JPG 90% | 1x | `visual/post-3.jpg` |

### Post2.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Main | Core P6 | 1080 x 1080 | JPG 90% | 1x | `visual/post2.jpg` |
| P1 | Main | Core P5 | 1080 x 1080 | JPG 90% | 1x | `visual/post2-2.jpg` |
| P1 | Main | Core P4 | 1080 x 1080 | JPG 90% | 1x | `visual/post2-3.jpg` |
| P1 | Main | Core P3 | 1080 x 1080 | JPG 90% | 1x | `visual/post2-4.jpg` |
| P1 | Main | Core P2 | 1080 x 1080 | JPG 90% | 1x | `visual/post2-5.jpg` |
| P1 | Main | Core P1 | 1080 x 1080 | JPG 90% | 1x | `visual/post2-6.jpg` |

### Poster design.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Page 1 | A3 - 3 | 1190 x 842 | JPG 90% | 2x | `visual/poster-design.jpg` |
| P1 | Page 1 | A3 - 5 | 1190 x 842 | JPG 90% | 2x | `visual/poster-design-2.jpg` |
| P1 | Page 1 | A3 - 6 | 1190 x 842 | JPG 90% | 2x | `visual/poster-design-3.jpg` |
| P1 | Page 1 | Frame 1 | 1080 x 1080 | JPG 90% | 1x | `visual/poster-design-4.jpg` |
| P1 | Page 1 | Frame 3 | 1080 x 1080 | JPG 90% | 1x | `visual/poster-design-5.jpg` |
| P1 | Page 1 | Frame 2 | 1080 x 1080 | JPG 90% | 1x | `visual/poster-design-6.jpg` |

### Posters.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Final | Final | 1190 x 842 | JPG 90% | 2x | `visual/posters.jpg` |

### Raksha Bandhan 2023.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Main | Final | 1080 x 1920 | JPG 90% | 1x | `visual/raksha-bandhan-2023.jpg` |

### Recycle Management System.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Solution Challenge | Slide | 1920 x 1155 | JPG 90% | 1x | `projects/recycle-screen-slide.jpg` |
| P1 | Solution Challenge | Profile | 1920 x 1155 | JPG 90% | 1x | `projects/recycle-screen-profile.jpg` |
| P1 | Solution Challenge | Dashboard | 1920 x 1155 | JPG 90% | 1x | `projects/recycle-screen-dashboard.jpg` |
| P1 | Solution Challenge | Order history | 1920 x 1155 | JPG 90% | 1x | `projects/recycle-screen-order-history.jpg` |
| P1 | Solution Challenge | Feedback | 1920 x 1155 | JPG 90% | 1x | `projects/recycle-screen-feedback.jpg` |
| P1 | Solution Challenge | Support | 1920 x 1155 | JPG 90% | 1x | `projects/recycle-screen-support.jpg` |
| P1 | Cover | Cover | 1920 x 1080 | JPG 90% | 1x | `projects/recycle-cover.jpg` (Replaces the generated cover) |
| P1 | High Fidelity | Dispose | 450 x 958 | PNG | 2x | `projects/recycle-screen-dispose.png` |
| P1 | High Fidelity | Splash Screen | 450 x 958 | PNG | 2x | `projects/recycle-screen-splash-screen.png` |
| P1 | High Fidelity | Processed Image | 450 x 958 | PNG | 2x | `projects/recycle-screen-processed-image.png` |
| P1 | High Fidelity | Sign in | 450 x 958 | PNG | 2x | `projects/recycle-screen-sign-in.png` |
| P1 | High Fidelity | Camera | 450 x 958 | PNG | 2x | `projects/recycle-screen-camera.png` |
| P1 | High Fidelity | Sign up | 450 x 958 | PNG | 2x | `projects/recycle-screen-sign-up.png` |
| P2 | Wireframe | Community | 390 x 844 | PNG | 2x | `projects/recycle-screen-community.png` |
| P2 | Wireframe | Explore | 390 x 844 | PNG | 2x | `projects/recycle-screen-explore.png` |
| P2 | Wireframe | Library | 390 x 844 | PNG | 2x | `projects/recycle-screen-library.png` |
| P2 | Wireframe | Article (Expanded) | 390 x 1487 | PNG | 2x | `projects/recycle-screen-article-expanded.png` |
| P2 | Wireframe | iPhone 14 - 1 | 390 x 844 | PNG | 2x | `projects/recycle-screen-iphone-14-1.png` |
| P2 | Wireframe | iPhone 14 - 3 | 390 x 844 | PNG | 2x | `projects/recycle-screen-iphone-14-3.png` |
| P2 | Wireframe | iPhone 14 - 2 | 390 x 844 | PNG | 2x | `projects/recycle-screen-iphone-14-2.png` |
| P2 | Wireframe | Recycle / Donate flow | 390 x 844 | PNG | 2x | `projects/recycle-screen-recycle-donate-flow.png` |
| P2 | Wireframe | iPhone 14 - 5 | 390 x 844 | PNG | 2x | `projects/recycle-screen-iphone-14-5.png` |
| P2 | Wireframe | iPhone 14 - 6 | 390 x 844 | PNG | 2x | `projects/recycle-screen-iphone-14-6.png` |
| P2 | Wireframe | iPhone 14 - 7 | 390 x 844 | PNG | 2x | `projects/recycle-screen-iphone-14-7.png` |

### Reel Cover.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Page 1 | 1 | 1080 x 1920 | JPG 90% | 1x | `visual/reel-cover.jpg` |

### Regional Bootcamp Selection Story.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Page 1 | 2 | 1080 x 1920 | JPG 90% | 1x | `visual/regional-bootcamp-selection-story.jpg` |
| P1 | Page 1 | 3 | 1080 x 1920 | JPG 90% | 1x | `visual/regional-bootcamp-selection-story-2.jpg` |

### Registration Portal.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Final | Desktop view-1 | 1920 x 1080 | JPG 90% | 1x | `projects/registration-screen-desktop-view-1.jpg` |
| P1 | Final | mobile view -2 | 430 x 1141 | PNG | 2x | `projects/registration-screen-mobile-view-2.png` |
| P1 | Final | mobile view-1 | 430 x 1711 | PNG | 2x | `projects/registration-screen-mobile-view-1.png` |
| P1 | Final | Desktop view - 2 | 1920 x 1080 | JPG 90% | 1x | `projects/registration-screen-desktop-view-2.jpg` |

### Registration Portal2.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Website | MacBook Pro 14" - 6 | 1512 x 1182 | JPG 90% | 1x | `projects/registration-screen-macbook-pro-14-6.jpg` |
| P1 | Website | iPhone 11 Pro / X - 6 | 375 x 675 | PNG | 2x | `projects/registration-screen-iphone-11-pro-x-6.png` |
| P1 | Website | MacBook Pro 14" - 7 | 1512 x 1182 | JPG 90% | 1x | `projects/registration-screen-macbook-pro-14-7.jpg` |
| P1 | Website | iPhone 11 Pro / X - 4 | 375 x 962 | PNG | 2x | `projects/registration-screen-iphone-11-pro-x-4.png` |
| P1 | Website | MacBook Pro 14" - 10 | 1512 x 1182 | JPG 90% | 1x | `projects/registration-screen-macbook-pro-14-10.jpg` |
| P1 | Website | iPhone 11 Pro / X - 1 | 375 x 775 | PNG | 2x | `projects/registration-screen-iphone-11-pro-x-1.png` |
| P1 | Website | iPhone 11 Pro / X - 2 | 375 x 962 | PNG | 2x | `projects/registration-screen-iphone-11-pro-x-2.png` |
| P1 | Website | MacBook Pro 14" - 9 | 1512 x 1182 | JPG 90% | 1x | `projects/registration-screen-macbook-pro-14-9.jpg` |
| P1 | Admin App | Landing Screen | 428 x 926 | PNG | 2x | `projects/registration-screen-landing-screen.png` |
| P1 | Admin App | Checkin - 1 | 428 x 926 | PNG | 2x | `projects/registration-screen-checkin-1.png` |
| P1 | Admin App | Checkout - 1 | 428 x 926 | PNG | 2x | `projects/registration-screen-checkout-1.png` |
| P1 | Admin App | Checkin - 2 | 428 x 926 | PNG | 2x | `projects/registration-screen-checkin-2.png` |
| P1 | Admin App | Walk in - 1 | 428 x 926 | PNG | 2x | `projects/registration-screen-walk-in-1.png` |
| P1 | Admin App | Walk in - 2 | 428 x 926 | PNG | 2x | `projects/registration-screen-walk-in-2.png` |
| P1 | Email | iPad mini 8.3 - 1 | 630 x 696 | PNG | 2x | `projects/registration-screen-ipad-mini-8-3-1.png` |

### Republic Day 2024.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Main | Frame 3 | 1080 x 1920 | JPG 90% | 1x | `visual/republic-day-2024.jpg` |

### Results.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Page 1 | 1 | 1080 x 1080 | JPG 90% | 1x | `visual/results.jpg` |
| P1 | Page 1 | 4 | 1080 x 1080 | JPG 90% | 1x | `visual/results-2.jpg` |
| P1 | Page 1 | 3 | 1080 x 1080 | JPG 90% | 1x | `visual/results-3.jpg` |
| P1 | Page 1 | 2 | 1080 x 1080 | JPG 90% | 1x | `visual/results-4.jpg` |

### Results2.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Main | 4 | 1080 x 1080 | JPG 90% | 1x | `visual/results2.jpg` |
| P1 | Main | 3 | 1080 x 1080 | JPG 90% | 1x | `visual/results2-2.jpg` |
| P1 | Main | 2 | 1080 x 1080 | JPG 90% | 1x | `visual/results2-3.jpg` |
| P1 | Main | 1 | 1080 x 1080 | JPG 90% | 1x | `visual/results2-4.jpg` |

### Reveal Post.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Main | 1 | 1080 x 1080 | JPG 90% | 1x | `visual/reveal-post.jpg` |
| P2 | C2C Poster | Tabloid - 1 | 792 x 1224 | JPG 90% | 2x | `visual/reveal-post-2.jpg` |
| P2 | C2C Poster | Tabloid - 2 | 792 x 1224 | JPG 90% | 2x | `visual/reveal-post-3.jpg` |
| P2 | C2C Poster | Tabloid - 3 | 792 x 1224 | JPG 90% | 2x | `visual/reveal-post-4.jpg` |

### Rewards and Benefits.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Main | 3 | 1080 x 1080 | JPG 90% | 1x | `visual/rewards-and-benefits.jpg` |
| P1 | Main | 1 | 1080 x 1080 | JPG 90% | 1x | `visual/rewards-and-benefits-2.jpg` |
| P1 | Main | 2 | 1080 x 1080 | JPG 90% | 1x | `visual/rewards-and-benefits-3.jpg` |

### RSVP.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Main | 1 | 792 x 1408 | JPG 90% | 2x | `visual/rsvp.jpg` |
| P1 | Main | 2 | 792 x 1224 | JPG 90% | 2x | `visual/rsvp-2.jpg` |

### Social Media.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Page 1 | 8 | 1080 x 1080 | JPG 90% | 1x | `visual/social-media.jpg` |
| P1 | Page 1 | 2 | 1080 x 1080 | JPG 90% | 1x | `visual/social-media-2.jpg` |
| P1 | Page 1 | 6 | 1080 x 1080 | JPG 90% | 1x | `visual/social-media-3.jpg` |
| P1 | Page 1 | 5 | 1080 x 1080 | JPG 90% | 1x | `visual/social-media-4.jpg` |
| P1 | Page 1 | 3 | 1080 x 1080 | JPG 90% | 1x | `visual/social-media-5.jpg` |
| P1 | Page 1 | 24 | 1080 x 1080 | JPG 90% | 1x | `visual/social-media-6.jpg` |
| P1 | Page 1 | 23 | 1080 x 1080 | JPG 90% | 1x | `visual/social-media-7.jpg` |
| P1 | Page 1 | 30 | 1080 x 1080 | JPG 90% | 1x | `visual/social-media-8.jpg` |
| P1 | Page 1 | 40 | 1080 x 1080 | JPG 90% | 1x | `visual/social-media-9.jpg` |
| P1 | Page 1 | 7 | 1080 x 1080 | JPG 90% | 1x | `visual/social-media-10.jpg` |
| P1 | Page 1 | 4 | 1080 x 1080 | JPG 90% | 1x | `visual/social-media-11.jpg` |
| P1 | Page 1 | 29 | 1080 x 1080 | JPG 90% | 1x | `visual/social-media-12.jpg` |

### Speaker Post.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Main | 1 | 1080 x 1080 | JPG 90% | 1x | `visual/speaker-post.jpg` |

### Sponsor Post.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Final | 1 | 1080 x 1080 | JPG 90% | 1x | `visual/sponsor-post.jpg` |
| P1 | Final | 2 | 1080 x 1080 | JPG 90% | 1x | `visual/sponsor-post-2.jpg` |
| P1 | Final | 6 | 1080 x 1080 | JPG 90% | 1x | `visual/sponsor-post-3.jpg` |
| P1 | Final | 3 | 1080 x 1080 | JPG 90% | 1x | `visual/sponsor-post-4.jpg` |
| P1 | Final | 5 | 1080 x 1080 | JPG 90% | 1x | `visual/sponsor-post-5.jpg` |
| P1 | Final | 4 | 1080 x 1080 | JPG 90% | 1x | `visual/sponsor-post-6.jpg` |

### Sponsor.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Main | 1 | 1080 x 1080 | JPG 90% | 1x | `visual/sponsor.jpg` |

### Stories.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Final Draft | Notice | 1080 x 1920 | JPG 90% | 1x | `visual/stories-3.jpg` |
| P1 | Final Draft | Notice | 1080 x 1920 | JPG 90% | 1x | `visual/stories-4.jpg` |
| P2 | Template | FAQ | 1080 x 1920 | JPG 90% | 1x | `visual/stories.jpg` |
| P2 | Template | Notice | 1080 x 1920 | JPG 90% | 1x | `visual/stories-2.jpg` |

### Timeline.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Main | 1 | 1080 x 1080 | JPG 90% | 1x | `visual/timeline.jpg` |
| P1 | Main | 2 | 1080 x 1080 | JPG 90% | 1x | `visual/timeline-2.jpg` |
| P1 | Main | 3 | 1080 x 1080 | JPG 90% | 1x | `visual/timeline-3.jpg` |
| P1 | Main | 4 | 1080 x 1080 | JPG 90% | 1x | `visual/timeline-4.jpg` |

### Website2.fig

| Priority | Page | Frame | Size (px) | Format | Scale | Save as |
|---|---|---|---|---|---|---|
| P1 | Page 1 | Home | 1920 x 7325 | JPG 85% | 1x | `projects/pluto-screen-home.jpg` |
