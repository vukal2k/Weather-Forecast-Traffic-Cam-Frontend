import Badge from "@/components/Badge";
import { useAllQueryRecently } from "@/hooks/useAllQueryRecently";
import { useMyQueryRecently } from "@/hooks/useMyQueryRecently";
import { Flex, Typography } from "antd";

interface AllQueryRecentlyProps{
  onClick: (value: string) => void;
}

function AllQueryRecently(props: AllQueryRecentlyProps) {
  const {data: allRecentQueryData} = useAllQueryRecently();

  return <Flex gap={4}>
    <Typography.Text className="mt-1" type="secondary">Others Recently: </Typography.Text>
    {allRecentQueryData?.data.map((dt: string) => (          
      <Badge
        onClick={async () => props.onClick(dt)}
        count={dt}
        style={{
          backgroundColor: 'hwb(205 6% 9%)',
        }}
      />)
    )}
  </Flex>

}

export default AllQueryRecently;