import { ObjectType, Field } from "type-graphql";
import { EncounterMethod } from "./EncounterMethod";
import { EncounterVersionDetail } from "./EncounterVersionDetail";

@ObjectType()
export class EncounterMethodRate {
    @Field(() => EncounterMethod)
    encounterMethod: EncounterMethod;

    @Field(() => [EncounterVersionDetail])
    versionDetails: EncounterVersionDetail[];
}
