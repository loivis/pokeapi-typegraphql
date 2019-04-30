import { ObjectType, Field } from "type-graphql";
import { PokemonSpecies } from "./PokemonSpecies";

@ObjectType()
export class PalParkEncounterSpecies {
    @Field()
    baseScore: number;

    @Field()
    rate: number;

    @Field(() => PokemonSpecies)
    pokemonSpecies: PokemonSpecies;
}
