import { Resolver, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { AwesomeName } from "schemas/AwesomeName";
import { Language } from "schemas/Language";

@Resolver(AwesomeName)
export class AwesomeNameResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @FieldResolver(() => Language)
    async language(@Root() AwesomeName: AwesomeName) {
        return await this.pokeAPI.get(AwesomeName.language.url) as Language;
    }
}
