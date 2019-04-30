import { ObjectType, ID, Field } from "type-graphql";
import { Item } from "./Item";
import { Move } from "./Move";
import { VersionGroup } from "./VersionGroup";

@ObjectType()
export class Machine {
    @Field(() => ID)
    id: number;

    @Field(() => Item)
    item: Item;

    @Field(() => Move)
    move: Move;

    @Field(() => VersionGroup)
    versionGroup: VersionGroup;

    static apiType: string = "machine";
    url: string;
}
