import { ObjectType, Field } from "type-graphql";
import { Version } from "./Version";

@ObjectType()
export class VersionGameIndex {
    @Field()
    gameIndex: number;

    @Field(() => Version)
    version: Version;
}
