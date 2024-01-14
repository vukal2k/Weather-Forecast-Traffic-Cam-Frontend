import { API } from '@/constants/config/apis';
import type { LogLocationSearchBody } from '@/models/location-history.dto';

import { usePostData } from './usePostData';

const LogLocationSearch = API.QUERY_REPORT.LOG_LOCATION_SEARCH.path;

interface useLogLocationSearchProps {
  onError?: () => void | Promise<unknown>;
  onSuccess?: () => void | Promise<unknown>;
}

export function useLogLocationSearch({
  onError = () => {},
  onSuccess = () => {},
}: useLogLocationSearchProps) {
  return usePostData<LogLocationSearchBody>(LogLocationSearch, {
    onError,
    onSuccess,
  });
}
