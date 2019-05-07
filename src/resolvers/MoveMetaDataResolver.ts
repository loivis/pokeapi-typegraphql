import { Resolver, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { MoveMetaData } from "schemas/MoveMetaData";
import { MoveAilment } from "schemas/MoveAilment";
import { MoveCategory } from "schemas/MoveCategory";

@Resolver(MoveMetaData)
export class MoveMetaDataResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @FieldResolver(() => [MoveAilment])
    async ailment(@Root() mvd: MoveMetaData) {
        return await this.pokeAPI.get(mvd.ailment.url) as MoveAilment;
    }

    @FieldResolver(() => [MoveCategory])
    async category(@Root() mvd: MoveMetaData) {
        return await this.pokeAPI.get(mvd.category.url) as MoveCategory;
    }
}
