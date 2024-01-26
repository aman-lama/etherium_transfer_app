require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url:'https://eth-sepolia.g.alchemy.com/v2/xnweXSaPJRS1rlooBmd5kjxhMbxhX5zU',
      accounts: ['de2131438930c2fae3ce30a014481ae18edb9e3bd0b1ed612e49433c318eea59']
    }
  }
}