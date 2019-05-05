import { Resolver, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { BerryFlavor } from "schemas/BerryFlavor";
import { BerryFlavorMap } from "schemas/BerryFlavorMap";

@Resolver(BerryFlavorMap)
export class BerryFlavorMapResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @FieldResolver(() => BerryFlavor)
    async flavor(@Root() berryFlavorMap: BerryFlavorMap) {
        return await this.pokeAPI.get(berryFlavorMap.flavor.url) as BerryFlavor;
    }
}
