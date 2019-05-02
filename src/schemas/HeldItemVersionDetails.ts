import { ObjectType, Field } from "type-graphql";
import { Version } from "./Version";

@ObjectType()
export class HeldItemVersionDetails {
    @Field()
    rarity: number;

    @Field(() => Version)
    version: Version;
}
