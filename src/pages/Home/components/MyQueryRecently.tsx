import Badge from "@/components/Badge";
import { useMyQueryRecently } from "@/hooks/useMyQueryRecently";
import { Flex } from "antd";
import dayjs from "dayjs";

interface MyQueryRecentlyProps{
  onClick: (value: string) => void;
}

function MyQueryRecently(props: MyQueryRecentlyProps) {
  const {data: myRecentQueryData} = useMyQueryRecently();

  return <Flex gap={4}>
    {myRecentQueryData?.data.map((dt: string) => (          
      <Badge
        onClick={async () => props.onClick(dt)}
        count={dayjs(dt).format('DD-MMM-YYYY HH:mm:ss')}
        style={{
          backgroundColor: '#52c41a',
        }}
      />)
    )}
  </Flex>

}

export default MyQueryRecently;