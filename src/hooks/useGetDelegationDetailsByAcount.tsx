import { useQuery } from "react-query";
import { getDelegationDetailsByAccount } from "../services/httpReq";
import { DelegationsDetailsPayload } from "../types/account";

export const useGetDelegationDetailsByAcount = id =>
  useQuery<DelegationsDetailsPayload, Error>(
    `delegation-${id}`,
    () => getDelegationDetailsByAccount(id),
    {
      refetchOnWindowFocus: false,
      enabled: Boolean(id),
      // cached request will stay "fresh" for 10 seconds
      staleTime: 10000,
    }
  );
