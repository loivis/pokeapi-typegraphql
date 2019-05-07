import { Resolver, Query, Arg, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { MoveLearnMethod } from "schemas/MoveLearnMethod";
import { VersionGroup } from "schemas/VersionGroup";

@Resolver(MoveLearnMethod)
export class MoveLearnMethodResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => MoveLearnMethod, { nullable: true })
    async moveLearnMethodByID(@Arg("id") id: number): Promise<MoveLearnMethod | null> {
        return await this.pokeAPI.get(id, MoveLearnMethod.apiType) as MoveLearnMethod;
    }

    @Query(() => MoveLearnMethod, { nullable: true })
    async moveLearnMethodByName(@Arg("name") name: string): Promise<MoveLearnMethod | null> {
        return await this.pokeAPI.get(name, MoveLearnMethod.apiType) as MoveLearnMethod;
    }

    @FieldResolver(() => [VersionGroup])
    async versionGroups(@Root() mlm: MoveLearnMethod) {
        const vgs = mlm.versionGroups.map(async (vg) => {
            return await this.pokeAPI.get(vg.url) as VersionGroup;
        })
        return Promise.all(vgs);
    }
}
