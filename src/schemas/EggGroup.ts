import { ObjectType, ID, Field } from "type-graphql";
import { Name } from "./Name";
import { PokemonSpecies } from "./PokemonSpecies";

@ObjectType()
export class EggGroup {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field(() => [Name])
    names: Name[];

    @Field(() => [PokemonSpecies])
    pokemonSpecies: PokemonSpecies[];

    static apiType: string = "egg-group";
    url: string;
}
