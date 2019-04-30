import { ObjectType, Field } from "type-graphql";
import { Language } from "./Language";

@ObjectType()
export class VerboseEffect {
    @Field()
    effect: string;

    @Field()
    shortEffect: string;

    @Field(() => Language)
    language: Language;
}
