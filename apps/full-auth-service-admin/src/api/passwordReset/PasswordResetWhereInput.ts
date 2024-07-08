import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PasswordResetWhereInput = {
  id?: StringFilter;
  expiresAt?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  token?: StringNullableFilter;
};
