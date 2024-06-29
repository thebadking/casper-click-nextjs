import { useQuery } from "react-query";
import { getDelegationsListByAccount } from "../services/httpReq";
import { DelegationsPayload } from "../types/validators";

export const useGetDelegationsByAccount = (public_key, page) =>
  useQuery<DelegationsPayload, Error>(
    `delegations-${public_key}`,
    () => getDelegationsListByAccount(public_key, page),
    {
      enabled: Boolean(public_key),
    }
  );
