const { version } = require("../package.json");
const harmony_mainnet = require("./tokens/harmony-mainnet.json");
const harmony_testnet = require("./tokens/harmony-testnet.json");

module.exports = function buildList() {
  const parsed = version.split(".");
  return {
    name: "DFK",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI:
      "https://firebasestorage.googleapis.com/v0/b/defi-kingdoms.appspot.com/o/tokens%2FJEWEL.png?alt=media&token=729d388d-1013-4bed-a194-77ba8e53e79d",
    keywords: ["defikingdoms", "community"],
    tokens: [...harmony_mainnet, ...harmony_testnet]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
};
