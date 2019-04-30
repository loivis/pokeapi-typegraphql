import { ObjectType, ID, Field } from "type-graphql";
import { Stat } from "./Stat";
import { BerryFlavor } from "./BerryFlavor";
import { Name } from "./Name";
import { MoveBattleStylePreference } from "./MoveBattleStylePreference";
import { NatureStatChange } from "./NatureStatChange";

@ObjectType()
export class Nature {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field(() => Stat, { nullable: true })
    decreasedStat: Stat;

    @Field(() => Stat, { nullable: true })
    increasedStat: Stat;

    @Field(() => BerryFlavor, { nullable: true })
    hatesFlavor: BerryFlavor;

    @Field(() => BerryFlavor, { nullable: true })
    likesFlavor: BerryFlavor;

    @Field(() => [MoveBattleStylePreference])
    moveBattleStylePreferences: MoveBattleStylePreference[];

    @Field(() => [Name])
    names: Name[];

    @Field(() => [NatureStatChange])
    pokeathlonStatChanges: NatureStatChange[];

    static apiType: string = "nature";
    url: string;
}
