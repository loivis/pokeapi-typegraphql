import { Resolver, FieldResolver, Root, ResolverInterface } from "type-graphql";
import { ItemCategory } from "schemas/ItemCategory";
import { Item } from "schemas/Item";
import { PokeAPI } from "services/PokeAPI";
import { ItemAttribute } from "schemas/ItemAttribute";
import { EvolutionChain } from "schemas/EvolutionChain";

@Resolver(Item)
export class ItemResolver implements ResolverInterface<Item> {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @FieldResolver(() => [ItemAttribute])
    itemAttributes(@Root() item: Item) {
        const as = item.attributes.map(async (attribute) => {
            return await this.pokeAPI.get(attribute.url) as ItemAttribute;
        })
        return Promise.all(as);
    }

    @FieldResolver(() => EvolutionChain)
    async babyTriggerFor(@Root() item: Item) {
        return await this.pokeAPI.get(item.babyTriggerFor.url) as EvolutionChain;
    }

    @FieldResolver(() => ItemCategory)
    async category(@Root() item: Item) {
        return await this.pokeAPI.get(item.category.url) as ItemCategory;
    }
}
