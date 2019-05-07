import { Resolver, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { MoveBattleStyle } from "schemas/MoveBattleStyle";
import { MoveBattleStylePreference } from "schemas/MoveBattleStylePreference";

@Resolver(MoveBattleStylePreference)
export class MoveBattleStylePreferenceResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @FieldResolver(() => MoveBattleStyle)
    async moveBattleStyle(@Root() mbsp: MoveBattleStylePreference) {
        return await this.pokeAPI.get(mbsp.moveBattleStyle.url) as MoveBattleStyle;
    }
}
