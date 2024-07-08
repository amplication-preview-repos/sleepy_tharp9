import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TokenWhereInput = {
  id?: StringFilter;
  token?: StringNullableFilter;
  expiresAt?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
