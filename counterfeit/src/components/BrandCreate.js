import React, { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../images/_logo.png";
import axios from "axios";
// import { Web3Storage } from "web3.storage/dist/srcbundle.esm.min.js";
import { PhotographIcon } from "@heroicons/react/solid";

// const token = process.env.REACT_APP_WEB3_API_TOKEN;
// const client = new Web3Storage({ token });

function BrandCreate(props) {
	const [name, setName] = useState("");

	// formhooks
	const { register, handleSubmit } = useForm();
	const onSubmit = async (data) => {
		console.log(data);
		// console.log(data[0]);
		console.log("geredfdfdfr" + data.brandLogoImage[0].name);
		console.log("gerer" + data.brandLogoImage[0]);

		const formData = new FormData();
		formData.append("file", data.brandLogoImage[0]);
		console.log(Array.from(formData));
		// console.log((data.brandlogo)[0])
		// const cid = await client.put(formData);
		// console.log("stored files with cid:", cid);
	};
	// end form hook
	function toggleNav() {
		props.toggle === true ? props.setToggle(false) : props.setToggle(true);
	}
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

				<div className="container max-auto px-5 lg:px-0  flex flex-col items-center w-full  bg-blue-200 rounded">
					{/* <div className="page-title text-3xl font-medium mb-5">
						<h1 className="border rounded w-full bg-cyan-200">Product</h1>
					</div> */}

					{/* <div
						name="home"
						className=" w-full  bg-zinc-200 flex flex-col h-screen-75 md:h-[70vh]  mt-5 rounded items-center"
					> */}

					{/* </div> */}
					<div className=" bg-gray-100 text-gray-800 antialiased px-4 py-2 flex flex-col justify-center sm:py-12 w-full md:w-3/5 mt-4 rounded-lg mb-5">
						<img
							src={logo}
							alt="logo"
							className=" block w-10 md:w-16 md:w-18 rounded-md mx-auto mt-2"
						/>
						<p className=" text-xl font-bold md:text-2xl   mx-auto mt-1 md:mt-6">
							Create Your Own Brand
						</p>
						<div className="mx-auto my-4 py-2">
							<p className="text-2xl md:text-2xl text-blue-700  my-1 md:my-2 ">
								Terms:
							</p>
							<p className="md:text-xl text-purple-600">
								- Brand Name Must Be Unique
							</p>
							<p className="md:text-xl text-purple-600">
								- One Account-One Brand
							</p>
						</div>

						<div className="relative py-1 md:py-3 sm:max-w-xl mx-auto text-center w-full md:w-3/5">
							<span className="text-2xl md:font-3xl text-gray-500 font-semibold">
								Register Brand
							</span>
							<div className="relative mt-4 bg-white shadow-md sm:rounded-lg text-left">
								<div className="h-2 bg-indigo-400 rounded-t-md"></div>
								<form className="py-6 px-8" onSubmit={handleSubmit(onSubmit)}>
									<label className="block font-semibold" htmlFor="brandName">
										Brand Name
									</label>
									<input
										{...register("brandName", { required: "Required" })}
										type="text"
										placeholder="Enter unique brand name"
										id="brandName"
										name="brandName"
										className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
									/>
									<span className="block mt-3 font-semibold">Brand Logo</span>
									<div className="flex flex-col border-2 border-dashed border-gray-400 rounded-md mt-5 items-center h-52 w-50">
										<PhotographIcon className="h-5 w-5 text-gray-500 mt-6 mb-3" />

										<p className="text-xl"> Drop files to upload</p>
										<p className="my-2 text-gray-400">or</p>
										<label
											className="bg-violet-600 text-white px-4 h-9 inline-flex items-center  rounded border border-gray-300 shadow-sm text-sm font-medium mb-6 cursor-pointer hover:bg-violet-300 hover:ring-2 hover:text-theme-black"
											htmlFor="brandLogo"
										>
											Select files
											<input
												{...register("brandLogoImage", {
													required: "Required",
												})}
												type="file"
												name="brandLogoImage"
												id="brandLogo"
												className="sr-only"
											/>
										</label>
									</div>
									<div className="flex justify-between items-baseline">
										<button
											className=" mt-4 bg-indigo-500 text-white py-2 px-6 rounded-lg mx-auto"
											type="submit"
										>
											Register
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default BrandCreate;
