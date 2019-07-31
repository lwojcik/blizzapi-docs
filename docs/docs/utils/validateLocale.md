# validateLocale

Checks if string provided as an argument is a valid existing Battle.net locale.

It throws ``RangeError`` when provided locale does not pass regex validation with [checkIfLocaleLooksValid](/docs/utils/checkIfLocaleLooksValid.html).


```js
const BlizzAPI = require('blizzapi');

console.log(BlizzAPI.validateLocale('en_US'));
// true

console.log(BlizzAPI.validateLocale('pl_PL'));
// false

console.log(BlizzAPI.validateLocale('non_EXISTENT'));
// RangeError: non_EXISTENT is not a valid parameter for validateLocale()
```