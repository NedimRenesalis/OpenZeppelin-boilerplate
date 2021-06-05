// hardhat.config.js
require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-truffle5");

const { alchemyApiKey, mnemonic } = require('./secrets.json');
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
};
