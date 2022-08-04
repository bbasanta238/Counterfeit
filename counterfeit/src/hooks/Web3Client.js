import { useState } from "react";
import Web3 from 'web3';

const useWeb3 = (setIsLoading, setErrorMessage)=>{
	//web3 provider instance
	const [provider, setProvider] = useState(null);//initially web3 provider is null as no account is connected

	//settign active account
	const [account, setAccount] = useState('');

	//connecting this function to a button component

	const connect = async () =>{
		try{
			setIsLoading(true);
			setErrorMessage('');
			//checking Metamask is installed or not and throw error if not found that is catched and error is shown using prompt
			if(!window.ethereum) throw new Error('Please Install Metamask');

			//connect metamask to web3.js and get a web3 provider instance
			const web3 = new We;
		}catch{
			
		}
	}
}