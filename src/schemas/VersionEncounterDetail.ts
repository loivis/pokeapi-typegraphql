import { ObjectType, Field } from "type-graphql";
import { Version } from "./Version";
import { Encounter } from "./Encounter";

@ObjectType()
export class VersionEncounterDetail {
    @Field()
    maxChance: number;

    @Field(() => Version)
    version: Version;

    @Field(() => [Encounter])
    encounterDetails: Encounter[];
}
