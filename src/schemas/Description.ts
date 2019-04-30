import { ObjectType, Field } from "type-graphql";
import { Language } from "./Language";

@ObjectType()
export class Description {
    @Field()
    description: string;

    @Field(() => Language)
    language: Language;
}
