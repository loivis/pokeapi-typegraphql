import { ObjectType, ID, Field } from "type-graphql";
import { Description } from "./Description";
import { Name } from "./Name";
import { Move } from "./Move";

@ObjectType()
export class MoveTarget {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field(() => [Description])
    descriptions: Description[];

    @Field(() => [Name])
    names: Name[];

    @Field(() => [Move])
    moves: Move[];

    static apiType: string = "move-target";
    url: string;
}
