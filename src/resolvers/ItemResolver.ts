import { Resolver, FieldResolver, Root, Query, Arg } from "type-graphql";
import { ItemCategory } from "schemas/ItemCategory";
import { Item } from "schemas/Item";
import { PokeAPI } from "services/PokeAPI";
import { ItemAttribute } from "schemas/ItemAttribute";
import { EvolutionChain } from "schemas/EvolutionChain";

@Resolver(Item)
export class ItemResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => Item, { nullable: true })
    async itemByID(@Arg("id") id: number): Promise<Item | null> {
        return await this.pokeAPI.get(id, Item.apiType) as Item;
    }

    @Query(() => Item, { nullable: true })
    async itemByName(@Arg("name") name: string): Promise<Item | null> {
        return await this.pokeAPI.get(name, Item.apiType) as Item;
    }

    @FieldResolver(() => [ItemAttribute])
    attributes(@Root() item: Item) {
        const as = item.attributes.map(async (attribute) => {
            return await this.pokeAPI.get(attribute.url) as ItemAttribute;
        })
        return Promise.all(as);
    }

    @FieldResolver(() => EvolutionChain)
    async babyTriggerFor(@Root() item: Item) {
        if (item.babyTriggerFor == null) {
            return null;
        }
        return await this.pokeAPI.get(item.babyTriggerFor.url) as EvolutionChain;
    }

    @FieldResolver(() => ItemCategory)
    async category(@Root() item: Item) {
        return await this.pokeAPI.get(item.category.url) as ItemCategory;
    }
}
