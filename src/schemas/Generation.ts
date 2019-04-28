import { ObjectType, ID, Field } from "type-graphql";

@ObjectType()
export class Generation {
    @Field(() => ID)
    id: number;

    @Field()
    name: string

    url: string
}
