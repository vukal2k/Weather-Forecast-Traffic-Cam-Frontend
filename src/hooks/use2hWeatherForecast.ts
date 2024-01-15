import moment from 'moment-timezone';
import { useMemo } from 'react';

import { API } from '@/constants/config/apis';

import { useFetchData } from './useFetchData';

export function use2hWeatherForecast(
  lat?: number,
  long?: number,
  time?: string,
  date?: string,
) {
  const url = useMemo(() => {
    let resultUrl = API.WEATHER_FORECAST.NEXT_2_HOURS.path;
    resultUrl += `?dateTime=${encodeURIComponent(moment(`${date} ${time}`, 'YYYY-MM-DD hh:mm:ss').toISOString())}&lat=${lat}&long=${long}`;
    return resultUrl;
  }, [date, time, lat, long]);

  return {
    ...useFetchData(url),
  };
}
