import { get } from './requests';

export const fetchCompanies = () => get('companies');

export const fetchLocations = (companyId: string) => get(['companies', companyId, 'locations']);

export const fetchAssets = (companyId: string) => get(['companies', companyId, 'assets']);
