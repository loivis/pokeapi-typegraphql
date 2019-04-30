import { ObjectType, Field } from "type-graphql";
import { Stat } from "./Stat";

@ObjectType()
export class MoveStatChange {
    @Field()
    change: number;

    @Field(() => Stat)
    stat: Stat;
}
