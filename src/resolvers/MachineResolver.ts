import { Resolver, FieldResolver, Root, Query, Arg } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { Item } from "schemas/Item";
import { Machine } from "schemas/Machine";
import { Move } from "schemas/Move";
import { VersionGroup } from "schemas/VersionGroup";

@Resolver(Machine)
export class MachineResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => Machine, { nullable: true })
    async machineByID(@Arg("id") id: number): Promise<Machine | null> {
        return await this.pokeAPI.get(id, Machine.apiType) as Machine;
    }

    @Query(() => Machine, { nullable: true })
    async machineByName(@Arg("name") name: string): Promise<Machine | null> {
        return await this.pokeAPI.get(name, Machine.apiType) as Machine;
    }

    @FieldResolver(() => Item)
    async item(@Root() Machine: Machine) {
        return await this.pokeAPI.get(Machine.item.url) as Item;
    }

    @FieldResolver(() => Move)
    async move(@Root() Machine: Machine) {
        return await this.pokeAPI.get(Machine.move.url) as Move;
    }

    @FieldResolver(() => VersionGroup)
    async versionGroup(@Root() Machine: Machine) {
        return await this.pokeAPI.get(Machine.versionGroup.url) as VersionGroup;
    }
}
