import { Resolver, FieldResolver, Root, Query, Arg } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { Generation } from "schemas/Generation";
import { MoveLearnMethod } from "schemas/MoveLearnMethod";
import { Pokedex } from "schemas/Pokedex";
import { Region } from "schemas/Region";
import { Version } from "schemas/Version";
import { VersionGroup } from "schemas/VersionGroup";

@Resolver(VersionGroup)
export class VersionGroupResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => VersionGroup, { nullable: true })
    async versionGroupByID(@Arg("id") id: number): Promise<VersionGroup | null> {
        return await this.pokeAPI.get(id, VersionGroup.apiType) as VersionGroup;
    }

    @Query(() => VersionGroup, { nullable: true })
    async versionGroupByName(@Arg("name") name: string): Promise<VersionGroup | null> {
        return await this.pokeAPI.get(name, VersionGroup.apiType) as VersionGroup;
    }


    @FieldResolver(() => Generation)
    async generation(@Root() vg: VersionGroup) {
        return await this.pokeAPI.get(vg.generation.url) as Generation;
    }

    @FieldResolver(() => [MoveLearnMethod])
    async moveLearnMethods(@Root() vg: VersionGroup) {
        const mlms = vg.moveLearnMethods.map(async (mlm) => {
            return await this.pokeAPI.get(mlm.url) as MoveLearnMethod;

        })
        return Promise.all(mlms);
    }

    @FieldResolver(() => [Pokedex])
    async pokedexes(@Root() vg: VersionGroup) {
        const ps = vg.pokedexes.map(async (p) => {
            return await this.pokeAPI.get(p.url) as Pokedex;

        })
        return Promise.all(ps);
    }

    @FieldResolver(() => [Region])
    async regions(@Root() vg: VersionGroup) {
        const regions = vg.regions.map(async (region) => {
            return await this.pokeAPI.get(region.url) as Region;

        })
        return Promise.all(regions);
    }

    @FieldResolver(() => [Version])
    async versions(@Root() vg: VersionGroup) {
        const versions = vg.versions.map(async (version) => {
            return await this.pokeAPI.get(version.url) as Version;

        })
        return Promise.all(versions);
    }
}
