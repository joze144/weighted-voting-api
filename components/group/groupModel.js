'use strict'

const mongoose = require('../../config/db-connection')
const paginatePlugin = require('mongoose-paginate')
const Schema = mongoose.Schema

const groupSchema = new Schema({
  group_address: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  description: {
    type: String
  },
  symbol: {
    type: String
  },
  owner_address: {
    type: String
  }
},
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  })

groupSchema.plugin(paginatePlugin)
module.exports = mongoose.db.model('Group', groupSchema)
