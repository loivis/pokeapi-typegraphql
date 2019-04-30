import { ObjectType, Field } from "type-graphql";
import { Pokemon } from "./Pokemon";

@ObjectType()
export class PokemonSpeciesVariety {
    @Field()
    isDefault: boolean;

    @Field(() => Pokemon)
    pokemon: Pokemon;
}
