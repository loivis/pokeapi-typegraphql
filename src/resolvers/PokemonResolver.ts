import { Resolver, Query, Arg, FieldResolver, Root, ResolverInterface } from "type-graphql";
import { Service } from "typedi";

import { Pokemon } from "schemas/Pokemon";
import { Species } from "schemas/Species";
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

    @FieldResolver(() => Species)
    async species(@Root() pokemon: Pokemon) {
        return this.pokeAPI.getSpecies(pokemon.species.url);
    }

    @FieldResolver(() => [Ability])
    abilities(@Root() pokemon: Pokemon) {
        const abs = pokemon.abilities.map(async (e) => {
            var ab = await this.pokeAPI.getAbility(e.ability.url)

            ab.slot = e.slot
            ab.is_hidden = e.is_hidden

            return ab
        });

        return Promise.all(abs);
    }
}
