# Switching between API regions

Since version 2.4.0 you can switch API regions to fetch data from between subsequent queries. Thanks to that, there's no need to create another class instance only to communicate with different API region.

You can do it in one of two ways:

## `setRegion`method

Use `setRegion` property with new region parameter between at any moment of BlizzAPI instance lifecycle:

```js
import { BlizzAPI } from "blizzapi";

const bnetApi = new BlizzAPI({
  region: "us",
  clientId: "valid_client_id",
  clientSecret: "valid_client_secret",
});

const responseFromUsRegion = await bnetApi.query("/sample/endpoint");

console.log(responseFromUsRegion);

// data fetched from US API region comes here

bnetApi.setRegion("eu");

const responseFromEuRegion = await bnetApi.query("/sample/endpoint");

console.log(responseFromEuRegion);

// data fetched from EU API region comes here
```

## `region` query option

Instantiate a BlizzAPI class and pass `region` property inside `options` object:

```js
import { BlizzAPI } from "blizzapi";

const bnetApi = new BlizzAPI({
  region: "us",
  clientId: "valid_client_id",
  clientSecret: "valid_client_secret",
});

const responseFromEuRegion = await bnetApi.query("/sample/endpoint", {
  region: "eu",
});

console.log(responseFromEuRegion);

// data fetched from EU API region comes here
```
