import { ObjectType, Field, ID } from "type-graphql";
import { EncounterMethodRate } from "./EncounterMethodRate";
import { Location } from "./Location";
import { Name } from "./Name";
import { PokemonEncounter } from "./PokemonEncounter";

@ObjectType()
export class LocationArea {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field()
    gameIndex: boolean;

    @Field(() => [EncounterMethodRate])
    encounterMethodRates: EncounterMethodRate[];

    @Field(() => Location)
    location: Location;

    @Field(() => [Name])
    names: Name[];

    @Field(() => [PokemonEncounter])
    pokemonEncounters: PokemonEncounter[];

    static apiType: string = "location-area";
    url: string;
}
