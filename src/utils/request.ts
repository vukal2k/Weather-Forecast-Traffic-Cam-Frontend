import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
import qs from 'qs';

import { config } from '@/constants/config';

export interface Request<T> {
  data?: T | null;
  url?: string;
  options?: AxiosRequestConfig;
}

export type ResponseData<T> = AxiosResponse<T> | T | null;

const contentType = 'Content-Type';

export const defaultOptions: AxiosRequestConfig = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    [contentType]: 'application/json',
  },
  baseURL: config.baseUrl,
  paramsSerializer: {
    serialize: (params: object | null) =>
      qs.stringify(params, { arrayFormat: 'comma' }),
  },
};
/**
 * Util fetch function support Mock for development
 * @param {object} params - function params
 * @param {string} params.url - URL to fetch from
 * @param {object} params.options - axios request config
 * @returns {Promise} Promise for the response
 * @example
 * const response = await request("https://api.example.com/", options)
 */

export const request = async <T>({
  url = config.apis.defaultEndpoint,
  options = {},
}: Request<T>): Promise<T> => {
  const mergedOptions = {
    ...defaultOptions,
    ...options,
  };
  let requestUrl = url;

  const res: AxiosResponse<T> = await axios(requestUrl, mergedOptions);

  return res.data;
};

export default request;

