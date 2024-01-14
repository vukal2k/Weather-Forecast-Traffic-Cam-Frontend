import dayjs from 'dayjs';

import Badge from '@/components/Badge';
import { useMyQueryRecently } from '@/hooks/useMyQueryRecently';

interface MyQueryRecentlyProps {
  onClick: (value: string) => void;
}

function MyQueryRecently(props: MyQueryRecentlyProps) {
  const { data: myRecentQueryData } = useMyQueryRecently();
  return (
    <div className="flex flex-col gap-x-2 sm:flex-row">
      {myRecentQueryData?.data.map((dt: string) => (
        <Badge
          onClick={async () => props.onClick(dt)}
          count={dayjs(dt).format('DD-MMM-YYYY HH:mm:ss')}
          style={{
            backgroundColor: '#52c41a',
          }}
        />
      ))}
    </div>
  );
}

export default MyQueryRecently;
