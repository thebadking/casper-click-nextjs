import { useQuery } from "react-query";
import { getCoinCommunityData } from "../services/httpReq";
import { CoinCommunityPayload } from "../types/coinGeckoTypes";

export const useGetCoinCommunityData = () =>
  useQuery<CoinCommunityPayload, Error>(
    "coinCommunity",
    () => getCoinCommunityData(),
    {
      refetchOnWindowFocus: false,
      // cached request will stay "fresh" for 10 seconds
      staleTime: 10000,
    }
  );
