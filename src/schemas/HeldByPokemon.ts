import { ObjectType, Field } from "type-graphql";
import { Pokemon } from "./Pokemon";
import { HeldItemVersionDetails } from "./HeldItemVersionDetails";

@ObjectType()
export class HeldByPokemon {
    @Field(() => [Pokemon])
    pokemon: Pokemon[];

    @Field(() => [HeldItemVersionDetails])
    versionDetails: HeldItemVersionDetails[];
}
