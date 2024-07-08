import { InputJsonValue } from "../../types";
import { TokenUpdateManyWithoutUsersInput } from "./TokenUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  tokens?: TokenUpdateManyWithoutUsersInput;
};
