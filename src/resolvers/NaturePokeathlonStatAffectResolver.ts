import { Resolver, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { NaturePokeathlonStatAffect } from "schemas/NaturePokeathlonStatAffect";
import { Nature } from "schemas/Nature";

@Resolver(NaturePokeathlonStatAffect)
export class NaturePokeathlonStatAffectResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @FieldResolver(() => Nature)
    async nature(@Root() npsa: NaturePokeathlonStatAffect) {
        return await this.pokeAPI.get(npsa.nature.url) as Nature;
    }
}
