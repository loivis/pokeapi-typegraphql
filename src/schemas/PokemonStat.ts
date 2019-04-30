import { ObjectType, Field } from "type-graphql";
import { Stat } from "./Stat";

@ObjectType()
export class PokemonStat {
    @Field()
    effort: number;

    @Field()
    baseStat: string

    @Field(() => Stat)
    stat: Stat;
}
