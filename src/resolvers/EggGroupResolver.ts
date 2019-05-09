import { Resolver, FieldResolver, Root, Query, Arg } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { EggGroup } from "schemas/EggGroup";
import { PokemonSpecies } from "schemas/PokemonSpecies";

@Resolver(EggGroup)
export class EggGroupResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => EggGroup, { nullable: true })
    async eggGroupByID(@Arg("id") id: number): Promise<EggGroup | null> {
        return await this.pokeAPI.get(id, EggGroup.apiType) as EggGroup;
    }

    @Query(() => EggGroup, { nullable: true })
    async eggGroupByName(@Arg("name") name: string): Promise<EggGroup | null> {
        return await this.pokeAPI.get(name, EggGroup.apiType) as EggGroup;
    }

    @FieldResolver(() => [PokemonSpecies])
    async pokemonSpecies(@Root() eg: EggGroup) {
        const pss = eg.pokemonSpecies.map(async (ps) => {
            return await this.pokeAPI.get(ps.url) as PokemonSpecies;
        })
        return Promise.all(pss);
    }
}
