import { ObjectType, ID, Field } from "type-graphql";
import { Pokemon } from "./Pokemon";
import { VersionGroup } from "./VersionGroup";

@ObjectType()
export class PokemonForm {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field()
    formName: string;

    @Field()
    formOrder: number;

    @Field()
    order: number;

    @Field()
    isBattleOnly: boolean;

    @Field()
    isDefault: boolean;

    @Field()
    isMega: boolean;

    @Field(() => Pokemon)
    pokemon: Pokemon;

    @Field(() => VersionGroup)
    versionGroup: VersionGroup;

    url: string;
}
