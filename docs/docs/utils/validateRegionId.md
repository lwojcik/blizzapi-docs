# validateRegionId

Checks if number or string provided as an argument is a valid existing region ID.

```js
const BlizzAPI = require('blizzapi');

console.log(BlizzAPI.validateRegionId(1));
// true

console.log(BlizzAPI.validateRegionName('54'));
// false
```