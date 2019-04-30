import { Service, Inject } from "typedi";
import fetch from "node-fetch";
import camelcaseKeys from "camelcase-keys";

import { Pokemon } from "schemas/Pokemon";
import { PokemonSpecies } from "schemas/PokemonSpecies";
import { Generation } from "schemas/Generation";
import { PokemonAbility } from "schemas/PokemonAbility";

@Service()
export class PokeAPI {
    @Inject("POKEAPI")
    private readonly pokemons: Pokemon[];

    private readonly v2: string = "https://pokeapi.co/api/v2";

    private apiCalls: number = 0;

    private cache = new Map<string, any>();

    async fetchURL(url: string) {
        if (this.cache.has(url)) {
            console.log(`return cache for "${url}"`)
            return this.cache.get(url);
        }

        this.apiCalls++;
        console.log(`apiCalls to pokeapi.co: ${this.apiCalls}`);

        console.log(`no cache found for "${url}"`)
        const response = await fetch(url)

        if (response.status != 200) {
            throw new Error("requested pokemon doesn't exist");
        }

        const object: any = camelcaseKeys(await response.json(), { deep: true });

        console.log(`set cache for "${url}"`)
        this.cache.set(url, object);

        return object;
    }

    async getAll() {
        return this.pokemons;
    }

    async getPokemon(key: string | number) {
        return await this.fetchURL(this.v2 + "/pokemon/" + key) as Pokemon;
    }


    async getSpecies(url: string) {
        return await this.fetchURL(url) as PokemonSpecies;
    }

    async getPokemonAbility(url: string) {
        return await this.fetchURL(url) as PokemonAbility;
    }

    async getGeneration(url: string) {
        return await this.fetchURL(url) as Generation;
    }
}
