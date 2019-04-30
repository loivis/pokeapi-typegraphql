import { ObjectType, Field } from "type-graphql";
import { PalParkArea } from "./PalParkArea";

@ObjectType()
export class PalParkEncounterArea {
    @Field()
    baseScore: number;

    @Field()
    rate: number;

    @Field(() => PalParkArea)
    area: PalParkArea;
}
