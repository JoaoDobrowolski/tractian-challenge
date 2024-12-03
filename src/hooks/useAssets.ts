import { useQuery } from "@tanstack/react-query";
import { fetchAssets } from "../api/companies";
import { tenMinutes } from "@app/utils/constants";

export const useAssets = (companyId: string) => {
  return useQuery({
    queryKey: ["assets", companyId],
    queryFn: () => fetchAssets(companyId),
    staleTime: tenMinutes,
    enabled: !!companyId,
  });
};
