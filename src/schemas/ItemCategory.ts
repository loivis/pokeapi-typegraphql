import { ObjectType, ID, Field } from "type-graphql";
import { Item } from "./Item";
import { Name } from "./Name";
import { ItemPocket } from "./ItemPocket";

@ObjectType()
export class ItemCategory {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field(() => [Item])
    items: Item[];

    @Field(() => [Name])
    names: Name[];

    @Field(() => ItemPocket)
    pocket: ItemPocket;

    static apiType: string = "item-category";
    url: string;
}
