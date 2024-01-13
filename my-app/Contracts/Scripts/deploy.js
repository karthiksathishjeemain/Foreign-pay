const { ethers }= require("hardhat");
async function main(){
    const [deployer]= await ethers.getSigners();
    console.log("Balance of deployer is :" + await deployer.getBalance())
    console.log(`address of deployer is ${deployer.address}`)
    const Stablecoin = await ethers.getContractFactory("Stablecoin")
    const StablecoinHolder = await ethers.getContractFactory("StablecoinHolder")
    const DSC =  await Stablecoin.deploy()
    const stablecoinHolder = await StablecoinHolder.deploy()
    saveFrontendFiles(DSC,"Stablecoin")
    saveFrontendFiles(stablecoinHolder,"StablecoinHolder")
  }
  function saveFrontendFiles(contract, name) {
    const fs = require("fs");
    const contractsDir = __dirname + "/../../app/contractsData";
  
    if (!fs.existsSync(contractsDir)) {
      fs.mkdirSync(contractsDir);
    }
  
    fs.writeFileSync(
      contractsDir + `/${name}-address.json`,
      JSON.stringify({ address: contract.address }, undefined, 2)
    );
  
    const contractArtifact = artifacts.readArtifactSync(name);
  
    fs.writeFileSync(
      contractsDir + `/${name}.json`,
      JSON.stringify(contractArtifact, null, 2)
    );
  }
  main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });