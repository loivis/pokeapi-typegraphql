import { ObjectType, ID, Field } from "type-graphql";
import { Description } from "./Description";
import { GrowthRateExperienceLevel } from "./GrowthRateExperienceLevel";
import { PokemonSpecies } from "./PokemonSpecies";

@ObjectType()
export class GrowthRate {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field()
    formula: string;

    @Field(() => [Description])
    descriptions: Description[];

    @Field(() => [GrowthRateExperienceLevel])
    levels: GrowthRateExperienceLevel[];

    @Field(() => [PokemonSpecies])
    pokemonSpecies: PokemonSpecies[];

    static apiType: string = "growth-rate";
    url: string;
}
