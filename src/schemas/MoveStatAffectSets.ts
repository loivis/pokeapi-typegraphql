import { ObjectType, Field } from "type-graphql";
import { MoveStatAffect } from "./MoveStatAffect";

@ObjectType()
export class MoveStatAffectSets {
    @Field(() => [MoveStatAffect])
    increase: MoveStatAffect[];

    @Field(() => [MoveStatAffect])
    decrease: MoveStatAffect[];
}
