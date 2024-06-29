import { useQuery } from "react-query";
import { getRichList } from "../services/httpReq";
import { RichList } from "../types/richlist";

export const useGetRichList = page =>
  useQuery<RichList[], Error>(
    `richlist-${page || 1}`,
    () => getRichList(page || 1),
    {
      refetchOnWindowFocus: false,
      // cached request will stay "fresh" for 10 seconds
      staleTime: 10000,
    }
  );
