import { useQuery } from "react-query";
import { getValidatorsListByDelegator } from "../services/httpReq";
import { DelegatorsPayload } from "../types/validator";

export const useGetValidatorsListByDelegator = (
  publicKey: string,
  page?: number
) =>
  useQuery<DelegatorsPayload, Error>(
    `delegatorsByValidator-${publicKey}`,
    () => getValidatorsListByDelegator(publicKey, page),
    {
      refetchOnWindowFocus: false,
      enabled: Boolean(publicKey),
      // cached request will stay "fresh" for 10 seconds
      staleTime: 10000,
    }
  );
