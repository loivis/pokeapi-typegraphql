import { Resolver, Query, Arg, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { Pokedex } from "schemas/Pokedex";
import { Region } from "schemas/Region";
import { VersionGroup } from "schemas/VersionGroup";

@Resolver(Pokedex)
export class PokedexResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => Pokedex, { nullable: true })
    async pokedexByID(@Arg("id") id: number): Promise<Pokedex | null> {
        return await this.pokeAPI.get(id, Pokedex.apiType) as Pokedex;
    }

    @Query(() => Pokedex, { nullable: true })
    async pokedexByName(@Arg("name") name: string): Promise<Pokedex | null> {
        return await this.pokeAPI.get(name, Pokedex.apiType) as Pokedex;
    }

    @FieldResolver(() => Region)
    async region(@Root() pokedex: Pokedex) {
        if (pokedex.region == null) return null;
        return await this.pokeAPI.get(pokedex.region.url) as Region;
    }

    @FieldResolver(() => [VersionGroup])
    async versionGroups(@Root() pokedex: Pokedex) {
        const vgs = pokedex.versionGroups.map(async (vg) => {
            return await this.pokeAPI.get(vg.url) as VersionGroup;

        })
        return Promise.all(vgs);
    }
}
