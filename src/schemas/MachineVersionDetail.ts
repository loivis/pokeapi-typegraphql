import { ObjectType, Field } from "type-graphql";
import { VersionGroup } from "./VersionGroup";
import { Machine } from "./Machine";

@ObjectType()
export class MachineVersionDetail {
    @Field(() => Machine)
    machine: Machine;

    @Field(() => VersionGroup)
    versionGroup: VersionGroup;
}
