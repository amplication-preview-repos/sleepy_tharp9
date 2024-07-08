import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TokenUpdateInput = {
  token?: string | null;
  expiresAt?: Date | null;
  user?: UserWhereUniqueInput | null;
};
