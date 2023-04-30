var SimpleStorage = artifacts.require("SimpleStorage");
var HashStorage = artifacts.require("HashStorage.sol");

module.exports = function(deployer) { 
  deployer.deploy(SimpleStorage);
  deployer.deploy(HashStorage);
};
