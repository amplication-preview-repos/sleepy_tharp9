import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type VerificationWhereInput = {
  id?: StringFilter;
  email?: StringNullableFilter;
  token?: StringNullableFilter;
  expiresAt?: DateTimeNullableFilter;
};
