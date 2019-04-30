import { ObjectType, ID, Field } from "type-graphql";
import { Item } from "./Item";
import { Description } from "./Description";
import { Name } from "./Name";

@ObjectType()
export class ItemAttribute {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field(() => [Description])
    descriptions: Description[];

    @Field(() => [Item])
    items: Item[];

    @Field(() => [Name])
    names: Name[];

    static apiType: string = "item-attribute";
    url: string;
}
