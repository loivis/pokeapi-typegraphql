import { Resolver, Query, FieldResolver, Root, Arg } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { Berry } from "schemas/Berry";
import { BerryFirmness } from "schemas/BerryFirmness";
import { Item } from "schemas/Item";
import { Type } from "schemas/Type";

@Resolver(Berry)
export class BerryResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => Berry, { nullable: true })
    async berryByID(@Arg("id") id: number): Promise<Berry | null> {
        return await this.pokeAPI.get(id, Berry.apiType) as Berry;
    }

    @Query(() => Berry, { nullable: true })
    async berryByName(@Arg("name") name: string): Promise<Berry | null> {
        return await this.pokeAPI.get(name, Berry.apiType) as Berry;
    }

    @FieldResolver(() => BerryFirmness)
    firmness(@Root() berry: Berry) {
        return this.pokeAPI.get(berry.firmness.url);
    }

    @FieldResolver(() => Item)
    item(@Root() berry: Berry) {
        return this.pokeAPI.get(berry.item.url);
    }

    @FieldResolver(() => Type)
    naturalGiftType(@Root() berry: Berry) {
        return this.pokeAPI.get(berry.naturalGiftType.url);
    }
}
