import { ObjectType, ID, Field } from "type-graphql";
import { Name } from "./Name";
import { EncounterConditionValue } from "./EncounterConditionValue";

@ObjectType()
export class EncounterCondition {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field(() => [Name])
    names: Name[];

    @Field(() => [EncounterConditionValue])
    values: EncounterConditionValue[];

    static apiType: string = "encounter-condition";
    url: string;
}
