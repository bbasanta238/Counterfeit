import React from "react";
import logo from "../images/_logo.png";

function Burger(props) {
	function toggleNav() {
		props.toggle === true ? props.setToggle(false) : props.setToggle(true);
	}
	return (
		<>
			<div className="mobile-navbar-top mb-4 md:hidden md:min-w-[760px]">
				<div className="container mx-auto px-5 lg:px-0 flex items-center justify-between">
					<button
						// ref={burgerBtnRef}
						className="burger text-gray-700 rounded-lg bg-gray-100 hover:bg-gray-300 p-2 "
						onClick={toggleNav}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 fill-current"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
					<div className="logo text-2xl font-black cursor-pointer md:py-3 mx-12">
						<span className="uppercase">Counterfeit</span>
					</div>
					<img
						src={logo}
						alt="logo"
						className="block w-10 md:w-16 rounded-full order-0 lg:order-1"
					/>
				</div>
			</div>
		</>
	);
}

export default Burger;
