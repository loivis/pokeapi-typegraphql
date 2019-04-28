import { ObjectType, Field } from "type-graphql";
import { VersionEncounterDetail } from "./VersionEncounterDetail";
import { LocationArea } from "./LocationArea";

@ObjectType()
export class LocationAreaEncounter {
    @Field()
    location_area: LocationArea;


    @Field(() => [VersionEncounterDetail])
    version_details: VersionEncounterDetail[];
}
