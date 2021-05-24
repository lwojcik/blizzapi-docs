# validateSc2Realm

Checks if string provided as an argument is a valid existing StarCraft II realm.

It throws ``RangeError`` when provided StarCraft II realm does not pass regex validation with [checkIfSc2RealmLooksValid](/docs/utils/checkIfSc2RealmLooksValid.html).


```js
const { BlizzAPI } = require('blizzapi');

console.log(BlizzAPI.validateSc2Realm(1));
// true

console.log(BlizzAPI.validateSc2Realm(4));
// false

console.log(BlizzAPI.validateSc2Realm(42));
// RangeError: 42 is not a valid parameter for validateSc2Realm()
```
