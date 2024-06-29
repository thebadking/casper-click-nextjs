import { useQuery } from "react-query";
import { getContractPackage } from "../services/httpReq";

import { ContractPackagePayload } from "../types/contracts";

export const useGetContractPackage = id =>
  useQuery<ContractPackagePayload, Error>(
    `contract-package-${id}`,
    () => getContractPackage(id),
    {
      refetchOnWindowFocus: false,
      enabled: Boolean(id),
      // cached request will stay "fresh" for 10 seconds
      staleTime: 10000,
    }
  );
