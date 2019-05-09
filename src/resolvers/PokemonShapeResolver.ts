import { Resolver, Query, Arg, FieldResolver, Root, ResolverInterface } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { PokemonShape } from "schemas/PokemonShape";
import { PokemonSpecies } from "schemas/PokemonSpecies";

@Resolver(PokemonShape)
export class PokemonShapeResolver implements ResolverInterface<PokemonShape>{
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => PokemonShape, { nullable: true })
    async pokemonShapeByID(@Arg("id") id: number): Promise<PokemonShape | null> {
        return await this.pokeAPI.get(id, PokemonShape.apiType) as PokemonShape;
    }

    @Query(() => PokemonShape, { nullable: true })
    async pokemonShapeByName(@Arg("name") name: string): Promise<PokemonShape | null> {
        return await this.pokeAPI.get(name, PokemonShape.apiType) as PokemonShape;
    }

    @FieldResolver(() => [PokemonSpecies])
    async pokemonSpecies(@Root() pokemonShape: PokemonShape) {
        const pss = pokemonShape.pokemonSpecies.map(async (ps) => {
            return await this.pokeAPI.get(ps.url) as PokemonSpecies;
        })
        return Promise.all(pss);
    }
}
