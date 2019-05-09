import { Resolver, Query, Arg } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { PalParkArea } from "schemas/PalParkArea";

@Resolver(PalParkArea)
export class PalParkAreaResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => PalParkArea, { nullable: true })
    async palParkAreaByID(@Arg("id") id: number): Promise<PalParkArea | null> {
        return await this.pokeAPI.get(id, PalParkArea.apiType) as PalParkArea;
    }

    @Query(() => PalParkArea, { nullable: true })
    async palParkAreaByName(@Arg("name") name: string): Promise<PalParkArea | null> {
        return await this.pokeAPI.get(name, PalParkArea.apiType) as PalParkArea;
    }
}
