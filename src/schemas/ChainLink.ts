import { ObjectType, Field } from "type-graphql";
import { Species } from "./Species";

@ObjectType()
export class ChainLink {
    @Field()
    isBaby: boolean;

    @Field(() => [ChainLink])
    evolvesTo: ChainLink[];

    @Field(() => Species)
    species: Species
}
