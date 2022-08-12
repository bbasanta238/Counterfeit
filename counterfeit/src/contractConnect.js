import useWeb3 from "./hooks/Web3Client";

import Web3 from "web3";

import brandBuildContract from "./ABI/Brand.json";

const brandContract = async (account) => {
	const web3 = new Web3(window.ethereum);
	console.log(web3);
	const networkId = await web3.eth.net.getId();
	web3.eth.net.getNetworkType().then(console.log);
	console.log("contract networkid " + networkId);
	//returns object with all its methods and events
	const brandContract = new web3.eth.Contract(
		brandBuildContract.abi,
		brandBuildContract.networks[networkId].address
	);
	console.log("contractaddress" + brandContract);
	brandContract.methods.createBrand("Nike", "nikelogo").send({from:'0xbAbb1aF6517a83C9497370F71d6e80375a003450'})
	// brandConctract.methods
	// 	.createBrand("Nike", "nikelogo").call()
	// 	.then(console.log);
};

export default brandContract;
