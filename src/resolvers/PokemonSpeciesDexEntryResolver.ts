import { Resolver, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { Pokedex } from "schemas/Pokedex";
import { PokemonSpeciesDexEntry } from "schemas/PokemonSpeciesDexEntry";

@Resolver(PokemonSpeciesDexEntry)
export class PokemonSpeciesDexEntryResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @FieldResolver(() => Pokedex)
    async pokedex(@Root() psde: PokemonSpeciesDexEntry) {
        return await this.pokeAPI.get(psde.pokedex.url) as Pokedex;
    }
}
