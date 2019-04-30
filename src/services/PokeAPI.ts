import { Service, Inject } from "typedi";
import fetch from "node-fetch";

import { Pokemon } from "schemas/Pokemon";
import { Species } from "schemas/Species";
import { Ability } from "schemas/Ability";

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

        const object = await response.json();

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
        return await this.fetchURL(url) as Species;
    }

    async getAbility(url: string) {
        return await this.fetchURL(url) as Ability;
    }
}
