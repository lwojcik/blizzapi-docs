## Using with Typescript

Instead of using classic `common.js` with require: `const BlizzAPI = require('blizzapi');` you could use TypeScript: `import { BlizzAPI, BattleNetOptions } from 'blizzapi';` And then, initialize your BlizzAPI instance, with:

```js
const BNet = new BlizzAPI({
  region: 'eu',
  clientId: args._id,
  clientSecret: args.clientSecret,
})
```

to make your queries to Battle.net API.

Also, on any import problems, don't forget to check your `tsconfig.json` file, for such `compilerOptions` as:

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true
  }
}
```

## Implementing BlizzAPI with Nest.js

There are many various ways to implement BlizzAPI module with Nest.js. In this case, I just show one of many options, with throwdown already initialized instance of BlizzAPI.

In your `app.service.ts` or any other provider, just import module, via `import { BlizzAPI, BattleNetOptions } from 'blizzapi';` don't forget about `BattleNetOptions` type, if you are willing to use to pass arguments in to one of your functions as variable. Or via config or `.env` file.

```js
import { BlizzAPI, BattleNetOptions } from 'blizzapi';

export class AppService {

  private BNet: BlizzAPI
  
  constuctor(
   // other injections
  ) { 
    this.test()
  }
  
  async getCharacter(realm: string = 'gordunni', name: string = 'инициатива'): void {
    try { 
      // You could initialize module each time with different params (interface: BattleNetOptions)
      this.BNet = new BlizzAPI({
        region: 'eu',
        clientId: args._id,
        clientSecret: args.clientSecret,
        // optional, as many other params
        // accessToken: args.accessToken
      })

      const character_status: Record<string, any> = await this.BNet.query(`/profile/wow/character/${realm}/${name}/status`, {
        params: { locale: 'en_GB' },
        headers: { 'Battlenet-Namespace': 'profile-eu' }
      })
      
      console.log(character_status);
      
      // or throwdown already initialized BlizzAPI to another method
      const result = await this.otherRequest(realm, name, this.BNet);
      console.log(result);
    } catch (e) {
      console.error(e)
    }
  }
  
  private async otherRequest(realm: string, name: string, BNet: BlizzAPI): Record<string, any> {
   return response: Record<string, any> = await BNet.query(`/profile/wow/character/${realm}/${name}`, {
      params: { locale: 'en_GB' },
      headers: { 'Battlenet-Namespace': 'profile-eu' }
    })
  }
}
```
