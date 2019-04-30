import { ObjectType, ID, Field } from "type-graphql";
import { AwesomeName } from "./AwesomeName";
import { PokemonSpecies } from "./PokemonSpecies";

@ObjectType()
export class PokemonShape {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field(() => [AwesomeName])
    awesomeNames: AwesomeName[];

    @Field(() => [String])
    names: String[];

    @Field(() => [PokemonSpecies])
    pokemonSpecies: PokemonSpecies[];

    static apiType: string = "pokemon-shape";
    url: string;
}
