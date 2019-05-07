import { Resolver, Query, Arg, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { MoveDamageClass } from "schemas/MoveDamageClass";
import { Move } from "schemas/Move";

@Resolver(MoveDamageClass)
export class MoveDamageClassResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => MoveDamageClass, { nullable: true })
    async moveDamageClassByID(@Arg("id") id: number): Promise<MoveDamageClass | null> {
        return await this.pokeAPI.get(id, MoveDamageClass.apiType) as MoveDamageClass;
    }

    @Query(() => MoveDamageClass, { nullable: true })
    async moveDamageClassByName(@Arg("name") name: string): Promise<MoveDamageClass | null> {
        return await this.pokeAPI.get(name, MoveDamageClass.apiType) as MoveDamageClass;
    }

    @FieldResolver(() => [Move])
    async moves(@Root() mdc: MoveDamageClass) {
        const moves = mdc.moves.map(async (move) => {
            return await this.pokeAPI.get(move.url) as Move;
        })
        return Promise.all(moves);
    }
}
