import { ObjectType, Field } from "type-graphql";
import { Language } from "./Language";
import { VersionGroup } from "./VersionGroup";

@ObjectType()
export class VersionGroupFlavorText {
    @Field()
    text: string;

    @Field(() => Language)
    language: Language;

    @Field(() => VersionGroup)
    versionGroup: VersionGroup;
}
