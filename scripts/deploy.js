const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  // Addresses for the Buyer, Seller, and Arbiter
  const buyer = "0x8bC3309D0104B8135981c714C485e8de0FA36193";
  const seller = "0x013C695D1A4B6Ddc3792e73a052212CB74760fB4";
  const arbiter = "0x15b100ADF7dd2b8070AC3c3c022DF48f73d5F5fc";

  console.log("Deploying Escrow contract with deployer:", deployer.address);
  console.log("Buyer:", buyer);
  console.log("Seller:", seller);
  console.log("Arbiter:", arbiter);

  // Fetch the contract factory for Escrow
  const Escrow = await hre.ethers.getContractFactory("Escrow");

  // Deploy the contract with the provided arguments
  const escrow = await Escrow.deploy(buyer, seller, arbiter);

  console.log("✅ Escrow contract deployed at:", escrow.target);
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
