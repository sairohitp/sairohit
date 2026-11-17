import type { IconName } from '../icons';

/*
 * Everything here comes from the latest resume (Sai Rohit Resume.pdf), which is the
 * source of truth for the About page and the home page widgets.
 */

export const profile = {
  name: 'Pusarla Sai Rohit',
  shortName: 'Sai Rohit',
  role: 'Product Designer',
  location: 'Bengaluru, India',
  timezone: 'Asia/Kolkata',
  email: 'pusarlasairohit@gmail.com',
  headline:
    'Product designer with a computer science foundation, turning complex enterprise problems into clear, usable tools.',
  summary: [
    'At Nasscom, I work with enterprise and GCC teams to understand how they operate and translate their needs into startup partnerships.',
    'On my own projects, I design data-heavy products in Figma and build them in React, so designs reach engineering ready to ship.',
    'I’m looking to bring this mix of research, design and build to data platforms that operations teams rely on daily.',
  ],
  now: ['Associate at Nasscom', 'Co-founder at Progull'],
};

export interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

/** Home page "at a glance" counters. */
export const glance: Stat[] = [
  { value: 4, suffix: '+', label: 'Years designing products' },
  { value: 700, suffix: '+', label: 'Enterprise engagements at Nasscom' },
  { value: 13, label: 'PoCs from startup connects' },
  { value: 1200, suffix: '+', label: 'Keynote audience on UI/UX' },
];

/** Organisations, for the scrolling strip. */
export const organisations = [
  'Nasscom',
  'Apple Developer Program',
  'Infosys',
  'TrainingMug',
  'Pluto',
  'Google Developer Group',
  'TEDx',
  'Progull',
  'SRM IST',
];

export interface Role {
  title: string;
  dates: string;
  points: string[];
}

export interface Experience {
  org: string;
  location?: string;
  kind: 'Business' | 'Design' | 'Startup';
  icon: IconName;
  roles: Role[];
  /** Highlighted numbers shown as chips. */
  metrics?: { value: string; label: string }[];
  /** Related case study slug. */
  project?: string;
}

