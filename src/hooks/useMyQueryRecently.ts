import { API } from '@/constants/config/apis';

import { useFetchData } from './useFetchData';
const myQueryRecentlyPath = API.QUERY_REPORT.MY_RECENTLY.path;

export function useMyQueryRecently() {
  return useFetchData(myQueryRecentlyPath);
}
