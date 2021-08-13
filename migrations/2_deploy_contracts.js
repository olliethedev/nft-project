const BN = require('bn.js');

const NFTContract = artifacts.require("./NFT.sol");

const NAME = "FUD Monsters";
const SYMBOL = "FM";
const COST = "50000000000000000";
const SUPPLY = "8888";
//example deploy params "FUD Monsters", "FM", 50000000000000000, 8888 
//example params for adminMintTo() function: ["0x1bBe810e56F135BbDF2a25d5CcE2C001Ea17Fa65", "0xC9626B4058dDECBf162382C2dDfF05977D9Bf8a3", "0x84E374204b408a82d75Cd705E31805e91f0f8eE4"]

module.exports = async (deployer, network, [owner]) => {
    console.log(`Deploying on ${network}...`);
    await deployer.deploy(NFTContract, NAME, SYMBOL, COST, SUPPLY);

    console.log("Deploying contract...");
    const Token = await NFTContract.deployed();
    console.log(`Deployed ${Token.address}`);
};

