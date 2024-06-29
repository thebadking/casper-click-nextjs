import { useQuery } from "react-query";
import { getTotalRewardsByAccount } from "../services/httpReq";
import { TotalRewardAccountPayload } from "../types/account";

export const useGetTotalRewardsByAccount = id =>
  useQuery<TotalRewardAccountPayload, Error>(
    `rewards-by-account-${id}`,
    () => getTotalRewardsByAccount(id),
    {
      refetchOnWindowFocus: false,
      enabled: Boolean(id),
      // cached request will stay "fresh" for 10 seconds
      staleTime: 10000,
    }
  );
