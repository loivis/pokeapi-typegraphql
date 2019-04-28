import { ObjectType, ID, Field } from "type-graphql";

@ObjectType()
export class HeldItem {
    @Field(() => ID)
    id: number;

    @Field()
    name: string
}
