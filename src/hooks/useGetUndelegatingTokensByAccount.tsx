import { useQuery } from "react-query";
import { getTokenUndelegateByAccount } from "../services/httpReq";
import { TotalRewardAccountPayload } from "../types/account";

export const useGetUndelegatingTokensByAccount = (id, eraid) =>
  useQuery<TotalRewardAccountPayload, Error>(
    `undelegating-${id}`,
    () => getTokenUndelegateByAccount(id, eraid),
    {
      refetchOnWindowFocus: false,
      enabled: Boolean(id) && Boolean(eraid),
      // cached request will stay "fresh" for 10 seconds
      staleTime: 10000,
    }
  );
