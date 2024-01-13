import { API } from "@/constants/config/apis";
import moment from "moment-timezone";
import { useMemo, useState } from "react";
import { useFetchData } from "./useFetchData";

export function useLocation() {
  const [date, setDate] = useState<string>();
  const [time, setTime] = useState<string>();

  let url = useMemo(() => {
    let resultUrl = API.TRAFFIC_IMAGES.LOCATIONS.path;
    debugger
    if (date && time) {
      // const dateTime = moment(`${date} ${time}`, 'YYYY-MM-DD HH:mm:ss').tz('Asia/Singapore').format('yyyy-MM-DDThh:mm:ss+08:00');
      resultUrl += `?dateTime=${encodeURIComponent(moment(`${date} ${time}`, 'YYYY-MM-DD HH:mm:ss').toISOString())}`;
    }
    return resultUrl;
  }, [date, time])

  return {
    ...useFetchData(url),
    setTime,
    setDate,
    date,
    time,
  };
}
