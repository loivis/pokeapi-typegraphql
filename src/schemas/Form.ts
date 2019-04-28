import { ObjectType, ID, Field } from "type-graphql";

@ObjectType()
export class Form {
    @Field(() => ID)
    id: number;

    @Field()
    name: string

    url: string
}
