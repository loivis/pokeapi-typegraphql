import { ObjectType, Field } from "type-graphql";
import { Type } from "./Type";
import { VerboseEffect } from "./VerboseEffect";
import { VersionGroup } from "./VersionGroup";

@ObjectType()
export class PastMoveStatValues {
    @Field({ nullable: true })
    accuracy: number;

    @Field({ nullable: true })
    effectChance: number;

    @Field({ nullable: true })
    power: number;

    @Field({ nullable: true })
    pp: number;

    @Field(() => [VerboseEffect])
    effectEntries: VerboseEffect[];

    @Field(() => Type)
    type: Type;

    @Field(() => VersionGroup)
    versionGroup: VersionGroup;
}
