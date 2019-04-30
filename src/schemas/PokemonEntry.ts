import { ObjectType, Field } from "type-graphql";
import { PokemonSpecies } from "./PokemonSpecies";

@ObjectType()
export class PokemonEntry {
    @Field()
    entryNumber: number;

    @Field(() => PokemonSpecies)
    pokemonSpecies: PokemonSpecies;
}
