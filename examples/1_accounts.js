// require('dotenv').config();
const { ethers } = require("ethers");
// si esta en produccion NO uses dotenv
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }
 

  // for ethereum `https://mainnet.infura.io/v3/${RPC_ETHEREUM}`
const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_BINANCE) 
const address = '0x96734B59e5C44cCBE026D835e090a96F9f1B69FD'

const main = async () => {
    const balance = await provider.getBalance(address)
    console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)
}

main()

