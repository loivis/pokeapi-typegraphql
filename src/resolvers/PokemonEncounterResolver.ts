import { Resolver, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { Pokemon } from "schemas/Pokemon";
import { PokemonEncounter } from "schemas/PokemonEncounter";

@Resolver(PokemonEncounter)
export class PokemonEncounterResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @FieldResolver(() => Pokemon)
    async pokemon(@Root() pe: PokemonEncounter) {
        return await this.pokeAPI.get(pe.pokemon.url) as Pokemon;
    }
}
