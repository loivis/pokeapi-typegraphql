import { Resolver, Query, Arg } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { Language } from "schemas/Language";

@Resolver(Language)
export class LanguageResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => Language, { nullable: true })
    async languageByID(@Arg("id") id: number): Promise<Language | null> {
        return await this.pokeAPI.get(id, Language.apiType) as Language;
    }

    @Query(() => Language, { nullable: true })
    async languageByName(@Arg("name") name: string): Promise<Language | null> {
        return await this.pokeAPI.get(name, Language.apiType) as Language;
    }
}
