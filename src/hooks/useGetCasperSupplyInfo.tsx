import { useQuery } from "react-query";
import { getCasperSupplyInfo } from "../services/httpReq";
import { SupplyInformationsPayload } from "../types";

export const useGetCasperSupplyInfo = (intervalMs?: number) =>
  useQuery<SupplyInformationsPayload, Error>("supply", getCasperSupplyInfo, {
    refetchInterval: intervalMs,
  });
