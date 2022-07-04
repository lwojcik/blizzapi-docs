# Custom access token

BlizzAPI can use OAuth access token from an outside source for data retrieval. If a custom access token is provided, BlizzAPI will not request for a new one on each query. That results in shorter response times and allows for separating OAuth authorization flow from data processing logic.

As stated in [Blizzard Battle.net API docs](https://develop.battle.net/documentation/guides/using-oauth), access tokens last for 24 hours. They can be revoked by a number of different events (password change, account lockdown etc.). BlizzAPI can detect expired access token and obtain a new one, but ultimately **it is user's responsibility to keep custom access tokens valid and up to date**.

Initialization with custom access token and additional options:

```js
const { BlizzAPI } = require('blizzapi');

const BnetApi = new BlizzAPI({
  region: 'us', // or 1
  accessToken: 'access token',
  validateAccessTokenOnEachQuery: false,
  refreshExpiredAccessToken: false,
  onAccessTokenExpired: () => { /* do something */ },
  onAccessTokenRefresh: (newAccessToken) => { /* do something */ },
});

```

## Parameters

### validateAccessTokenOnEachQuery
Default: ``false``

If set to ``true``, BlizzAPI will perform additional access token validation request on each call of ``query`` method. If access token turns out to be expired or invalid and ``refreshExpiredAccessToken`` is false, BlizzAPI will respond as follows:

```json
{
  error: 'access_token_invalid',
}
```

### refreshExpiredAccessToken
Default: ``false``

If set to ``true``, BlizzAPI will attempt to obtain a new access token if authorization error is encountered (e.g. invalid or expired access token is provided).

### onAccessTokenExpired
Default: ``undefined``

Callback function to run when BlizzAPI performs a query with invalid or expired access token. This can be used for variety of purposes, such as logging or triggering alerts.

### onAccessTokenRefresh
Default ``undefined``

Callback function to run when BlizzAPI obtains a new access token. It passes string representing new access token as a callback parameter. This can be used for variety of purposes, such as logging or caching.
