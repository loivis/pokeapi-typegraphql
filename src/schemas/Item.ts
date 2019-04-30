import { ObjectType, ID, Field } from "type-graphql";

import { EvolutionChain } from "./EvolutionChain";
import { GenerationGameIndex } from "./GenerationGameIndex";
import { HeldByPokemon } from "./HeldByPokemon";
import { ItemAttribute } from "./ItemAttribute";
import { ItemCategory } from "./ItemCategory";
import { ItemFlingEffect } from "./ItemFlingEffect";
import { Name } from "./Name";
import { VerboseEffect } from "./VerboseEffect";
import { VersionGroupFlavorText } from "./VersionGroupFlavorText";

@ObjectType()
export class Item {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field()
    cost: number;

    @Field({ nullable: true })
    flingPower: number;

    @Field(() => [ItemAttribute])
    attributes: ItemAttribute[];

    @Field(() => EvolutionChain, { nullable: true })
    babyTriggerFor: EvolutionChain;

    @Field(() => ItemCategory)
    category: ItemCategory;

    @Field(() => [VerboseEffect])
    effectEntries: VerboseEffect[];

    @Field(() => [VersionGroupFlavorText])
    flavorTextEntries: VersionGroupFlavorText[];

    @Field(() => ItemFlingEffect, { nullable: true })
    flingEffect: ItemFlingEffect;

    @Field(() => [GenerationGameIndex])
    gameIndices: GenerationGameIndex[];

    @Field(() => [HeldByPokemon])
    heldByPokemon: HeldByPokemon[];

    @Field(() => [Name])
    names: Name[];

    static apiType: string = "item";
    url: string;
}
