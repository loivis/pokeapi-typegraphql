import { Resolver, Query, Arg, FieldResolver, Root, ResolverInterface } from "type-graphql";
import fetch from "node-fetch";
import { PokemonSpecies } from "schemas/PokemonSpecies";
import { ChainLink } from "schemas/ChainLink";


@Resolver(ChainLink)
export class ChainLinkResolver implements ResolverInterface<ChainLink>{
    @Query(() => ChainLink, { nullable: true })
    async chainLinkByID(@Arg("id") id: number): Promise<ChainLink | null> {
        // TODO: not implemented
        console.log(id);
        return null
    }

    @FieldResolver(() => PokemonSpecies)
    async species(@Root() ChainLink: ChainLink) {
        const response = await fetch(ChainLink.species.url);
        return response.json();
    }
}
