import { ObjectType, Field } from "type-graphql";
import { NaturePokeathlonStatAffect } from "./NaturePokeathlonStatAffect";

@ObjectType()
export class NaturePokeathlonStatAffectSets {
    @Field(() => [NaturePokeathlonStatAffect])
    decrease: NaturePokeathlonStatAffect[];

    @Field(() => [NaturePokeathlonStatAffect])
    increase: NaturePokeathlonStatAffect[];
}
