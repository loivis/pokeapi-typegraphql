import { Resolver, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { Language } from "schemas/Language";
import { Description } from "schemas/Description";

@Resolver(Description)
export class DescriptionResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @FieldResolver(() => Language)
    async language(@Root() description: Description) {
        return await this.pokeAPI.get(description.language.url) as Language;
    }
}
