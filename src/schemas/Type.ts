import { ObjectType, Field, ID } from "type-graphql";
import { TypeRelations } from "./TypeRelations";
import { GenerationGameIndex } from "./GenerationGameIndex";
import { Generation } from "./Generation";
import { MoveDamageClass } from "./MoveDamageClass";
import { Name } from "./Name";
import { TypePokemon } from "./TypePokemon";
import { Move } from "./Move";

@ObjectType()
export class Type {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field(() => TypeRelations)
    damageRelations: TypeRelations;

    @Field(() => [GenerationGameIndex])
    gameIndices: GenerationGameIndex[];

    @Field(() => Generation)
    generation: Generation;

    @Field(() => MoveDamageClass)
    moveDamageClass: MoveDamageClass;

    @Field(() => [Move])
    moves: Move[];

    @Field(() => [Name])
    names: Name[];

    @Field(() => [TypePokemon])
    pokemon: TypePokemon[];

    static apiType: string = "type";
    url: string;
}
