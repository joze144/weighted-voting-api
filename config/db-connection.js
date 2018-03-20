'use strict'

const mongoose = require('mongoose')
const Promise = require('bluebird')
const config = require('./settings')
const logger = require('./logger')
const env = require('./settings').environments

const defaultEnv = env.TEST

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = defaultEnv
}

mongoose.Promise = Promise
mongoose.connect(config.database[process.env.NODE_ENV], { useMongoClient: true })

const db = mongoose.connection

db.on('error', (err) => {
  logger.error('DB Connection failed: ' + err)
})
db.once('open', () => {
  logger.info('DB Connection ok! Environment: ' + process.env.NODE_ENV)
})

mongoose.db = db

module.exports = mongoose
