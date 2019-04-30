import { ObjectType, Field } from "type-graphql";
import { PokemonSpecies } from "./PokemonSpecies";

@ObjectType()
export class PokemonSpeciesGender {
    @Field()
    rate: number;

    @Field(() => PokemonSpecies)
    pokemonSpecies: PokemonSpecies;
}
