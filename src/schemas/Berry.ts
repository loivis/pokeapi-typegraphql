import { ObjectType, ID, Field } from "type-graphql";
import { BerryFirmness } from "./BerryFirmness";
import { BerryFlavorMap } from "./BerryFlavorMap";
import { Item } from "./Item";
import { Type } from "./Type";

@ObjectType()
export class Berry {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field()
    growthTime: number;

    @Field()
    maxHarvest: number;

    @Field()
    naturalGiftPower: number;

    @Field()
    size: number;

    @Field()
    smoothness: number;

    @Field()
    soilDryness: number;

    @Field(() => BerryFirmness)
    firmness: BerryFirmness;

    @Field(() => [BerryFlavorMap])
    flavors: BerryFlavorMap[];

    @Field(() => Item)
    item: Item;

    @Field(() => Type)
    naturalGiftType: Type;

    static apiType: string = "berry";
    url: string;
}
