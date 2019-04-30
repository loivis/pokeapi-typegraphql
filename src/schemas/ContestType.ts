import { ObjectType, ID, Field } from "type-graphql";
import { Name } from "./Name";
import { BerryFlavor } from "./BerryFlavor";

@ObjectType()
export class ContestType {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field(() => BerryFlavor)
    berryFlavor: BerryFlavor;

    @Field(() => [Name])
    names: Name[];

    static apiType: string = "contest-type";
    url: string;
}
