import { Resolver, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { VersionGroup } from "schemas/VersionGroup";
import { AbilityEffectChange } from "schemas/AbilityEffectChange";

@Resolver(AbilityEffectChange)
export class AbilityEffectChangeResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @FieldResolver(() => VersionGroup)
    async versionGroup(@Root() aec: AbilityEffectChange) {
        return await this.pokeAPI.get(aec.versionGroup.url) as VersionGroup;
    }
}
