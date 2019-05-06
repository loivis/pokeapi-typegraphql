import { Resolver, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { Language } from "schemas/Language";
import { VersionGroup } from "schemas/VersionGroup";
import { VersionGroupFlavorText } from "schemas/VersionGroupFlavorText";

@Resolver(VersionGroupFlavorText)
export class VersionGroupFlavorTextResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @FieldResolver(() => Language)
    async language(@Root() versionGroupFlavorText: VersionGroupFlavorText) {
        return await this.pokeAPI.get(versionGroupFlavorText.language.url) as Language;
    }

    @FieldResolver(() => VersionGroup)
    async versionGroup(@Root() versionGroupFlavorText: VersionGroupFlavorText) {
        return await this.pokeAPI.get(versionGroupFlavorText.versionGroup.url) as VersionGroup;
    }
}
