import { useQuery } from "react-query";
import { getBlockDetails } from "../services/httpReq";
import { BlockPayload } from "../types/block";

export const useGetBlockById = id =>
  useQuery<BlockPayload, Error>(`block-${id}`, () => getBlockDetails(id), {
    refetchOnWindowFocus: false,
    enabled: Boolean(id),
    // cached request will stay "fresh" for 10 seconds
    staleTime: 10000,
  });
