'use strict'

const mongoose = require('mongoose')
const Promise = require('bluebird')
const main = require('./main')
const logger = require('./logger')
const env = main.environments

const defaultEnv = env.TEST

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = defaultEnv
}

mongoose.Promise = Promise
mongoose.connect(main.database[process.env.NODE_ENV], { useMongoClient: true })

const db = mongoose.connection

db.on('error', (err) => {
  logger.error('DB Connection failed: ' + err)
})
db.once('open', () => {
  logger.info('DB Connection ok! Environment: ' + process.env.NODE_ENV)
})

mongoose.db = db

module.exports = mongoose
