// import logo from './logo.svg';
import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import AboutComp from "./components/AboutComp";
import init from "./hooks/Web3Client";
function App() {
	// connecting with blockchain Network
	// const providerUrl =  "HTTP://127.0.0.1:7545";

	//use of useEffect hook to use the function when ever it renders if the cirteria meets
	useEffect(() => {
		//connecting with metamask wallet
		// let provider = window.ethereum;

		// if (typeof provider !== "undefined") {
		// 	//if provider is not undefined then metamask is installed by user
		// 	//requestign to connect metamask with blockchain network
		// 	provider
		// 		.request({ method: "eth_requestAccounts" })
		// 		.then((accounts) => {
		// 			//since provider.request is a promise so we have to wiat for resolve
		// 			console.log(accounts);
		// 			// <h1>{accounts}</h1>
		// 		})
		// 		.catch((err) => {
		// 			console.log(err);
		// 		});
		// 	window.ethereum.on("accountsChanged", function (acccounts) {
		// 		console.log(acccounts);
		// 	});
		// }
		// const web3 = new Web3(provider);
	}, []);
	return (
		<>
			<Router>
				<NavbarComp />
				<Routes>
					{/* <Route path="/" element={<App/>}/> */}
					<Route path="/about" element={<AboutComp />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
