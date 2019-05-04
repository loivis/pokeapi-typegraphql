import { Resolver, Query, FieldResolver, Root, Arg } from "type-graphql";

import { Ability } from "schemas/Ability";
import { AbilityEffectChange } from "schemas/AbilityEffectChange";
import { AbilityFlavorText } from "schemas/AbilityFlavorText";
import { AbilityPokemon } from "schemas/AbilityPokemon";
import { Generation } from "schemas/Generation";
import { Language } from "schemas/Language";
import { Name } from "schemas/Name";
import { PokeAPI } from "services/PokeAPI";
import { Pokemon } from "schemas/Pokemon";
import { VersionGroup } from "schemas/VersionGroup";

@Resolver(Ability)
export class AbilityResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => Ability, { nullable: true })
    async abilityByID(@Arg("id") id: number): Promise<Ability | null> {
        return await this.pokeAPI.get(id, Ability.apiType) as Ability;
    }

    @Query(() => Ability, { nullable: true })
    async abilityByName(@Arg("name") name: string): Promise<Ability | null> {
        return await this.pokeAPI.get(name, Ability.apiType) as Ability;
    }

    @FieldResolver(() => [AbilityEffectChange])
    effectChanges(@Root() ability: Ability) {
        const ecs = ability.effectChanges.map(async (ec) => {
            const ees = ec.effectEntries.map(async (ee) => {
                ee.language = await this.pokeAPI.get(ee.language.url) as Language;
                return ee;
            })
            ec.effectEntries = await Promise.all(ees);
            ec.versionGroup = await this.pokeAPI.get(ec.versionGroup.url) as VersionGroup;
            return ec;
        });

        return Promise.all(ecs);
    }

    @FieldResolver(() => [AbilityFlavorText])
    flavorTextEntries(@Root() ability: Ability) {
        const ftes = ability.flavorTextEntries.map(async (fte) => {
            fte.language = await this.pokeAPI.get(fte.language.url) as Language;
            fte.versionGroup = await this.pokeAPI.get(fte.versionGroup.url) as VersionGroup;
            return fte;
        });

        return Promise.all(ftes);
    }

    @FieldResolver(() => Generation)
    generation(@Root() ability: Ability) {
        return this.pokeAPI.get(ability.generation.url);
    }

    @FieldResolver(() => [Name])
    names(@Root() ability: Ability) {
        return Promise.all(ability.names.map(async (name) => {
            name.language = await this.pokeAPI.get(name.language.url) as Language;
            return name;
        }))
    }

    @FieldResolver(() => AbilityPokemon)
    pokemon(@Root() ability: Ability) {
        const aps = ability.pokemon.map(async (ap) => {
            ap.pokemon = await this.pokeAPI.get(ap.pokemon.url) as Pokemon;
            return ap;
        });

        return Promise.all(aps);
    }
}
