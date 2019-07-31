# validateRegionName

Checks if string provided as an argument is a valid existing region name.

```js
const BlizzAPI = require('blizzapi');

console.log(BlizzAPI.validateRegionName('eu'));
// true

console.log(BlizzAPI.validateRegionName('pl'));
// false
```