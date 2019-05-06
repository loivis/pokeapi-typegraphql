import { Resolver, FieldResolver, Root } from "type-graphql";
import { PokeAPI } from "services/PokeAPI";
import { EncounterVersionDetail } from "schemas/EncounterVersionDetail";
import { Version } from "schemas/Version";

@Resolver(EncounterVersionDetail)
export class EncounterVersionDetailResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @FieldResolver(() => Version)
    async version(@Root() evd: EncounterVersionDetail) {
        return await this.pokeAPI.get(evd.version.url) as Version;
    }
}
