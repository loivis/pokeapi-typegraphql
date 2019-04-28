import { Resolver, Query, FieldResolver, Root } from "type-graphql";
import fetch from "node-fetch";

import { Species } from "schemas/Species";
import { EvolutionChain } from "schemas/EvolutionChain";

@Resolver(Species)
export class SpeciesResolver {
    @Query(() => Species, { nullable: true })
    species(): Species | null {
        // TODO: don't return null
        return null
    }

    @FieldResolver(() => EvolutionChain)
    async evolution_chain(@Root() species: Species) {
        const response = await fetch(species.evolution_chain.url);
        return response.json();
    }
}
