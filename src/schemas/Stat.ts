import { ObjectType, Field, ID } from "type-graphql";
import { MoveStatAffectSets } from "./MoveStatAffectSets";
import { NatureStatAffectSets } from "./NatureStatAffectSets";
import { Characteristic } from "./Characteristic";
import { MoveDamageClass } from "./MoveDamageClass";
import { Name } from "./Name";

@ObjectType()
export class Stat {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field()
    gameIndex: number;

    @Field()
    isBattleOnly: boolean;

    @Field(() => MoveStatAffectSets)
    affectingMoves: MoveStatAffectSets;

    @Field(() => NatureStatAffectSets)
    affectingNatures: NatureStatAffectSets;

    @Field(() => [Characteristic])
    characteristics: Characteristic[];

    @Field(() => MoveDamageClass, { nullable: true })
    moveDamageClass: MoveDamageClass;

    @Field(() => [Name])
    names: Name[];

    static apiType: string = "stat";
    url: string;
}
