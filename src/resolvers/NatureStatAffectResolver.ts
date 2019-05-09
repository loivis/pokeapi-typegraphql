import { Resolver, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { NatureStatAffect } from "schemas/NatureStatAffect";
import { Nature } from "schemas/Nature";

@Resolver(NatureStatAffect)
export class NatureStatAffectResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @FieldResolver(() => Nature)
    async nature(@Root() nsa: NatureStatAffect) {
        return await this.pokeAPI.get(nsa.nature.url) as Nature;
    }
}
