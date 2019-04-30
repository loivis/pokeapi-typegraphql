import { ObjectType, Field } from "type-graphql";
import { Pokedex } from "./Pokedex";

@ObjectType()
export class PokemonSpeciesDexEntry {
    @Field()
    entryNumber: number;

    @Field(() => Pokedex)
    pokedex: Pokedex;
}
