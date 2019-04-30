import { ObjectType, ID, Field } from "type-graphql";
import { Generation } from "./Generation";
import { MoveLearnMethod } from "./MoveLearnMethod";
import { Pokedex } from "./Pokedex";
import { Region } from "./Region";
import { Version } from "./Version";

@ObjectType()
export class VersionGroup {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field()
    order: number;

    @Field(() => Generation)
    generation: Generation;

    @Field(() => [MoveLearnMethod])
    moveLearnMethods: MoveLearnMethod[];

    @Field(() => [Pokedex])
    pokedexes: Pokedex[];

    @Field(() => [Region])
    regions: Region[];

    @Field(() => [Version])
    versions: Version[];

    static apiType: string = "version-group";
    url: string;
}
