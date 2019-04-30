import { ObjectType, Field } from "type-graphql";
import { Pokemon } from "./Pokemon";
import { VersionEncounterDetail } from "./VersionEncounterDetail";

@ObjectType()
export class PokemonEncounter {
    @Field(() => Pokemon)
    pokemon: Pokemon;

    @Field(() => [VersionEncounterDetail])
    versionDetails: VersionEncounterDetail[];
}
