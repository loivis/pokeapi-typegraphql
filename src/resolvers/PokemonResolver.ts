import { Resolver, Query, Arg, FieldResolver, Root, ResolverInterface } from "type-graphql";
import { Service } from "typedi";

import { Ability } from "schemas/Ability";
import { Item } from "schemas/Item";
import { PokeAPI } from "services/PokeAPI";
import { Pokemon } from "schemas/Pokemon";
import { PokemonForm } from "schemas/PokemonForm";
import { PokemonHeldItem } from "schemas/PokemonHeldItem";
import { PokemonSpecies } from "schemas/PokemonSpecies";
import { Version } from "schemas/Version";

@Service()
@Resolver(Pokemon)
export class PokemonResolver implements ResolverInterface<Pokemon>{
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => Pokemon, { nullable: true })
    async pokemonByID(@Arg("id") id: number): Promise<Pokemon | null> {
        return await this.pokeAPI.get(id, Pokemon.apiType) as Pokemon;
    }

    @Query(() => Pokemon, { nullable: true })
    async pokemonByName(@Arg("name") name: string): Promise<Pokemon | null> {
        return await this.pokeAPI.get(name, Pokemon.apiType) as Pokemon;
    }

    @FieldResolver(() => PokemonSpecies)
    async species(@Root() pokemon: Pokemon) {
        return await this.pokeAPI.get(pokemon.species.url) as PokemonSpecies;
    }

    @FieldResolver(() => [Ability])
    abilities(@Root() pokemon: Pokemon) {
        const abs = pokemon.abilities.map(async (ab) => {
            ab.ability = await this.pokeAPI.get(ab.ability.url) as Ability;
            return ab
        })

        return Promise.all(abs);
    }

    @FieldResolver(() => [PokemonForm])
    forms(@Root() pokemon: Pokemon) {
        const abs = pokemon.forms.map(async (form) => {
            return await this.pokeAPI.get(form.url) as PokemonForm;
        })

        return Promise.all(abs);
    }

    @FieldResolver(() => [PokemonHeldItem])
    heldItems(@Root() pokemon: Pokemon) {
        const his = pokemon.heldItems.map(async (phi) => {
            phi.item = await this.pokeAPI.get(phi.item.url) as Item;
            phi.versionDetails = await Promise.all(phi.versionDetails.map(async (vd) => {
                vd.version = await this.pokeAPI.get(vd.version.url) as Version;
                return vd;
            }));
            return phi;
        })

        return Promise.all(his);
    }
}
