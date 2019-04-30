import { ObjectType, Field } from "type-graphql";
import { Item } from "./Item";
import { EvolutionTrigger } from "./EvolutionTrigger";
import { Gender } from "./Gender";
import { Move } from "./Move";
import { Type } from "./Type";
import { Location } from "./Location";
import { PokemonSpecies } from "./PokemonSpecies";

@ObjectType()
export class EvolutionDetail {
    @Field({ nullable: true })
    minAffection: number;

    @Field({ nullable: true })
    minBeauty: number;

    @Field({ nullable: true })
    minHappiness: number;

    @Field()
    minLevel: number;

    @Field()
    needsOverworldRain: boolean;

    @Field({ nullable: true })
    relativePhysicalStats: number;

    @Field()
    timeOfDay: string;

    @Field()
    turnUpsideDown: boolean;

    @Field(() => Gender, { nullable: true })
    gender: Gender;

    // TODO: heldItem and item are the same as Item?
    @Field(() => Item, { nullable: true })
    heldItem: Item;

    @Field(() => Item, { nullable: true })
    item: Item;

    @Field(() => Move, { nullable: true })
    knownMove: Move;

    @Field(() => Type, { nullable: true })
    knownMoveType: Type;

    @Field(() => Location, { nullable: true })
    location: Location;

    @Field(() => PokemonSpecies, { nullable: true })
    partySpecies: PokemonSpecies;

    @Field(() => Type, { nullable: true })
    partyType: Type;

    @Field(() => PokemonSpecies, { nullable: true })
    tradeSpecies: PokemonSpecies;

    @Field(() => EvolutionTrigger)
    trigger: EvolutionTrigger;
}
