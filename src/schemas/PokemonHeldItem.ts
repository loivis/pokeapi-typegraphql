import { ObjectType, Field } from "type-graphql";
import { Item } from "./Item";
import { HeldItemVersionDetails } from "./HeldItemVersionDetails";

@ObjectType()
export class PokemonHeldItem {
    @Field(() => Item)
    item: Item;

    @Field(() => [HeldItemVersionDetails])
    versionDetails: HeldItemVersionDetails[];
}
