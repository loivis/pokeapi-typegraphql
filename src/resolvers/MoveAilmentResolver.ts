import { Resolver, FieldResolver, Root, Query, Arg } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { Move } from "schemas/Move";
import { MoveAilment } from "schemas/MoveAilment";

@Resolver(MoveAilment)
export class MoveAilmentResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => MoveAilment, { nullable: true })
    async moveAilmentByID(@Arg("id") id: number): Promise<MoveAilment | null> {
        return await this.pokeAPI.get(id, MoveAilment.apiType) as MoveAilment;
    }

    @Query(() => MoveAilment, { nullable: true })
    async moveAilmentByName(@Arg("name") name: string): Promise<MoveAilment | null> {
        return await this.pokeAPI.get(name, MoveAilment.apiType) as MoveAilment;
    }

    @FieldResolver(() => [Move])
    async moves(@Root() ma: MoveAilment) {
        const moves = ma.moves.map(async (move) => {
            return await this.pokeAPI.get(move.url) as Move;
        })
        return Promise.all(moves);
    }
}
