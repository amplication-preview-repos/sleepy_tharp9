import { SortOrder } from "../../util/SortOrder";

export type VerificationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  email?: SortOrder;
  token?: SortOrder;
  expiresAt?: SortOrder;
};
