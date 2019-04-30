import { ObjectType, Field } from "type-graphql";
import { Pokemon } from "./Pokemon";

@ObjectType()
export class TypePokemon {
    @Field()
    slot: number;

    @Field(() => Pokemon)
    pokemon: Pokemon;
}
