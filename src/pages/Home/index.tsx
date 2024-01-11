import WeatherForecast from "@/components/WeatherForcast";
import { useLocation } from "@/hooks/useLocation";
import { useWeatherForecast } from "@/hooks/useWeatherForecast";
import { LocationDto } from "@/models/location.dto";
import { DatePicker, Image, Select, Spin, TimePicker, message } from "antd";
import type { Dayjs } from 'dayjs';
import { useEffect, useState } from "react";
import styles from './style.module.css';

export default function Home() {
  const {setDate, setTime, data: locationData, isLoading, isError} = useLocation();
  const {setDate: setWatherForecastDate, setTime: setWeatherForecastTime, data: weatherForecastData, isError: weatherForecastIsError} =  useWeatherForecast();
  const [currentLocation, setCurrentLocation] = useState<LocationDto>();
  const [messageApi, contextHolder] = message.useMessage();


  useEffect(()=>{
    (isError || weatherForecastIsError) && messageApi.error(`Something went wrong`)
  }, [isError, weatherForecastIsError]);

  const onDateChange = (date: Dayjs|null) => {
    setDate(date?.format('YYYY-MM-DD'));
    setWatherForecastDate(date?.format('YYYY-MM-DD'));
  };
  const onTimeChange = (time: Dayjs|null) => {
    setTime(time?.format('hh:mm:ss'));
    setWeatherForecastTime(time?.format('hh:mm:ss'));
  };

  const onSelectLocation = (value: string) => {
    const currLocationData: LocationDto = (locationData?.data ?? []).find((dt: LocationDto) => (dt.locationLongLat.latitude+'-'+dt.locationLongLat.longitude) === value)
    setCurrentLocation(currLocationData)
  }

	return (
    <>
      {contextHolder}
      <div className="grid sm:grid-cols-3 grid-cols-2 gap-4 mt-4 p-8 bg-white p-4">
        <div className="sm:col-span-1">
          <DatePicker size="large" format={'DD-MMM-YYYY'} placeholder="Date" className="input input-bordered w-full" onChange={onDateChange}/>
        </div>
        <div className="sm:col-span-1">
          <TimePicker size="large" className="input input-bordered w-full" onChange={onTimeChange}/>
        </div>
        <div className="sm:col-span-2 col-span-3">
          <Select
            size="large"
            loading={isLoading}
            className={"input input-bordered w-full text-center text-bold "+styles['location-list']}
            showSearch
            onSelect={onSelectLocation}
            placeholder="Select a location"
            optionFilterProp="children"
            options={locationData?.data.map((dt: LocationDto) => ({
              value: dt.locationLongLat.latitude + '-'+dt.locationLongLat.longitude,
              label: dt.location,
            }))??[]}
          />
          <div className={styles['traffic-image']+' w-full mt-1'}>
            {isLoading && <Spin tip="Loading" size="large">
                <div className="content" />
              </Spin>
            }
            <Image
              className='w-full'
              src={currentLocation?.image}
            />		
          </div>	
        </div>
        <div className="sm:col-span-1 col-span-3">
          <WeatherForecast
            {...(weatherForecastData?.data ?? {})}
            location={currentLocation?.location ?? ''}
          />
        </div>
    </div>
    </>
	);
}