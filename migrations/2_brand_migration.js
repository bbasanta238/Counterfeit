const brand = artifacts.require("Brand");

module.exports = function (deployer) {
	deployer.deploy(brand);
};
