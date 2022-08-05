// import logo from './logo.svg';
import "./App.css";
// import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import AboutComp from "./components/AboutComp";
// import UseWeb3 from "./hooks/Web3Client";
function App() {
	const { render,account } = NavbarComp();
	return (
		<>
			<Router>
				{render}
				<Routes>
					{/* <Route path="/" element={<App/>}/> */}
					<Route path="/about" element={<AboutComp />} />
				</Routes>

				<h1>
					hi{account}
					{/* {console.log(connect)}
					{console.log(errorMessage)} */}
					{/* Accounts : {provider} ----{account} */}
				</h1>
			</Router>
		</>
	);
}

export default App;
