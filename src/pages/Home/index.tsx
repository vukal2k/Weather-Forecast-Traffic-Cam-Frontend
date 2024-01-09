export default function Home() {
	return (
		<div className="p-4">
			<div className="grid grid-cols-3 gap-4 mb-4">
				<div className="col-span-1">
					<input type="text" placeholder="Date" className="input input-bordered w-full" />
				</div>
				<div className="col-span-1">
					<input type="text" placeholder="Time" className="input input-bordered w-full" />
				</div>
			</div>
		</div>
	);
}