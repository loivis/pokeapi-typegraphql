import { ObjectType, Field } from "type-graphql";
import { Move } from "./Move";

@ObjectType()
export class ContestComboDetail {
    @Field(() => [Move], { nullable: true })
    useAfter: Move[];

    @Field(() => [Move], { nullable: true })
    useBefore: Move[];
}
