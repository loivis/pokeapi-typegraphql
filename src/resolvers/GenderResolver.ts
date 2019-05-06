import { Resolver, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { Gender } from "schemas/Gender";
import { PokemonSpecies } from "schemas/PokemonSpecies";

@Resolver(Gender)
export class GenderResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @FieldResolver(() => PokemonSpecies)
    async requiredForEvolution(@Root() gender: Gender) {
        const rfe = gender.requiredForEvolution.map(async (ps) => {
            return await this.pokeAPI.get(ps.url) as PokemonSpecies;

        })
        return Promise.all(rfe);
    }
}
