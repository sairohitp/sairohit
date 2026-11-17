/**
 * People named in the Figma files and project sites, grouped by the team or project they belong to.
 * Roles are exactly as the sources state them. Each team lists its shared work and sources once.
 */
export interface Link {
  label: string;
  href: string;
}

export interface Member {
  name: string;
  role?: string;
  note?: string;
  /** Work specific to this person, when it differs from the team's. */
  work?: Link[];
}

export interface Team {
  id: string;
  name: string;
  org: string;
  summary?: string;
  work: Link[];
  members: Member[];
  /** People listed by the piece they worked on (used for the Creatives team). */
  rosters?: { label: string; href: string; names: string[] }[];
  sources: string[];
}

export interface Category {
  id: string;
  title: string;
  description: string;
  teams: Team[];
}

const gdsc = 'Google Developer Student Clubs, SRM IST';
const visual = (id: string, label: string): Link => ({ label, href: `/visual/#${id}` });
const project = (slug: string, label: string): Link => ({ label, href: `/projects/${slug}/` });

export const categories: Category[] = [
  {
    id: 'gdsc',
    title: 'GDSC SRM',
    description: 'Faculty, leads and speakers named on the certificates, speaker posts and core team reveals I designed.',
    teams: [
      {
        id: 'gdsc-leads',
        name: 'Faculty, team leads and speakers',
        org: gdsc,
        work: [],
        members: [
          { name: 'Dr. M. Umadevi', role: 'Faculty Advisor', work: [visual('design-and-develop', 'Design and Develop'), visual('code-with-node', 'Code with Node'), visual('cloud-study-jam', 'Cloud Study Jam')] },
          { name: 'Vashist Agarwalla', role: 'Team Lead, 2022 to 2023', work: [visual('code-with-node', 'Code with Node 2.0'), project('events-booking-portal', 'Events portal')] },
          { name: 'Manvi Singhal', role: 'Team Lead', work: [visual('design-and-develop', 'Design and Develop'), visual('cloud-study-jam', 'Cloud Study Jam')] },
          { name: 'Harsh Kothari', role: 'Program Facilitator, Google Cloud Study Jam', work: [visual('cloud-study-jam', 'Cloud Study Jam')] },
          { name: 'Mohamed Sami', role: 'Technical Lead; co-speaker on Frontend with RemixJS', work: [visual('design-and-develop', 'Design and Develop')] },
        ],
        sources: ['Certificates.fig', 'Certificates2.fig', 'Cloud Study Jam.fig', 'Posters.fig', 'Linkedin.fig', 'events.fig'],
      },
      {
        id: 'gdsc-core',
        name: 'Stellar Core Team 2022 to 2023',
        org: gdsc,
        summary: 'Domain leads introduced in the core team reveal posts.',
        work: [visual('community', 'Core team reveal')],
        members: [
          { name: 'Gautam J', role: 'Technical Lead and speaker', work: [visual('code-with-node', 'Meet the speaker'), project('events-booking-portal', 'Events portal')] },
          { name: 'Amish Dutta', role: 'Technical Lead' },
          { name: 'Riti Salay', role: 'Corporate and PR Lead' },
          { name: 'Aksh Kalyan', role: 'Corporate and PR Lead', note: 'Also spelled “Aksh Kalyani” in one frame.' },
          { name: 'Ananya Mishra', role: 'Creatives and Photography Lead' },
          { name: 'Utsav Doshi', role: 'Creatives and Photography Lead' },
        ],
        sources: ['Post2.fig', 'Speaker Post.fig', 'Events Portal.fig'],
      },
    ],
  },
  {
    id: 'creatives',
    title: 'Creatives team',
    description: 'Members of the GDSC SRM Creatives team I led, each with their own page of versions in the campaign files.',
    teams: [
      {
        id: 'creatives-team',
        name: 'Creatives team, by campaign',
        org: gdsc,
        summary: 'Shown by the first names on their pages in the files.',
        work: [],
        members: [],
        rosters: [
          { label: '6k followers story', href: '/visual/#community', names: ['Arnab', 'Parth', 'Shubhi', 'Abhishek', 'Akrish', 'Kashish', 'Ayush'] },
          { label: 'Freshers highlights', href: '/visual/#community', names: ['Vignesh Sankar', 'Archisman', 'Avni', 'Gaurangi', 'Tharun', 'Parth', 'Nikita'] },
          { label: 'Independence Day 2023', href: '/visual/#festivals', names: ['Parth'] },
        ],
        sources: ['6k story.fig', 'Freshers Highlights.fig', 'Independence Day 2023.fig'],
      },
    ],
  },
  {
    id: 'projects',
    title: 'Project teams',
    description: 'Teammates and faculty named on the presentation slides of the product case studies.',
    teams: [
      {
        id: 'team-four',
        name: 'Team Four',
        org: 'Infosys internship',
        work: [project('library-management-system', 'Myshelf, Library Management System')],
        members: ['Sristi Kumari', 'Shivesh Rathore', 'Vansh Pitalia', 'Amogh Jain', 'Dewashish Dubey', 'Anya Gupta', 'Keshav Jayakrishnan'].map((name) => ({ name })),
        sources: ['Library Management System.fig'],
      },
      {
        id: 'wireshark',
        name: 'Team Wireshark',
        org: 'SRM IST',
        work: [project('customer-relationship-management', 'Customer Relationship Management')],
        members: [{ name: 'Aman Agrawal' }, { name: 'Shahid Ahamed' }, { name: 'Kanishk Kumar' }],
        sources: ['Customer Relationship Management.fig'],
      },
      {
        id: 'pulse',
        name: 'PULSE',
        org: 'SRM IST',
        work: [project('blood-donation-app', 'PULSE blood donation app')],
        members: [{ name: 'Aman Agrawal', role: 'Teammate' }, { name: 'Prof. G. Manoj Kumar', role: 'Faculty' }],
        sources: ['Blood Donation.fig'],
      },
      {
        id: 'greenwealth',
        name: 'Team Greenwealth',
        org: 'Google Solution Challenge, SRM IST',
        summary: 'A two-person team for the Solution Challenge.',
        work: [project('recycle-and-donate-app', 'Recycle and Donate app')],
        members: [{ name: 'Aman Agrawal' }],
        sources: ['Recycle Management System.fig'],
      },
      {
        id: 'recycle-course',
        name: 'Recycle Management System team',
        org: 'SRM IST',
        work: [project('recycle-and-donate-app', 'Recycle Management System')],
        members: [{ name: 'Abeer Mathur' }, { name: 'Rishi Charray' }],
        sources: ['Recycle Management System.fig'],
      },
    ],
  },
  {
    id: 'companies',
    title: 'Startups and companies',
    description: 'Founders I have worked with.',
    teams: [
      {
        id: 'progull',
        name: 'Progull',
        org: 'Bengaluru',
        summary: 'The startup I co-founded, building agentic AI for mainframe batch operations.',
        work: [{ label: 'progull.com', href: 'https://progull.com/' }],
        members: [{ name: 'Zeeshan Afzal', role: 'Founder' }],
        sources: ['progull.com, About page'],
      },
      {
        id: 'trainingmug',
        name: 'TrainingMug',
        org: 'Where I was UI/UX Designer, Apr 2022 to Mar 2024',
        work: [project('learning-management-system', 'Learning Management System')],
        members: [{ name: 'Madhu Samala', role: 'Founder' }],
        sources: ['Learning Platform.fig'],
      },
    ],
  },
];

/** Everyone, once, with every role they hold. */
export const people = (() => {
  const map = new Map<string, string[]>();
  for (const c of categories)
    for (const t of c.teams) {
      for (const m of t.members) map.set(m.name, [...(map.get(m.name) ?? []), m.role ? `${m.role}, ${t.name}` : t.name]);
      for (const r of t.rosters ?? []) for (const n of r.names) if (!map.has(n)) map.set(n, [t.name]);
    }
  return [...map.entries()].map(([name, roles]) => ({ name, roles: [...new Set(roles)] }));
})();

export const teamCount = categories.reduce((n, c) => n + c.teams.length, 0);
