'use strict'

module.exports.rpc_endpoint = {
  'test': 'http://localhost:8545',
  'staging': process.env.rpc_endpoint
}

module.exports.ws_endpoint = {
  'test': 'ws://localhost:8546',
  'staging': process.env.ws_endpoint
}
