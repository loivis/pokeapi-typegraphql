import { ObjectType, Field } from "type-graphql";
import { Effect } from "./Effect";
import { VersionGroup } from "./VersionGroup";

@ObjectType()
export class AbilityEffectChange {
    @Field(() => [Effect])
    effectEntries: Effect[];

    @Field(() => VersionGroup)
    versionGroup: VersionGroup;
}
