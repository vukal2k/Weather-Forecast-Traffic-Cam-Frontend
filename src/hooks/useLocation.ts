import { API } from "@/constants/config/apis";
import moment from "moment-timezone";
import { useMemo, useState } from "react";
import { useFetchData } from "./useFetchData";

export function useLocation() {
  const [date, setDate] = useState<string>();
  const [time, setTime] = useState<string>();

  let url = useMemo(() => {
    let resultUrl = API.TRAFFIC_IMAGES.LOCATIONS.path;
    if (date && time) {
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
