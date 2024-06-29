import { useQuery } from "react-query";
import { getValidator } from "../services/httpReq";
import { ValidatorPayload } from "../types/validator";

export const useGetValidator = id =>
  useQuery<ValidatorPayload, Error>(`validator-${id}`, () => getValidator(id), {
    refetchOnWindowFocus: false,
    enabled: Boolean(id),
    // cached request will stay "fresh" for 10 seconds
    staleTime: 10000,
  });
