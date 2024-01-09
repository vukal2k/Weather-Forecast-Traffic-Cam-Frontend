import WeatherForcast from "@/components/WeatherForcast";
import { DatePicker, Image, Input, Select, TimePicker } from "antd";

export default function Home() {
	return (
		<div className="grid sm:grid-cols-3 grid-cols-2 gap-4 mt-4 p-8 bg-white p-4 shadow-lg border-t-4 border-indigo-500">
			<div className="sm:col-span-1">
				<DatePicker size="large" format={'DD-MMM-YYYY'} placeholder="Date" className="input input-bordered w-full" />
			</div>
			<div className="sm:col-span-1">
				{/* <Input type="text" placeholder="Time" className="input input-bordered w-full" /> */}
				<TimePicker size="large" className="input input-bordered w-full"/>
			</div>
			<div className="sm:col-span-2 col-span-3">
				<Select
					size="large"
					className="input input-bordered w-full h-full"
					showSearch
					placeholder="Select a location"
					optionFilterProp="children"
					options={[
						{
							value: 'jack',
							label: 'Jack',
						},
						{
							value: 'lucy',
							label: 'Lucy',
						},
						{
							value: 'tom',
							label: 'Tom',
						},
					]}
				/>
			</div>
			<div className="sm:col-span-1 col-span-3">
				<WeatherForcast/>
			</div>
			<div className="col-span-3">
        <Image
          className="w-full"
          src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?`}
          placeholder={
            <Image
              preview={false}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
              className="w-full"
            />
          }
        />			
      </div>
	</div>
	);
}