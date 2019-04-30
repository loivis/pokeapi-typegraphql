import { ObjectType, Field } from "type-graphql";
import { PokemonSpecies } from "./PokemonSpecies";
import { EvolutionDetail } from "./EvolutionDetail";

@ObjectType()
export class ChainLink {
    @Field()
    isBaby: boolean;

    @Field(() => [EvolutionDetail])
    evolutionDetails: EvolutionDetail[];

    @Field(() => [ChainLink])
    evolvesTo: ChainLink[];

    @Field(() => PokemonSpecies)
    species: PokemonSpecies;
}
