const mongoose = require('mongoose')

const MessageSchema = mongoose.Schema({
  senderName: {
    type:String,
    required: true
  },
  senderEmail: {
    type:String,
    required: true
  },
  messageBody: {
    type:String,
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Message', MessageSchema)