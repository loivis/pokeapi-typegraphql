import { Resolver, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { Generation } from "schemas/Generation";
import { GenerationGameIndex } from "schemas/GenerationGameIndex";

@Resolver(GenerationGameIndex)
export class GenerationGameIndexResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @FieldResolver(() => Generation)
    async generation(@Root() generationGameIndex: GenerationGameIndex) {
        return await this.pokeAPI.get(generationGameIndex.generation.url) as Generation;
    }
}
