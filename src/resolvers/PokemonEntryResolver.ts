import { Resolver, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { PokemonEntry } from "schemas/PokemonEntry";
import { PokemonSpecies } from "schemas/PokemonSpecies";

@Resolver(PokemonEntry)
export class PokemonEntryResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @FieldResolver(() => PokemonSpecies)
    async pokemonSpecies(@Root() pe: PokemonEntry) {
        return await this.pokeAPI.get(pe.pokemonSpecies.url) as PokemonSpecies;
    }
}
