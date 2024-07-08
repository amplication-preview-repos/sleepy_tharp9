import { SortOrder } from "../../util/SortOrder";

export type PasswordResetOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  expiresAt?: SortOrder;
  email?: SortOrder;
  token?: SortOrder;
};
