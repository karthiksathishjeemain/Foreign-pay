require("@nomiclabs/hardhat-ethers");
/** @type import('hardhat/config').HardhatUserConfig */
const SEPOLIA_ADDRESS_PASSWORD="dfe53bf1851cea29ee86ab0deec33dab01710c2c0d17cd64f797e20891261955"

module.exports = {
  
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/4e96d59ed45648c7bd892454e58cb039",
      accounts: [SEPOLIA_ADDRESS_PASSWORD],
      gas: 2100000,
      gasPrice: 140000000000,
    }
}};
