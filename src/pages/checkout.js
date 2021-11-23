import Header from "../components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import { useSession } from "next-auth/client";
import Currency from "react-currency-formatter";

function Checkout() {
	const items = useSelector(selectItems);
	const total = useSelector(selectTotal);

	const [session] = useSession();

	return (
		<div className="bg-gray-100">
			<Header />
			<main className="md:flex max-w-screen-xl mx-auto">
				{/* left div */}
				<div className="flex-grow m-5 shadow-sm">
					<Image
						src="https://links.papareact.com/ikj"
						width={1020}
						height={250}
					/>

					<div className="flex flex-col p-5 space-y-10 bg-white">
						<h1 className="text-3xl border-b pb-3">
							{items.length === 0
								? "Your shopping cart is empty."
								: `Your shopping cart items total ${items.length}`}
						</h1>
						{items.map((item, i) => (
							<CheckoutProduct item={item} key={i} index={i} />
						))}
					</div>
				</div>

				{/* right div */}
				<div className="flex flex-col bg-white p-10 shadow-md my-5 ">
					{items.length > 0 && (
						<>
							<h1 className="whitespace-nowrap text-xl font-semibold">
								Subtotal ({items.length} items):
								<span className="font-bold">
									<Currency quantity={total} curency="GBP" />
								</span>
							</h1>

							<button
								disabled={!session}
								className={`px-2 whitespace-nowrap py-1 rounded-sm text-white sm:text-xs md:text-base ${
									session
										? "bg-yellow-500 hover:bg-yellow-600"
										: "bg-gray-400 cursor-not-allowed"
								}`}
							>
								{session
									? "Proceed to Checkout"
									: "Please sign in"}
							</button>
						</>
					)}
				</div>
			</main>
		</div>
	);
}

export default Checkout;
