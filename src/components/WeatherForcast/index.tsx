import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Flex, Table } from 'antd';
import dayjs from 'dayjs';

import { periodColumns, renderMainForeCastIcon } from './config';
import styles from './styles.module.css';

export interface WeatherForecastProps {
  location: string;
  forecast: string;
  lowTemperature: number;
  hightTemperature: number;
  periods: WeatherForecastPeriodItem[];
  locationForeCast: string;
}

export interface WeatherForecastPeriodItem {
  id?: number;
  dateTime: Date;
  westForecast: string;
  eastForecast: string;
  centraForecast: string;
  southForecast: string;
  northForecast: string;
}

export default function WeatherForecast(props: WeatherForecastProps) {
  return (
    <>
      <div className="w-full max-w-screen-sm rounded-xl bg-gray-300 p-4 ring-8 ring-white ring-opacity-40">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-[35px] font-bold">
              {props.lowTemperature ?? 'N/A'}°C -{' '}
              {props.hightTemperature ?? 'N/A'}°C
            </span>
            <span className="mt-1 font-semibold text-gray-500">
              {props.location}
            </span>
          </div>
          <div style={{ fontSize: '30%' }}>
            <FontAwesomeIcon
              icon={renderMainForeCastIcon(
                props.locationForeCast ?? props.forecast,
              )}
              size="10x"
            />
          </div>
        </div>
        <Flex vertical className="mt-12" gap={16}>
          {(props.periods ?? []).map((period, index) => (
            <div
              key={index}
              className={
                'flex flex-col items-center ' + styles['weather-forecast']
              }
            >
              <Card
                size="small"
                title={
                  <div className="flex justify-center">
                    <span className="mt-1 text-sm font-semibold">
                      {dayjs(period.dateTime).format('DD-MMM-YYYY hh:mm')}
                    </span>
                    <span className="ml-1 mt-1 text-sm font-semibold text-gray-400">
                      {dayjs(period.dateTime).format('A')}
                    </span>
                  </div>
                }
              >
                <Table
                  rowKey={'id'}
                  dataSource={[period]}
                  columns={periodColumns}
                  scroll={{ x: 380 }}
                  pagination={false}
                />
              </Card>
            </div>
          ))}
        </Flex>
      </div>
    </>
  );
}
