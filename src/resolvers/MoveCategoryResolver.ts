import { Resolver, Query, Arg, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { MoveCategory } from "schemas/MoveCategory";
import { Move } from "schemas/Move";

@Resolver(MoveCategory)
export class MoveCategoryResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => MoveCategory, { nullable: true })
    async moveCategoryByID(@Arg("id") id: number): Promise<MoveCategory | null> {
        return await this.pokeAPI.get(id, MoveCategory.apiType) as MoveCategory;
    }

    @Query(() => MoveCategory, { nullable: true })
    async moveCategoryByName(@Arg("name") name: string): Promise<MoveCategory | null> {
        return await this.pokeAPI.get(name, MoveCategory.apiType) as MoveCategory;
    }

    @FieldResolver(() => [Move])
    async moves(@Root() mc: MoveCategory) {
        const moves = mc.moves.map(async (move) => {
            return await this.pokeAPI.get(move.url) as Move;
        })
        return Promise.all(moves);
    }
}
