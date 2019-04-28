import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class VersionGameIndex {
    @Field()
    game_index: number;
}
