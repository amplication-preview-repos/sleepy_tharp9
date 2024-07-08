export type Verification = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string | null;
  token: string | null;
  expiresAt: Date | null;
};
