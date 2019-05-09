import { Resolver, Query, Arg, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { EggGroup } from "schemas/EggGroup";
import { EvolutionChain } from "schemas/EvolutionChain";
import { Generation } from "schemas/Generation";
import { GrowthRate } from "schemas/GrowthRate";
import { PokemonColor } from "schemas/PokemonColor";
import { PokemonHabitat } from "schemas/PokemonHabitat";
import { PokemonShape } from "schemas/PokemonShape";
import { PokemonSpecies } from "schemas/PokemonSpecies";

@Resolver(PokemonSpecies)
export class PokemonSpeciesResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => PokemonSpecies, { nullable: true })
    async pokemonSpeciesByID(@Arg("id") id: number): Promise<PokemonSpecies | null> {
        return await this.pokeAPI.get(id, PokemonSpecies.apiType) as PokemonSpecies;
    }

    @Query(() => PokemonSpecies, { nullable: true })
    async pokemonSpeciesByName(@Arg("name") name: string): Promise<PokemonSpecies | null> {
        return await this.pokeAPI.get(name, PokemonSpecies.apiType) as PokemonSpecies;
    }

    @FieldResolver(() => PokemonColor)
    async color(@Root() ps: PokemonSpecies) {
        return await this.pokeAPI.get(ps.color.url) as PokemonColor;
    }

    @FieldResolver(() => [EggGroup])
    async eggGroups(@Root() ps: PokemonSpecies) {
        const egs = ps.eggGroups.map(async (eg) => {
            return await this.pokeAPI.get(eg.url) as EggGroup;
        })
        return Promise.all(egs);
    }

    @FieldResolver(() => EvolutionChain)
    async evolutionChain(@Root() ps: PokemonSpecies) {
        return await this.pokeAPI.get(ps.evolutionChain.url) as EvolutionChain;
    }

    @FieldResolver(() => PokemonSpecies)
    async evolvesFromSpecies(@Root() ps: PokemonSpecies) {
        if (ps.evolvesFromSpecies == null) return null;
        return await this.pokeAPI.get(ps.evolvesFromSpecies.url) as PokemonSpecies;
    }

    @FieldResolver(() => Generation)
    async generation(@Root() ps: PokemonSpecies) {
        return await this.pokeAPI.get(ps.generation.url) as Generation;
    }

    @FieldResolver(() => GrowthRate)
    async growthRate(@Root() ps: PokemonSpecies) {
        return await this.pokeAPI.get(ps.growthRate.url) as GrowthRate;
    }

    @FieldResolver(() => PokemonHabitat)
    async habitat(@Root() ps: PokemonSpecies) {
        return await this.pokeAPI.get(ps.habitat.url) as PokemonHabitat;
    }

    @FieldResolver(() => PokemonShape)
    async shape(@Root() ps: PokemonSpecies) {
        return await this.pokeAPI.get(ps.shape.url) as PokemonShape;
    }
}
