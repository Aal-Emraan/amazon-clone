import { CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Header from "../components/Header";

function success() {
	const router = useRouter();
	return (
		<div className="bg-gray-100 h-screen">
			<Header />
			<main className="max-w-screen-lg mx-auto mt-8">
				<div className="flex flex-col p-10 items-center bg-white">
					<div className="flex items-center space-x-2 mb-5">
						<CheckCircleIcon className="text-green-600 h-10" />
						<h1 className="text-3xl">
							Thank you, your order has been confirmed!
						</h1>
					</div>
					<p className="mb-8">
						Thank you for your order. You will get your order
						delivered within commited time. Hope you will get a best
						user experience with us. We are waiting to heir your
						thoughts about us so that we can improve us to give
						better customer support. Send us any of your valuable
						suggestions. We will really glad to heir that.
					</p>
					<button
						onClick={() => router.push("/orders")}
						className="bg-yellow-500 text-white py-1 rounded-sm hover:bg-yellow-600 px-5"
					>
						Go to my order
					</button>
				</div>
			</main>
		</div>
	);
}

export default success;
