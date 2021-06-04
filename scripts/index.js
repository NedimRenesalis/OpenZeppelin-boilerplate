// scripts/index.js
async function main() {
const accounts = await ethers.provider.listAccounts();
console.log(accounts);
  // Query the list of enabled accounts.
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
