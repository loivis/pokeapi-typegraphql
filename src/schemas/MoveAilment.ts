import { ObjectType, ID, Field } from "type-graphql";
import { Move } from "./Move";
import { Name } from "./Name";

@ObjectType()
export class MoveAilment {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field(() => [Move])
    moves: Move[];

    @Field(() => [Name])
    names: Name[];

    static apiType: string = "move-ailment";
    url: string;
}
