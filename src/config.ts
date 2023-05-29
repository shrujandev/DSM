const config = {
  ethUrl: process.env.REACT_APP_ETH_URL || "http://127.0.0.1:7545",
  ipfsApiUrl:
    process.env.REACT_APP_IPFS_API_URL || "http://127.0.0.1:5002/api/v0",
};

export default config;
