import { Resolver, FieldResolver, Root } from "type-graphql";
import { Service } from "typedi";

import { PokeAPI } from "services/PokeAPI";
import { PokemonSpeciesVariety } from "schemas/PokemonSpeciesVariety";
import { Pokemon } from "schemas/Pokemon";

@Service()
@Resolver(PokemonSpeciesVariety)
export class PokemonSpeciesVarietyResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @FieldResolver(() => Pokemon)
    async pokemon(@Root() psv: PokemonSpeciesVariety) {
        return await this.pokeAPI.get(psv.pokemon.url) as Pokemon;
    }

}
