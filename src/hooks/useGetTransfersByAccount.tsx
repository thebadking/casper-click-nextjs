import { useQuery } from "react-query";
import { getTransfersByAccount } from "../services/httpReq";
import { TransfersPayload } from "../types/transfers";

export const useGetTransfersByAccount = (publicKey, page) =>
  useQuery<TransfersPayload, Error>(
    `transfers-${publicKey}`,
    () => getTransfersByAccount(publicKey, page),
    {
      refetchOnWindowFocus: false,
      enabled: Boolean(publicKey),
      // cached request will stay "fresh" for 10 seconds
      staleTime: 10000,
    }
  );
