import { Resolver, FieldResolver, Root, Query, Arg } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { Ability } from "schemas/Ability";
import { Generation } from "schemas/Generation";
import { Move } from "schemas/Move";
import { PokemonSpecies } from "schemas/PokemonSpecies";
import { Region } from "schemas/Region";
import { Type } from "schemas/Type";
import { VersionGroup } from "schemas/VersionGroup";

@Resolver(Generation)
export class GenerationResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => Generation, { nullable: true })
    async generationByID(@Arg("id") id: number): Promise<Generation | null> {
        return await this.pokeAPI.get(id, Generation.apiType) as Generation;
    }

    @Query(() => Generation, { nullable: true })
    async generationByName(@Arg("name") name: string): Promise<Generation | null> {
        return await this.pokeAPI.get(name, Generation.apiType) as Generation;
    }

    @FieldResolver(() => [Ability])
    async abilities(@Root() generation: Generation) {
        const rfe = generation.abilities.map(async (ab) => {
            return await this.pokeAPI.get(ab.url) as Ability;

        })
        return Promise.all(rfe);
    }

    @FieldResolver(() => Region)
    async mainRegion(@Root() generation: Generation) {
        return await this.pokeAPI.get(generation.mainRegion.url) as Region;
    }

    @FieldResolver(() => [Move])
    async moves(@Root() generation: Generation) {
        const ms = generation.moves.map(async (move) => {
            return await this.pokeAPI.get(move.url) as Move;

        })
        return Promise.all(ms);
    }

    @FieldResolver(() => [PokemonSpecies])
    async pokemonSpecies(@Root() generation: Generation) {
        const ps = generation.pokemonSpecies.map(async (ps) => {
            return await this.pokeAPI.get(ps.url) as PokemonSpecies;

        })
        return Promise.all(ps);
    }

    @FieldResolver(() => [Type])
    async types(@Root() generation: Generation) {
        const ms = generation.types.map(async (type) => {
            return await this.pokeAPI.get(type.url) as Type;

        })
        return Promise.all(ms);
    }

    @FieldResolver(() => [VersionGroup])
    async versionGroups(@Root() generation: Generation) {
        const vgs = generation.versionGroups.map(async (vg) => {
            return await this.pokeAPI.get(vg.url) as VersionGroup;

        })
        return Promise.all(vgs);
    }
}
