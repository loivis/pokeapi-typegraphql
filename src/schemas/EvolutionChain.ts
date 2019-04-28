import { ObjectType, ID, Field } from "type-graphql";
import { ChainLink } from "./ChainLink";

@ObjectType()
export class EvolutionChain {
    @Field(() => ID)
    id: number;

    @Field()
    chain: ChainLink;

    url: string
}
