import { ObjectType, ID, Field } from "type-graphql";
import { FlavorBerryMap } from "./FlavorBerryMap";
import { Name } from "./Name";
import { ContestType } from "./ContestType";

@ObjectType()
export class BerryFlavor {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field(() => [FlavorBerryMap])
    berries: FlavorBerryMap[];

    @Field(() => ContestType)
    contestType: ContestType;

    @Field(() => [Name])
    names: Name[];

    static apiType: string = "berry-flavor";
    url: string;
}
