import { Badge as AntBadge, BadgeProps as AntBadgeProps, Space } from "antd";
import styles from './styles.module.css';

interface BadgeProps extends AntBadgeProps {
  onClick: ()=>{}
}

function Badge (props: BadgeProps) {
  return <Space onClick={props.onClick}>
    <AntBadge className={styles['custom-badge']} {...props}/>
  </Space>
}

export default Badge;