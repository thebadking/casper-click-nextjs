import { useQuery } from "react-query";
import { getValidatorTotalDelegatorsRewards } from "../services/httpReq";
import { RewardsValidatorsPayload } from "../types/validator";

export const useGetValidatorTotalDelegatorsRewards = publicKey =>
  useQuery<RewardsValidatorsPayload, Error>(
    `delegatorsRewards-${publicKey}`,
    () => getValidatorTotalDelegatorsRewards(publicKey),
    {
      enabled: Boolean(publicKey),
    }
  );
