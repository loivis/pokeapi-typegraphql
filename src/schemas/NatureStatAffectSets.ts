import { ObjectType, Field } from "type-graphql";
import { NatureStatAffect } from "./NatureStatAffect";

@ObjectType()
export class NatureStatAffectSets {
    @Field(() => [NatureStatAffect])
    increase: NatureStatAffect[];

    @Field(() => [NatureStatAffect])
    decrease: NatureStatAffect[];
}
