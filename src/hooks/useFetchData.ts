import { config } from '@/constants/config';
import { useQuery } from 'react-query';

async function fetchData(url: string) {
  const response = await fetch(config.baseUrl+url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export function useFetchData(url: string) {
  return useQuery(['data', url], () => fetchData(url), {
    // You can add options here, like `staleTime`, `cacheTime`, etc.
    cacheTime: 1000,
    retry: 3,
  },);
}
