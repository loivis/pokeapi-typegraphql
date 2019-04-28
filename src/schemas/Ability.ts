import { ObjectType, ID, Field } from "type-graphql";
import { Generation } from "./Generation";
import { NamedAPIResource } from "types/NamedAPIResource";

@ObjectType()
export class Ability {
    @Field(() => ID)
    id: number;

    @Field()
    name: string

    @Field()
    is_hidden: boolean;

    @Field(() => ID)
    slot: number;

    url: string

    @Field()
    is_main_series: boolean;

    @Field(() => Generation)
    generation: Generation;

    ability: NamedAPIResource;
}
