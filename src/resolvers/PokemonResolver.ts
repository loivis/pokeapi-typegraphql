import { Resolver, Query, Arg, FieldResolver, Root, ResolverInterface } from "type-graphql";
import fetch from "node-fetch";

import { Pokemon } from "schemas/Pokemon";
import { Species } from "schemas/Species";
import { Ability } from "schemas/Ability";

@Resolver(Pokemon)
export class PokemonResolver implements ResolverInterface<Pokemon>{
    @Query(() => Pokemon, { nullable: true })
    async pokemonByID(@Arg("id") id: number): Promise<Pokemon | null> {

        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + id)

        if (response.status != 200) {
            throw new Error("requested pokemon doesn't exist");
        }

        return response.json();
    }

    @Query(() => Pokemon, { nullable: true })
    async pokemonByName(@Arg("name") name: string): Promise<Pokemon | null> {

        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name)

        if (response.status != 200) {
            throw new Error("requested pokemon doesn't exist");
        }

        return response.json();
    }

    @FieldResolver(() => Species)
    async species(@Root() pokemon: Pokemon) {
        const response = await fetch(pokemon.species.url);
        return response.json();
    }

    @FieldResolver(() => [Ability])
    abilities(@Root() pokemon: Pokemon) {
        const abs = pokemon.abilities.map(async (e) => {
            const response = await fetch(e.ability.url);
            var ab = await response.json() as Ability
            ab.slot = e.slot
            ab.is_hidden = e.is_hidden

            return ab
        });

        return Promise.all(abs);
    }
}
