/**
 * Global site settings. Internal paths (starting with "/") are made base-path aware automatically.
 * A link with `href: null` renders as plain text with a "Soon" tag.
 */
export const site = {
  name: 'Sai Rohit',
  title: 'Sai Rohit | Visual Interface Designer',
  description:
    'Portfolio of Sai Rohit, a visual interface designer and product experience researcher designing responsive apps from wireframes to high-fidelity prototypes.',

  resume: 'https://drive.google.com/file/d/1oHf8wTDSl-2O70A13vdkHWwvZo4jPX80/view?usp=drive_link',

  nav: [
    { label: 'Resume', href: 'https://drive.google.com/file/d/1oHf8wTDSl-2O70A13vdkHWwvZo4jPX80/view?usp=drive_link' },
    { label: 'About', href: '/about/' },
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
          href: 'https://drive.google.com/file/d/1oHf8wTDSl-2O70A13vdkHWwvZo4jPX80/view?usp=drive_link',
          external: true,
        },
        { label: 'Colleagues', href: null, external: true },
      ],
    },
  ],
} as const;
