module.exports = {
  title: 'BlizzAPI',
  description: 'Flexible and feature-rich Node.js library for Blizzard Battle.net APIs',
  displayAllHeaders: true,
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs/' },
      { text: 'GitHub', link: 'https://github.com/lukemnet/blizzapi' },
    ],
    sidebar: [
      ['/', 'Home'],
      {
        title: 'Getting started',
        collapsable: false,
        children: [
         '/docs/',
         '/docs/requirements.md',
         '/docs/install.md',
         '/docs/examples.md',
        ],
      },
      {
        title: 'Usage',
        collapsable: false,
        children: [
         '/docs/usage/basic.md',
         '/docs/usage/custom-access-token.md',
         '/docs/usage/refreshing-access-token.md',
         '/docs/usage/validating-access-token.md',
         '/docs/usage/static-methods.md',
        ]
      },
      {
        title: 'API Reference',
        collapsable: false,
        children: [
         '/docs/api/initialization.md',
         '/docs/api/methods.md',
         '/docs/api/static-methods.md',
         '/docs/api/options.md',
        ]
      }
    ]
  }
}