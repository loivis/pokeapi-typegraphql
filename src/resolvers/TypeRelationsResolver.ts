import { Resolver, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { Type } from "schemas/Type";
import { TypeRelations } from "schemas/TypeRelations";

@Resolver(TypeRelations)
export class TypeRelationsResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @FieldResolver(() => [Type])
    async doubleDamageFrom(@Root() trs: TypeRelations) {
        const types = trs.doubleDamageFrom.map(async (type) => {
            return await this.pokeAPI.get(type.url) as Type;

        })
        return Promise.all(types);
    }

    @FieldResolver(() => [Type])
    async doubleDamageTo(@Root() trs: TypeRelations) {
        const types = trs.doubleDamageTo.map(async (type) => {
            return await this.pokeAPI.get(type.url) as Type;

        })
        return Promise.all(types);
    }

    @FieldResolver(() => [Type])
    async halfDamageFrom(@Root() trs: TypeRelations) {
        const types = trs.halfDamageFrom.map(async (type) => {
            return await this.pokeAPI.get(type.url) as Type;

        })
        return Promise.all(types);
    }

    @FieldResolver(() => [Type])
    async halfDamageTo(@Root() trs: TypeRelations) {
        const types = trs.halfDamageTo.map(async (type) => {
            return await this.pokeAPI.get(type.url) as Type;

        })
        return Promise.all(types);
    }

    @FieldResolver(() => [Type])
    async noDamageFrom(@Root() trs: TypeRelations) {
        const types = trs.noDamageFrom.map(async (type) => {
            return await this.pokeAPI.get(type.url) as Type;

        })
        return Promise.all(types);
    }

    @FieldResolver(() => [Type])
    async noDamageTo(@Root() trs: TypeRelations) {
        const types = trs.noDamageTo.map(async (type) => {
            return await this.pokeAPI.get(type.url) as Type;

        })
        return Promise.all(types);
    }
}
