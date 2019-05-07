import { Resolver, FieldResolver, Root, Query, Arg } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { ContestEffect } from "schemas/ContestEffect";
import { Move } from "schemas/Move";
import { ContestType } from "schemas/ContestType";
import { MoveDamageClass } from "schemas/MoveDamageClass";
import { Generation } from "schemas/Generation";
import { SuperContestEffect } from "schemas/SuperContestEffect";
import { MoveTarget } from "schemas/MoveTarget";
import { Type } from "schemas/Type";

@Resolver(Move)
export class MoveResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => Move, { nullable: true })
    async moveByID(@Arg("id") id: number): Promise<Move | null> {
        return await this.pokeAPI.get(id, Move.apiType) as Move;
    }

    @Query(() => Move, { nullable: true })
    async moveByName(@Arg("name") name: string): Promise<Move | null> {
        return await this.pokeAPI.get(name, Move.apiType) as Move;
    }

    @FieldResolver(() => ContestEffect)
    async contestEffect(@Root() move: Move) {
        return await this.pokeAPI.get(move.contestEffect.url) as ContestEffect;
    }

    @FieldResolver(() => ContestType)
    async contestType(@Root() move: Move) {
        return await this.pokeAPI.get(move.contestType.url) as ContestType;
    }

    @FieldResolver(() => MoveDamageClass)
    async damageClass(@Root() move: Move) {
        return await this.pokeAPI.get(move.damageClass.url) as MoveDamageClass;
    }

    @FieldResolver(() => Generation)
    async generation(@Root() move: Move) {
        return await this.pokeAPI.get(move.generation.url) as Generation;
    }

    @FieldResolver(() => SuperContestEffect)
    async superContestEffect(@Root() move: Move) {
        return await this.pokeAPI.get(move.superContestEffect.url) as SuperContestEffect;
    }

    @FieldResolver(() => MoveTarget)
    async target(@Root() move: Move) {
        return await this.pokeAPI.get(move.target.url) as MoveTarget;
    }

    @FieldResolver(() => Type)
    async type(@Root() move: Move) {
        return await this.pokeAPI.get(move.type.url) as Type;
    }
}
