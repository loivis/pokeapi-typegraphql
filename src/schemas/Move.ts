import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class Move {
    @Field(() => ID)
    fieldName: number;

}
