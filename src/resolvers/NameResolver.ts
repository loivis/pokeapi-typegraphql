import { Resolver, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { Language } from "schemas/Language";
import { Name } from "schemas/Name";

@Resolver(Name)
export class NameResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) {
        console.log(this.pokeAPI);
    }

    @FieldResolver(() => Language)
    async language(@Root() name: Name) {
        return await this.pokeAPI.get(name.language.url) as Language;
    }
}
