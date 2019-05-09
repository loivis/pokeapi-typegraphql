import { Resolver, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { Language } from "schemas/Language";
import { Genus } from "schemas/Genus";

@Resolver(Genus)
export class GeneraResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @FieldResolver(() => Language)
    async language(@Root() Genera: Genus) {
        return await this.pokeAPI.get(Genera.language.url) as Language;
    }
}
