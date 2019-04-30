import { ObjectType, ID, Field } from "type-graphql";
import { Region } from "./Region";
import { Name } from "./Name";
import { GenerationGameIndex } from "./GenerationGameIndex";
import { LocationArea } from "./LocationArea";

@ObjectType()
export class Location {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field(() => [LocationArea])
    areas: LocationArea[];

    @Field(() => [GenerationGameIndex])
    gameIndices: GenerationGameIndex[];

    @Field(() => [Name])
    names: Name[];

    @Field(() => Region)
    region: Region;

    static apiType: string = "location";
    url: string;
}
