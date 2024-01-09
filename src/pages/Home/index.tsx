import { Input, Select } from "antd";

export default function Home() {
	return (
		<div className="grid sm:grid-cols-3 grid-cols-2 gap-4 mt-4">
			<div className="sm:col-span-1">
				<Input type="text" placeholder="Date" className="input input-bordered w-full" />
			</div>
			<div className="sm:col-span-1">
				<Input type="text" placeholder="Time" className="input input-bordered w-full" />
			</div>
			<div className="sm:col-span-2 col-span-3">
				<Select
					className="input input-bordered w-full"
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
				<Input type="text" placeholder="Time" className="input input-bordered w-full" />
			</div>
			<div className="col-span-3">
				<Input type="text" placeholder="Screenshot" className="input input-bordered w-full" />
			</div>
	</div>
	);
}