import { Resolver, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { Version } from "schemas/Version";
import { VersionEncounterDetail } from "schemas/VersionEncounterDetail";

@Resolver(VersionEncounterDetail)
export class VersionEncounterDetailResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @FieldResolver(() => Version)
    async version(@Root() ved: VersionEncounterDetail) {
        return await this.pokeAPI.get(ved.version.url) as Version;
    }
}
