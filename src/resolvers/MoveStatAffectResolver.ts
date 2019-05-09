import { Resolver, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { Move } from "schemas/Move";
import { MoveStatAffect } from "schemas/MoveStatAffect";

@Resolver(MoveStatAffect)
export class MoveStatAffectResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @FieldResolver(() => Move)
    async move(@Root() msa: MoveStatAffect) {
        return await this.pokeAPI.get(msa.move.url) as Move;
    }
}
