import { useQuery } from "react-query";
import { getStatusInfos } from "../services/httpReq";
import { StatusInfoPayload } from "../types";

export const useGetStatusInfos = (intervalMs?: number) =>
  useQuery<StatusInfoPayload, Error>("status", getStatusInfos, {
    refetchInterval: intervalMs,
  });
