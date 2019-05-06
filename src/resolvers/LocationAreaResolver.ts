import { Resolver, FieldResolver, Root, Query, Arg } from "type-graphql";
import { PokeAPI } from "services/PokeAPI";
import { LocationArea } from "schemas/LocationArea";
import { Location } from "schemas/Location";

@Resolver(LocationArea)
export class LocationAreaResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => LocationArea, { nullable: true })
    async locationAreaByID(@Arg("id") id: number): Promise<LocationArea | null> {
        return await this.pokeAPI.get(id, LocationArea.apiType) as LocationArea;
    }

    @Query(() => LocationArea, { nullable: true })
    async locationAreaByName(@Arg("name") name: string): Promise<LocationArea | null> {
        return await this.pokeAPI.get(name, LocationArea.apiType) as LocationArea;
    }

    @FieldResolver(() => Location)
    async location(@Root() locationArea: LocationArea) {
        return await this.pokeAPI.get(locationArea.location.url) as Location;
    }
}
