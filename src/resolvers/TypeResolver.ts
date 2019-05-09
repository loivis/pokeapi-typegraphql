import { Resolver, FieldResolver, Root, Query, Arg } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { Generation } from "schemas/Generation";
import { Move } from "schemas/Move";
import { MoveDamageClass } from "schemas/MoveDamageClass";
import { Type } from "schemas/Type";

@Resolver(Type)
export class TypeResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => Type, { nullable: true })
    async typeByID(@Arg("id") id: number): Promise<Type | null> {
        return await this.pokeAPI.get(id, Type.apiType) as Type;
    }

    @Query(() => Type, { nullable: true })
    async typeByName(@Arg("name") name: string): Promise<Type | null> {
        return await this.pokeAPI.get(name, Type.apiType) as Type;
    }

    @FieldResolver(() => Generation)
    async generation(@Root() type: Type) {
        return await this.pokeAPI.get(type.generation.url) as Generation;
    }

    @FieldResolver(() => MoveDamageClass)
    async moveDamageClass(@Root() type: Type) {
        return await this.pokeAPI.get(type.moveDamageClass.url) as MoveDamageClass;
    }

    @FieldResolver(() => [Move])
    async moves(@Root() sce: Type) {
        const cs = sce.moves.map(async (move) => {
            return await this.pokeAPI.get(move.url) as Move;

        })
        return Promise.all(cs);
    }
}
