import { Resolver, FieldResolver, Root, Query, Arg } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { Item } from "schemas/Item";
import { ItemAttribute } from "schemas/ItemAttribute";

@Resolver(ItemAttribute)
export class ItemAttributeResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => ItemAttribute, { nullable: true })
    async itemAttributeByID(@Arg("id") id: number): Promise<ItemAttribute | null> {
        return await this.pokeAPI.get(id, ItemAttribute.apiType) as ItemAttribute;
    }

    @Query(() => ItemAttribute, { nullable: true })
    async itemAttributeByName(@Arg("name") name: string): Promise<ItemAttribute | null> {
        return await this.pokeAPI.get(name, ItemAttribute.apiType) as ItemAttribute;
    }

    @FieldResolver(() => [Item])
    items(@Root() itemAttribute: ItemAttribute) {
        const items = itemAttribute.items.map(async (item) => {
            return await this.pokeAPI.get(item.url) as Item;
        })
        return Promise.all(items);
    }
}
