import { Resolver, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { Version } from "schemas/Version";
import { VersionGameIndex } from "schemas/VersionGameIndex";

@Resolver(VersionGameIndex)
export class VersionGameIndexResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @FieldResolver(() => Version)
    async version(@Root() versionGameIndex: VersionGameIndex) {
        return await this.pokeAPI.get(versionGameIndex.version.url) as Version;
    }
}
