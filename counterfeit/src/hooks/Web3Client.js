import Web3 from "web3";
import { useState, useEffect } from "react";

const useWeb3 = (setIsLoading, setErrorMessage) => {
	//web3 provider instance
	const [provider, setProvider] = useState(null); //initially web3 provider is null as no account is connected

	//address of active account
	const [account, setAccount] = useState(null);

	//handle on every account changed
	useEffect(() => {
		
		//if account is lock directly from metamask then account is set as undefined which is chaged to null
		if (account === undefined) {
			setAccount(null);
		}
	}, [account]);

	//connecting this function to a button component
	const connect = async () => {
		try {
			setIsLoading(true);
			setErrorMessage("");
			let metamaskInject = window.ethereum;
			//checking Metamask is installed or not and throw error if not found that is catched and error is shown using prompt
			if (typeof metamaskInject == "undefined") {
				throw new Error("Please Install Metamask");
			}
			//connecting metamask
			await window.ethereum.request({
				method: "eth_requestAccounts",
			});

			//connect metamask to web3.js and get a web3 provider instance
			const web3 = new Web3(metamaskInject); //instant of web3
			const accounts = await web3.eth.getAccounts();
			setAccount(accounts[0]);
			setProvider(web3);
			console.log("from web3" + accounts[0]);
			console.log("from web3 account" + account);

			//handling on account changed
			window.ethereum.on("accountsChanged", (accounts) => {
				setAccount(accounts[0]);
			});
		} catch (error) {
			//error code -3002 is Already processing eth_requestAccounts. Please wait. when the metamask connection async function gets terminated withour resolve
			if (error.code === -32002) {
				setErrorMessage("-32002");
				console.log("please retry");
			}
			window.alert(error.message);
			// console.log(error.message);
			setErrorMessage(error.message);
		} finally {
			
			setIsLoading(false);
		}
	};

	//connecting this button to disconnect to metamask
	const disconnect = () => {
		console.log("Disconnecting");
		setProvider(null);
		setAccount(null);
		// console.log(account);
	};
	return { connect, disconnect, provider, account };
};

export default useWeb3;
