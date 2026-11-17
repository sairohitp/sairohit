/**
 * Global site settings. Internal paths (starting with "/") are made base-path aware automatically.
 * A link with `href: null` renders as plain text with a "Soon" tag.
 */
export const site = {
  name: 'Sai Rohit',
  title: 'Sai Rohit | Product Designer',
  description:
    'Sai Rohit is a product designer in Bengaluru who designs data-heavy products in Figma and builds them in React.',

  resume: 'https://drive.google.com/file/d/1-uuH8aldJy4GtxoxNNg5KaNgz9Mp26By/view?usp=sharing',

  nav: [
    { label: 'Work', href: '/#work' },
    { label: 'About', href: '/about/' },
    { label: 'Resume', href: 'https://drive.google.com/file/d/1-uuH8aldJy4GtxoxNNg5KaNgz9Mp26By/view?usp=sharing' },
  ],

  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sairohitp', icon: 'linkedin' },
    { label: 'GitHub', href: 'https://www.github.com/sairohitp', icon: 'github' },
    { label: 'Dribbble', href: 'https://dribbble.com/sairohit', icon: 'dribbble' },
  ],

  footer: [
    {
      title: 'Sitemap',
      links: [
        { label: 'Blog', href: null, external: false },
        { label: 'About', href: '/about/', external: false },
      ],
    },
    {
      title: 'Resources',
      links: [
        {
          label: 'Resume',
          href: 'https://drive.google.com/file/d/1-uuH8aldJy4GtxoxNNg5KaNgz9Mp26By/view?usp=sharing',
          external: true,
        },
        { label: 'Colleagues', href: null, external: true },
      ],
    },
  ],
} as const;
