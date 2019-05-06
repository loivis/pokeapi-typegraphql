import { Resolver, FieldResolver, Root, Query, Arg } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { GrowthRate } from "schemas/GrowthRate";
import { PokemonSpecies } from "schemas/PokemonSpecies";

@Resolver(GrowthRate)
export class GrowthRateResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => GrowthRate, { nullable: true })
    async growthRateByID(@Arg("id") id: number): Promise<GrowthRate | null> {
        return await this.pokeAPI.get(id, GrowthRate.apiType) as GrowthRate;
    }

    @Query(() => GrowthRate, { nullable: true })
    async growthRateByName(@Arg("name") name: string): Promise<GrowthRate | null> {
        return await this.pokeAPI.get(name, GrowthRate.apiType) as GrowthRate;
    }

    @FieldResolver(() => [PokemonSpecies])
    async pokemonSpecies(@Root() growthRate: GrowthRate) {
        const pss = growthRate.pokemonSpecies.map(async (ps) => {
            return await this.pokeAPI.get(ps.url) as PokemonSpecies;
        })
        return Promise.all(pss);
    }
}
