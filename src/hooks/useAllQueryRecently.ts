import { API } from '@/constants/config/apis';

import { useFetchData } from './useFetchData';
const allQueryRecentlyPath = API.QUERY_REPORT.ALL_RECENTLY.path;

export function useAllQueryRecently() {
  return useFetchData(allQueryRecentlyPath);
}
