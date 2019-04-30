import { Resolver, Query, Arg, FieldResolver, Root, ResolverInterface } from "type-graphql";
import { Service } from "typedi";

import { Pokemon } from "schemas/Pokemon";
import { PokemonSpecies } from "schemas/PokemonSpecies";
import { Ability } from "schemas/Ability";
import { PokeAPI } from "services/PokeAPI";

@Service()
@Resolver(Pokemon)
export class PokemonResolver implements ResolverInterface<Pokemon>{
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => Pokemon, { nullable: true })
    async pokemonByID(@Arg("id") id: number): Promise<Pokemon | null> {
        return this.pokeAPI.getPokemon(id);
    }

    @Query(() => Pokemon, { nullable: true })
    async pokemonByName(@Arg("name") name: string): Promise<Pokemon | null> {
        return this.pokeAPI.getPokemon(name);
    }

    @FieldResolver(() => PokemonSpecies)
    async species(@Root() pokemon: Pokemon) {
        return this.pokeAPI.getSpecies(pokemon.species.url);
    }

    @FieldResolver(() => [Ability])
    abilities(@Root() pokemon: Pokemon) {
        const abs = pokemon.abilities.map(async (e) => {
            var ab = await this.pokeAPI.getPokemonAbility(e.ability.url)

            return ab
        });

        return Promise.all(abs);
    }
}
