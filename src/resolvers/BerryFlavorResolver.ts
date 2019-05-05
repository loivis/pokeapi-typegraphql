import { Resolver, Query, FieldResolver, Root, Arg } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { Berry } from "schemas/Berry";
import { BerryFlavor } from "schemas/BerryFlavor";

@Resolver(BerryFlavor)
export class BerryFlavorResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => BerryFlavor, { nullable: true })
    async berryFlavorByID(@Arg("id") id: number): Promise<BerryFlavor | null> {
        return await this.pokeAPI.get(id, BerryFlavor.apiType) as BerryFlavor;
    }

    @Query(() => BerryFlavor, { nullable: true })
    async berryFlavorByName(@Arg("name") name: string): Promise<BerryFlavor | null> {
        return await this.pokeAPI.get(name, BerryFlavor.apiType) as BerryFlavor;
    }

    @FieldResolver(() => [Berry])
    contestType(@Root() berryFlavor: BerryFlavor) {
        return this.pokeAPI.get(berryFlavor.contestType.url);
    }
}
