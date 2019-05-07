import { Resolver, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { MoveStatChange } from "schemas/MoveStatChange";
import { Stat } from "schemas/Stat";

@Resolver(MoveStatChange)
export class MoveStatChangeResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @FieldResolver(() => Stat)
    async stat(@Root() msc: MoveStatChange) {
        return await this.pokeAPI.get(msc.stat.url) as Stat;
    }
}
