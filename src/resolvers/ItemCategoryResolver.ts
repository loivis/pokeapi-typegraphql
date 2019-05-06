import { Resolver, FieldResolver, Root, Query, Arg } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { Item } from "schemas/Item";
import { ItemCategory } from "schemas/ItemCategory";
import { ItemPocket } from "schemas/ItemPocket";

@Resolver(ItemCategory)
export class ItemCategoryResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => ItemCategory, { nullable: true })
    async itemCategoryByID(@Arg("id") id: number): Promise<ItemCategory | null> {
        return await this.pokeAPI.get(id, ItemCategory.apiType) as ItemCategory;
    }

    @Query(() => ItemCategory, { nullable: true })
    async itemCategoryByName(@Arg("name") name: string): Promise<ItemCategory | null> {
        return await this.pokeAPI.get(name, ItemCategory.apiType) as ItemCategory;
    }

    @FieldResolver(() => [Item])
    items(@Root() itemCategory: ItemCategory) {
        const items = itemCategory.items.map(async (item) => {
            return await this.pokeAPI.get(item.url) as Item;
        })
        return Promise.all(items);
    }

    @FieldResolver(() => ItemPocket)
    async pocket(@Root() itemCategory: ItemCategory) {
        return await this.pokeAPI.get(itemCategory.pocket.url) as ItemPocket;
    }
}
