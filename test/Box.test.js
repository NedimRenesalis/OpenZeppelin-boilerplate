// test/Box.test.js
// Load dependencies
const { expect } = require('chai');

// Start test block
describe('Box', function () {
  before(async function () {
    this.Box = await ethers.getContractFactory("Box");
  });

 beforeEach(async function () {
    this.box = await this.Box.deploy();
    await this.box.deployed();
  });
