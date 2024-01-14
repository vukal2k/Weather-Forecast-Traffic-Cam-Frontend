import Badge from "@/components/Badge";
import { useAllQueryRecently } from "@/hooks/useAllQueryRecently";
import { Typography } from "antd";
import dayjs from "dayjs";

interface AllQueryRecentlyProps{
  onClick: (value: string) => void;
}

function AllQueryRecently(props: AllQueryRecentlyProps) {
  const {data: allRecentQueryData} = useAllQueryRecently();

  return <div className="flex flex-col sm:flex-row gap-x-2">
    <Typography.Text className="mt-1" type="secondary">Others Recently: </Typography.Text>
    {allRecentQueryData?.data.map((dt: string) => (          
      <Badge
        onClick={async () => props.onClick(dt)}
        count={dayjs(dt).format('DD-MMM-YYYY HH:mm:ss')}
        style={{
          backgroundColor: 'hwb(205 6% 9%)',
        }}
      />)
    )}
  </div>

}

export default AllQueryRecently;