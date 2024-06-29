import { useQuery } from "react-query";
import { getDeploysByAccount } from "../services/httpReq";
import { DeploysPayload } from "../types/deploys";

export const useGetDeploysByAccount = (publicKey, page) =>
  useQuery<DeploysPayload, Error>(
    `deploys-${publicKey}`,
    () => getDeploysByAccount(publicKey, page),
    {
      refetchOnWindowFocus: false,
      enabled: Boolean(publicKey),
      // cached request will stay "fresh" for 10 seconds
      staleTime: 10000,
    }
  );
