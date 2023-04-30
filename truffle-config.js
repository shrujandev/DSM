const { settings } = require("cluster");
const Web3 = require("web3");
const path = require("path");

module.exports = {
  contracts_build_directory: path.join(__dirname, "../src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
      gas: 5000000
    }
  },
  compilers: {
    solc: {
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200      // Default: 200
        },
      }
    }
  },
  production: {
    provider: new Web3.providers.HttpProvider(process.env.REACT_APP_ETH_URL),
    network_id: "*",
  }
};
