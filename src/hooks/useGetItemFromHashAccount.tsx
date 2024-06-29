import { useQuery } from "react-query";
import {
  getDelegationDetailsByAccount,
  getItemFromHashAccount,
} from "../services/httpReq";
import { ItemFromHashAccountPayload } from "../types/account";

export const useGetItemFromHashAccount = (state_root_hash, account_hash) =>
  useQuery<ItemFromHashAccountPayload, Error>(
    `itemHash-${account_hash}`,
    () => getItemFromHashAccount(state_root_hash, account_hash),
    {
      refetchOnWindowFocus: false,
      enabled: Boolean(state_root_hash) && Boolean(account_hash),
      // cached request will stay "fresh" for 10 seconds
      staleTime: 10000,
    }
  );
