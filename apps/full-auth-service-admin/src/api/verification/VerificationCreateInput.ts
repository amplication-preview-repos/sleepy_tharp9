export type VerificationCreateInput = {
  email?: string | null;
  token?: string | null;
  expiresAt?: Date | null;
};
