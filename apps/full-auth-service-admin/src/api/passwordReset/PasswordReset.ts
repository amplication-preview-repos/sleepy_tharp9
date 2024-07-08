export type PasswordReset = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  expiresAt: Date | null;
  email: string | null;
  token: string | null;
};
