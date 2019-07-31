# Getting access token

BlizzAPI exposes ``getAccessToken`` method which returns a promise of access token as a string.

Example with promises:

```js
const BlizzAPI = require('blizzapi');

const BnetApi = new BlizzAPI({ 'us', 'client id', 'client secret' });

BnetApi.getAccessToken()
  .then((accessToken) => {
    // do something with accessToken
  });
```

Example with async / await:


```js
const BlizzAPI = require('blizzapi');

const BnetApi = new BlizzAPI({{ 'us', 'client id', 'client secret' });
const accessToken = await BnetApi.getAccessToken();

// do something with accessToken
```