import { Resolver, Query, Arg, FieldResolver, Root, ResolverInterface } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { Pokemon } from "schemas/Pokemon";
import { PokemonForm } from "schemas/PokemonForm";
import { VersionGroup } from "schemas/VersionGroup";

@Resolver(PokemonForm)
export class PokemonFormResolver implements ResolverInterface<PokemonForm>{
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => PokemonForm, { nullable: true })
    async pokemonFormByID(@Arg("id") id: number): Promise<PokemonForm | null> {
        return await this.pokeAPI.get(id, PokemonForm.apiType) as PokemonForm;
    }

    @Query(() => PokemonForm, { nullable: true })
    async pokemonFormByName(@Arg("name") name: string): Promise<PokemonForm | null> {
        return await this.pokeAPI.get(name, PokemonForm.apiType) as PokemonForm;
    }

    @FieldResolver(() => Pokemon)
    async pokemon(@Root() pf: PokemonForm) {
        return await this.pokeAPI.get(pf.pokemon.url) as Pokemon;
    }

    @FieldResolver(() => VersionGroup)
    async versionGroup(@Root() pf: PokemonForm) {
        return await this.pokeAPI.get(pf.versionGroup.url) as VersionGroup;
    }
}
