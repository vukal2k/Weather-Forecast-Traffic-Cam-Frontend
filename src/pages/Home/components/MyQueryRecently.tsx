import Badge from "@/components/Badge";
import { useMyQueryRecently } from "@/hooks/useMyQueryRecently";
import { Flex } from "antd";

interface MyQueryRecentlyProps{
  onClick: (value: string) => void;
}

function MyQueryRecently(props: MyQueryRecentlyProps) {
  const {data: myRecentQueryData} = useMyQueryRecently();

  return <Flex gap={4}>
    {myRecentQueryData?.data.map((dt: string) => (          
      <Badge
        onClick={async () => props.onClick(dt)}
        count={dt}
        style={{
          backgroundColor: '#52c41a',
        }}
      />)
    )}
  </Flex>

}

export default MyQueryRecently;