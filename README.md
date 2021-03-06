# pokeapi-typegraphql

An implementation of [pokeapi.co](https://pokeapi.co) with [GraphQL](https://graphql.org/) using [TypeGraphQL](https://typegraphql.ml/).

Schemas are created based on [Pokeapi V2 API Reference](https://github.com/PokeAPI/pokeapi/tree/master/pokemon_v2) but it doesn't seem to be the latest. Some(but don't remember which ones) are updated according to actual api responses by the time of coding in early May, 2019.

Try it out >>> >> > [pokeapi-typegraphql on heroku](https://pokeapi-typegraphql.herokuapp.com/graphql) < << <<<

**CAUTION:**
Some schema returns array with hundreds of elements, which causes the same amount of requests towards [pokeapi.co](https://pokeapi.co).

**[pokeapi.co Fair Use Policy](https://pokeapi.co/docs/v2.html#fairuse)**
```
PokéAPI is free and open to use. It is also very popular. Because of this, we ask every developer to abide by our fair use policy. People not complying with the fair use policy will have their IP address permenantly banned.

PokéAPI is primarily an educational tool, and we will not tolerate denial of service attacks preventing people from learning.

Rules:

Locally cache resources and images whenever you request them.
Use the correct user-agent header in API requests.
Be nice and friendly to your fellow PokéAPI developers.
```

# TODO

- [ ] InputUnion type to merge byId and byName as one (upstream feature not ready yet)

- [ ] load all data in database(SQL/NoSQL?) to elimicate requests to [pokeapi.co](https://pokeapi.co)

# Tryout locally

```
yarn install && yarn dev
```
By default, server will listen on port 4000: http://localhost:4000/graphql

# Query example

```graphql
{
  pokemonByID(id: 1) {
    name
    weight
    abilities {
      ability {
        name
        isMainSeries
        generation {
          name
          mainRegion {
            name
          }
        }
      }
    }
    sprites {
      frontDefault
      frontShiny
      frontFemale
      frontShinyFemale
    }
  }
}
```

# List of schemas

- [x] Ability

- [x] Berry

- [x] BerryFirmness

- [x] BerryFlavor

- [x] Characteristic

- [x] ContestEffect

- [x] ContestType

- [x] EggGroup

- [x] EncounterCondition

- [x] EncounterConditionValue

- [x] EncounterMethod

- [x] EvolutionChain

- [x] EvolutionTrigger

- [x] Gender

- [x] Generation

- [x] GrowthRate

- [x] Item

- [x] ItemAttribute

- [x] ItemCategory

- [x] ItemPocket

- [x] Language

- [x] Location

- [x] LocationArea

- [x] Machine

- [x] Move

- [x] MoveAilment

- [x] MoveBattleStyle

- [x] MoveCategory

- [x] MoveDamageClass

- [x] MoveLearnMethod

- [x] MoveTarget

- [x] Nature

- [x] PalParkArea

- [x] PokeathlonStat

- [x] Pokedex

- [x] Pokemon

- [x] PokemonColor

- [x] PokemonHabitat

- [x] PokemonForm

- [x] PokemonShape

- [x] PokemonSpecies

- [x] Region

- [x] Stat

- [x] SuperContestEffect

- [x] Type

- [x] Version

- [x] VersionGroup
