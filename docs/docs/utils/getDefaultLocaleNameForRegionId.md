# getDefaultLocaleNameForRegionId

Returns a string with default locale name associated with region ID provided as a parameter.

It throws ``RangeError`` when provided region ID is non-existent or invalid.


```js
const BlizzAPI = require('blizzapi');

console.log(BlizzAPI.getDefaultLocaleNameForRegionId(1));
// "en_US"

console.log(BlizzAPI.getDefaultLocaleNameForRegionId(44));
// RangeError: 44 is not a valid parameter for getDefaultLocaleNameForRegionId()
```