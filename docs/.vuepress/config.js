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
         '/docs/usage/initialization.md',
         '/docs/usage/custom-access-token.md',
         '/docs/usage/getting-access-token.md',
         '/docs/usage/validating-access-token.md',
         '/docs/usage/query.md',
        ]
      },
      {
        title: 'Utility methods',
        collapsable: false,
        children: [
          '/docs/utils/',
          '/docs/utils/getAllRegions.md',
          '/docs/utils/getAllRegionIds.md',
          '/docs/utils/getAllRegionNames.md',
          '/docs/utils/getRegionNameById.md',
          '/docs/utils/validateRegionId.md',
          '/docs/utils/getRegionIdByName.md',
          '/docs/utils/validateRegionName.md',
          '/docs/utils/getAllLocales.md',
          '/docs/utils/getAllLocaleNames.md',
          '/docs/utils/getLocalesByRegionId.md',
          '/docs/utils/checkIfLocaleLooksValid.md',
          '/docs/utils/validateLocale.md',
          '/docs/utils/isLocaleValidForRegionId.md',
          '/docs/utils/getAllSc2Realms.md',
          '/docs/utils/getAllAvailableSc2Realms.md',
          '/docs/utils/getSc2RealmsByRegionId.md',
          '/docs/utils/checkIfSc2RealmLooksValid.md',
          '/docs/utils/validateSc2Realm.md',
          '/docs/utils/isSc2RealmValidForRegionId.md',
        ]
      }
    ]
  }
}