import type { BadgeProps as AntBadgeProps } from 'antd';
import { Badge as AntBadge, Space } from 'antd';

import styles from './styles.module.css';

interface BadgeProps extends AntBadgeProps {
  onClick: () => void;
}

function Badge(props: BadgeProps) {
  return (
    <Space onClick={props.onClick}>
      <AntBadge className={styles['custom-badge']} {...props} />
    </Space>
  );
}

export default Badge;
