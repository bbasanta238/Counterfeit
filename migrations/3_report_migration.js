const report = artifacts.require("Report");

module.exports = function (deployer) {
	deployer.deploy(report);
};
