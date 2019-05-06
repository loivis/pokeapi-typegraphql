import { Resolver, FieldResolver, Root, Query, Arg } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { Generation } from "schemas/Generation";
import { Location } from "schemas/Location";
import { Pokedex } from "schemas/Pokedex";
import { Region } from "schemas/Region";
import { VersionGroup } from "schemas/VersionGroup";

@Resolver(Region)
export class RegionResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => Region, { nullable: true })
    async regionByID(@Arg("id") id: number): Promise<Region | null> {
        return await this.pokeAPI.get(id, Region.apiType) as Region;
    }

    @Query(() => Region, { nullable: true })
    async regionByName(@Arg("name") name: string): Promise<Region | null> {
        return await this.pokeAPI.get(name, Region.apiType) as Region;
    }

    @FieldResolver(() => [Location])
    async locations(@Root() region: Region) {
        const ls = region.locations.map(async (l) => {
            return await this.pokeAPI.get(l.url) as Location;

        })
        return Promise.all(ls);
    }

    @FieldResolver(() => Generation)
    async mainGeneration(@Root() region: Region) {
        return await this.pokeAPI.get(region.mainGeneration.url) as Generation;
    }

    @FieldResolver(() => [Pokedex])
    async pokedexes(@Root() region: Region) {
        const pds = region.pokedexes.map(async (pd) => {
            return await this.pokeAPI.get(pd.url) as Pokedex;

        })
        return Promise.all(pds);
    }

    @FieldResolver(() => [VersionGroup])
    async versionGroups(@Root() Region: Region) {
        const vgs = Region.versionGroups.map(async (vg) => {
            return await this.pokeAPI.get(vg.url) as VersionGroup;

        })
        return Promise.all(vgs);
    }
}