export const experience: Experience[] = [
  {
    org: 'Nasscom',
    location: 'Bengaluru',
    kind: 'Business',
    icon: 'handshake',
    metrics: [
      { value: '700+', label: 'engagements' },
      { value: '138', label: 'enterprises and GCCs' },
      { value: '1,200+', label: 'startup introductions' },
      { value: '13', label: 'PoCs' },
      { value: '19', label: 'NDAs' },
      { value: 'INR 2.1 Cr', label: 'disclosed PoC value' },
    ],
    roles: [
      {
        title: 'Associate, Nasscom Innovation Partnership Program (NIPP)',
        dates: 'Jul 2025 to Present',
        points: [
          'Ran the Enterprise Engagement Pipeline from July 2025: logged 700+ engagements with 138 enterprises and GCCs and made 1,200+ startup introductions involving 800+ startups.',
          'Connects led to 13 PoCs and 19 NDAs with 13 enterprises, including Schneider Electric, Siemens Gamesa, Weir, Amdocs, Marico, Axis Max Life and Tata Elxsi. The 6 PoCs with disclosed value total INR 2.1 crore, led by Weir (INR 91 lakh across 2 PoCs) and Siemens Gamesa (INR 83 lakh).',
          'Ran Enterprise Connect at Nasscom Mobility Confluence 2025, arranging 60 meetings between 25 startups and 15 automotive companies, including JLR, Bosch, ZF, Mercedes-Benz and Stellantis, which led to NDAs with L&T Technology Services and TCS; matched 16 more startups to open Mobility Innovation Challenge use cases.',
          'Built Maruti Suzuki’s 2026 startup pipeline: curated 40 startups for its Nurture Cohort and Mobility Challenge, ran pitch sessions for 22 startups, including a session for women founders, and brought 50 startups to the Accelerator Cohort 12 Innovation Roadshow at IISc ARTPARK.',
          'Ran Enterprise Connect at Future Forge 2025 and 2026, NTLF, the GCC Summit and DTC 2026, arranging 290+ startup-enterprise meetings with companies such as Walmart, Samsung and Titan; NTLF connects produced an Amdocs PoC.',
          'Led the 2026 Nasscom Retail Innovation Challenge: brought on Litmus7 as sponsor, ran problem statements from Litmus7, Marico and Tata Consumer Products, and drew 198 applications, narrowed to 16 finalists and a PoC with Marico.',
          'Ran roundtable series on Retail AI, ID-Tech with UIDAI (25 startups) and engineering R&D (11 leaders from Wipro, HCL, KPIT, Tata Elxsi and others), and secured 18 speaker slots, 10 jury seats and 5 leadership delegations for partner leaders.',
          'Maintain the Enterprise Connect database of 4,500+ connects since 2017, and followed up with 150+ startups to verify past connects, recording 21 earlier outcomes for CXO reporting.',
          'Work with enterprise and GCC innovation teams to map their workflows and pain points, then turn them into problem statements, startup shortlists and leadership decks, including research for a whitepaper on the Indian ID Tech and BFSI Landscape 2026 report.',
        ],
      },
      {
        title: 'Intern',
        dates: 'Feb 2025 to Jun 2025',
        points: [
          'Screened 1,500+ early-stage B2B startups for corporate partnership fit across large-scale open innovation challenges.',
          'Coordinated founders, CXOs from Fortune 500 GCCs and academic experts from launch to final pitches, tracking every engagement so the pipeline stayed on schedule.',
        ],
      },
    ],
  },
  {
    org: 'Progull',
    location: 'Bengaluru',
    kind: 'Startup',
    icon: 'rocket-launch',
    roles: [
      {
        title: 'Co-Founder',
        dates: 'Present',
        points: [
          'Co-founded a bootstrapped, pre-launch startup building agentic AI for zero-touch mainframe batch abend management, integrated with ServiceNow.',
          'Designed the company’s visual identity and logo, and set its go-to-market focus on mid-tier regional banks and insurers.',
          'Run outbound business development with enterprise prospects in banking and aviation.',
        ],
      },
    ],
  },
  {
    org: 'Apple Developer Program',
    location: 'Chennai and Mysuru',
    kind: 'Design',
    icon: 'code-simple',
    project: 'recycle-and-donate-app',
    roles: [
      {
        title: 'iOS Developer Intern',
        dates: 'Apr 2024',
        points: [],
      },
      {
        title: 'iOS Developer Program',
        dates: 'May 2023 to Mar 2024',
        points: [
          'Completed an 11-month Apple Developer Program that combined Apple’s design principles with iOS development, followed by a one-month iOS developer internship.',
          'Designed the Recycle and Donate App: ran user interviews and a competitive review of donation and recycling apps, then turned the findings into personas, journey maps and a prioritised problem list.',
          'Defined the information architecture and core flows for listing an item, choosing to recycle or donate it, and scheduling a pickup, keeping each task to as few steps as possible.',
          'Built an interactive Figma prototype to Apple’s Human Interface Guidelines, with Dynamic Type, VoiceOver labels and colour contrast checked against accessibility standards.',
          'Built features from detailed software requirements specifications in an agile team spanning design, development, testing and product, contributing to sprint planning, peer reviews and technical presentations.',
        ],
      },
    ],
  },
  {
    org: 'TrainingMug',
    location: 'Remote',
    kind: 'Design',
    icon: 'chart-bar',
    project: 'learning-management-system',
    roles: [
      {
        title: 'UI/UX Designer',
        dates: 'Jun 2022 to Mar 2024',
        points: [
          'Led the redesign of an existing product, turning a cluttered interface into a clear, structured experience, and created a unified design system that gave the brand one consistent identity.',
          'Designed the Learning Management System across course discovery, enrolment, the lesson player and progress tracking, including charts that show completion and assessment scores at a glance.',
          'Designed complex UI features with a focus on state management, interface transparency and intuitive user journeys, and created responsive layouts for desktop, tablet and mobile.',
          'Ran user research, synthesised feedback into design decisions, and reviewed built screens with engineers against the designs to close gaps before release.',
        ],
      },
      { title: 'UI/UX Design Intern', dates: 'Apr 2022 to Jun 2022', points: [] },
    ],
  },
  {
    org: 'Infosys',
    kind: 'Design',
    icon: 'buildings',
    project: 'library-management-system',
    roles: [
      {
        title: 'Library Management System (Enterprise Web)',
        dates: 'Internship',
        points: [
          'Spoke with librarians and front-desk staff to map their daily workflows across cataloguing, issues, returns, renewals and fines, and identified where the existing process slowed them down.',
          'Designed data-dense tables and dashboards for inventory, overdue items and member activity, with sorting, filtering, bulk actions and clear status indicators.',
          'Built a reusable Figma component library using variants and auto layout, presented the design rationale to product and engineering leads, and delivered detailed handoff documentation.',
        ],
      },
    ],
  },
  {
    org: 'Pluto',
    location: 'Remote',
    kind: 'Design',
    icon: 'map-pin',
    project: 'ev-car-rental-app',
    roles: [
      {
        title: 'UI/UX Design Intern, EV Car Rental App (Mobile)',
        dates: 'Apr 2022 to May 2022',
        points: [
          'Led the foundational UX design, defining the information architecture, core navigation flows and visual identity for both sides of the platform, riders and vehicle owners.',
          'Designed vehicle search and comparison around what renters care about most, showing range, charge level and total trip cost up front, plus booking and in-trip flows with a charging-station map.',
        ],
      },
    ],
  },
];

