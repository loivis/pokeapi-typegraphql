import { Resolver, Query, Arg, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { PokemonColor } from "schemas/PokemonColor";
import { PokemonSpecies } from "schemas/PokemonSpecies";

@Resolver(PokemonColor)
export class PokemonColorResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => PokemonColor, { nullable: true })
    async pokemonColorByID(@Arg("id") id: number): Promise<PokemonColor | null> {
        return await this.pokeAPI.get(id, PokemonColor.apiType) as PokemonColor;
    }

    @Query(() => PokemonColor, { nullable: true })
    async pokemonColorByName(@Arg("name") name: string): Promise<PokemonColor | null> {
        return await this.pokeAPI.get(name, PokemonColor.apiType) as PokemonColor;
    }

    @FieldResolver(() => [PokemonSpecies])
    async pokemonSpecies(@Root() pc: PokemonColor) {
        const pss = pc.pokemonSpecies.map(async (ps) => {
            return await this.pokeAPI.get(ps.url) as PokemonSpecies;
        })
        return Promise.all(pss);
    }
}
