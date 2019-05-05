import { Resolver, Query, FieldResolver, Root, Arg } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { Berry } from "schemas/Berry";
import { BerryFirmness } from "schemas/BerryFirmness";

@Resolver(BerryFirmness)
export class BerryFirmnessResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => BerryFirmness, { nullable: true })
    async berryFirmnessByID(@Arg("id") id: number): Promise<BerryFirmness | null> {
        return await this.pokeAPI.get(id, BerryFirmness.apiType) as BerryFirmness;
    }

    @Query(() => BerryFirmness, { nullable: true })
    async berryFirmnessByName(@Arg("name") name: string): Promise<BerryFirmness | null> {
        return await this.pokeAPI.get(name, BerryFirmness.apiType) as BerryFirmness;
    }

    @FieldResolver(() => [Berry])
    berries(@Root() berryFirmness: BerryFirmness) {
        const bs = berryFirmness.berries.map(async (b) => {
            return await this.pokeAPI.get(b.url) as Berry;
        })

        return Promise.all(bs);
    }
}
