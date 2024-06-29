import { useQuery } from "react-query";
import { getRewardsByDelegator } from "../services/httpReq";
import { RewardsDelegatorPayload } from "../types/validator";

export const useGetRewardsByDelegator = (publicKey: string, page?: number) =>
  useQuery<RewardsDelegatorPayload, Error>(
    `rewardsByValidator-${publicKey}`,
    () => getRewardsByDelegator(publicKey, page),
    {
      refetchOnWindowFocus: false,
      enabled: Boolean(publicKey),
      // cached request will stay "fresh" for 10 seconds
      staleTime: 10000,
    }
  );
