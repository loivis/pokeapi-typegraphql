import { Resolver, Query, Arg } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { MoveBattleStyle } from "schemas/MoveBattleStyle";

@Resolver(MoveBattleStyle)
export class MoveBattleStyleResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => MoveBattleStyle, { nullable: true })
    async moveBattleStyleByID(@Arg("id") id: number): Promise<MoveBattleStyle | null> {
        return await this.pokeAPI.get(id, MoveBattleStyle.apiType) as MoveBattleStyle;
    }

    @Query(() => MoveBattleStyle, { nullable: true })
    async moveBattleStyleByName(@Arg("name") name: string): Promise<MoveBattleStyle | null> {
        return await this.pokeAPI.get(name, MoveBattleStyle.apiType) as MoveBattleStyle;
    }
}
