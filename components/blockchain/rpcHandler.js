'use strict'

const settings = require('../../config/bc-connection')
const Web3 = require('web3')

const web3 = new Web3(new Web3.providers.HttpProvider(settings.rpc_endpoint))
const eth = web3.eth;

async function getMembersOfGroup (groupAddress) {

}

async function getMemberBalance (memberAddress) {

}

async function getBalanceOfMainAccount() {
  return web3.fromWei(eth.getBalance(eth.accounts[0]), 'ether')
}

module.exports = {
  getMembersOfGroup,
  getMemberBalance,
  getBalanceOfMainAccount
}
