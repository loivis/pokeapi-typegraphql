import { Resolver, FieldResolver, Root } from "type-graphql";

import { PokeAPI } from "services/PokeAPI";
import { EvolutionDetail } from "schemas/EvolutionDetail";
import { EvolutionTrigger } from "schemas/EvolutionTrigger";
import { Gender } from "schemas/Gender";
import { Item } from "schemas/Item";
import { Location } from "schemas/Location";
import { Move } from "schemas/Move";
import { PokemonSpecies } from "schemas/PokemonSpecies";
import { Type } from "schemas/Type";

@Resolver(EvolutionDetail)
export class EvolutionDetailResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @FieldResolver(() => Item)
    async gender(@Root() evolutionDetail: EvolutionDetail) {
        return await this.pokeAPI.get(evolutionDetail.gender.url) as Gender;
    }

    @FieldResolver(() => Item)
    async heldItem(@Root() evolutionDetail: EvolutionDetail) {
        if (evolutionDetail.heldItem == null) {
            return null
        }
        return await this.pokeAPI.get(evolutionDetail.heldItem.url) as Item;
    }

    @FieldResolver(() => Item)
    async item(@Root() evolutionDetail: EvolutionDetail) {
        if (evolutionDetail.item == null) {
            return null
        }
        return await this.pokeAPI.get(evolutionDetail.item.url) as Item;
    }

    @FieldResolver(() => Move)
    async knownMove(@Root() evolutionDetail: EvolutionDetail) {
        return await this.pokeAPI.get(evolutionDetail.knownMove.url) as Move;
    }

    @FieldResolver(() => Type)
    async knownMoveType(@Root() evolutionDetail: EvolutionDetail) {
        return await this.pokeAPI.get(evolutionDetail.knownMoveType.url) as Type;
    }

    @FieldResolver(() => Location)
    async location(@Root() evolutionDetail: EvolutionDetail) {
        return await this.pokeAPI.get(evolutionDetail.location.url) as Location;
    }

    @FieldResolver(() => PokemonSpecies)
    async partySpecies(@Root() evolutionDetail: EvolutionDetail) {
        return await this.pokeAPI.get(evolutionDetail.partySpecies.url) as PokemonSpecies;
    }

    @FieldResolver(() => Type)
    async partyType(@Root() evolutionDetail: EvolutionDetail) {
        return await this.pokeAPI.get(evolutionDetail.partyType.url) as Type;
    }

    @FieldResolver(() => PokemonSpecies)
    async tradeSpecies(@Root() evolutionDetail: EvolutionDetail) {
        return await this.pokeAPI.get(evolutionDetail.tradeSpecies.url) as PokemonSpecies;
    }

    @FieldResolver(() => EvolutionTrigger)
    async trigger(@Root() evolutionDetail: EvolutionDetail) {
        return await this.pokeAPI.get(evolutionDetail.trigger.url) as EvolutionTrigger;
    }
}
