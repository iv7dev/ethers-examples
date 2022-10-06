const { ethers } = require("ethers");

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }

const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_BINANCE)

const main = async () => {
    const block = await provider.getBlockNumber()

    console.log(`\nBlock Number: ${block}\n`)

    const blockInfo = await provider.getBlock(block)

    console.log(blockInfo)

    const { transactions } = await provider.getBlockWithTransactions(block)

    console.log(`\nLogging first transaction in block:\n`)
    console.log(transactions[0])
}

main()