import { ObjectType, Field } from "type-graphql";
import { Move } from "./Move";

@ObjectType()
export class MoveStatAffect {
    @Field()
    change: number;

    @Field(() => Move)
    move: Move;
}
