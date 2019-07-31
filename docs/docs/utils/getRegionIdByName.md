# getRegionIdByName

Returns a region ID associated to a region name provided as a parameter.

It throws ``RangeError`` when provided region name cannot be linked to an existing region ID.

```js
const BlizzAPI = require('blizzapi');

console.log(BlizzAPI.getRegionIdByName('us'));
// 1

console.log(BlizzAPI.getRegionIdByName('kr'));
// 3

console.log(BlizzAPI.getRegionIdByName('noSuchName'));
// RangeError: "noSuchName" is not a valid parameter for getRegionIdByName()

```