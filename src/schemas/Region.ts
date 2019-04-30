import { ObjectType, ID, Field } from "type-graphql";
import { Location } from "./Location";
import { Generation } from "./Generation";
import { Name } from "./Name";
import { Pokedex } from "./Pokedex";
import { VersionGroup } from "./VersionGroup";

@ObjectType()
export class Region {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field(() => [Location])
    locations: Location[];

    @Field(() => Generation)
    mainGeneration: Generation;

    @Field(() => [Name])
    names: Name[];

    @Field(() => [Pokedex])
    pokedexes: Pokedex[];

    @Field(() => [VersionGroup])
    versionGroups: VersionGroup[];

    static apiType: string = "region";
    url: string;
}
