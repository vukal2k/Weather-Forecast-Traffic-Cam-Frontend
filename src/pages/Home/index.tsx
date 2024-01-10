import WeatherForcast from "@/components/WeatherForcast";
import { useLocation } from "@/hooks/useLocation";
import { LocationDto } from "@/models/location.dto";
import { DatePicker, Image, Select, SelectProps, TimePicker } from "antd";
import type { Dayjs } from 'dayjs';
import { useState } from "react";
import styles from './style.module.css';

export default function Home() {
  const {setDate, setTime, data: locationData} = useLocation();
  const [currentImgUrl, setCurrentImgUrl] = useState<string>();

  const onDateChange = (date: Dayjs|null) => {
    setDate(date?.format('YYYY-MM-DD'));
  };
  const onTimeChange = (time: Dayjs|null) => {
    setTime(time?.format('hh:mm:ss'));
  };

  const onSelectLocation = (value: string) => {
    const currLocationData: LocationDto = (locationData?.data ?? []).find((dt: LocationDto) => (dt.locationLongLat.latitude+'-'+dt.locationLongLat.longitude) === value)
    setCurrentImgUrl(currLocationData.image)
  }

	return (
		<div className="grid sm:grid-cols-3 grid-cols-2 gap-4 mt-4 p-8 bg-white p-4 shadow-lg border-t-4 border-indigo-500">
			<div className="sm:col-span-1">
				<DatePicker size="large" format={'DD-MMM-YYYY'} placeholder="Date" className="input input-bordered w-full" onChange={onDateChange}/>
			</div>
			<div className="sm:col-span-1">
				{/* <Input type="text" placeholder="Time" className="input input-bordered w-full" /> */}
				<TimePicker size="large" className="input input-bordered w-full" onChange={onTimeChange}/>
			</div>
			<div className="sm:col-span-2 col-span-3">
				<Select
					size="large"
					className={"input input-bordered w-full h-full text-center text-bold "+styles['location-list']}
					showSearch
          onSelect={onSelectLocation}
					placeholder="Select a location"
					optionFilterProp="children"
					options={locationData?.data.map((dt: LocationDto) => ({
            value: dt.locationLongLat.latitude + '-'+dt.locationLongLat.longitude,
            label: dt.location,
          }))??[]}
				/>
			</div>
			<div className="sm:col-span-1 col-span-3">
				<WeatherForcast/>
			</div>
			<div className="col-span-2">
        <div className={styles['traffic-image']+' w-full'}>
          <Image
            className='w-full'
            src={currentImgUrl}
          />		
        </div>	
      </div>
	</div>
	);
}