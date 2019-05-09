import { Resolver, FieldResolver, Root, Query, Arg } from "type-graphql";
import { Service } from "typedi";

import { PokeAPI } from "services/PokeAPI";
import { PokemonHabitat } from "schemas/PokemonHabitat";
import { PokemonSpecies } from "schemas/PokemonSpecies";

@Service()
@Resolver(PokemonHabitat)
export class PokemonHabitatResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => PokemonHabitat, { nullable: true })
    async pokemonHabitatByID(@Arg("id") id: number): Promise<PokemonHabitat | null> {
        return await this.pokeAPI.get(id, PokemonHabitat.apiType) as PokemonHabitat;
    }

    @Query(() => PokemonHabitat, { nullable: true })
    async pokemonHabitatByName(@Arg("name") name: string): Promise<PokemonHabitat | null> {
        return await this.pokeAPI.get(name, PokemonHabitat.apiType) as PokemonHabitat;
    }

    @FieldResolver(() => [PokemonSpecies])
    async pokemonSpecies(@Root() ph: PokemonHabitat) {
        const pss = ph.pokemonSpecies.map(async (ps) => {
            return await this.pokeAPI.get(ps.url) as PokemonSpecies;
        })
        return Promise.all(pss);
    }
}
