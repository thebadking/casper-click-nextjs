import { useQuery } from "react-query";
import { getHistoryCasperPrice } from "../services/httpReq";
import { PriceHistoryPayload } from "../types";

export const useGetHistoryCasperPrice = (day: number, interval?: number) =>
  useQuery<PriceHistoryPayload, Error>(
    "prices",
    () => getHistoryCasperPrice(day),
    { refetchInterval: interval }
  );
