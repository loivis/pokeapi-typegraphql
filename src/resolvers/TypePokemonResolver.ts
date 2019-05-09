import { Resolver, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { Pokemon } from "schemas/Pokemon";
import { TypePokemon } from "schemas/TypePokemon";

@Resolver(TypePokemon)
export class TypePokemonResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @FieldResolver(() => Pokemon)
    async pokemon(@Root() psv: TypePokemon) {
        return await this.pokeAPI.get(psv.pokemon.url) as Pokemon;
    }

}
