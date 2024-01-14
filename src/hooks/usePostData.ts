import type { UseMutationOptions } from 'react-query';
import { useMutation } from 'react-query';

import { config } from '@/constants/config';
import { HEADER_KEY } from '@/constants/config/apis';

async function postData<T>(url: string, body: T) {
  const response = await fetch(config.baseUrl + url, {
    method: 'post',
    headers: {
      [HEADER_KEY.API_KEY]: localStorage.getItem(HEADER_KEY.API_KEY) ?? '',
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!response.ok) {
    // throw new Error('Network response was not ok');
    return;
  }
  return response.json();
}

export function usePostData<T>(
  url: string,
  options?: Omit<UseMutationOptions<T, unknown, unknown>, 'mutationFn'>,
) {
  return useMutation(
    ['data', url],
    (body: T) => postData<T>(url, body),
    options,
  );
}
