import { Resolver, FieldResolver, Root, ResolverInterface } from "type-graphql";
import { PokeAPI } from "services/PokeAPI";
import { HeldByPokemon } from "schemas/HeldByPokemon";
import { Pokemon } from "schemas/Pokemon";

@Resolver(HeldByPokemon)
export class HeldByPokemonResolver implements ResolverInterface<HeldByPokemon> {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @FieldResolver(() => [Pokemon])
    pokemon(@Root() heldByPokemon: HeldByPokemon) {
        const ps = heldByPokemon.pokemon.map(async (p) => {
            return await this.pokeAPI.get(p.url) as Pokemon;
        })
        return Promise.all(ps);
    }
}
