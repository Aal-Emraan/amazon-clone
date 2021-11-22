import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useState } from "react";
import Currency from "react-currency-formatter";

function Product({ product }) {
	const { id, title, price, description, image, category, rating } = product;

	const [hasPrime] = useState(Math.random() < 0.5);
	return (
		<div className="relative flex flex-col m-5 bg-white p-10 z-30">
			<p className="absolute top-2 right-2 text-gray-400 italic">
				{category}
			</p>
			<Image src={image} width={200} height={200} objectFit="contain" />
			<h4 className="my-3">{title}</h4>
			<div className="flex">
				{Array(Math.round(rating.rate))
					.fill()
					.map((_, index) => (
						<StarIcon key={index} className="h-5 text-yellow-500" />
					))}
			</div>
			<p className="text-xs line-clamp-2 hover:line-clamp-none">
				{description}
			</p>
			<div className="mb-3">
				<Currency quantity={price} currency="GBP" />
			</div>
			{hasPrime && (
				<div className="flex space-x-2 items-center">
					<img
						className="w-14"
						src="https://links.papareact.com/fdw"
						alt=""
					/>
					<p className="text-xs text-gray-500">
						Free Next-day delivery
					</p>
				</div>
			)}
			<button className="mt-auto bg-yellow-500 text-white py-1 rounded-sm hover:bg-yellow-600">
				Add to Cart
			</button>
		</div>
	);
}

export default Product;
