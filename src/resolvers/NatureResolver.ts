import { Resolver, Query, Arg, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { BerryFlavor } from "schemas/BerryFlavor";
import { Nature } from "schemas/Nature";
import { Stat } from "schemas/Stat";

@Resolver(Nature)
export class NatureResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => Nature, { nullable: true })
    async natureByID(@Arg("id") id: number): Promise<Nature | null> {
        return await this.pokeAPI.get(id, Nature.apiType) as Nature;
    }

    @Query(() => Nature, { nullable: true })
    async natureByName(@Arg("name") name: string): Promise<Nature | null> {
        return await this.pokeAPI.get(name, Nature.apiType) as Nature;
    }

    @FieldResolver(() => Stat)
    async decreasedStat(@Root() nature: Nature) {
        if (nature.decreasedStat == null) return null;
        return await this.pokeAPI.get(nature.decreasedStat.url) as Stat;
    }

    @FieldResolver(() => Stat)
    async increasedStat(@Root() nature: Nature) {
        if (nature.increasedStat == null) return null;
        return await this.pokeAPI.get(nature.increasedStat.url) as Stat;
    }

    @FieldResolver(() => BerryFlavor)
    async likesFlavor(@Root() nature: Nature) {
        if (nature.likesFlavor == null) return null;
        return await this.pokeAPI.get(nature.likesFlavor.url) as BerryFlavor;
    }

    @FieldResolver(() => BerryFlavor)
    async hatesFlavor(@Root() nature: Nature) {
        if (nature.hatesFlavor == null) return null;
        return await this.pokeAPI.get(nature.hatesFlavor.url) as BerryFlavor;
    }
}
