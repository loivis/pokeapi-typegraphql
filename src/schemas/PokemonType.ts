import { ObjectType, Field } from "type-graphql";
import { Type } from "./Type";

@ObjectType()
export class PokemonType {
    @Field()
    slot: number;

    @Field(() => Type)
    type: Type;
}
