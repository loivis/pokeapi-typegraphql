import { Resolver, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { Version } from "schemas/Version";
import { HeldItemVersionDetails } from "schemas/HeldItemVersionDetails";

@Resolver(HeldItemVersionDetails)
export class HeldItemVersionDetailsResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @FieldResolver(() => Version)
    async version(@Root() heldItemVersionDetails: HeldItemVersionDetails) {
        return await this.pokeAPI.get(heldItemVersionDetails.version.url) as Version;
    }
}
