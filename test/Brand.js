// import { assert } from "console";

const Brand = artifacts.require("Brand");
// import ree from "../test/errorHelper/exceptions"
// const revertHelper = require("../test/errorHelper/exceptions").catchRevert();
// const revertHelper = require("../errorHelper/exceptions.js").catchRevert;

contract("Brand", (accounts) => {
	let brand;
	let BrandInstance;

	before(async () => {
		brand = await Brand.deployed();
		BrandInstance = await Brand.new(accounts[1]);
		// console.log(BrandInstance);
	});
	// unit testings each function of smartcontract
	// brand creation
	it("should create a brand", async () => {
		const result = await BrandInstance.createBrand("Jordan", "Jordonlogo", {
			from: accounts[1],
		});
		// console.log(result.logs);
		// console.log("logs" + result.logs[0].args._owner);
		assert.equal(result.logs[0].args._brandName, "Jordan");
		// assert.equal(result.logs[0].args._logo,'Jordanlogo');
	});

	// brand name uniqueness
	it("should not create brand with already used name ", async () => {
		let err = null;
		try {
			await BrandInstance.createBrand("Jordan", "Jordonlogo", {
				from: accounts[1],
			});
			await BrandInstance.createBrand("Jordan", {
				from: accounts[2],
			});
			// assert(false);
			// assert.fail("transacation throws error");
		} catch (error) {
			err = error;
			// console.log("error happening");
			// console.log(err);
			// assert.include(err.message);
		}
		assert.ok(err, "error");
	});
	//
	it("should not create two or more brand for single address ", async () => {
		let err = null;
		try {
			await BrandInstance.createBrand("Jordan", "Jordonlogo", {
				from: accounts[1],
			});
			await BrandInstance.createBrand("Nike", {
				from: accounts[2],
			});
			// assert(false);
			// assert.fail("transacation throws error");
		} catch (error) {
			err = error;
			// console.log("error happening");
			// console.log(err);
			// assert.include(err.message);
		}
		assert.ok(err, "error");
	});
});
