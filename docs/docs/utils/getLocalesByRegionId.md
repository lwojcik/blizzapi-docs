# getLocalesByRegionId

Returns a flat array of locales associated with region ID provided as a parameter.

It throws ``RangeError`` when provided region ID is non-existent or invalid.

```js
const BlizzAPI = require('blizzapi');

console.log(BlizzAPI.getLocalesByRegionId(1));
// [
//   "en_US",
//   "es_MX",
//   "pt_BR"
// ]

console.log(BlizzAPI.getRegionNameById(44));
// RangeError: 44 is not a valid parameter for getConstantByRegionId(44, 'LOCALES')

```