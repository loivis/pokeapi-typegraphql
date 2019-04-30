import { ObjectType, ID, Field } from "type-graphql";
import { Description } from "./Description";
import { Name } from "./Name";
import { VersionGroup } from "./VersionGroup";

@ObjectType()
export class MoveLearnMethod {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field(() => [Description])
    descriptions: Description[];

    @Field(() => [Name])
    names: Name[];

    @Field(() => [VersionGroup])
    versionGroups: VersionGroup[];

    static apiType: string = "move-learn-method";
    url: string;
}
