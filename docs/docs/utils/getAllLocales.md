# getAllLocales

Returns an object containing all locales available in each region.

```js
const BlizzAPI = require('blizzapi');

console.log(BlizzAPI.getAllLocales());
// {
//   "1": [
//     "en_US",
//     "es_MX",
//     "pt_BR"
//   ],
//   "2": [
//     "en_GB",
//     "es_ES",
//     "fr_FR",
//     "ru_RU",
//     "de_DE",
//     "pt_PT",
//     "it_IT"
//   ],
//   "3": [
//     "ko_KR",
//     "zh_TW"
//   ],
//   "5": [
//     "zh_CN"
//   ]
// }

```