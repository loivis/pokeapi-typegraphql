import { ObjectType, ID, Field } from "type-graphql";
import { Generation } from "./Generation";
import { NamedAPIResource } from "types/NamedAPIResource";
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

<<<<<<< HEAD
    // non-graphql fields
    ability: NamedAPIResource;
=======
    static apiType: string = "ability";
>>>>>>> c4bbab8... wipschema
    url: string;
}
