import { ObjectType, ID, Field } from "type-graphql";
import { EvolutionChain } from "./EvolutionChain";

@ObjectType()
export class Species {
    @Field(() => ID)
    id: number;

    @Field()
    name: string

    @Field()
    isBaby: boolean;

    @Field()
    hasGenderDifferences: boolean;

    @Field()
    formsSwitchable: boolean;

    @Field()
    evolution_chain: EvolutionChain;

    url: string
}
