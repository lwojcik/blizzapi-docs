# validateSc2Realm

Checks if string provided as an argument is a valid existing Battle.net locale.

It throws ``RangeError`` when provided locale does not pass regex validation with [checkIfSc2RealmLooksValid](/docs/utils/checkIfSc2RealmLooksValid.html).


```js
const BlizzAPI = require('blizzapi');

console.log(BlizzAPI.validateSc2Realm(1));
// true

console.log(BlizzAPI.validateLocale(4));
// false

console.log(BlizzAPI.validateLocale(42));
// RangeError: 42 is not a valid parameter for validateSc2Realm()
```