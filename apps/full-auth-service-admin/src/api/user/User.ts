import { JsonValue } from "type-fest";
import { Token } from "../token/Token";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  tokens?: Array<Token>;
};
