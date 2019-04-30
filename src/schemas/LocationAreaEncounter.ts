import { ObjectType, Field } from "type-graphql";
import { VersionEncounterDetail } from "./VersionEncounterDetail";
import { LocationArea } from "./LocationArea";

@ObjectType()
export class LocationAreaEncounter {
    @Field()
    locationArea: LocationArea;


    @Field(() => [VersionEncounterDetail])
    versionDetails: VersionEncounterDetail[];
}
