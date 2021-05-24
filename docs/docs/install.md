# Installation

## NPM

All released versions are available via [npm](https://npmjs.com/package/blizzapi).

``` bash
npm install blizzapi
```


## Access via CDN

BlizzAPI is also available as UMD module and it can be accessed via CDN:

```javascript
// Using jsDelivr:
<script src="https://cdn.jsdelivr.net/npm/blizzapi/dist/blizzapi.umd.js"></script>

// Using unpkg:
<script src="https://unpkg.com/blizzapi/dist/blizzapi.umd.js"></script>
```

BlizzAPI uses [axios](https://github.com/axios/axios) for HTTP requests. If you use UMD build without any module tooling you have to [provide `axios` manually](https://github.com/axios/axios#installing).

## Manual build

[BlizzAPI is available on GitHub](https://github.com/lukemnet/blizzapi) and it can be built from source code.

``` bash
git clone https://github.com/lukemnet/blizzapi.git
cd blizzapi
npm install
npm run build
```

All released packages are also available in [GitHub releases section](https://github.com/lukemnet/blizzapi/releases).