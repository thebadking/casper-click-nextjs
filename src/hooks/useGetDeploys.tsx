import { useQuery } from "react-query";
import { getDeploys } from "../services/httpReq";
import { DeploysPayload } from "../types/deploys";

export const useGetDeploys = (page, contractPackage?: string) =>
  useQuery<DeploysPayload, Error>(
    `deploys-${contractPackage}-${page}`,
    () => getDeploys(page, undefined, contractPackage),
    {
      refetchOnWindowFocus: false,
      // cached request will stay "fresh" for 10 seconds
      staleTime: 10000,
    }
  );
