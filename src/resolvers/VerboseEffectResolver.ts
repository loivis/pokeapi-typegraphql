import { Resolver, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { Language } from "schemas/Language";
import { VerboseEffect } from "schemas/VerboseEffect";

@Resolver(VerboseEffect)
export class VerboseEffectResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @FieldResolver(() => Language)
    async language(@Root() verboseEffect: VerboseEffect) {
        return await this.pokeAPI.get(verboseEffect.language.url) as Language;
    }
}
