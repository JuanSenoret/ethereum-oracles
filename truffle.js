var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat";

module.exports = {
  networks: {
    development: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "http://127.0.0.1:8545/", 0, 50);
      },
      network_id: '*',
      gas: 6721975
    }
    /*development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
  }*/
  },
  /*
  compilers: {
    solc: {
      version: "^0.4.25"
    }
  }*/
  compilers: {
    solc: {
      version: "^0.5.0", // A version or constraint - Ex. "^0.5.0"
      settings: {
        optimizer: {
          enabled: true,
          runs: 200   // Optimize for how many times you intend to run the code
        }
      }
    }
  }
};