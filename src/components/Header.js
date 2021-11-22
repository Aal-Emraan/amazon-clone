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

				<div className="text-white sm:hidden">
					<MenuIcon width={40} />
				</div>

				<div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
					<Image
						src="https://links.papareact.com/f90"
						width={130}
						height={35}
						objectFit="contain"
						className="cursor-pointer"
					/>
				</div>

				{/* location */}

				<div className="text-white hidden md:flex">
					<div className="text-white flex items-end justify-center">
						<LocationMarkerIcon width={20} className="pb-1" />
					</div>
					<div className=" mx-2">
						<p className="text-xs">Deliver to</p>
						<p className="font-bold text-sm">Bangladesh</p>
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
				<div className="text-white flex items-center space-x-6 mx-6 text-xs whitespace-nowrap">
					<div className="cursor-pointer hover:underline">
						<p>Hello Aal Emraan</p>
						<p className="font-bold text-sm">Account & Lists</p>
					</div>
					<div className="cursor-pointer hover:underline hidden md:block">
						<p>Returs</p>
						<p className="font-bold text-sm">& Orders</p>
					</div>
					<div className="flex cursor-pointer hover:underline relative">
						<p className="absolute left-6 bottom-6 font-bold bg-yellow-600 w-4 h-4 text-center rounded-full">
							0
						</p>
						<div>
							<ShoppingCartIcon width={40} />
						</div>
						<p className="hidden md:inline font-bold mt-4">Cart</p>
					</div>
				</div>
			</div>

			{/* search for small device */}

			<div className=" sm:hidden bg-amazon_blue pb-2">
				<div className="flex bg-yellow-400 items-center h-10 rounded-md flex-grow cursor-pointer hover:bg-yellow-500 mx-3">
					<input
						type="text"
						className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-5"
					/>
					<SearchIcon className="p-4 h-12" />
				</div>
			</div>
			{/* bottom header */}
			<div className="text-white space-x-3 bg-amazon_blue-light hidden md:flex items-center p-2 pl-6 whitespace-nowrap">
				<p className="flex items-center">
					<MenuIcon width={30} />
					All
				</p>
				<p>Prime Videos</p>
				<p>Customer Service</p>
				<p>Registry</p>
				<p>Gift Cards</p>
				<p className="flex-grow">Sell</p>
				<p className="font-bold">Shop Early Black Friday Deals</p>
			</div>
			<div className="md:hidden bg-amazon_blue-light text-white flex justify-around p-2">
				<p>Deals</p>
				<p>Amazon Basics</p>
				<p>Bestsellers</p>
				<p>Livestreams</p>
			</div>
		</header>
	);
}

export default Header;
