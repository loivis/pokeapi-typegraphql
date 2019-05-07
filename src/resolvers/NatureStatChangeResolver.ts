import { Resolver, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { NatureStatChange } from "schemas/NatureStatChange";
import { PokeathlonStat } from "schemas/PokeathlonStat";
import { Stat } from "schemas/Stat";

@Resolver(NatureStatChange)
export class NatureStatChangeResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @FieldResolver(() => Stat)
    async pokeathlonStat(@Root() nsc: NatureStatChange) {
        return await this.pokeAPI.get(nsc.pokeathlonStat.url) as PokeathlonStat;
    }
}
