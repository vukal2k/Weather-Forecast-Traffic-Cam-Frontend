import WeatherForecast from "@/components/WeatherForcast";
import { useLocation } from "@/hooks/useLocation";
import { useWeatherForecast } from "@/hooks/useWeatherForecast";
import { LocationDto } from "@/models/location.dto";
import { DatePicker, Image, Select, Spin, TimePicker, Typography, message } from "antd";
import type { Dayjs } from 'dayjs';
import { useEffect, useState } from "react";
import styles from './style.module.css';
import Badge from "@/components/Badge";
import { useMyQueryRecently } from "@/hooks/useMyQueryRecently";
import { useAllQueryRecently } from "@/hooks/useAllQueryRecently";
import MyQueryRecently from "./components/MyQueryRecently";
import AllQueryRecently from "./components/AllQueryRecently";
import dayjs from "dayjs";

export default function Home() {
  const {setDate, setTime, data: locationData, isLoading, isError, date, time} = useLocation();
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
    setTime(time?.format('HH:mm:ss'));
    setWeatherForecastTime(time?.format('HH:mm:ss'));
  };

  const onSelectLocation = (value: string) => {
    const currLocationData: LocationDto = (locationData?.data ?? []).find((dt: LocationDto) => (dt.locationLongLat.latitude+'-'+dt.locationLongLat.longitude) === value)
    setCurrentLocation(currLocationData)
  }

  const onClickRecentlyBadge = (value: string)=>{
    onDateChange(dayjs(value))
    onTimeChange(dayjs(value))
  }

	return (
    <>
      {contextHolder}
      <div className="grid sm:grid-cols-3 grid-cols-2 gap-4 mt-4 p-8 bg-white p-4">
        <div className="sm:col-span-1">
          <DatePicker value={date ? dayjs(date):null} size="large" format={'DD-MMM-YYYY'} placeholder="Date" className="input input-bordered w-full" onChange={onDateChange}/>
        </div>
        <div className="sm:col-span-1">
          <TimePicker value={time ? dayjs(`2024-01-01 ${time}`):null} size="large" className="input input-bordered w-full" onChange={onTimeChange}/>
          <MyQueryRecently onClick={onClickRecentlyBadge}/>
          <AllQueryRecently onClick={onClickRecentlyBadge}/>
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