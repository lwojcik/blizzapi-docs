# What is BlizzAPI?

BlizzAPI is a Node.js library which simplifies authorization and retrieving data from [Blizzard Battle.net APIs](https://develop.battle.net/documentation/api-reference).

BlizzAPI is not another glorified wrapper for a fetch library. It offers simple but powerful API and a vast number of useful utility functions based on abstractions used by Blizzard in their game data APIs.

While it is possible to use BlizzAPI directly in any project that uses data from Battle.net APIs, it was primarily designed to be a reliable dependency for more specialized tools or other libraries.

BlizzAPI was initally created in November 2018 for a [StarCraft II Twitch extension](https://www.twitch.tv/ext/wg56zk271bqja047pknv3pk65m0rbr) and it was initally designed with StarCraft II in mind. Since then it has been successfully used in a game-agnostic fashion as a part of production backends handling millions of requests daily.

BlizzAPI uses [Client Credentials Flow](https://develop.battle.net/documentation/guides/using-oauth/client-credentials-flow) for obtaining data from Battle.net APIs. It was not designed nor tested around [Authorization Code Flow](https://develop.battle.net/documentation/guides/using-oauth/authorization-code-flow).