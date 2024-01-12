import { API } from "@/constants/config/apis";
import { useFetchData } from "./useFetchData";
let myQueryRecentlyPath = API.QUERY_REPORT.MY_RECENTLY.path;

export function useMyQueryRecently() {
  

  return useFetchData(myQueryRecentlyPath);
}