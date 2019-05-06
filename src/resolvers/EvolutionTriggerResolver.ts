import { Resolver, Query, Arg, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { EvolutionTrigger } from "schemas/EvolutionTrigger";
import { PokemonSpecies } from "schemas/PokemonSpecies";

@Resolver(EvolutionTrigger)
export class EvolutionTriggerResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => EvolutionTrigger, { nullable: true })
    async evolutionTriggerByID(@Arg("id") id: number): Promise<EvolutionTrigger | null> {
        return await this.pokeAPI.get(id, EvolutionTrigger.apiType) as EvolutionTrigger;
    }

    @Query(() => EvolutionTrigger, { nullable: true })
    async evolutionTriggerByName(@Arg("name") name: string): Promise<EvolutionTrigger | null> {
        return await this.pokeAPI.get(name, EvolutionTrigger.apiType) as EvolutionTrigger;
    }

    @FieldResolver(() => PokemonSpecies)
    async pokemonSpecies(@Root() evolutionTrigger: EvolutionTrigger) {
        const pss = evolutionTrigger.pokemonSpecies.map(async (ps) => {
            return await this.pokeAPI.get(ps.url) as PokemonSpecies;
        })
        return Promise.all(pss);
    }
}
