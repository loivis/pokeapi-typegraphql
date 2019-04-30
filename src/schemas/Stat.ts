import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class Stat {
    @Field()
    effort: number;

    @Field()
    baseStat: string
}
