import { Resolver, Query, Arg } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { EncounterMethod } from "schemas/EncounterMethod";

@Resolver(EncounterMethod)
export class EncounterMethodResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => EncounterMethod, { nullable: true })
    async encounterMethodByID(@Arg("id") id: number): Promise<EncounterMethod | null> {
        return await this.pokeAPI.get(id, EncounterMethod.apiType) as EncounterMethod;
    }

    @Query(() => EncounterMethod, { nullable: true })
    async encounterMethodByName(@Arg("name") name: string): Promise<EncounterMethod | null> {
        return await this.pokeAPI.get(name, EncounterMethod.apiType) as EncounterMethod;
    }
}
