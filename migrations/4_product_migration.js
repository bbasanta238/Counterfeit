const product = artifacts.require("Product");

module.exports = function (deployer) {
	deployer.deploy(product);
};
