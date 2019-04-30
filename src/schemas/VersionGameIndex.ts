import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class VersionGameIndex {
    @Field()
    gameIndex: number;
}
