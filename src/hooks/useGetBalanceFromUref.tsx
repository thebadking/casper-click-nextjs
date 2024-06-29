import { useQuery } from "react-query";
import { getBalanceFromUref } from "../services/httpReq";
import { BalancePayload } from "../types/account";

export const useGetBalanceFromUref = (state_root_hash, uref) =>
  useQuery<BalancePayload, Error>(
    `balance-${uref}`,
    () => getBalanceFromUref(state_root_hash, uref),
    {
      refetchOnWindowFocus: false,
      enabled: Boolean(state_root_hash) && Boolean(uref),
      // cached request will stay "fresh" for 10 seconds
      staleTime: 10000,
    }
  );

getBalanceFromUref;
