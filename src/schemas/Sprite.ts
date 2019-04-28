import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class Sprite {
    @Field()
    front_default: string

    @Field()
    front_shiny: string

    @Field()
    front_female: string

    @Field()
    front_shiny_female: string

    @Field()
    back_default: string

    @Field()
    back_shiny: string

    @Field()
    back_female: string

    @Field()
    back_shiny_female: string
}
