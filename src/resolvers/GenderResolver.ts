import { Resolver, FieldResolver, Root, Query, Arg } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { Gender } from "schemas/Gender";
import { PokemonSpecies } from "schemas/PokemonSpecies";

@Resolver(Gender)
export class GenderResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => Gender, { nullable: true })
    async genderByID(@Arg("id") id: number): Promise<Gender | null> {
        return await this.pokeAPI.get(id, Gender.apiType) as Gender;
    }

    @Query(() => Gender, { nullable: true })
    async genderByName(@Arg("name") name: string): Promise<Gender | null> {
        return await this.pokeAPI.get(name, Gender.apiType) as Gender;
    }

    @FieldResolver(() => [PokemonSpecies])
    async requiredForEvolution(@Root() gender: Gender) {
        const rfe = gender.requiredForEvolution.map(async (ps) => {
            return await this.pokeAPI.get(ps.url) as PokemonSpecies;

        })
        return Promise.all(rfe);
    }
}
