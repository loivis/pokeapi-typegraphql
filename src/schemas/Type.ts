import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class Type {
    @Field()
    slot: number;

    @Field()
    name: string
}
