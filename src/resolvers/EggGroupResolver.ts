import { Resolver, FieldResolver, Root } from "type-graphql";
import { Service } from "typedi";

import { PokeAPI } from "services/PokeAPI";
import { EggGroup } from "schemas/EggGroup";
import { PokemonSpecies } from "schemas/PokemonSpecies";

@Service()
@Resolver(EggGroup)
export class EggGroupResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @FieldResolver(() => [PokemonSpecies])
    async PokemonSpecies(@Root() eg: EggGroup) {
        const pss = eg.pokemonSpecies.map(async (ps) => {
            return await this.pokeAPI.get(ps.url) as PokemonSpecies;
        })
        return Promise.all(pss);
    }
}
