const mongoose = require('mongoose')

const CategorySchema = mongoose.Schema({
  title: {
    type: String,
    required: [ true, "Please provide a title" ]
  },
  
  technologies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Technology"
  }]
})

module.exports = mongoose.model('Category', CategorySchema)