import { getPermalink } from './utils/permalinks';
import logoFooter from '/src/assets/favicons/logo-only.png';

export const headerData = {
  links: [
    {
      text: 'Homes',
      href: '/',
    },
    {
      text: 'Pages',
      links: [
        {
          text: 'Features',
          href: getPermalink('/#features'),
        },
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        // {
        //   text: 'About us',
        //   href: getPermalink('/about'),
        // },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    // {
    //   text: 'Landing',
    //   links: [
    //     {
    //       text: 'Lead Generation',
    //       href: getPermalink('/landing/lead-generation'),
    //     },
    //     {
    //       text: 'Long-form Sales',
    //       href: getPermalink('/landing/sales'),
    //     },
    //     {
    //       text: 'Click-Through',
    //       href: getPermalink('/landing/click-through'),
    //     },
    //     {
    //       text: 'Product Details (or Services)',
    //       href: getPermalink('/landing/product'),
    //     },
    //     {
    //       text: 'Coming Soon or Pre-Launch',
    //       href: getPermalink('/landing/pre-launch'),
    //     },
    //     {
    //       text: 'Subscription',
    //       href: getPermalink('/landing/subscription'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Blog',
    //   links: [
    //     {
    //       text: 'Blog List',
    //       href: getBlogPermalink(),
    //     },
    //     {
    //       text: 'Article',
    //       href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
    //     },
    //     {
    //       text: 'Article (with MDX)',
    //       href: getPermalink('markdown-elements-demo-post', 'post'),
    //     },
    //     {
    //       text: 'Category Page',
    //       href: getPermalink('tutorials', 'category'),
    //     },
    //     {
    //       text: 'Tag Page',
    //       href: getPermalink('astro', 'tag'),
    //     },
    //   ],
    // },
    {
      text: 'Our Websites',
      links: [
        {
          text: 'Micorp',
          href: 'https://micorp.pro',
        },
        {
          text: 'School Management System',
          href: 'https://sms.micorp.pro',
        },
        {
          text: 'Movie Website',
          href: 'https://watch.ccr8.pro',
        },
      ],
    },
    // {
    //   text: 'Widgets',
    //   href: '#',
    // },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/Mi-corp', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Coming soon', href: 'https://www.instagram.com/mirror_corporation/' },
        // { text: 'Features', href: '#' },
        // { text: 'Security', href: '#' },
        // { text: 'Team', href: '#' },
        // { text: 'Enterprise', href: '#' },
        // { text: 'Customer stories', href: '#' },
        // { text: 'Pricing', href: '#' },
        // { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Coming soon', href: 'https://www.instagram.com/mirror_corporation/' },
        // { text: 'Developer API', href: '#' },
        // { text: 'Partners', href: '#' },
        // { text: 'Atom', href: '#' },
        // { text: 'Electron', href: '#' },
        // { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Coming soon', href: 'https://www.instagram.com/mirror_corporation/' },
        // { text: 'Docs', href: '#' },
        // { text: 'Community Forum', href: '#' },
        // { text: 'Professional Services', href: '#' },
        // { text: 'Skills', href: '#' },
        // { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'Instagram', href: 'https://www.instagram.com/mirror_corporation/' },
        { text: 'Github', href: 'https://github.com/Mi-corp/' },
        // { text: 'About', href: '#' },
        // { text: 'Blog', href: '#' },
        // { text: 'Careers', href: '#' },
        // { text: 'Press', href: '#' },
        // { text: 'Inclusion', href: '#' },
        // { text: 'Social Impact', href: '#' },
        // { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://www.instagram.com/mirror_corporation/' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/mirror_corporation/' },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/Mi-corp/' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="/logo-only.png" alt="Logo" loading="lazy" />
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://micorp.pro/"> Micorp</a> · All rights reserved.
  `,
};
