import { ObjectType, ID, Field } from "type-graphql";
import { Ability } from "./Ability";
import { Region } from "./Region";
import { Name } from "./Name";
import { Move } from "./Move";
import { PokemonSpecies } from "./PokemonSpecies";
import { Type } from "./Type";
import { VersionGroup } from "./VersionGroup";

@ObjectType()
export class Generation {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field(() => [Ability])
    abilities: Ability[];

    @Field(() => Region)
    mainRegion: Region;

    @Field(() => [Move])
    moves: Move[];

    @Field(() => [Name])
    names: Name[];

    @Field(() => [PokemonSpecies])
    pokemonSpecies: PokemonSpecies[];

    @Field(() => [Type])
    types: Type[];

    @Field(() => [VersionGroup])
    versionGroups: VersionGroup[];

    static apiType: string = "generation";
    url: string;
}
