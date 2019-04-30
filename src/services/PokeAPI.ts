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

    async fetchURL(url: string) {
        this.apiCalls++;
        console.log(this.apiCalls);

        const response = await fetch(url)

        if (response.status != 200) {
            throw new Error("requested pokemon doesn't exist");
        }

        const object = await response.json();

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
        const response = await fetch(url)

        if (response.status != 200) {
            throw new Error("requested pokemon doesn't exist");
        }

        return await response.json() as Ability;
    }
}
