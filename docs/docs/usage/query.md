# Query

Data from Battle.net API can be fetched with ``query`` method. ``query`` returns a promise.

Example with promises:

```js
const BlizzAPI = require('blizzapi');

const BnetApi = new BlizzAPI({
  region: 'us',
  clientId: 'client id',
  clientSecret: 'client secret',
});

BnetApi.query('/sc2/profile/1/2/242838')
  .then((data) => {
    // do something with data
  });
```

Example with async / await:

```js
const BlizzAPI = require('blizzapi');

const BnetApi = new BlizzAPI({
  region: 'us',
  clientId: 'client id',
  clientSecret: 'client secret',
});

const data = await BnetApi.query('/sc2/profile/1/2/242838');

// do something with data
```

Endpoints containing regional characters are also supported.

```js
const BlizzAPI = require('blizzapi');

const BnetApi = new BlizzAPI({
  region: 'eu',
  clientId: 'client id',
  clientSecret: 'client secret',
});

const data = await BnetApi.query('/wow/character/гордунни/инициатива');

// do something with data
```