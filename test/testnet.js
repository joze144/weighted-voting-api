'use strict'
// Force test environment
process.env.NODE_ENV = 'test'

const rpcHandler = require('../components/blockchain/rpcHandler')

rpcHandler.getBalanceOfMainAccount().then((result) => {
  console.log(result)
})
