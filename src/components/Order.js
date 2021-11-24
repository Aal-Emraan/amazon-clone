import moment from "moment";
import Currency from "react-currency-formatter";

function Order({ orders }) {
	const { id, amount, amountShipping, items, images, timestamp } = orders;

	return (
		<div className="relative border rounded-md my-5">
			<div className="flex items-center space-x-10  p-5 bg-gray-100 text-sm text-gray-600">
				<div>
					<p className="font-bold text-xs">ORDER PLACED</p>
					<p>{moment.unix(timestamp).format("DD MM YYYY")}</p>
				</div>
				<div>
					<p className="text-xs font-bold">TOTAL</p>
					<p>
						<Currency quantity={amount} currency="GBP" /> = Next day
						delivery{" "}
						<Currency quantity={amountShipping} currency="GBP" />
					</p>
				</div>
				<p className="text-sm whitespace-nowrap sm:text-xl self-end text-right flex-1 text-blue-500">
					{items.data.length} items
				</p>
				<p className="absolute top-2 right-2 w-40 lg:w-72 text-xs whitespace-nowrap truncate">
					ORDER # {id}
				</p>
			</div>
			<div className="p-5 sm:p-10">
				<div className="flex space-x-6 overflow-x-auto">
					{images.map((image) => (
						<img
							src={image}
							className="h-20 sm:h-32 object-contain"
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Order;
