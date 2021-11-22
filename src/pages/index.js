import Head from "next/head";
import { useReducer } from "react";
import Header from "../components/Header";
import CountReducer from "../countReducer/CountReducer";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Head>
				<title>Amazon</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<CountReducer />
		</div>
	);
}
