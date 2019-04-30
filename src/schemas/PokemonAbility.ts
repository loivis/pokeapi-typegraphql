import { ObjectType, Field } from "type-graphql";
import { Ability } from "./Ability";

@ObjectType()
export class PokemonAbility {
    @Field()
    isHidden: boolean;

    @Field()
    slot: number;

    @Field(() => Ability)
    ability: Ability;
}
