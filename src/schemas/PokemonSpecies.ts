import { ObjectType, ID, Field } from "type-graphql";

import { Description } from "./Description";
import { EggGroup } from "./EggGroup";
import { EvolutionChain } from "./EvolutionChain";
import { Generation } from "./Generation";
import { Genus } from "./Genus";
import { GrowthRate } from "./GrowthRate";
import { Name } from "./Name";
import { PalParkEncounterArea } from "./PalParkEncounterArea";
import { PokemonColor } from "./PokemonColor";
import { PokemonHabitat } from "./PokemonHabitat";
import { PokemonShape } from "./PokemonShape";
import { PokemonSpeciesDexEntry } from "./PokemonSpeciesDexEntry";
import { PokemonSpeciesVariety } from "./PokemonSpeciesVariety";

@ObjectType()
export class PokemonSpecies {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field()
    baseHappiness: number;

    @Field()
    captureRate: number;

    @Field()
    formsSwitchable: boolean;

    @Field()
    genderRate: number;

    @Field()
    hasGenderDifferences: boolean;

    @Field()
    hatchCounter: number;

    @Field()
    isBaby: boolean;

    @Field()
    order: number;

    @Field(() => PokemonColor)
    color: PokemonColor;

    @Field(() => [Description])
    formDescriptions: Description[];

    @Field(() => [EggGroup])
    eggGroups: EggGroup[];

    @Field(() => EvolutionChain)
    evolutionChain: EvolutionChain;

    @Field(() => PokemonSpecies, { nullable: true })
    evolvesFromSpecies: PokemonSpecies;

    @Field(() => [Genus])
    genera: Genus[];

    @Field(() => Generation)
    generation: Generation;

    @Field(() => GrowthRate)
    growthRate: GrowthRate;

    @Field(() => PokemonHabitat)
    habitat: PokemonHabitat;

    @Field(() => [Name])
    names: Name[];

    @Field(() => [PalParkEncounterArea])
    palParkEncounters: PalParkEncounterArea[];

    @Field(() => [PokemonSpeciesDexEntry])
    pokedexNumbers: PokemonSpeciesDexEntry[];

    @Field(() => PokemonShape)
    shape: PokemonShape;

    @Field(() => [PokemonSpeciesVariety])
    varieties: PokemonSpeciesVariety[];

    url: string;
}
