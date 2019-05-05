import { Resolver, Query, Arg } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { EncounterConditionValue } from "schemas/EncounterConditionValue";

@Resolver(EncounterConditionValue)
export class EncounterConditionValueResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => EncounterConditionValue, { nullable: true })
    async encounterConditionValueByID(@Arg("id") id: number): Promise<EncounterConditionValue | null> {
        return await this.pokeAPI.get(id, EncounterConditionValue.apiType) as EncounterConditionValue;
    }

    @Query(() => EncounterConditionValue, { nullable: true })
    async encounterConditionValueByName(@Arg("name") name: string): Promise<EncounterConditionValue | null> {
        return await this.pokeAPI.get(name, EncounterConditionValue.apiType) as EncounterConditionValue;
    }
}
