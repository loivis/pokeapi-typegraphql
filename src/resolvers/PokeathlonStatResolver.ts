import { Resolver, Query, Arg } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { PokeathlonStat } from "schemas/PokeathlonStat";

@Resolver(PokeathlonStat)
export class PokeathlonStatResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => PokeathlonStat, { nullable: true })
    async pokeathlonStatByID(@Arg("id") id: number): Promise<PokeathlonStat | null> {
        return await this.pokeAPI.get(id, PokeathlonStat.apiType) as PokeathlonStat;
    }

    @Query(() => PokeathlonStat, { nullable: true })
    async pokeathlonStatByName(@Arg("name") name: string): Promise<PokeathlonStat | null> {
        return await this.pokeAPI.get(name, PokeathlonStat.apiType) as PokeathlonStat;
    }
}
