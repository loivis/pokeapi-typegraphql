import { Resolver, Query, Arg, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { ItemCategory } from "schemas/ItemCategory";
import { ItemPocket } from "schemas/ItemPocket";

@Resolver(ItemPocket)
export class ItemPocketResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => ItemPocket, { nullable: true })
    async itemPocketByID(@Arg("id") id: number): Promise<ItemPocket | null> {
        return await this.pokeAPI.get(id, ItemPocket.apiType) as ItemPocket;
    }

    @Query(() => ItemPocket, { nullable: true })
    async itemPocketByName(@Arg("name") name: string): Promise<ItemPocket | null> {
        return await this.pokeAPI.get(name, ItemPocket.apiType) as ItemPocket;
    }

    @FieldResolver(() => [ItemCategory])
    categories(@Root() itemPocket: ItemPocket) {
        const ics = itemPocket.categories.map(async (ic) => {
            return await this.pokeAPI.get(ic.url) as ItemCategory;
        })
        return Promise.all(ics);
    }
}
