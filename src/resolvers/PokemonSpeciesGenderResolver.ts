import { Resolver, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { PokemonSpecies } from "schemas/PokemonSpecies";
import { PokemonSpeciesGender } from "schemas/PokemonSpeciesGender";

@Resolver(PokemonSpeciesGender)
export class PokemonSpeciesGenderResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @FieldResolver(() => PokemonSpecies)
    async pokemonSpecies(@Root() pokemonSpeciesGender: PokemonSpeciesGender) {
        return await this.pokeAPI.get(pokemonSpeciesGender.pokemonSpecies.url) as PokemonSpecies;
    }
}
