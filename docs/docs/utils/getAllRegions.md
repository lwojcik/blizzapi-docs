# getAllRegions

Returns an object containing all available Battle.net API regions.

```js
const BlizzAPI = require('blizzapi');

console.log(BlizzAPI.getAllRegions());
// {
//  "1": [
//    "us"
//   ],
//   "2": [
//     "eu"
//   ],
//   "3": [
//     "kr",
//     "tw"
//   ],
//   "5": [
//     "cn"
//   ]
// }

```