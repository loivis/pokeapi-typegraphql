import { Resolver, FieldResolver, Root, ResolverInterface } from "type-graphql";
import { PokemonSpecies } from "schemas/PokemonSpecies";
import { ChainLink } from "schemas/ChainLink";
import { PokeAPI } from "services/PokeAPI";


@Resolver(ChainLink)
export class ChainLinkResolver implements ResolverInterface<ChainLink>{
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @FieldResolver(() => PokemonSpecies)
    async species(@Root() chainLink: ChainLink) {
        return await this.pokeAPI.get(chainLink.species.url) as PokemonSpecies;
    }
}
