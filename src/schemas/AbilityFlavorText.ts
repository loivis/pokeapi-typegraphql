import { ObjectType, Field } from "type-graphql";
import { Language } from "./Language";
import { VersionGroup } from "./VersionGroup";

@ObjectType()
export class AbilityFlavorText {
    @Field()
    flavorText: string;

    @Field(() => Language)
    language: Language;

    @Field(() => VersionGroup)
    versionGroup: VersionGroup;
}
