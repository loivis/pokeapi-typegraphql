import { ObjectType, ID, Field } from "type-graphql";
import { Effect } from "./Effect";
import { Item } from "./Item";

@ObjectType()
export class ItemFlingEffect {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field(() => [Effect])
    effectEntries: Effect[];

    @Field(() => [Item])
    items: Item[];
}
