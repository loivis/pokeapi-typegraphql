import { Resolver, Query, Arg } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { ContestEffect } from "schemas/ContestEffect";

@Resolver(ContestEffect)
export class ContestEffectResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => ContestEffect, { nullable: true })
    async contestEffectByID(@Arg("id") id: number): Promise<ContestEffect | null> {
        return await this.pokeAPI.get(id, ContestEffect.apiType) as ContestEffect;
    }

    @Query(() => ContestEffect, { nullable: true })
    async contestEffectByName(@Arg("name") name: string): Promise<ContestEffect | null> {
        return await this.pokeAPI.get(name, ContestEffect.apiType) as ContestEffect;
    }
}
