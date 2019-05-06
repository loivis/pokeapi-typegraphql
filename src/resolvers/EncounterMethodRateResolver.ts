import { Resolver, FieldResolver, Root } from "type-graphql";
import { PokeAPI } from "services/PokeAPI";
import { EncounterMethod } from "schemas/EncounterMethod";
import { EncounterMethodRate } from "schemas/EncounterMethodRate";

@Resolver(EncounterMethodRate)
export class EncounterMethodRateResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @FieldResolver(() => EncounterMethod)
    async encounterMethod(@Root() encounterMethodRate: EncounterMethodRate) {
        return await this.pokeAPI.get(encounterMethodRate.encounterMethod.url) as EncounterMethod;
    }
}
