import { useQuery } from "react-query";
import { getBlocks } from "../services/httpReq";
import { BlocksPayload } from "../types/blocks";

export const useGetBlocks = page =>
  useQuery<BlocksPayload, Error>(`blocks-${page}`, () => getBlocks(page), {
    refetchOnWindowFocus: false,

    // cached request will stay "fresh" for 10 seconds
    staleTime: 10000,
  });