export const leadership = [
  {
    org: 'Google Developer Group, SRM Institute of Science and Technology',
    location: 'Chennai',
    roles: [
      { title: 'Creatives and Photography Team Lead', dates: 'Sep 2023 to Sep 2024' },
      { title: 'Creatives and Photography Member', dates: 'Oct 2022 to Sep 2023' },
    ],
    points: [
      'Led visual design for a 25+ member team, producing the club’s social media content; social and brand reach grew 60%.',
      'Designed the club’s Event Booking Portal as high-fidelity Figma screens.',
      'Gave a keynote on UI/UX design fundamentals to 1,200+ students and faculty.',
    ],
  },
  {
    org: 'TEDx Conferences',
    location: 'Chennai',
    roles: [
      { title: 'Operations Team Lead', dates: 'Sep 2023 to Sep 2024' },
      { title: 'Member of Operations', dates: 'Oct 2022 to Sep 2023' },
    ],
    points: [
      'Ran operations for the annual TEDx conference for 300+ attendees, from planning through event day.',
      'Managed 10+ external vendors and the finance, publicity and stage design teams, delivering on budget and on schedule.',
    ],
  },
];

export interface BuiltProject {
  name: string;
  tagline: string;
  stack: string[];
  points: string[];
  visual: 'pipeline' | 'search' | 'handles';
}

