import { ObjectType, Field } from "type-graphql";
import { Pokemon } from "./Pokemon";

@ObjectType()
export class AbilityPokemon {
    @Field()
    isHidden: boolean;

    @Field()
    slot: number;

    @Field(() => Pokemon)
    pokemon: Pokemon;
}
