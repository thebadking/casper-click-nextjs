import { useQuery } from "react-query";
import { getAuctionMetrics } from "../services/httpReq";
import { AuctionMetricsPayload } from "../types";

export const useGetAuctionMetrics = (intervalMs?: number) =>
  useQuery<AuctionMetricsPayload, Error>("metrics-auction", getAuctionMetrics, {
    refetchInterval: intervalMs,
  });
