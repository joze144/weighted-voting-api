'use strict'

const mongoose = require('../../config/db-connection')
const paginatePlugin = require('mongoose-paginate')
const Schema = mongoose.Schema

const groupMemberSchema = new Schema({
  member_address: {
    type: String,
    required: true
  },
  group_address: {
    type: String,
    required: true
  },
  balance: {
    type: Number,
    required: true
  }
})

groupMemberSchema.plugin(paginatePlugin)
module.exports = mongoose.db.model('GroupMember', groupMemberSchema)
