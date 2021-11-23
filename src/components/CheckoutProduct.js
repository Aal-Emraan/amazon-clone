import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({ item, index }) {
	const { id, title, price, description, image, category, rating } = item;
	const [hasPrime] = useState(Math.random() < 0.5);

	const dispatch = useDispatch();

	const handleAdd = () => {
		item, dispatch(addToBasket(item));
	};

	const handleRemove = () => {
		item, dispatch(removeFromBasket({ index }));
	};

	return (
		<div className="grid grid-cols-5">
			<Image src={image} width={200} height={200} objectFit="contain" />
			<div className="col-span-3 mx-5">
				<h3 className="md:text-xl font-semibold mb-3">{title}</h3>
				<div className="flex">
					{Array(Math.round(rating.rate))
						.fill()
						.map((_, index) => (
							<StarIcon
								key={index}
								className="h-5 text-yellow-500"
							/>
						))}
				</div>
				<p className="text-xs line-clamp-3 my-2">{description}</p>
				<Currency quantity={price} currency="GBP" />
				{hasPrime && (
					<div className="flex space-x-2 items-center">
						<img
							loading="lazy"
							className="w-14"
							src="https://links.papareact.com/fdw"
							alt=""
						/>
						<p className="text-xs text-gray-500">
							Free Next-day delivery
						</p>
					</div>
				)}
			</div>
			<div className="flex flex-col space-y-5 mx-auto">
				<button
					onClick={handleAdd}
					className="mt-auto bg-yellow-500 text-white py-1 rounded-sm hover:bg-yellow-600 px-2 whitespace-nowrap sm:text-xs md:text-base"
				>
					Add to Cart
				</button>
				<button
					onClick={handleRemove}
					className="mt-auto bg-yellow-500 text-white py-1 rounded-sm hover:bg-yellow-600 px-2 whitespace-nowrap"
				>
					Remove from Cart
				</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
