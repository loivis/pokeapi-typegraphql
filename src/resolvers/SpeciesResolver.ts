import { Resolver, Query, FieldResolver, Root } from "type-graphql";
import fetch from "node-fetch";

import { PokemonSpecies } from "schemas/PokemonSpecies";
import { EvolutionChain } from "schemas/EvolutionChain";

@Resolver(PokemonSpecies)
export class SpeciesResolver {
    @Query(() => PokemonSpecies, { nullable: true })
    species(): PokemonSpecies | null {
        // TODO: not implemented
        return null
    }

    @FieldResolver(() => EvolutionChain)
    async evolutionChain(@Root() species: PokemonSpecies) {
        const response = await fetch(species.evolutionChain.url);
        return response.json();
    }
}
