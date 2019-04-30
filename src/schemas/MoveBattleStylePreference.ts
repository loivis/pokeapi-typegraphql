import { ObjectType, Field } from "type-graphql";
import { MoveBattleStyle } from "./MoveBattleStyle";

@ObjectType()
export class MoveBattleStylePreference {
    @Field()
    lowHpPreference: number;

    @Field()
    highHpPreference: number;

    @Field(() => MoveBattleStyle)
    moveBattleStyle: MoveBattleStyle;
}
