import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class Sprites {
    @Field({ nullable: true })
    frontDefault: string

    @Field({ nullable: true })
    frontShiny: string

    @Field({ nullable: true })
    frontFemale: string

    @Field({ nullable: true })
    frontShinyFemale: string

    @Field({ nullable: true })
    backDefault: string

    @Field({ nullable: true })
    backShiny: string

    @Field({ nullable: true })
    backFemale: string

    @Field({ nullable: true })
    backShinyFemale: string
}
