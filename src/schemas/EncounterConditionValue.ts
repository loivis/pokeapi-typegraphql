import { ObjectType, ID, Field } from "type-graphql";
import { Name } from "./Name";

@ObjectType()
export class EncounterConditionValue {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field(() => [Name])
    names: Name[];

    static apiType: string = "encounter-condition-value";
    url: string;
}
