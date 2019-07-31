# Query

Data from Battle.net API can be fetched with ``query`` method. ``query`` returns a promise.

Example with promises:

```js
const BlizzAPI = require('blizzapi');

const BnetApi = new BlizzAPI({ 'us', 'client id', 'client secret' });

BnetApi.query('/sc2/profile/1/2/242838')
  .then((data) => {
    // do something with data
  });
```

Example with async / await:


```js


const BlizzAPI = require('blizzapi');

const BnetApi = new BlizzAPI({ region, clientId, clientSecret });
const data = await BnetApi.query('/sc2/profile/1/2/242838');

// do something with data
```