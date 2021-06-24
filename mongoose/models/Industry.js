const mongoose = require('mongoose')

const IndustrySchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Industry', IndustrySchema)