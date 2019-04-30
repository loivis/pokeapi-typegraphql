import { ObjectType, Field } from "type-graphql";
import { Generation } from "./Generation";

@ObjectType()
export class GenerationGameIndex {
    @Field()
    gameIndex: number;

    @Field(() => Generation)
    generation: Generation;
}
