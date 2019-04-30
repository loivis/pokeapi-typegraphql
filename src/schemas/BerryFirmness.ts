import { ObjectType, ID, Field } from "type-graphql";
import { Berry } from "./Berry";
import { Name } from "./Name";

@ObjectType()
export class BerryFirmness {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field(() => [Berry])
    berries: Berry[];

    @Field(() => [Name])
    names: Name[];

    static apiType: string = "berry-firmness";
    url: string;
}
