import { ObjectType, Field } from "type-graphql";
import { Nature } from "./Nature";

@ObjectType()
export class NatureStatAffect {
    @Field()
    maxChange: number;

    @Field(() => Nature)
    nature: Nature;
}
