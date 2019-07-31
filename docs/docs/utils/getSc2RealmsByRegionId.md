# getSc2RealmsByRegionId

Returns a flat array of StarCraft II realms associated with region ID provided as a parameter.

It throws ``RangeError`` when provided region ID is non-existent or invalid.

```js
const BlizzAPI = require('blizzapi');

console.log(BlizzAPI.getSc2RealmsByRegionId(1));
// [
//   1,
//   2
// ]

console.log(BlizzAPI.getSc2RealmsByRegionId(44));
// RangeError: 44 is not a valid parameter for getConstantByRegionId(44, 'SC2_REALMS')

```