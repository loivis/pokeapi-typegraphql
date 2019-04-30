import { ObjectType, ID, Field } from "type-graphql";
import { ChainLink } from "./ChainLink";
import { Item } from "./Item";

@ObjectType()
export class EvolutionChain {
    @Field(() => ID)
    id: number;

    @Field(() => Item, { nullable: true })
    babyTriggerItem: Item;

    @Field(() => ChainLink)
    chain: ChainLink;

    static apiType: string = "evolution-chain";
    url: string;
}
