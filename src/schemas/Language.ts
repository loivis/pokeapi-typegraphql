import { ObjectType, ID, Field } from "type-graphql";
import { Name } from "./Name";

@ObjectType()
export class Language {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field()
    iso639: string;

    @Field()
    iso3166: string;

    @Field()
    official: boolean;

    @Field(() => [Name])
    names: Name[];

    static apiType: string = "language";
    url: string;
}
