import { ObjectType, Field } from "type-graphql";
import { PokeathlonStat } from "./PokeathlonStat";

@ObjectType()
export class NatureStatChange {
    @Field()
    maxChange: number;

    @Field(() => PokeathlonStat)
    pokeathlonStat: PokeathlonStat;
}
