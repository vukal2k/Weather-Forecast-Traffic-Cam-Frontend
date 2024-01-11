import { API } from "@/constants/config/apis";
import { useFetchData } from "./useFetchData";
import moment from "moment-timezone";
import { useMemo, useState } from "react";

export function useLocation() {
  const [date, setDate] = useState<string>();
  const [time, setTime] = useState<string>();

  let url = useMemo(() => {
    let resultUrl = API.TRAFFIC_IMAGES.LOCATIONS.path;
    if(date && time){
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
