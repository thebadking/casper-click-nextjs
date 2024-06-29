import { useQuery } from "react-query";
import { getDeploysFromBlock } from "../services/httpReq";
import { DeploysPayload } from "../types/deploys";

export const useGetDeploysByBlock = (id: string, page) =>
  useQuery<DeploysPayload, Error>(
    `deploys-block-${id}`,
    () => getDeploysFromBlock(id, page),
    {
      enabled: Boolean(id),
      refetchOnWindowFocus: false,
      // cached request will stay "fresh" for 10 seconds
      staleTime: 10000,
    }
  );
