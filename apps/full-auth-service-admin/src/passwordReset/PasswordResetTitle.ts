import { PasswordReset as TPasswordReset } from "../api/passwordReset/PasswordReset";

export const PASSWORDRESET_TITLE_FIELD = "token";

export const PasswordResetTitle = (record: TPasswordReset): string => {
  return record.token?.toString() || String(record.id);
};
