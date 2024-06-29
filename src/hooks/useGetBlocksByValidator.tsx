import { useQuery } from "react-query";
import {
  getBlocksByValidator,
  getRewardsByDelegator,
} from "../services/httpReq";
import { BlocksValidatorPayload } from "../types/validator";

export const useGetBlockssByValidator = (publicKey: string, page?: number) =>
  useQuery<BlocksValidatorPayload, Error>(
    `blocksByValidator-${publicKey}`,
    () => getBlocksByValidator(publicKey, page),
    {
      refetchOnWindowFocus: false,
      enabled: Boolean(publicKey),
      // cached request will stay "fresh" for 10 seconds
      staleTime: 10000,
    }
  );
