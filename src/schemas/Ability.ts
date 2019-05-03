import { ObjectType, ID, Field } from "type-graphql";
import { Generation } from "./Generation";
import { Name } from "./Name";
import { Effect } from "./Effect";
import { AbilityEffectChange } from "./AbilityEffectChange";
import { AbilityFlavorText } from "./AbilityFlavorText";
import { AbilityPokemon } from "./AbilityPokemon";

@ObjectType()
export class Ability {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field()
    isMainSeries: boolean;

    @Field(() => [AbilityEffectChange])
    effectChanges: AbilityEffectChange[];

    @Field(() => [Effect])
    effectEntries: Effect[];

    @Field(() => [AbilityFlavorText])
    flavorTextEntries: AbilityFlavorText[];

    @Field(() => Generation)
    generation: Generation;

    @Field(() => [Name])
    names: Name[];

    @Field(() => [AbilityPokemon])
    pokemon: AbilityPokemon[];

    static apiType: string = "ability";
    url: string;
}
