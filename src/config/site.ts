/**
 * Global site settings. Replace every `'#'` with the real URL when available.
 * Internal paths (starting with "/") are made base-path aware automatically.
 */
export const site = {
  name: 'Sai Rohit',
  title: 'Sai Rohit | Visual Interface Designer',
  description:
    'Portfolio of Sai Rohit, a visual interface designer and product experience researcher.',

  nav: [
    { label: 'Resume', href: '/resume.pdf', external: true },
    { label: 'About', href: '/about' },
  ],

  social: [
    { label: 'LinkedIn', href: '#', icon: 'linkedin' },
    { label: 'GitHub', href: 'https://github.com/sairohitp', icon: 'github' },
    { label: 'Dribbble', href: '#', icon: 'dribbble' },
  ],

  footer: [
    {
      title: 'Sitemap',
      links: [
        { label: 'Blog', href: '#' },
        { label: 'About', href: '/about' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Resume', href: '/resume.pdf', external: true },
        { label: 'Colleagues', href: '#', external: true },
      ],
    },
  ],
} as const;
