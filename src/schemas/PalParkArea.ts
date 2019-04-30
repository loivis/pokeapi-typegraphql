import { ObjectType, ID, Field } from "type-graphql";
import { Name } from "./Name";
import { PalParkEncounterSpecies } from "./PalParkEncounterSpecies";

@ObjectType()
export class PalParkArea {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field(() => [Name])
    names: Name[];

    @Field(() => [PalParkEncounterSpecies])
    pokemonEncounters: PalParkEncounterSpecies[];

    static apiType: string = "pal-park-area";
    url: string;
}
