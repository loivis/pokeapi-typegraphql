import { ObjectType, Field } from "type-graphql";
import { Species } from "./Species";

@ObjectType()
export class ChainLink {
    @Field()
    is_baby: boolean;

    @Field(() => [ChainLink])
    evolves_to: ChainLink[];

    @Field(() => Species)
    species: Species
}
