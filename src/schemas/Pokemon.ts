import { ObjectType, ID, Field } from "type-graphql";

import { LocationAreaEncounter } from "./LocationAreaEncounter";
import { PokemonAbility } from "./PokemonAbility";
import { PokemonForm } from "./PokemonForm";
import { PokemonHeldItem } from "./PokemonHeldItem";
import { PokemonMove } from "./PokemonMove";
import { PokemonSpecies } from "./PokemonSpecies";
import { PokemonStat } from "./PokemonStat";
import { PokemonType } from "./PokemonType";
import { Sprites } from "./Sprites";
import { VersionGameIndex } from "./VersionGameIndex";

@ObjectType()
export class Pokemon {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field()
    baseExperience: number;

    @Field()
    height: number;

    @Field()
    isDefault: boolean;

    @Field()
    order: number;

    @Field()
    weight: number;

    @Field(() => [PokemonAbility])
    abilities: PokemonAbility[];

    @Field(() => [PokemonForm])
    forms: PokemonForm[];

    @Field(() => [VersionGameIndex])
    gameIndices: VersionGameIndex[];

    @Field(() => [PokemonHeldItem])
    heldItems: PokemonHeldItem[];

    @Field(() => [LocationAreaEncounter])
    locationAreaEncounters: LocationAreaEncounter[];

    @Field(() => [PokemonMove])
    moves: PokemonMove[];

    @Field(() => PokemonSpecies)
    species: PokemonSpecies;

    @Field(() => Sprites)
    sprites: Sprites;

    @Field(() => [PokemonStat])
    stats: PokemonStat[];

    @Field(() => [PokemonType])
    types: PokemonType[];

    static apiType: string = "pokemon";
    url: string;
}
