---
home: true
actionText: Get Started →
actionLink: /docs/
footer: MIT Licensed • Copyright © 2019 Łukasz Wójcik • Not created, affiliated or endorsed in any way by Blizzard Entertainment
---

### Install

``` bash
npm install blizzapi
```

### Quick start

``` javascript
const BlizzAPI = require('blizzapi');

const api = new BlizzAPI({
  region: 'us',
  clientId: 'client id',
  clientSecret: 'client secret'
});

const data = await api.query('/path/to/endpoint');

console.log(data);
``` 