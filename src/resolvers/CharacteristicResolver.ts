import { Resolver, Query, Arg } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { Characteristic } from "schemas/Characteristic";

@Resolver(Characteristic)
export class CharacteristicResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => Characteristic, { nullable: true })
    async characteristicByID(@Arg("id") id: number): Promise<Characteristic | null> {
        return await this.pokeAPI.get(id, Characteristic.apiType) as Characteristic;
    }

    @Query(() => Characteristic, { nullable: true })
    async characteristicByName(@Arg("name") name: string): Promise<Characteristic | null> {
        return await this.pokeAPI.get(name, Characteristic.apiType) as Characteristic;
    }
}
