import { Resolver, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { Effect } from "schemas/Effect";
import { Language } from "schemas/Language";

@Resolver(Effect)
export class EffectResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @FieldResolver(() => Language)
    async language(@Root() effect: Effect) {
        return await this.pokeAPI.get(effect.language.url) as Language;
    }
}
