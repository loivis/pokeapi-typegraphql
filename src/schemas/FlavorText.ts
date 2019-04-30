import { ObjectType, Field } from "type-graphql";
import { Language } from "./Language";

@ObjectType()
export class FlavorText {
    @Field()
    flavorText: string;

    @Field(() => Language)
    language: Language;
}
