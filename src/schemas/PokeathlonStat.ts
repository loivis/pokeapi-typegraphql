import { ObjectType, ID, Field } from "type-graphql";
import { Name } from "./Name";
import { NaturePokeathlonStatAffectSets } from "./NaturePokeathlonStatAffectSets";

@ObjectType()
export class PokeathlonStat {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field(() => [Name])
    names: Name[];

    @Field(() => NaturePokeathlonStatAffectSets)
    affectingNatures: NaturePokeathlonStatAffectSets;

    static apiType: string = "pokeathlon-stat";
    url: string;
}
