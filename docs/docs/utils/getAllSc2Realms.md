# getAllSc2Realms

Returns an object containing all StarCraft II realms available in each region.

```js
const BlizzAPI = require('blizzapi');

console.log(BlizzAPI.getAllSc2Realms());
// {
//   "1": [
//     1,
//     2
//   ],
//   "2": [
//     1,
//     2
//   ],
//   "3": [
//     1,
//     2
//   ],
//   "5": [
//     1
//   ]
// }

```