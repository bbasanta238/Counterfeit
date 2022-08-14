import React, { userRef } from "react";
import logo from "../images/_logo.png";
import bgImg from "../images/_auth-bg.png";
// import "../App.css"
// import '../index.css'
// importing heroicons
import {
	CloudUploadIcon,
	DocumentReportIcon,
	CurrencyDollarIcon,
	QrcodeIcon,
} from "@heroicons/react/solid";

function Main(props) {
	const burgerBtnRef = userRef;
	function toggleNav() {
		props.toggle === true ? props.setToggle(false) : props.setToggle(true);
	}
	// console.log(props.toggle);
	return (
		<>
			<div
				className={` main-container pt-5   bg-white  w-full duration-700 flex flex-col items-center ${
					props.toggle === false ? "relative" : props.addClass
				}`}
			>
				{/* mobile bar */}
				<div className="mobile-navbar-top mb-4 md:hidden md:min-w-[760px]">
					<div className="container mx-auto px-5 lg:px-0 flex items-center justify-between">
						<button
							ref={burgerBtnRef}
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

				<div className="container max-auto px-5 lg:px-0 mb-5 flex flex-col items-center ">
					{/* <div className="page-title text-3xl font-medium mb-5">
						<h1 className="border rounded w-full bg-cyan-200">Product</h1>
					</div> */}

					<div
						name="home"
						className="w-full  bg-zinc-200 flex flex-col justify-between md:h-[70vh] h-screen-75 mt-5 rounded"
					>
						<div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
							<div className="flex flex-col md:text-left text-center  justify-center md:items-start w-full px-2 py-8">
								<p className="text-2xl">
									Fake Product Detection & Ownership Transfer
								</p>
								<h1 className="py-3 text-5xl md:text-7xl font-bold md:text-left">
									SafeWind
								</h1>
								<p className="text-2xl">Buy Safe Use Branded Be Aware</p>
								<button className="bg-blue-500 hover:bg-blue-800 text-white font-bold rounded  py-3 px-6 sm:w-[60%] my-4 ">
									Get Started
								</button>
							</div>
							<div>
								<img className="w-full" src={bgImg} alt="/" />
							</div>
							<div
								className="absolute place-self-center  flex flex-col py-8 md:min-w-[760px] bottom-[-5%]
           						mx-2 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
          						 border border-slate-300 rounded-xl text-center shadow-xl md:mx-1 "
							>
								<p className="md:text-2xl md:font-semibold">Data Services</p>
								<div className="flex flex-col justify-between flex-wrap px-4 md:flex-row">
									<div className="flex flex-row">
										<p className="flex px-4 py-2 text-slate-500">
											<CloudUploadIcon className="h-6 text-indigo-600 " />
											Security
										</p>

										<p className="flex px-4 py-2 text-slate-500">
											<DocumentReportIcon className="h-6 text-indigo-600" />{" "}
											Report Analysis
										</p>
									</div>

									<div className="flex flex-row">
										<p className="flex px-4 py-2 text-slate-500">
											<CurrencyDollarIcon className="h-6 text-indigo-600" />{" "}
											Ownership
										</p>
										<p className="flex px-4 py-2 text-slate-500">
											<QrcodeIcon className="h-6 text-indigo-600" /> Product QR
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
		</>
	);
}

export default Main;
