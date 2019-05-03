import { Resolver, Query, Arg, FieldResolver, Root, ResolverInterface } from "type-graphql";
import { Service } from "typedi";

import { PokeAPI } from "services/PokeAPI";
import { PokemonForm } from "schemas/PokemonForm";
import { Pokemon } from "schemas/Pokemon";

@Service()
@Resolver(PokemonForm)
export class PokemonFormResolver implements ResolverInterface<PokemonForm>{
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => PokemonForm, { nullable: true })
    async pokemonFormByID(@Arg("id") id: number): Promise<PokemonForm | null> {
        return await this.pokeAPI.get(id, PokemonForm.apiType) as PokemonForm;
    }

    @FieldResolver(() => Pokemon)
    async pokemon(@Root() pokemonForm: PokemonForm) {
        return await this.pokeAPI.get(pokemonForm.pokemon.url, Pokemon.apiType) as Pokemon;
    }
}
