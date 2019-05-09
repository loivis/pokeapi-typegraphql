import { Resolver, FieldResolver, Root, Query, Arg } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { Stat } from "schemas/Stat";
import { Characteristic } from "schemas/Characteristic";
import { MoveDamageClass } from "schemas/MoveDamageClass";

@Resolver(Stat)
export class StatResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => Stat, { nullable: true })
    async statByID(@Arg("id") id: number): Promise<Stat | null> {
        return await this.pokeAPI.get(id, Stat.apiType) as Stat;
    }

    @Query(() => Stat, { nullable: true })
    async statByName(@Arg("name") name: string): Promise<Stat | null> {
        return await this.pokeAPI.get(name, Stat.apiType) as Stat;
    }

    @FieldResolver(() => [Characteristic])
    async characteristics(@Root() stat: Stat) {
        const cs = stat.characteristics.map(async (ch) => {
            return await this.pokeAPI.get(ch.url) as Characteristic;

        })
        return Promise.all(cs);
    }

    @FieldResolver(() => MoveDamageClass)
    async moveDamageClass(@Root() stat: Stat) {
        if (stat.moveDamageClass == null) return null;
        return await this.pokeAPI.get(stat.moveDamageClass.url) as MoveDamageClass;
    }
}
