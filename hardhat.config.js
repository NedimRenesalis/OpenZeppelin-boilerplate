// hardhat.config.js
require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-truffle5");

const { alchemyApiKey, mnemonic } = require('./secrets.json');
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
 networks: {
ropsten: {
url: `https://eth-ropsten.alchemyapi.io/v2/${alchemyApiKey}`,
accounts: {mnemonic: mnemonic}
}
}, 
 solidity: "0.8.0",
};
