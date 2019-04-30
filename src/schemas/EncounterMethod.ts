import { ObjectType, ID, Field } from "type-graphql";
import { Name } from "./Name";

@ObjectType()
export class EncounterMethod {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field()
    order: string;

    @Field(() => [Name])
    names: Name[];

    static apiType: string = "encounter-method";
    url: string;
}
