import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TokenCreateInput = {
  token?: string | null;
  expiresAt?: Date | null;
  user?: UserWhereUniqueInput | null;
};
