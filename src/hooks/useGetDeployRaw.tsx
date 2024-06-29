import { useQuery } from "react-query";
import { getDeployRaw } from "../services/httpReq";

export const useGetDeployRaw = id =>
  useQuery<any, Error>(`deploy-raw-${id}`, () => getDeployRaw(id), {
    refetchOnWindowFocus: false,
    enabled: Boolean(id),
    // cached request will stay "fresh" for 10 seconds
    staleTime: 10000,
  });
