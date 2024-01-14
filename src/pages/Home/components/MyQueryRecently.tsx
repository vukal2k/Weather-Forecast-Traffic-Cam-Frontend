import Badge from "@/components/Badge";
import { useMyQueryRecently } from "@/hooks/useMyQueryRecently";
import dayjs from "dayjs";

interface MyQueryRecentlyProps{
  onClick: (value: string) => void;
}

function MyQueryRecently(props: MyQueryRecentlyProps) {
  const {data: myRecentQueryData} = useMyQueryRecently();

  return <div className="flex flex-col sm:flex-row gap-x-2">
    {myRecentQueryData?.data.map((dt: string) => (          
      <Badge
        onClick={async () => props.onClick(dt)}
        count={dayjs(dt).format('DD-MMM-YYYY HH:mm:ss')}
        style={{
          backgroundColor: '#52c41a',
        }}
      />)
    )}
  </div>

}

export default MyQueryRecently;