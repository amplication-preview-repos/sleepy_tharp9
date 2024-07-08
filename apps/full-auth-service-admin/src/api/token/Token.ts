import { User } from "../user/User";

export type Token = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  token: string | null;
  expiresAt: Date | null;
  user?: User | null;
};
