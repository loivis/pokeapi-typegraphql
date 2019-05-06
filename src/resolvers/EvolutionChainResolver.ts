import { Resolver, Query, Arg, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { EvolutionChain } from "schemas/EvolutionChain";
import { Item } from "schemas/Item";

@Resolver(EvolutionChain)
export class EvolutionChainResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => EvolutionChain, { nullable: true })
    async evolutionChainByID(@Arg("id") id: number): Promise<EvolutionChain | null> {
        return await this.pokeAPI.get(id, EvolutionChain.apiType) as EvolutionChain;
    }

    @Query(() => EvolutionChain, { nullable: true })
    async evolutionChainByName(@Arg("name") name: string): Promise<EvolutionChain | null> {
        return await this.pokeAPI.get(name, EvolutionChain.apiType) as EvolutionChain;
    }

    @FieldResolver(() => Item)
    async babyTriggerItem(@Root() evolutionChain: EvolutionChain) {
        if (evolutionChain.babyTriggerItem == null) {
            return null
        }
        return await this.pokeAPI.get(evolutionChain.babyTriggerItem.url) as Item;
    }
}
