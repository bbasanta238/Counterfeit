const product = artifacts.require("Product");

contract("Product", (accounts) => {
	let productContract;
	let productContractInstance;

	beforeEach(async () => {
		productContract = await product.deployed();
		productContractInstance = await product.new(accounts[0]);
	});

	//test to create a product
	it("should create a product", async () => {
		await productContractInstance.createBrand("nike", "nike.com/logo.png", {
			from: accounts[0],
		});

		const result = await productContractInstance.createProduct(
			new Date().getTime(),
			"air 500",
			{ from: accounts[0] }
		);
		const result1 = await productContractInstance.createProduct(
			new Date().getTime(),
			"ar 500",
			{ from: accounts[0] }
		);

		assert.equal(result.logs[0].args._owner, accounts[0]);
		assert.equal(result.logs[0].args._productId.toString(), 0);
		assert.equal(result1.logs[0].args._productId.toString(), 1);
		console.log(result.logs[0].args._productId);
		console.log(result1.logs[0].args._productId);
		// AuthenticatorAssertionResponse.equal(res.logs[0].args._
		//     )
	});

	//stop creating a product without brand
	it("should not create product without brand", async () => {
		productContract = await product.deployed();
		productContractInstance = await product.new(accounts[0]);
		// brand creation with account[0]
		const result = await productContractInstance.createBrand(
			"nike",
			"nike.com/logo.png",
			{
				from: accounts[0],
			}
		);

		console.log(result.logs[0].args._brandName);
		try {
			await productContractInstance.createProduct(
				new Date().getTime(),
				"ar 500",
				{ from: accounts[3] }
			);
		} catch (error) {
			console.log("revert Error");
		}
	});
});
