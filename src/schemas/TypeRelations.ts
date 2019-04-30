import { ObjectType, Field } from "type-graphql";
import { Type } from "./Type";

@ObjectType()
export class TypeRelations {
    @Field(() => [Type])
    doubleDamageFrom: Type[];

    @Field(() => [Type])
    doubleDamageTo: Type[];

    @Field(() => [Type])
    halfDamageFrom: Type[];

    @Field(() => [Type])
    halfDamageTo: Type[];

    @Field(() => [Type])
    noDamageFrom: Type[];

    @Field(() => [Type])
    noDamageTo: Type[];
}
