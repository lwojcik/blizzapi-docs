# checkIfSc2RealmLooksValid

Tests if an argument matches the regex pattern typical for StarCraft II realms.

This function does not determine whether the realm exists in Battle.net API. For locale validation see [validateSc2Realm](/docs/utils/validateSc2Realm.html). 

```js
const BlizzAPI = require('blizzapi');

console.log(BlizzAPI.checkIfSc2RealmLooksValid(1));
// true

console.log(BlizzAPI.checkIfSc2RealmLooksValid(4));
// true

console.log(BlizzAPI.checkIfLocaleLooksValid(42));
// false

```