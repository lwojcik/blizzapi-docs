# Validating access token

BlizzAPI exposes ``validateAccessToken`` static method which checks if access token is valid for a given region. It returns boolean value.

Example with promises:

```js
const BlizzAPI = require('blizzapi');

BlizzAPI.validateAccessToken('us', 'access token')
  .then((result) => {
    if (result) {
      // do something when access token is valid
    }
  });

```

Example with async / await:


```js
const BlizzAPI = require('blizzapi');

const isAccessTokenValid = await BlizzAPI.validateAccessToken('us', 'access token');

if (isAccessTokenValid) {
  // do something when access token is valid
}
```