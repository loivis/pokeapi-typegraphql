import { ObjectType, Field } from "type-graphql";
import { Language } from "./Language";

@ObjectType()
export class Effect {
    @Field()
    effect: string

    @Field(() => Language)
    language: Language;
}
