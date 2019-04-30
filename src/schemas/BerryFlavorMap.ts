import { ObjectType, Field } from "type-graphql";
import { BerryFlavor } from "./BerryFlavor";

@ObjectType()
export class BerryFlavorMap {
    @Field()
    potency: number;

    @Field(() => BerryFlavor)
    flavor: BerryFlavor;
}
