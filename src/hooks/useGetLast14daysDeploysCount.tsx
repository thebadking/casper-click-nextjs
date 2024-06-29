import { useQuery } from "react-query";
import { getCountLast14daysDeploys } from "../services/httpReq";

export const useGetLast14daysDeploysCount = () =>
  useQuery("deploys-totals", () => getCountLast14daysDeploys(), {
    refetchOnWindowFocus: false,

    // cached request will stay "fresh" for 10 seconds
    staleTime: 10000,
  });
