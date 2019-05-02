import { Resolver, Query, Arg, FieldResolver, Root, ResolverInterface } from "type-graphql";
import { Service } from "typedi";

import { Ability } from "schemas/Ability";
import { EncounterConditionValue } from "schemas/EncounterConditionValue";
import { EncounterMethod } from "schemas/EncounterMethod";
import { Item } from "schemas/Item";
import { LocationArea } from "schemas/LocationArea";
import { LocationAreaEncounter } from "schemas/LocationAreaEncounter";
import { Move } from "schemas/Move";
import { MoveLearnMethod } from "schemas/MoveLearnMethod";
import { PokeAPI } from "services/PokeAPI";
import { Pokemon } from "schemas/Pokemon";
import { PokemonAbility } from "schemas/PokemonAbility";
import { PokemonForm } from "schemas/PokemonForm";
import { PokemonHeldItem } from "schemas/PokemonHeldItem";
import { PokemonMove } from "schemas/PokemonMove";
import { PokemonSpecies } from "schemas/PokemonSpecies";
import { PokemonStat } from "schemas/PokemonStat";
import { PokemonType } from "schemas/PokemonType";
import { Stat } from "schemas/Stat";
import { Type } from "schemas/Type";
import { Version } from "schemas/Version";
import { VersionGameIndex } from "schemas/VersionGameIndex";
import { VersionGroup } from "schemas/VersionGroup";

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

    @FieldResolver(() => [PokemonAbility])
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

    @FieldResolver(() => [VersionGameIndex])
    gameIndices(@Root() pokemon: Pokemon) {
        const gis = pokemon.gameIndices.map(async (gi) => {
            gi.version = await this.pokeAPI.get(gi.version.url) as Version;
            return gi as VersionGameIndex;
        })

        return Promise.all(gis);
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

    @FieldResolver(() => [LocationAreaEncounter])
    async locationAreaEncounters(@Root() pokemon: Pokemon) {
        if (typeof pokemon.locationAreaEncounters as any != "string") {
            return pokemon.locationAreaEncounters;
        }

        const url = (pokemon.locationAreaEncounters as any as string);
        const objs = (await this.pokeAPI.get(url) as LocationAreaEncounter[]);

        const laes = objs.map(async (lae) => {
            lae.locationArea = await this.pokeAPI.get(lae.locationArea.url) as LocationArea;
            const vds = lae.versionDetails.map(async (vd) => {
                vd.version = await this.pokeAPI.get(vd.version.url) as Version;
                const eds = vd.encounterDetails.map(async (ed) => {
                    const cvs = await ed.conditionValues.map(async (cv) => {
                        return await this.pokeAPI.get(cv.url) as EncounterConditionValue;
                    });
                    ed.conditionValues = await Promise.all(cvs);
                    ed.method = await this.pokeAPI.get(ed.method.url) as EncounterMethod;
                    return ed;
                })
                vd.encounterDetails = await Promise.all(eds);
                return vd;
            })
            lae.versionDetails = await Promise.all(vds);
            return lae;
        })

        return Promise.all(laes);
    }

    @FieldResolver(() => [PokemonMove])
    moves(@Root() pokemon: Pokemon) {
        const pms = pokemon.moves.map(async (pm) => {
            pm.move = await this.pokeAPI.get(pm.move.url) as Move;
            const vgds = pm.versionGroupDetails.map(async (vgd) => {
                vgd.versionGroup = await this.pokeAPI.get(vgd.versionGroup.url) as VersionGroup;
                vgd.moveLearnMethod = await this.pokeAPI.get(vgd.moveLearnMethod.url) as MoveLearnMethod;
                return vgd;
            })
            pm.versionGroupDetails = await Promise.all(vgds);
            return pm;
        })

        return Promise.all(pms);
    }

    @FieldResolver(() => PokemonSpecies)
    async species(@Root() pokemon: Pokemon) {
        return await this.pokeAPI.get(pokemon.species.url) as PokemonSpecies;
    }

    @FieldResolver(() => [PokemonStat])
    stats(@Root() pokemon: Pokemon) {
        const pss = pokemon.stats.map(async (ps) => {
            ps.stat = await this.pokeAPI.get(ps.stat.url) as Stat;
            return ps
        })

        return Promise.all(pss);
    }

    @FieldResolver(() => [PokemonType])
    types(@Root() pokemon: Pokemon) {
        const pts = pokemon.types.map(async (pt) => {
            pt.type = await this.pokeAPI.get(pt.type.url) as Type;
            return pt
        })

        return Promise.all(pts);
    }
}
