import { ObjectType, Field } from "type-graphql";
import { MoveAilment } from "./MoveAilment";
import { MoveCategory } from "./MoveCategory";

@ObjectType()
export class MoveMetaData {
    @Field({ nullable: true })
    minHits: number;

    @Field({ nullable: true })
    maxHits: number;

    @Field({ nullable: true })
    minTurns: number;

    @Field({ nullable: true })
    maxTurns: number;

    @Field()
    drain: number;

    @Field()
    healing: number;

    @Field()
    critRate: number;

    @Field()
    ailmentChance: number;

    @Field()
    flinchChance: number;

    @Field()
    statChance: number;

    @Field(() => MoveAilment)
    ailment: MoveAilment;

    @Field(() => MoveCategory)
    category: MoveCategory;
}
