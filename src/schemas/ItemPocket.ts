import { ObjectType, ID, Field } from "type-graphql";
import { ItemCategory } from "./ItemCategory";
import { Name } from "./Name";

@ObjectType()
export class ItemPocket {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field(() => [ItemCategory])
    categories: ItemCategory[];

    @Field(() => [Name])
    names: Name[];

    static apiType: string = "item-pocket";
    url: string;
}
