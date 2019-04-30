import { ObjectType, Field } from "type-graphql";
import { Language } from "./Language";

@ObjectType()
export class AwesomeName {
    @Field()
    awesomeName: string;

    @Field(() => Language)
    language: Language;
}
