import { Resolver, Query, Arg, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { EncounterCondition } from "schemas/EncounterCondition";
import { EncounterConditionValue } from "schemas/EncounterConditionValue";

@Resolver(EncounterCondition)
export class EncounterConditionResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => EncounterCondition, { nullable: true })
    async encounterConditionByID(@Arg("id") id: number): Promise<EncounterCondition | null> {
        return await this.pokeAPI.get(id, EncounterCondition.apiType) as EncounterCondition;
    }

    @Query(() => EncounterCondition, { nullable: true })
    async encounterConditionByName(@Arg("name") name: string): Promise<EncounterCondition | null> {
        return await this.pokeAPI.get(name, EncounterCondition.apiType) as EncounterCondition;
    }

    @FieldResolver(() => [EncounterConditionValue])
    async values(@Root() ec: EncounterCondition) {
        const values = ec.values.map(async (ecv) => {
            return await this.pokeAPI.get(ecv.url) as EncounterConditionValue;
        })
        return Promise.all(values);
    }
}
