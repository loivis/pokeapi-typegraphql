import { Resolver, FieldResolver, Root, Query, Arg } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { Move } from "schemas/Move";
import { SuperContestEffect } from "schemas/SuperContestEffect";

@Resolver(SuperContestEffect)
export class SuperContestEffectResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => SuperContestEffect, { nullable: true })
    async superContestEffectByID(@Arg("id") id: number): Promise<SuperContestEffect | null> {
        return await this.pokeAPI.get(id, SuperContestEffect.apiType) as SuperContestEffect;
    }

    @Query(() => SuperContestEffect, { nullable: true })
    async superContestEffectByName(@Arg("name") name: string): Promise<SuperContestEffect | null> {
        return await this.pokeAPI.get(name, SuperContestEffect.apiType) as SuperContestEffect;
    }

    @FieldResolver(() => [Move])
    async moves(@Root() sce: SuperContestEffect) {
        const cs = sce.moves.map(async (move) => {
            return await this.pokeAPI.get(move.url) as Move;

        })
        return Promise.all(cs);
    }
}
