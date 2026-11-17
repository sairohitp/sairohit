/**
 * People named in the Figma files, with their roles exactly as the files state them.
 * `sources` lists the files each person appears in; `work` links to the related pages.
 */
export interface Colleague {
  name: string;
  role: string;
  org: string;
  work: { label: string; href: string }[];
  sources: string[];
  note?: string;
}

export interface ColleagueGroup {
  id: string;
  title: string;
  description: string;
  people: Colleague[];
}

const gdsc = 'Google Developer Student Clubs, SRM IST';
const visual = (id: string, label: string) => ({ label, href: `/visual/#${id}` });
const project = (slug: string, label: string) => ({ label, href: `/projects/${slug}/` });

export const colleagueGroups: ColleagueGroup[] = [
  {
    id: 'gdsc',
    title: 'GDSC SRM leadership',
    description: 'Faculty, team leads and domain leads named on the certificates, speaker posts and core team reveals I designed.',
    people: [
      {
        name: 'Dr. M. Umadevi',
        role: 'Faculty Advisor',
        org: gdsc,
        work: [visual('design-and-develop', 'Design and Develop certificates'), visual('code-with-node', 'Code with Node certificates'), visual('cloud-study-jam', 'Cloud Study Jam')],
        sources: ['Certificates.fig', 'Certificates2.fig', 'Cloud Study Jam.fig'],
      },
      {
        name: 'Vashist Agarwalla',
        role: 'Team Lead, GDSC Stellar Core Team 2022 to 2023',
        org: gdsc,
        work: [visual('community', 'Core team reveal'), visual('code-with-node', 'Code with Node 2.0'), project('events-booking-portal', 'Events portal')],
        sources: ['Post2.fig', 'Certificates2.fig', 'Cloud Study Jam.fig', 'events.fig', 'Events Portal.fig'],
      },
      {
        name: 'Manvi Singhal',
        role: 'Team Lead',
        org: gdsc,
        work: [visual('design-and-develop', 'Design and Develop workshop'), visual('cloud-study-jam', 'Cloud Study Jam')],
        sources: ['Certificates.fig', 'Cloud Study Jam.fig'],
      },
      {
        name: 'Gautam J',
        role: 'Technical Lead and speaker',
        org: gdsc,
        work: [visual('code-with-node', 'Meet the speaker posts'), visual('community', 'Core team reveal'), project('events-booking-portal', 'Events portal')],
        sources: ['Speaker Post.fig', 'Post2.fig', 'Events Portal.fig', 'events.fig'],
      },
      {
        name: 'Amish Dutta',
        role: 'Technical Lead',
        org: gdsc,
        work: [visual('community', 'Core team reveal')],
        sources: ['Post2.fig'],
      },
      {
        name: 'Mohamed Sami',
        role: 'Technical Lead, Full Stack Developer; speaker on Frontend with RemixJS',
        org: gdsc,
        work: [visual('design-and-develop', 'Design and Develop workshop, co-speaker')],
        sources: ['Posters.fig', 'Linkedin.fig'],
      },
      {
        name: 'Riti Salay',
        role: 'Corporate and PR Lead',
        org: gdsc,
        work: [visual('community', 'Core team reveal')],
        sources: ['Post2.fig'],
      },
      {
        name: 'Aksh Kalyan',
        role: 'Corporate and PR Lead',
        org: gdsc,
        work: [visual('community', 'Core team reveal')],
        sources: ['Post2.fig'],
        note: 'Spelled “Aksh Kalyan” in three frames and “Aksh Kalyani” in one.',
      },
      {
        name: 'Ananya Mishra',
        role: 'Creatives and Photography Lead',
        org: gdsc,
        work: [visual('community', 'Core team reveal')],
        sources: ['Post2.fig'],
      },
      {
        name: 'Utsav Doshi',
        role: 'Creatives and Photography Lead',
        org: gdsc,
        work: [visual('community', 'Core team reveal')],
        sources: ['Post2.fig'],
      },
      {
        name: 'Harsh Kothari',
        role: 'Program Facilitator, Google Cloud Study Jam',
        org: gdsc,
        work: [visual('cloud-study-jam', 'Cloud Study Jam certificates')],
        sources: ['Cloud Study Jam.fig'],
      },
    ],
  },
  {
    id: 'creatives',
    title: 'Creatives team',
    description: 'Members of the GDSC SRM Creatives team I led, who each have their own page of versions in the campaign files.',
    people: [
      { name: 'Parth', role: 'Creatives team', org: gdsc, work: [visual('community', '6k story and Freshers highlights'), visual('festivals', 'Independence Day 2023')], sources: ['6k story.fig', 'Freshers Highlights.fig', 'Independence Day 2023.fig'] },
      { name: 'Vignesh Sankar', role: 'Creatives team', org: gdsc, work: [visual('community', 'Freshers highlights')], sources: ['Freshers Highlights.fig'] },
      { name: 'Archisman', role: 'Creatives team', org: gdsc, work: [visual('community', 'Freshers highlights')], sources: ['Freshers Highlights.fig'] },
      { name: 'Avni', role: 'Creatives team', org: gdsc, work: [visual('community', 'Freshers highlights')], sources: ['Freshers Highlights.fig'] },
      { name: 'Gaurangi', role: 'Creatives team', org: gdsc, work: [visual('community', 'Freshers highlights')], sources: ['Freshers Highlights.fig'] },
      { name: 'Tharun', role: 'Creatives team', org: gdsc, work: [visual('community', 'Freshers highlights')], sources: ['Freshers Highlights.fig'] },
      { name: 'Nikita', role: 'Creatives team', org: gdsc, work: [visual('community', 'Freshers highlights')], sources: ['Freshers Highlights.fig'] },
      { name: 'Arnab', role: 'Creatives team', org: gdsc, work: [visual('community', '6k followers story')], sources: ['6k story.fig'] },
      { name: 'Shubhi', role: 'Creatives team', org: gdsc, work: [visual('community', '6k followers story')], sources: ['6k story.fig'] },
      { name: 'Abhishek', role: 'Creatives team', org: gdsc, work: [visual('community', '6k followers story')], sources: ['6k story.fig'] },
      { name: 'Akrish', role: 'Creatives team', org: gdsc, work: [visual('community', '6k followers story')], sources: ['6k story.fig'] },
      { name: 'Kashish', role: 'Creatives team', org: gdsc, work: [visual('community', '6k followers story')], sources: ['6k story.fig'] },
      { name: 'Ayush', role: 'Creatives team', org: gdsc, work: [visual('community', '6k followers story')], sources: ['6k story.fig'] },
    ],
  },
  {
    id: 'projects',
    title: 'Project teams',
    description: 'Teammates and faculty named on the presentation slides of the product case studies.',
    people: [
      {
        name: 'Aman Agrawal',
        role: 'Teammate: Team Greenwealth, PULSE and Team Wireshark',
        org: 'SRM IST',
        work: [project('recycle-and-donate-app', 'Recycle and Donate app, Solution Challenge'), project('blood-donation-app', 'PULSE blood donation app'), project('customer-relationship-management', 'Customer Relationship Management')],
        sources: ['Recycle Management System.fig', 'Blood Donation.fig', 'Customer Relationship Management.fig'],
      },
      {
        name: 'Prof. G. Manoj Kumar',
        role: 'Faculty, PULSE project',
        org: 'SRM IST',
        work: [project('blood-donation-app', 'PULSE blood donation app')],
        sources: ['Blood Donation.fig'],
      },
      { name: 'Shahid Ahamed', role: 'Team Wireshark', org: 'SRM IST', work: [project('customer-relationship-management', 'Customer Relationship Management')], sources: ['Customer Relationship Management.fig'] },
      { name: 'Kanishk Kumar', role: 'Team Wireshark', org: 'SRM IST', work: [project('customer-relationship-management', 'Customer Relationship Management')], sources: ['Customer Relationship Management.fig'] },
      { name: 'Abeer Mathur', role: 'Recycle Management System team', org: 'SRM IST', work: [project('recycle-and-donate-app', 'Recycle Management System')], sources: ['Recycle Management System.fig'] },
      { name: 'Rishi Charray', role: 'Recycle Management System team', org: 'SRM IST', work: [project('recycle-and-donate-app', 'Recycle Management System')], sources: ['Recycle Management System.fig'] },
      ...['Sristi Kumari', 'Shivesh Rathore', 'Vansh Pitalia', 'Amogh Jain', 'Dewashish Dubey', 'Anya Gupta', 'Keshav Jayakrishnan'].map((name) => ({
        name,
        role: 'Team Four, Library Management System',
        org: 'Infosys internship',
        work: [project('library-management-system', 'Myshelf, Library Management System')],
        sources: ['Library Management System.fig'],
      })),
    ],
  },
  {
    id: 'progull',
    title: 'Progull',
    description: 'The startup I co-founded, building agentic AI for mainframe batch operations.',
    people: [
      {
        name: 'Zeeshan Afzal',
        role: 'Founder, Progull',
        org: 'Progull, Bengaluru',
        work: [{ label: 'Progull, agentic AI for mainframe operations', href: 'https://progull.com/' }],
        sources: ['progull.com, About page'],
      },
    ],
  },
  {
    id: 'trainingmug',
    title: 'TrainingMug',
    description: 'Named in the learning platform files from my time as UI/UX designer at TrainingMug.',
    people: [
      {
        name: 'Madhu Samala',
        role: 'Founder, TrainingMug',
        org: 'TrainingMug',
        work: [project('learning-management-system', 'Learning Management System')],
        sources: ['Learning Platform.fig'],
      },
    ],
  },
];

export const allColleagues = colleagueGroups.flatMap((g) => g.people);
