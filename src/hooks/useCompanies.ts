import { useQuery } from '@tanstack/react-query';
import { fetchCompanies } from '../api/companies';
import { tenMinutes } from '@app/utils/constants';

export const useCompanies = () => {
  return useQuery({
    queryKey: ['companies'],
    queryFn: fetchCompanies,
    staleTime: tenMinutes,
  });
};
