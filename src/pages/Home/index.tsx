import { Input } from "antd";

export default function Home() {
	return (
		<div className="grid sm:grid-cols-3 grid-cols-2 gap-4 mt-4">
			<div className="sm:col-span-1">
				<Input type="text" placeholder="Date" className="input input-bordered w-full" />
			</div>
			<div className="sm:col-span-1">
				<Input type="text" placeholder="Time" className="input input-bordered w-full" />
			</div>
	</div>
	);
}