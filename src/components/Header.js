import Image from "next/image";
import {
	SearchIcon,
	MenuIcon,
	ShoppingCartIcon,
	LocationMarkerIcon,
} from "@heroicons/react/outline";

function Header() {
	return (
		<header>
			{/* top header */}
			<div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
				{/* logo */}

				<div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
					<Image
						src="https://links.papareact.com/f90"
						width={150}
						height={40}
						objectFit="contain"
						className="cursor-pointer"
					/>
				</div>

				{/* location */}

				<div className="text-white flex">
					<div className="text-white flex items-center justify-center">
						<LocationMarkerIcon width={20} />
					</div>
					<div className=" mx-2">
						<p className="text-sm">Deliver to</p>
						<p className="font-bold">Bangladesh</p>
					</div>
				</div>

				{/* search */}

				<div className="hidden sm:flex bg-yellow-400 items-center h-10 rounded-md flex-grow cursor-pointer hover:bg-yellow-500">
					<input
						type="text"
						className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-5"
					/>
					<SearchIcon className="p-4 h-12" />
				</div>

				{/* right div */}
				<div className="text-white flex">
					<div className="mx-3">
						<p className="text-sm">Hello Aal Emraan</p>
						<p className="font-bold">Account & Lists</p>
					</div>
					<div className="mx-3">
						<p className="text-sm">Returs</p>
						<p className="font-bold">& Orders</p>
					</div>
					<div className="mx-3">
						<p className="text-sm">Returs</p>
						<p className="font-bold">& Orders</p>
					</div>
					<div className="mx-3 flex">
						<div>
							<ShoppingCartIcon width={40} />
						</div>
						<p className="font-bold mt-4">Cart</p>
					</div>
				</div>
			</div>
			{/* bottom header */}
			<div></div>
		</header>
	);
}

export default Header;
