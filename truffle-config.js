const { settings } = require("cluster");
const Web3 = require("web3");

module.exports = {
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
  demo: {
    host: "eth",
    port: 7545,
    network_id: "*"
  },
  production: {
    provider: new Web3.providers.HttpProvider(process.env.REACT_APP_ETH_URL),
    network_id: "*",
  }
};
