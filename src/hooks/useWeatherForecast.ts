import moment from 'moment-timezone';
import { useMemo, useState } from 'react';

import { API } from '@/constants/config/apis';

import { useFetchData } from './useFetchData';

export function useWeatherForecast() {
  const [date, setDate] = useState<string>();
  const [time, setTime] = useState<string>();

  const url = useMemo(() => {
    let resultUrl = API.WEATHER_FORECAST.path;
    if (date && !time) {
      resultUrl += `?date=${date}`;
    } else if (date && time) {
      resultUrl += `?dateTime=${encodeURIComponent(moment(`${date} ${time}`, 'YYYY-MM-DD hh:mm:ss').toISOString())}`;
    }
    return resultUrl;
  }, [date, time]);

  return {
    ...useFetchData(url),
    setTime,
    setDate,
  };
}
