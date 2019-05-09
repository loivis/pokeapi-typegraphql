import { Resolver, FieldResolver, Root, Query, Arg } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { Version } from "schemas/Version";
import { VersionGroup } from "schemas/VersionGroup";

@Resolver(Version)
export class VersionResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => Version, { nullable: true })
    async versionByID(@Arg("id") id: number): Promise<Version | null> {
        return await this.pokeAPI.get(id, Version.apiType) as Version;
    }

    @Query(() => Version, { nullable: true })
    async versionByName(@Arg("name") name: string): Promise<Version | null> {
        return await this.pokeAPI.get(name, Version.apiType) as Version;
    }

    @FieldResolver(() => [VersionGroup])
    async versionGroup(@Root() version: Version) {
        return await this.pokeAPI.get(version.versionGroup.url) as VersionGroup;
    }
}
