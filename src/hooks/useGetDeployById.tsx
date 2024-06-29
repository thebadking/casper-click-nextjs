import { useQuery } from "react-query";
import { getBalanceFromUref, getDeployDetails } from "../services/httpReq";
import { DeployPayload } from "../types/deploy";

export const useGetDeployById = id =>
  useQuery<DeployPayload, Error>(`deploy-${id}`, () => getDeployDetails(id), {
    refetchOnWindowFocus: false,
    enabled: Boolean(id),
    // cached request will stay "fresh" for 10 seconds
    staleTime: 10000,
  });

getBalanceFromUref;
