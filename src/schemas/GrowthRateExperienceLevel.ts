import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class GrowthRateExperienceLevel {
    @Field()
    level: number;

    @Field()
    experience: number;
}
