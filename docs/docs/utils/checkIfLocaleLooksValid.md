# checkIfLocaleLooksValid

Tests if an argument matches the regex pattern typical for Battle.net locales.

This function does not determine whether the locale exists in Battle.net API. For locale validation see [validateLocale](/docs/utils/validateLocale.html). 

```js
const BlizzAPI = require('blizzapi');

console.log(BlizzAPI.checkIfLocaleLooksValid('en_US'));
// true

console.log(BlizzAPI.checkIfLocaleLooksValid('pl_PL'));
// true

console.log(BlizzAPI.checkIfLocaleLooksValid('non_EXISTENT'));
// false

```