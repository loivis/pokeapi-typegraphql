import { Resolver, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { PastMoveStatValues } from "schemas/PastMoveStatValues";
import { Type } from "protobufjs";
import { VersionGroup } from "schemas/VersionGroup";

@Resolver(PastMoveStatValues)
export class PastMoveStatValuesResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @FieldResolver(() => Type)
    async type(@Root() pmsv: PastMoveStatValues) {
        return await this.pokeAPI.get(pmsv.type.url) as Type;
    }

    @FieldResolver(() => VersionGroup)
    async versionGroup(@Root() pmsv: PastMoveStatValues) {
        return await this.pokeAPI.get(pmsv.versionGroup.url) as VersionGroup;
    }
}
