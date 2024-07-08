import { Verification as TVerification } from "../api/verification/Verification";

export const VERIFICATION_TITLE_FIELD = "token";

export const VerificationTitle = (record: TVerification): string => {
  return record.token?.toString() || String(record.id);
};
