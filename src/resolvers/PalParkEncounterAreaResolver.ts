import { Resolver, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { PalParkEncounterArea } from "schemas/PalParkEncounterArea";
import { PalParkArea } from "schemas/PalParkArea";

@Resolver(PalParkEncounterArea)
export class PalParkEncounterAreaResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @FieldResolver(() => PalParkArea)
    async area(@Root() ppea: PalParkEncounterArea) {
        return await this.pokeAPI.get(ppea.area.url) as PalParkArea;
    }
}
