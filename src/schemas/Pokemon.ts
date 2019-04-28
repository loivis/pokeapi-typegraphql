import { ObjectType, ID, Field } from "type-graphql";
import { Species } from "./Species";
import { Ability } from "./Ability";
import { Form } from "./Form";
import { VersionGameIndex } from "./VersionGameIndex";
import { HeldItem } from "./HeldItem";
import { Move } from "./Move";
import { Sprite } from "./Sprite";
import { Stat } from "./Stat";
import { Type } from "./Type";
import { LocationAreaEncounter } from "./LocationAreaEncounter";

@ObjectType()
export class Pokemon {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field()
    base_experience: number;

    @Field()
    height: number;

    @Field()
    is_default: boolean;

    @Field()
    order: number;

    @Field()
    weight: number;

    @Field(() => [LocationAreaEncounter])
    location_area_encounters: LocationAreaEncounter[];

    @Field(() => [Ability])
    abilities: Ability[];

    @Field(() => [Form])
    forms: Form[];

    @Field(() => [VersionGameIndex])
    game_indices: VersionGameIndex[];

    @Field(() => [HeldItem])
    held_items: HeldItem[];

    @Field(() => [Move])
    moves: Move[];

    @Field(() => Species)
    species: Species;

    @Field(() => [Sprite])
    sprites: Sprite[];

    @Field(() => [Stat])
    stats: Stat[];

    @Field(() => [Type])
    types: Type[];


}
