import { ObjectType, Field } from "type-graphql";
import { ContestComboDetail } from "./ContestComboDetail";

@ObjectType()
export class ContestComboSets {
    @Field(() => ContestComboDetail)
    normal: ContestComboDetail;

    @Field(() => ContestComboDetail)
    super: ContestComboDetail;
}
