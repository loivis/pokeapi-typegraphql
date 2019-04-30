import { ObjectType, ID, Field } from "type-graphql";
import { Description } from "./Description";
import { Move } from "./Move";
import { Name } from "./Name";

@ObjectType()
export class MoveDamageClass {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field(() => [Description])
    descriptions: Description[];

    @Field(() => [Move])
    moves: Move[];

    @Field(() => [Name])
    names: Name[];

    static apiType: string = "move-damage-class";
    url: string;
}
