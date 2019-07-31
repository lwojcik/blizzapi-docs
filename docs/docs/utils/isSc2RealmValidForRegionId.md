# isSc2RealmValidForRegionId

Checks if provided StarCraft II realm is valid for given region ID.

It throws ``RangeError`` if StarCraft II realm or region ID is non-existent or invalid.

```js
const BlizzAPI = require('blizzapi');

console.log(BlizzAPI.isSc2RealmValidForRegionId(1, 1));
// true

console.log(BlizzAPI.isLocaleValidForRegionId(5, 2));
// false

console.log(BlizzAPI.isLocaleValidForRegionId(55, 2));
// RangeError: 55 is not a valid sc2Realm parameter for isSc2RealmValidForRegionId()

console.log(BlizzAPI.isLocaleValidForRegionId(1, 55));
// RangeError: 55 is not a valid regionId parameter for isSc2RealmValidForRegionId()
```