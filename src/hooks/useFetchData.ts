import { config } from '@/constants/config';
import { HEADER_KEY } from '@/constants/config/apis';
import { useQuery } from 'react-query';

async function fetchData(url: string) {
  const response = await fetch(config.baseUrl+url, {
    headers: {
      [HEADER_KEY.API_KEY]: localStorage.getItem(HEADER_KEY.API_KEY) ?? '',
    }
  });
  if (!response.ok) {
    // throw new Error('Network response was not ok');
    return
  }
  return response.json();
}

export function useFetchData(url: string, isEnable: boolean = true) {
  return useQuery(['data', url], () => fetchData(url), {
    // You can add options here, like `staleTime`, `cacheTime`, etc.
    cacheTime: 1000,
    retry: 1,
    enabled: isEnable,
  },);
}
