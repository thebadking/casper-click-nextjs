import { useQuery } from "react-query";
import { getFriendlyMarketNFTByAccount } from "../services/httpReq";
import { FriendlyNFTByAccount } from "../types/nft";

export const useGetFriendlyMarketNFTByAccount = (accountHash, page) =>
  useQuery<FriendlyNFTByAccount, Error>(
    `NFT-friendly-${accountHash}`,
    () => getFriendlyMarketNFTByAccount(accountHash, page),
    {
      refetchOnWindowFocus: false,
      enabled: Boolean(accountHash),
      // cached request will stay "fresh" for 10 seconds
      staleTime: 10000,
    }
  );
