import { Service, Inject } from "typedi";
import fetch from "node-fetch";
import camelcaseKeys from "camelcase-keys";

import { Pokemon } from "schemas/Pokemon";

@Service()
export class PokeAPI {
    @Inject("POKEAPI")
    private readonly pokemons: Pokemon[];

    private readonly v2: string = "https://pokeapi.co/api/v2";

    private apiCalls: number = 0;

    private cache = new Map<string, any>();

    async get(key: string | number, type: string) {
        return await this.fetchURL(this.getURL(key, type))
    }

    async getAllPokemons() {
        return this.pokemons;
    }

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

    getURL(key: string | number, type: string): string {
        key = "" + key
        if (key.startsWith("http")) {
            return key;
        }

        return `${this.v2}/${type}/${key}`;
    }
}
