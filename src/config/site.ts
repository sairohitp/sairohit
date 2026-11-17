/**
 * Global site settings. Internal paths (starting with "/") are made base-path aware automatically.
 */
export const site = {
  name: 'Sai Rohit',
  title: 'Sai Rohit | Product Designer',
  description:
    'Sai Rohit is a product designer in Bengaluru who designs data-heavy products in Figma and builds them in React.',

  resume: 'https://drive.google.com/file/d/1-uuH8aldJy4GtxoxNNg5KaNgz9Mp26By/view?usp=sharing',

  nav: [
    { label: 'Work', href: '/#work' },
    { label: 'Visual', href: '/visual/' },
    { label: 'About', href: '/about/' },
    { label: 'Blog', href: '/blog/' },
    { label: 'Resume', href: 'https://drive.google.com/file/d/1-uuH8aldJy4GtxoxNNg5KaNgz9Mp26By/view?usp=sharing' },
  ],

  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sairohitp', icon: 'linkedin' },
    { label: 'GitHub', href: 'https://www.github.com/sairohitp', icon: 'github' },
    { label: 'Dribbble', href: 'https://dribbble.com/sairohit', icon: 'dribbble' },
  ],

  /** Footer links, shown as one row of pills. */
  footer: [
    { label: 'Work', href: '/#work', external: false },
    { label: 'Visual', href: '/visual/', external: false },
    { label: 'About', href: '/about/', external: false },
    { label: 'Blog', href: '/blog/', external: false },
    { label: 'Colleagues', href: '/colleagues/', external: false },
    { label: 'Sitemap', href: '/sitemap/', external: false },
    { label: 'Resume', href: 'https://drive.google.com/file/d/1-uuH8aldJy4GtxoxNNg5KaNgz9Mp26By/view?usp=sharing', external: true },
  ],
} as const;
