import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class VersionEncounterDetail {
    @Field()
    max_chance: number;
}
