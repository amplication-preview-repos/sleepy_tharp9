import { SortOrder } from "../../util/SortOrder";

export type TokenOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  token?: SortOrder;
  expiresAt?: SortOrder;
  userId?: SortOrder;
};
