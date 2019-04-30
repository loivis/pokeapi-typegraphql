import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class Sprite {
    @Field()
    frontDefault: string

    @Field()
    frontShiny: string

    @Field()
    frontFemale: string

    @Field()
    frontShinyFemale: string

    @Field()
    backDefault: string

    @Field()
    backShiny: string

    @Field()
    backFemale: string

    @Field()
    backShinyFemale: string
}
