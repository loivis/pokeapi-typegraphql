import { ObjectType, Field } from "type-graphql";
import { EncounterConditionValue } from "./EncounterConditionValue";
import { EncounterMethod } from "./EncounterMethod";

@ObjectType()
export class Encounter {
    @Field()
    chance: number;

    @Field()
    maxLevel: number;

    @Field()
    minLevel: number;

    @Field(() => [EncounterConditionValue])
    conditionValues: EncounterConditionValue[];

    @Field(() => EncounterMethod)
    method: EncounterMethod;
}
