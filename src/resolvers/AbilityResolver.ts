import { Resolver, Query, FieldResolver, Root } from "type-graphql";
import { Ability } from "schemas/Ability";
import { Generation } from "schemas/Generation";
import { PokeAPI } from "services/PokeAPI";

@Resolver(Ability)
export class AbilityResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => Ability, { nullable: true })
    ability(): Ability | null {
        return null
    }

    @FieldResolver(() => Generation)
    generation(@Root() ability: Ability) {
        return this.pokeAPI.get(ability.generation.url);
    }
}