export const built: BuiltProject[] = [
  {
    name: 'OrgGrid',
    tagline: 'A deal flow CRM for startup, corporate and investor teams',
    stack: ['React', 'TypeScript', 'Firebase', 'Gemini API'],
    visual: 'pipeline',
    points: [
      'Follows each startup-corporate deal from first conversation to success story.',
      'Organised around connects, leads and a shared database of organisations and contacts, with status tracking and an activity timeline for every deal.',
      'A deal summary engine condenses each deal’s history, alongside dashboards, import, export, filtering and Google sign-in.',
    ],
  },
  {
    name: 'FundLookup',
    tagline: 'A search tool for grants, funds and government schemes',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Gemini API'],
    visual: 'search',
    points: [
      'A single, searchable repository of grants, funds and government schemes for founders.',
      'Scannable list rows and detail views, with light and dark themes.',
      'Natural-language search turns a typed question into a shortlist of matching funds.',
    ],
  },
  {
    name: 'Handl',
    tagline: 'A username availability checker for startups',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Gemini API'],
    visual: 'handles',
    points: [
      'A liquid-glass interface that helps startups secure one consistent username across social and developer platforms.',
      'Pick the platforms to check and see availability for each one in a single results view.',
      'A handle suggestion engine proposes brandable alternatives whenever a name is taken.',
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Design',
    items: ['Figma (Advanced)', 'Prototyping', 'Wireframing', 'Interaction Design', 'Visual Design', 'Design Systems', 'Framer', 'Photoshop'],
  },
  {
    group: 'Research',
    items: ['Stakeholder Interviews', 'User Interviews', 'Workflow Mapping', 'Competitive Analysis', 'Usability Studies'],
  },
  {
    group: 'Front End',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Responsive Design', 'Web Accessibility'],
  },
  {
    group: 'Data and Cloud',
    items: ['SQL', 'Python', 'Node.js', 'Firebase', 'REST APIs', 'AWS', 'Google Cloud'],
  },
];

export const education = {
  degree: 'Bachelor of Technology',
  school: 'SRM Institute of Science and Technology',
  place: 'Kattankulathur, Chennai',
  dates: 'Jul 2021 to Jul 2025',
  cgpa: 9.0,
  scale: 10,
};

export const certifications = [
  { name: 'Google UX Design Professional Certificate', issuer: 'Google', date: 'Nov 2023' },
  { name: 'Google Cloud Computing Foundations', issuer: 'Google Cloud', date: 'Oct 2023' },
  { name: 'AWS Cloud Foundations', issuer: 'Amazon Web Services', date: 'May 2023' },
  { name: 'Networking Basics', issuer: 'Cisco Networking Academy', date: 'Apr 2023' },
  { name: 'Data Structures and Algorithms Using C and C++', issuer: 'Udemy', date: 'Jan 2023' },
];

export const achievements = [
  { place: '1st Place', title: 'App Design Hackathon', by: 'Swift Club' },
  { place: 'Runner-up', title: 'Google Developer Solution Challenge 2025', by: 'Google' },
  { place: '3rd Place', title: 'App Development Hackathon', by: 'IIT Madras' },
  { place: '3rd Place', title: 'Web Development Hackathon', by: 'IEEE SRM' },
  { place: 'Scholarship', title: 'Excellence in Examination', by: 'SRM Institute of Science and Technology' },
];

/** Career timeline bars (months are 1-based). `end: null` means present. */
export const timeline: { label: string; kind: 'Education' | 'Design' | 'Leadership' | 'Business'; start: [number, number]; end: [number, number] | null }[] = [
  { label: 'B.Tech, SRM IST', kind: 'Education', start: [2021, 7], end: [2025, 7] },
  { label: 'TrainingMug', kind: 'Design', start: [2022, 4], end: [2024, 3] },
  { label: 'Pluto', kind: 'Design', start: [2022, 4], end: [2022, 5] },
  { label: 'GDG SRM, Creatives', kind: 'Leadership', start: [2022, 10], end: [2024, 9] },
  { label: 'TEDx, Operations', kind: 'Leadership', start: [2022, 10], end: [2024, 9] },
  { label: 'Apple Developer Program', kind: 'Design', start: [2023, 5], end: [2024, 4] },
  { label: 'Nasscom', kind: 'Business', start: [2025, 2], end: null },
];

/** "Apr 2022 to Mar 2024" style span across all roles at an organisation. */
export function span(x: Experience): string {
  const first = x.roles[x.roles.length - 1].dates.split(' to ')[0];
  const last = x.roles[0].dates.split(' to ').pop() ?? '';
  return first === last ? first : `${first} to ${last}`;
}
