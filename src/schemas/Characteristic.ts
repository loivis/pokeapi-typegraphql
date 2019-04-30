import { ObjectType, ID, Field } from "type-graphql";
import { Description } from "./Description";

@ObjectType()
export class Characteristic {
    @Field(() => ID)
    id: number;

    @Field()
    geneModulo: number;

    @Field(() => [Number])
    possibleValues: number[];

    @Field(() => [Description])
    descriptions: Description[];

    static apiType: string = "characteristic";
    url: string;
}
