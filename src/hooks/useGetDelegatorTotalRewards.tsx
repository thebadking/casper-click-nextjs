import { useQuery } from "react-query";
import { getDelegatorsTotalRewards } from "../services/httpReq";
import { RewardsValidatorsPayload } from "../types/validator";

export const useGetDelegatorTotalRewards = publicKey =>
  useQuery<RewardsValidatorsPayload, Error>(
    `totalValidatorRewards-${publicKey}`,
    () => getDelegatorsTotalRewards(publicKey),
    {
      enabled: Boolean(publicKey),
    }
  );
