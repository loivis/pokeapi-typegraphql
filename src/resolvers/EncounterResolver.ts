import { Resolver, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { Encounter } from "schemas/Encounter";
import { EncounterConditionValue } from "schemas/EncounterConditionValue";
import { EncounterMethod } from "schemas/EncounterMethod";

@Resolver(Encounter)
export class EncounterMethodEncounterDetailResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @FieldResolver(() => [EncounterConditionValue])
    conditionValues(@Root() encounter: Encounter) {
        const cvs = encounter.conditionValues.map(async (ecv) => {
            return await this.pokeAPI.get(ecv.url) as EncounterConditionValue;
        })
        return Promise.all(cvs);
    }

    @FieldResolver(() => EncounterMethod)
    async method(@Root() encounter: Encounter) {
        return await this.pokeAPI.get(encounter.method.url) as EncounterMethod;
    }
}
