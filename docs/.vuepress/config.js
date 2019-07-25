module.exports = {
  title: 'BlizzAPI',
  description: 'Flexibly library for Blizzard Battle.net APIs',
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
         '/docs/install.md',
        ]
      },
      {
        title: 'Usage and examples',
        collapsable: false,
        children: [
         '/docs/',
         '/docs/install.md',
        ]
      }
    ]
  }
}