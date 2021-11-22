import Head from "next/head";
import Header from "../components/Header";
import CountReducer from "../countReducer/CountReducer";

export default function Home() {
	return (
		<div className="">
			<Head>
				<title>Amazon</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
		</div>
	);
}
