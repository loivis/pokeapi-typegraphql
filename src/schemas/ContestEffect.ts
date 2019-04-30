import { ObjectType, ID, Field } from "type-graphql";
import { Effect } from "./Effect";
import { FlavorText } from "./FlavorText";

@ObjectType()
export class ContestEffect {
    @Field(() => ID)
    id: number;

    @Field()
    appeal: string;

    @Field()
    jam: number;

    @Field(() => [Effect])
    effectEntries: Effect[];

    @Field(() => [FlavorText])
    flavorTextEntries: FlavorText[];

    static apiType: string = "contest-effect";
    url: string;
}
