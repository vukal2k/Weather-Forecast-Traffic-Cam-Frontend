import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCloud, faCloudBolt, faCloudMoon, faCloudRain, faCloudSun, faSun, faUmbrella } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Flex } from "antd";

export const renderMainForeCastIcon = (forecast: string): IconProp => {
  switch (forecast) {
    case 'Thundery Showers':
      return faCloudBolt;
    case 'Cloudy':
      return faCloud;
    case 'Partly Cloudy (Day)':
      return faCloudSun;
    case 'Partly Cloudy (Night)':
      return faCloudMoon;
    case 'Light Rain':
      return faUmbrella
    case 'Showers':
      return faCloudRain;
    default:
      return faSun;
  }
}
export const periodColumns = [
  {
    title: <span>West</span>,
    dataIndex: 'westForecast',
    key: 'westForeCast',
    render: (value: string) => <Flex vertical>
      <FontAwesomeIcon color={'#718096'} icon={renderMainForeCastIcon(value)} size="lg"/>
      <span>{value}</span>
    </Flex>
  },
  {
    title: <span>East</span>,
    dataIndex: 'eastForecast',
    key: 'eastForeCast',
    render: (value: string) => <Flex vertical>
      <FontAwesomeIcon color={'#718096'} icon={renderMainForeCastIcon(value)} size="lg"/>
      <span>{value}</span>
    </Flex>
  },
  {
    title: <span>Central</span>,
    dataIndex: 'centraForecast',
    key: 'centraForeCast',
    render: (value: string) => <Flex vertical>
      <FontAwesomeIcon color={'#718096'} icon={renderMainForeCastIcon(value)} size="lg"/>
      <span>{value}</span>
    </Flex>
  },
  {
    title: <span>South</span>,
    dataIndex: 'southForecast',
    key: 'southForeCast',
    render: (value: string) => <Flex vertical>
      <FontAwesomeIcon color={'#718096'} icon={renderMainForeCastIcon(value)} size="lg"/>
      <span>{value}</span>
    </Flex>
  },
  {
    title: <span>North</span>,
    dataIndex: 'northForecast',
    key: 'northForeCast',
    render: (value: string) => <Flex vertical>
      <FontAwesomeIcon color={'#718096'} icon={renderMainForeCastIcon(value)} size="lg"/>
      <span>{value}</span>
    </Flex>
  },
];