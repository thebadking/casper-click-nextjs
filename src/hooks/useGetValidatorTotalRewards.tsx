import { useQuery } from "react-query";
import { getValidatorTotalRewards } from "../services/httpReq";
import { RewardsValidatorsPayload } from "../types/validator";

export const useGetValidatorTotalRewards = publicKey =>
  useQuery<RewardsValidatorsPayload, Error>(
    `totalValidatorRewards-${publicKey}`,
    () => getValidatorTotalRewards(publicKey),
    {
      enabled: Boolean(publicKey),
    }
  );
