import { Service, Inject } from "typedi";
import AsyncLock from "async-lock";
import camelcaseKeys from "camelcase-keys";
import fetch from "node-fetch";

import { Pokemon } from "schemas/Pokemon";

@Service()
export class PokeAPI {
    @Inject("POKEAPI")
    private readonly pokemons: Pokemon[];

    private readonly v2: string = "https://pokeapi.co/api/v2";

    private apiCalls: number = 0;

    private cache = new Map<string, any>();

    private lock = new AsyncLock();

    async get(key: string | number, type?: string) {
        const url = this.getURL(key, type);
        return this.lock.acquire(url, async () => {
            return await this.fetchURL(url)
        })
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

    getURL(key: string | number, type?: string): string {
        if (type == undefined) {
            return "" + key;
        }

        return `${this.v2}/${type}/${key}`;
    }
}
