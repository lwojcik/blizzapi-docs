# Initialization

Each BlizzAPI instance is tied to a specific Battle.net region and requires OAuth credentials for retrieving data. See [Blizzard Battle.net docs](https://develop.battle.net/documentation/guides/using-oauth) for information on how to obtain these.

Initialization with OAuth app credentials:

```js
const BlizzAPI = require('blizzapi');

const BnetApi = new BlizzAPI({
  region: 'us', // or 1
  clientId: 'client ID',
  clientSecret: 'client secret',
});
```

Initalization with OAuth access token:

```js
const BlizzAPI = require('blizzapi');

const BnetApi = new BlizzAPI({
  region: 'us', // or 1
  accessToken: 'access token',
});

```

## Parameters

* **region** - one of API regions as specified in [Battle.net API docs](https://develop.battle.net/documentation/guides/regionality-partitions-and-localization). BlizzAPI accepts region ID as number or string (e.g. ``1``, ``'2'``) as well as region name as a two-letter country code (e.g. ``us``, ``kr``)
* **clientID** - client ID of application registered with Battle.net API
* **clientSecret** - client secret of application registered with Battle.net API
* **accessToken** (optional) - valid access token issued by Battle.net API endpoint

## OAuth authorization

When BlizzAPI object is initialized with ``clientId`` and ``clientSecret``, it obtains access token automatically and sets it as a private property for future reference. While this approach is the most straightforward, it requires additional API call for OAuth authorization, thus increasing response time.

When BlizzAPI object is initialized with ``accessToken``, BlizzAPI skips authorization step in order to offer shorter response time, but it comes at certain cost. See [Custom access token](/docs/usage/custom-access-token.html) for more information.