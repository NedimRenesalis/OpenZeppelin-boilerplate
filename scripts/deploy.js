// scripts/deploy.js
async function main() {
// We get the contract to deploy
  const Box = await ethers.getContractFactory("Box");
  console.log("Deploying Box...");
