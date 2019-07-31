# Utility methods

BlizzAPI exposes a number of static methods designed to be used as helpers while building more specialized tools. They can be used out-of-the-box as they do not require BlizzAPI class object to be initialized.

Terms like 'regions', 'realms', 'locales' are based on Battle.net API docs section on [Regionality, Partitions, and Localization](https://develop.battle.net/documentation/guides/regionality-partitions-and-localization).

The following utility methods are available:

* [getAllRegions](/docs/utils/getAllRegions)
* [getAllRegionIds](/docs/utils/getAllRegionIds)
* [getAllRegionNames](/docs/utils/getAllRegionNames)
* [getRegionNameById](/docs/utils/getRegionNameById)
* [validateRegionId](/docs/utils/validateRegionId)
* [getRegionIdByName](/docs/utils/getRegionIdByName)
* [validateRegionName](/docs/utils/validateRegionName)
* [getAllLocales](/docs/utils/getAllLocales)
* [getAllLocaleNames](/docs/utils/getAllLocaleNames)
* [getLocalesByRegionId](/docs/utils/getLocalesByRegionId)
* [checkIfLocaleLooksValid](/docs/utils/checkIfLocaleLooksValid)
* [validateLocale](/docs/utils/validateLocale)
* [isLocaleValidForRegionId](/docs/utils/isLocaleValidForRegionId)
* [getAllSc2Realms](/docs/utils/getAllSc2Realms)
* [getAllAvailableSc2Realms](/docs/utils/getAllAvailableSc2Realms)
* [getSc2RealmsByRegionId](/docs/utils/getSc2RealmsByRegionId)
* [checkIfSc2RealmLooksValid](/docs/utils/checkIfSc2RealmLooksValid)
* [validateSc2Realm](/docs/utils/validateSc2Realm)
* [isSc2RealmValidForRegionId](/docs/utils/isSc2RealmValidForRegionId)