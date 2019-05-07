import { Resolver, FieldResolver, Root, Query, Arg } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { Move } from "schemas/Move";
import { MoveTarget } from "schemas/MoveTarget";

@Resolver(MoveTarget)
export class MoveMoveChangeResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => MoveTarget, { nullable: true })
    async moveTargetByID(@Arg("id") id: number): Promise<MoveTarget | null> {
        return await this.pokeAPI.get(id, MoveTarget.apiType) as MoveTarget;
    }

    @Query(() => MoveTarget, { nullable: true })
    async moveTargetByName(@Arg("name") name: string): Promise<MoveTarget | null> {
        return await this.pokeAPI.get(name, MoveTarget.apiType) as MoveTarget;
    }

    @FieldResolver(() => [Move])
    async moves(@Root() mt: MoveTarget) {
        const moves = mt.moves.map(async (move) => {
            return await this.pokeAPI.get(move.url) as Move;
        })
        return Promise.all(moves);
    }
}
