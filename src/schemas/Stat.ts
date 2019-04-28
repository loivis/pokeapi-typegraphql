import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class Stat {
    @Field()
    effort: number;

    @Field()
    base_stat: string
}
