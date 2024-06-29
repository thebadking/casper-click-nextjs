import { useQuery } from "react-query";
import { getTrandingNFTCollections } from "../services/httpReq";
import { TrendingNFTCollectionPayload } from "../types";

export const useGetTrandingNFTCollections = () =>
  useQuery<TrendingNFTCollectionPayload, Error>(
    "trendingNFT",
    getTrandingNFTCollections,
    {
      refetchOnWindowFocus: false,
      // cached request will stay "fresh" for 10 seconds
      staleTime: 10000,
    }
  );
