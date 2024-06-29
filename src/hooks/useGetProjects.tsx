import { useQuery } from "react-query";
import { getCasperProjects } from "../services/httpReq";
import { Projects } from "../types/projects";

export const useGetProjects = () =>
  useQuery<Projects, Error>(`projects`, () => getCasperProjects(), {
    refetchOnWindowFocus: false,
    // cached request will stay "fresh" for 10 seconds
    staleTime: 10000,
  });
