import { ObjectType, Field } from "type-graphql";
import { Version } from "./Version";

@ObjectType()
export class EncounterVersionDetail {
    @Field()
    rate: number;

    @Field(() => Version)
    version: Version;
}
