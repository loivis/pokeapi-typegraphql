import { ObjectType, Field } from "type-graphql";
import { MoveLearnMethod } from "./MoveLearnMethod";
import { VersionGroup } from "./VersionGroup";

@ObjectType()
export class VersionGroupDetail {
    @Field()
    levelLearnedAt: number;

    @Field(() => MoveLearnMethod)
    moveLearnMethod: MoveLearnMethod;

    @Field(() => VersionGroup)
    versionGroup: VersionGroup;
}
