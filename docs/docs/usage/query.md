# Query

Data from Battle.net API can be fetched with `query` method. `query` returns a promise.

Example with promises:

```js
const { BlizzAPI } = require("blizzapi");

const BnetApi = new BlizzAPI({
  region: "us",
  clientId: "client id",
  clientSecret: "client secret",
});

BnetApi.query("/sc2/profile/1/2/242838").then((data) => {
  // do something with data
});
```

Example with async / await:

```js
const { BlizzAPI } = require("blizzapi");

const BnetApi = new BlizzAPI({
  region: "us",
  clientId: "client id",
  clientSecret: "client secret",
});

const data = await BnetApi.query("/sc2/profile/1/2/242838");

// do something with data
```

## Query options

BlizzAPI accepts an options object which can be used to pass custom headers, options or response timeout. Query parameters can contain any letters, such as cyrrilic or diakritikós.

When `timeout` property is not set, BlizzAPI uses 10s as default response timeout.

```js
const { BlizzAPI } = require("blizzapi");

const BnetApi = new BlizzAPI({
  region: "eu",
  clientId: "client id",
  clientSecret: "client secret",
});

// character profile-endpoint as query param
const character_query = await BnetApi.query(
  "/profile/wow/character/gordunni/инициатива?namespace=profile-eu"
);

// character profile-endpoint as header
const character_header = await api.query(
  "/profile/wow/character/gordunni/инициатива",
  {
    headers: {
      "Battlenet-Namespace": "profile-eu",
    },
  }
);

// auction house dynamic-endpoint with timeout and if-modified-since header
const auction_data = await api.query(
  "/data/wow/connected-realm/1602/auctions",
  {
    timeout: 30000, // 30 seconds
    headers: {
      "Battlenet-Namespace": "dynamic-eu",
      "If-Modified-Since": "Wed, 30 Sep 2020 04:40:00 GMT",
    },
  }
);

// Will return 304 error, or full auction house data, based on If-Modified-Since value

// do something with data
```

## `lastModified` property

If Battle.net API endpoints expose `last-modified` property in response headers, this value is passed in BlizzAPI response as `lastModified` property.
