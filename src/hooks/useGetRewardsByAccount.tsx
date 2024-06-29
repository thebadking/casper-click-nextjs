import { useQuery } from "react-query";
import { getRewardsByAccount } from "../services/httpReq";
import { RewardsPayload } from "../types/account";

export const useGetRewardsByAccount = (publicKey, page) =>
  useQuery<RewardsPayload, Error>(
    `rewards-account-${publicKey}`,
    () => getRewardsByAccount(publicKey, page),
    {
      refetchOnWindowFocus: false,
      enabled: Boolean(publicKey),
      // cached request will stay "fresh" for 10 seconds
      staleTime: 10000,
    }
  );
