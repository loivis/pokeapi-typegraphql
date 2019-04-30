import { ObjectType, ID, Field } from "type-graphql";
import { Name } from "./Name";
import { VersionGroup } from "./VersionGroup";

@ObjectType()
export class Version {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field(() => [Name])
    names: Name[];

    @Field(() => VersionGroup)
    versionGroup: VersionGroup;

    static apiType: string = "version";
    url: string;
}
