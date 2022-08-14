// import logo from './logo.svg';
// import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComp from "./components/Navbar";
import Main from "./components/Main";
import AboutComp from "./components/AboutComp";
import brandContract from "./contractConnect";
import BrandCreate from "./components/BrandCreate";
import Burger from "./components/Burger";

import ipfs_upload from "./client/api/ipfs_upload";
// import UseWeb3 from "./hooks/Web3Client";
function App() {
	const [toggle, setToggle] = useState(false);
	const { account, render } = NavbarComp({ setToggle });

	function onRouteCLick() {
		console.log("from");
		console.log(toggle);
		setToggle("false");
		console.log(toggle);
	}
	console.log(account);
	return (
		<>
			<Router>
				{render}
				{/* <Burger toggle={toggle} setToggle={setToggle} /> */}

				<Routes>
					<Route
						path="/"
						element={
							<Main
								addClass="left-24 top-8 overflow-hidden rotate-6 rounded-2xl shadow-3xl fixed"
								toggle={toggle}
								setToggle={setToggle}
							/>
						}
					/>

					{/* <Route path="/" element={<App/>}/> */}
					<Route
						exact
						path="/about"
						element={
							<AboutComp
								addClass="left-24 top-8 overflow-hidden rotate-6 rounded-2xl shadow-3xl fixed"
								toggle={toggle}
								setToggle={setToggle}
							/>
						}
					/>
					<Route
						exact
						path="/createbrand"
						element={
							<BrandCreate
								addClass="left-24 top-8 overflow-hidden rotate-6 rounded-2xl shadow-3xl fixed"
								toggle={toggle}
								setToggle={setToggle}
							/>
						}
						onClick={onRouteCLick}
					/>

					{/* <Route exact path="client/api/ipfs_upload/" element={<ipfs_upload/>} /> */}
				</Routes>
				{/* <button className="btn btn-secondary" onClick={brandContract}>
					Connect to smartContract
				</button> */}
			</Router>
		</>
	);
}

export default App;
