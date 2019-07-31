# isLocaleValidForRegionId

Checks if provided locale is valid for given region ID.

It throws ``RangeError`` if locale or region ID is non-existent or invalid.

```js
const BlizzAPI = require('blizzapi');

console.log(BlizzAPI.isLocaleValidForRegionId('en_US', 1));
// true

console.log(BlizzAPI.isLocaleValidForRegionId('en_US', 3));
// false

console.log(BlizzAPI.validateLocale('pl_PL', 2));
// RangeError: pl_PL is not a valid locale parameter for isLocaleValidForRegionId()

console.log(BlizzAPI.validateLocale('en_US', 44));
// RangeError: 44 is not a valid regionId parameter for isLocaleValidForRegionId()
```