import { Resolver, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { FlavorText } from "schemas/FlavorText";
import { Language } from "schemas/Language";

@Resolver(FlavorText)
export class FlavorTextResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @FieldResolver(() => Language)
    async language(@Root() flavorText: FlavorText) {
        return await this.pokeAPI.get(flavorText.language.url) as Language;
    }
}
