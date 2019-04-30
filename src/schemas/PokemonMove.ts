import { ObjectType, Field } from "type-graphql";
import { Move } from "./Move";
import { VersionGroupDetail } from "./VersionGroupDetail";

@ObjectType()
export class PokemonMove {
    @Field(() => Move)
    move: Move;

    @Field(() => [VersionGroupDetail])
    versionGroupDetails: VersionGroupDetail[];
}
