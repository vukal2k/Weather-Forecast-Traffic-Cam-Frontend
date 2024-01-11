import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCloudBolt, faCloudSun, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Table } from "antd";
import dayjs from "dayjs";
import { periodColumns } from "./config";

export interface WeatherForecastProps {
  location: string;
  forecast: string;
  lowTemperature: number;
  hightTemperature: number;
  periods: WeatherForecastPeriodItem[]
}

export interface WeatherForecastPeriodItem {
  id?: number;
  dateTime: Date;
  westForeCast: string;
  eastForeCast: string;
  centraForeCast: string;
  southForeCast: string;
  northForeCast: string;
}

export default function WeatherForecast(props: WeatherForecastProps) {
  const renderMainForeCastIcon = ():IconProp=>{
    switch(props.forecast){
      case 'Thundery Showers':
        return faCloudBolt;
      case 'Cloudy':
        return faCloudSun;
      default:
        return faSun;
    }
  }
  
  return (
   <>
	<div className="w-full max-w-screen-sm bg-white p-10 rounded-xl ring-8 ring-white ring-opacity-40 bg-gray-100">
		<div className="flex justify-between">
			<div className="flex flex-col">
				<span className="text-4xl font-bold">{props.lowTemperature}°C - {props.hightTemperature}°C</span>
				<span className="font-semibold mt-1 text-gray-500">{props.location}</span>
			</div>
      <FontAwesomeIcon icon={renderMainForeCastIcon()} size="10x"/>
		</div>
		<div className="mt-12">
			{(props.periods ?? []).map((period, index) => <div key={index} className="flex flex-col items-center">

        <Card size="default" title={<div className="flex justify-center">
          <span className="font-semibold mt-1 text-sm">{dayjs(period.dateTime).format('hh:mm')}</span>
          <span className="font-semibold mt-1 ml-1 text-sm text-gray-400">{dayjs(period.dateTime).format('A')}</span>
        </div>}>
          <Table rowKey={"id"} dataSource={[period]} columns={periodColumns} pagination={false}/>
        </Card>        
			</div>)}
		</div>
	</div>
   </>
  )
}