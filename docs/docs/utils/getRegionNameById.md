# getRegionNameById

Returns an array of region names associated with region ID provided as a parameter.

It throws ``RangeError`` when provided region ID is non-existent or invalid.

```js
const BlizzAPI = require('blizzapi');

console.log(BlizzAPI.getRegionNameById(1));
// [
//   "us"
// ]

console.log(BlizzAPI.getRegionNameById(3));
// [
//   "kr",
//   "tw"
// ]

console.log(BlizzAPI.getRegionNameById(43));
// RangeError: 43 is not a valid parameter for getRegionNameById()

```