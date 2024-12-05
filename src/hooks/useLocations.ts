import { useQuery } from "@tanstack/react-query";
import { fetchLocations } from "../api/companies";
import { tenMinutes } from "@app/utils/constants";

export const useLocations = (companyId: string) => {
  return useQuery({
    queryKey: ["locations", companyId],
    queryFn: () => fetchLocations(companyId),
    staleTime: tenMinutes,
    enabled: !!companyId,
  });
};
