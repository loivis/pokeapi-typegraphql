import { Resolver, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { Machine } from "schemas/Machine";
import { MachineVersionDetail } from "schemas/MachineVersionDetail";
import { VersionGroup } from "schemas/VersionGroup";

@Resolver(MachineVersionDetail)
export class MachineVersionDetailResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @FieldResolver(() => Machine)
    async machine(@Root() mvd: MachineVersionDetail) {
        return await this.pokeAPI.get(mvd.machine.url) as Machine;
    }

    @FieldResolver(() => VersionGroup)
    async versionGroup(@Root() mvd: MachineVersionDetail) {
        return await this.pokeAPI.get(mvd.versionGroup.url) as VersionGroup;
    }
}
