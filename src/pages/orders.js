import moment from "moment";
import { getSession, useSession } from "next-auth/client";
import db from "../../firebase";
import Header from "../components/Header";
import Order from "../components/Order";

function Orders({ orders }) {
	console.log(orders);

	const session = useSession();

	return (
		<div>
			<Header />
			<main className="max-w-screen-lg mx-auto p-10">
				<h1 className="text-3xl border-b border-yellow-300 mb-2 pb-1">
					Your orders: {orders.length}
				</h1>
				{session ? (
					<h2>{orders.length} Orders</h2>
				) : (
					<h1>Please sign in to see your orders</h1>
				)}

				{orders.map((order) => (
					<Order orders={order} key={order.id} />
				))}
			</main>
		</div>
	);
}

export default Orders;

export async function getServerSideProps(context) {
	const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

	const session = await getSession(context);

	if (!session) {
		return {
			props: {},
		};
	}

	// firebase orders

	const stripeOrders = await db
		.collection("users")
		.doc(session.user.email)
		.collection("orders")
		.orderBy("timestapm", "desc")
		.get();

	// stripe orders

	const orders = await Promise.all(
		stripeOrders.docs.map(async (order) => ({
			id: order.id,
			amount: order.data().amount,
			amountShipping: order.data().amount_shipping,
			images: order.data().images,
			timestamp: moment(order.data().timestapm.toDate()).unix(),
			items: await stripe.checkout.sessions.listLineItems(order.id, {
				limit: 100,
			}),
		}))
	);

	return {
		props: { orders },
	};
}
