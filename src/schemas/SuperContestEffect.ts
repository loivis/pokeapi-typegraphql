import { ObjectType, ID, Field } from "type-graphql";
import { FlavorText } from "./FlavorText";
import { Move } from "./Move";

@ObjectType()
export class SuperContestEffect {
    @Field(() => ID)
    id: number;

    @Field()
    appeal: string;

    @Field(() => [FlavorText])
    flavorTextEntries: FlavorText[];

    @Field(() => [Move])
    moves: Move[];

    static apiType: string = "super-contest-effect";
    url: string;
}
