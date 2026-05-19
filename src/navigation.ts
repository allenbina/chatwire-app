import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Features',
      href: getPermalink('/#features'),
    },
    {
      text: 'Install',
      href: getPermalink('/#install'),
    },
    {
      text: 'FAQ',
      href: getPermalink('/#faq'),
    },
    {
      text: 'Docs',
      href: 'https://docs.chatwire.app',
    },
  ],
  actions: [{ text: 'GitHub', href: 'https://github.com/allenbina/chatwire', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: getPermalink('/#features') },
        { text: 'Install', href: getPermalink('/#install') },
        { text: 'Comparison', href: getPermalink('/#comparison') },
        { text: 'FAQ', href: getPermalink('/#faq') },
      ],
    },
    {
      title: 'Documentation',
      links: [
        { text: 'Getting started', href: 'https://docs.chatwire.app/install/' },
        { text: 'User guide', href: 'https://docs.chatwire.app/guide/' },
        { text: 'Plugin SDK', href: 'https://docs.chatwire.app/dev/plugin-sdk/' },
        { text: 'API reference', href: 'https://docs.chatwire.app/dev/api-reference/' },
      ],
    },
    {
      title: 'Community',
      links: [
        { text: 'GitHub', href: 'https://github.com/allenbina/chatwire' },
        { text: 'Issues', href: 'https://github.com/allenbina/chatwire/issues' },
        { text: 'Discussions', href: 'https://github.com/allenbina/chatwire/discussions' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Privacy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/allenbina/chatwire' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:chatwireapp@gmail.com' },
  ],
  footNote: `
    &copy; chatwire contributors · MIT license · iMessage and macOS are trademarks of Apple Inc.
  `,
};
