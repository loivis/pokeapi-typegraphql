import { ObjectType, ID, Field } from "type-graphql";
import { Description } from "./Description";
import { Name } from "./Name";
import { PokemonEntry } from "./PokemonEntry";
import { Region } from "./Region";
import { VersionGroup } from "./VersionGroup";

@ObjectType()
export class Pokedex {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field()
    isMainSeries: boolean;

    @Field(() => [Description])
    descriptions: Description[];

    @Field(() => [Name])
    names: Name[];

    @Field(() => [PokemonEntry])
    pokemonEntries: PokemonEntry[];

    @Field(() => Region, { nullable: true })
    region: Region;

    @Field(() => [VersionGroup])
    versionGroups: VersionGroup[];

    static apiType: string = "pokedex";
    url: string;
}
