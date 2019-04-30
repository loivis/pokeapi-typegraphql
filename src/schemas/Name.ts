import { ObjectType, Field } from "type-graphql";
import { Language } from "./Language";

@ObjectType()
export class Name {
    @Field()
    name: string;

    @Field(() => Language)
    language: Language;
}
