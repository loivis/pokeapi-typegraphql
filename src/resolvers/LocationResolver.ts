import { Resolver, FieldResolver, Root, Query, Arg } from "type-graphql";
import { PokeAPI } from "services/PokeAPI";
import { Location } from "schemas/Location";
import { LocationArea } from "schemas/LocationArea";
import { Region } from "schemas/Region";

@Resolver(Location)
export class LocationResolver {
    constructor(
        private readonly pokeAPI: PokeAPI,
    ) { }

    @Query(() => Location, { nullable: true })
    async locationByID(@Arg("id") id: number): Promise<Location | null> {
        return await this.pokeAPI.get(id, Location.apiType) as Location;
    }

    @Query(() => Location, { nullable: true })
    async locationByName(@Arg("name") name: string): Promise<Location | null> {
        return await this.pokeAPI.get(name, Location.apiType) as Location;
    }

    @FieldResolver(() => [LocationArea])
    areas(@Root() location: Location) {
        const as = location.areas.map(async (la) => {
            return await this.pokeAPI.get(la.url) as LocationArea;
        })
        return Promise.all(as);
    }

    @FieldResolver(() => Region)
    async region(@Root() location: Location) {
        return await this.pokeAPI.get(location.region.url) as Region;
    }
}
