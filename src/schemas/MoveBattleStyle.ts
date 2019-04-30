import { ObjectType, ID, Field } from "type-graphql";
import { Name } from "./Name";

@ObjectType()
export class MoveBattleStyle {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field(() => [Name])
    names: Name[];

    static apiType: string = "move-battle-style";
    url: string;
}
