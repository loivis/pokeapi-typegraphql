import { Resolver, Query, Arg, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { ContestType } from "schemas/ContestType";
import { BerryFlavor } from "schemas/BerryFlavor";

@Resolver(ContestType)
export class ContestTypeResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => ContestType, { nullable: true })
    async contestTypeByID(@Arg("id") id: number): Promise<ContestType | null> {
        return await this.pokeAPI.get(id, ContestType.apiType) as ContestType;
    }

    @Query(() => ContestType, { nullable: true })
    async contestTypeByName(@Arg("name") name: string): Promise<ContestType | null> {
        return await this.pokeAPI.get(name, ContestType.apiType) as ContestType;
    }

    @FieldResolver(() => BerryFlavor)
    async berryFlavor(@Root() contestType: ContestType) {
        return await this.pokeAPI.get(contestType.berryFlavor.url) as BerryFlavor;
    }
}
