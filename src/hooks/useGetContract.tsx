import { useQuery } from "react-query";
import { getContract, getContractPackage } from "../services/httpReq";

import { ContractPackagePayload } from "../types/contracts";

export const useGetContract = id =>
  useQuery<ContractPackagePayload, Error>(
    `contract-${id}`,
    () => getContract(id),
    {
      refetchOnWindowFocus: false,
      enabled: Boolean(id),
      // cached request will stay "fresh" for 10 seconds
      staleTime: 10000,
    }
  );
