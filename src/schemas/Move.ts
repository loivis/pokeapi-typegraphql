import { ObjectType, Field, ID } from "type-graphql";
import { ContestComboSets } from "./ContestComboSets";
import { ContestType } from "./ContestType";
import { ContestEffect } from "./ContestEffect";
import { MoveDamageClass } from "./MoveDamageClass";
import { Generation } from "./Generation";
import { VerboseEffect } from "./VerboseEffect";
import { AbilityEffectChange } from "./AbilityEffectChange";
import { MoveMetaData } from "./MoveMetaData";
import { Name } from "./Name";
import { PastMoveStatValues } from "./PastMoveStatValues";
import { MoveStatChange } from "./MoveStatChange";
import { SuperContestEffect } from "./SuperContestEffect";
import { MoveTarget } from "./MoveTarget";
import { Type } from "./Type";
import { MachineVersionDetail } from "./MachineVersionDetail";

@ObjectType()
export class Move {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field()
    accuracy: number;

    @Field({ nullable: true })
    effectChance: number;

    @Field()
    pp: number;

    @Field()
    priority: number;

    @Field()
    power: number;

    @Field(() => ContestComboSets)
    contestCombos: ContestComboSets;

    @Field(() => ContestEffect)
    contestEffect: ContestEffect;

    @Field(() => ContestType)
    contestType: ContestType;

    @Field(() => MoveDamageClass)
    damageClass: MoveDamageClass;

    @Field(() => [AbilityEffectChange])
    effectChanges: AbilityEffectChange[];

    @Field(() => [VerboseEffect])
    effectEntries: VerboseEffect[];

    @Field(() => Generation)
    generation: Generation;

    @Field(() => [MachineVersionDetail])
    machines: MachineVersionDetail[];

    @Field(() => MoveMetaData)
    meta: MoveMetaData;

    @Field(() => [Name])
    names: Name[];

    @Field(() => [PastMoveStatValues])
    pastValues: PastMoveStatValues[];

    @Field(() => [MoveStatChange])
    statChanges: MoveStatChange[];

    @Field(() => SuperContestEffect)
    superContestEffect: SuperContestEffect;

    @Field(() => MoveTarget)
    target: MoveTarget;

    @Field(() => Type)
    type: Type;

    static apiType: string = "move";
    url: string;
}
