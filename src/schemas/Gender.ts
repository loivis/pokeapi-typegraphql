import { ObjectType, ID, Field } from "type-graphql";
import { PokemonSpeciesGender } from "./PokemonSpeciesGender";
import { PokemonSpecies } from "./PokemonSpecies";

@ObjectType()
export class Gender {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field(() => [PokemonSpeciesGender])
    pokemonSpeciesDetails: PokemonSpeciesGender[];

    @Field(() => [PokemonSpecies])
    requiredForEvolution: PokemonSpecies[];

    static apiType: string = "gender";
    url: string;
}
