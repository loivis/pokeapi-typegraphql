import { ObjectType, ID, Field } from "type-graphql";
import { EvolutionChain } from "./EvolutionChain";

@ObjectType()
export class Species {
    @Field(() => ID)
    id: number;

    @Field()
    name: string

    @Field()
    is_baby: boolean;

    @Field()
    has_gender_differences: boolean;

    @Field()
    forms_switchable: boolean;

    @Field()
    evolution_chain: EvolutionChain;

    url: string
}
