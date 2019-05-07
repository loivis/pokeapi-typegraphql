import { Resolver, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { ContestComboDetail } from "schemas/ContestComboDetail";
import { Move } from "schemas/Move";

@Resolver(ContestComboDetail)
export class ContestComboDetailResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @FieldResolver(() => [Move])
    async useAfter(@Root() ccd: ContestComboDetail) {
        const moves = ccd.useAfter.map(async (move) => {
            return await this.pokeAPI.get(move.url) as Move;
        })
        return Promise.all(moves);
    }

    @FieldResolver(() => [Move])
    async useBefore(@Root() ccd: ContestComboDetail) {
        const moves = ccd.useAfter.map(async (move) => {
            return await this.pokeAPI.get(move.url) as Move;
        })
        return Promise.all(moves);
    }
}
