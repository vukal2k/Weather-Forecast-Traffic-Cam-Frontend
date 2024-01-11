import { API } from "@/constants/config/apis";
import moment from "moment-timezone";
import { useMemo, useState } from "react";
import { useFetchData } from "./useFetchData";

export function useWeatherForecast() {
  const [date, setDate] = useState<string>();
  const [time, setTime] = useState<string>();

  let url = useMemo(() => {
    let resultUrl = API.WEATHER_FORECAST.path;
    if (date && !time) {
      resultUrl += `?date=${date}`;
    }
    else if (date && time) {
      const dateTime = moment(`${date} ${time}`, 'yyyy-MM-dd hh:mm:ss').tz('Asia/Singapore').format('yyyy-MM-DDThh:mm:ss+08:00');
      resultUrl += `?dateTime=${encodeURIComponent(dateTime)}`;
    }
    return resultUrl;
  }, [date, time])

  return {
    ...useFetchData(url),
    setTime,
    setDate,
  };
}
