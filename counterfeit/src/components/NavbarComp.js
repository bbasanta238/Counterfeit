// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import UseWeb3 from "../hooks/Web3Client";

// function NavbarComp() {
// 	//loading status
// 	const [isLoading, setIsLoading] = useState(false);
// 	// error messages
// 	const [errorMessage, setErrorMessage] = useState("");

// 	// connecting with blockchain Network
// 	// const providerUrl =  "HTTP://127.0.0.1:7545";

// 	// get active account and balance data from useWeb3 custom hook
// 	const { connect, disconnect, provider, account } = UseWeb3(
// 		setIsLoading,
// 		setErrorMessage
// 	);
// 	return {
// 		connect,
// 		disconnect,
// 		provider,
// 		account,
// 		render: (
// 			<>
// 				<nav className="navbar navbar-expand-lg bg-light fixed-top" style={{font: "40px"}}>
// 					<div className="container-fluid">
// 						<Link className="navbar-brand" to="/">
// 							Navbar
// 						</Link>
// 						<button
// 							className="navbar-toggler"
// 							type="button"
// 							data-bs-toggle="collapse"
// 							data-bs-target="#navbarSupportedContent"
// 							aria-controls="navbarSupportedContent"
// 							aria-expanded="false"
// 							aria-label="Toggle navigation"
// 						>
// 							<span className="navbar-toggler-icon"></span>
// 						</button>
// 						<div
// 							className="collapse navbar-collapse"
// 							id="navbarSupportedContent"
// 						>
// 							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
// 								<li className="nav-item">
// 									<Link className="nav-link active" aria-current="page" to="/">
// 										Home
// 									</Link>
// 								</li>
// 								<li className="nav-item">
// 									<Link className="nav-link" to="about">
// 										about
// 									</Link>
// 								</li>
// 							</ul>
// 							<button
// 								type="button"
// 								className="btn btn-primary"
// 								onClick={account === null ? connect : disconnect}
// 							>
// 								{console.log(errorMessage.length)}
// 								{!isLoading &&
// 									account === null &&
// 									errorMessage.length === 0 &&
// 									"Connect to metamask"}
// 								{!isLoading &&
// 									errorMessage.length !== 0 &&
// 									"Connection is pending"}
// 								{!isLoading && account !== null && "Disconnect"}
// 								{isLoading && "Loading"}
// 							</button>
// 						</div>
// 					</div>
// 				</nav>

// 			</>
// 		),
// 	};
// }

// export default NavbarComp;
