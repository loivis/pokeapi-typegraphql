import { Resolver, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { PalParkEncounterSpecies } from "schemas/PalParkEncounterSpecies";
import { PokemonSpecies } from "schemas/PokemonSpecies";

@Resolver(PalParkEncounterSpecies)
export class PalParkEncounterSpeciesResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @FieldResolver(() => PokemonSpecies)
    async pokemonSpecies(@Root() psde: PalParkEncounterSpecies) {
        return await this.pokeAPI.get(psde.pokemonSpecies.url) as PokemonSpecies;
    }
}
