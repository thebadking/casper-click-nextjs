import { useQuery } from "react-query";
import { getContracts } from "../services/httpReq";
import { ContractsPayload } from "../types/contracts";

export const useGetContracts = page =>
  useQuery<ContractsPayload, Error>(
    `contracts-${page}`,
    () => getContracts(page),
    {
      refetchOnWindowFocus: false,
      // cached request will stay "fresh" for 10 seconds
      staleTime: 10000,
    }
  );
