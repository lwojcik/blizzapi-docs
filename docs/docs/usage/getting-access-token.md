# Getting access token

BlizzAPI exposes two methods for obtaining access token.

## `getAccessTokenObject`

Returns a promise of access token object as returned from Battle.net API.

Example with promises:

```js
const { BlizzAPI } = require('blizzapi');

const BnetApi = new BlizzAPI({ 'us', 'client id', 'client secret' });

BnetApi.getAccessTokenObject()
  .then((accessTokenObject) => {
    // do something with accessToken
  });
```

Example with async / await:

```js
const { BlizzAPI } = require('blizzapi');

const BnetApi = new BlizzAPI({{ 'us', 'client id', 'client secret' });
const accessToken = await BnetApi.getAccessTokenObject();

// do something with accessToken
```

## `getAccessToken`

Returns a promise of access token as a string.

Example with promises:

```js
const { BlizzAPI } = require('blizzapi');

const BnetApi = new BlizzAPI({ 'us', 'client id', 'client secret' });

BnetApi.getAccessToken()
  .then((accessToken) => {
    // do something with accessToken
  });
```

Example with async / await:

```js
const { BlizzAPI } = require('blizzapi');

const BnetApi = new BlizzAPI({{ 'us', 'client id', 'client secret' });
const accessToken = await BnetApi.getAccessToken();

// do something with accessToken
```
