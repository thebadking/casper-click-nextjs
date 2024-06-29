import { useQuery } from "react-query";
import { getCasperLiveNFTByAccount } from "../services/httpReq";
import { NFTByAccountPayload } from "../types/account";

export const useGetCasperLiveNFTByAccount = (accountHash, page) =>
  useQuery<NFTByAccountPayload, Error>(
    `NFT-cspr.live-${accountHash}`,
    () => getCasperLiveNFTByAccount(accountHash, page),
    {
      refetchOnWindowFocus: false,
      enabled: Boolean(accountHash),
      // cached request will stay "fresh" for 10 seconds
      staleTime: 10000,
    }
  );
