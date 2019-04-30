import { ObjectType, ID, Field } from "type-graphql";
import { Description } from "./Description";
import { Move } from "./Move";

@ObjectType()
export class MoveCategory {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field(() => [Description])
    descriptions: Description[];

    @Field(() => [Move])
    moves: Move[];

    static apiType: string = "move-category";
    url: string;
}
