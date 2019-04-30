import { ObjectType, Field } from "type-graphql";
import { Berry } from "./Berry";

@ObjectType()
export class FlavorBerryMap {
    @Field()
    potency: number;

    @Field()
    berry: Berry;
}
