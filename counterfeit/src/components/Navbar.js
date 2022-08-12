import logo from "../images/_logo.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import UseWeb3 from "../hooks/Web3Client";

function NavbarComp(props) {
	console.log("in navbar");
	//loading status
	const [isLoading, setIsLoading] = useState(false);
	// error messages
	const [errorMessage, setErrorMessage] = useState("");

	// connecting with blockchain Network
	// const providerUrl =  "HTTP://127.0.0.1:7545";

	// get active account and balance data from useWeb3 custom hook
	const { connect, disconnect, provider, account } = UseWeb3(
		setIsLoading,
		setErrorMessage
	);
	//toggle nav
	function toggleNav() {
		props.setToggle(false);
	}
	return {
		connect,
		disconnect,
		provider,
		account,
		render: (
			<>
				<div
					className={` main-navbar md:block bg-theme-black md:min-w-[760px] md:h-auto text-gray-100 w-full fixed lg:static left-0 top-0 py-6 lg:py-0 shadow-md ${
						props.toggle === false ? "hidden" : ""
					}`}
				>
					<div className="container mx-auto px-5 lg:px-0">
						<div className="flex flex-col  md:min-w-[760px] md:flex-row justify-between">
							<div className="logo text-2xl font-black cursor-pointer text-center py-0 md:py-3">
								<span
									className="inline-block md:min-w-[760px] md:hidden rotate-45 text-6xl font-thin absolute top-2 left-10 "
									onClick={toggleNav}
								>
									+
								</span>
								<span className="uppercase">Counterfeit</span>
							</div>
							<div className="navbar  order-1 md:order-0  md:py-1">
								<ul className="flex flex-col md:flex-row md:items-center">
									<li>
										<Link
											to="/"
											className="block font-medium text-gray-200 w-full p-3  hover:bg-violet-700  hover:rounded lg:bg-opacity-50  transition-all duration-200"
											onClick={toggleNav}
										>
											<span>Home</span>
										</Link>
									</li>
									<li>
										<Link
											to="/about"
											className="block font-medium text-gray-200 w-full p-3 hover:bg-violet-700  hover:rounded lg:bg-opacity-50  transition-all duration-200"
											onClick={toggleNav}
										>
											<span>About</span>
										</Link>
									</li>
									<li>
										<Link
											to="/createbrand"
											className="block font-medium text-gray-200 w-full p-3 hover:bg-violet-700 hover:rounded lg:bg-opacity-50 transition-all duration-200"
											onClick={toggleNav}
										>
											<span>Brand</span>
										</Link>
									</li>
									<li>
										<button
											className="font-medium text-gray-200 p-3  hover:bg-violet-700  hover:rounded lg:bg-opacity-50 transition-all duration-200"
											onClick={account === null ? connect : disconnect}
										>
											{/* Connect Wallet */}
											{!isLoading &&
												account === null &&
												errorMessage.length === 0 &&
												"Connect Wallet"}
											{!isLoading &&
												errorMessage.length !== 0 &&
												"Connection is pending"}
											{!isLoading && account !== null && "Disconnect"}
											{isLoading && "Loading"}
										</button>
									</li>
								</ul>
							</div>
							<div className="flex   items-center space-x-3 p-[8px] cursor-pointer   md:order-1  ">
								<div className="flex  flex-col  md:flex-row md:items-center cursor-pointer space-y-3 md:space-y-0 relative md:space-x-3">
									<div className="flex items-center order-1 lg:order-1">
										<span className="">Magante</span>
									</div>
									<img
										src={logo}
										alt="logo"
										className="block w-16 md:w-8 rounded-full order-0 lg:order-1"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		),
	};
}

export default NavbarComp;
