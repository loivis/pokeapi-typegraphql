import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class LocationArea {
    @Field()
    name: string
}
