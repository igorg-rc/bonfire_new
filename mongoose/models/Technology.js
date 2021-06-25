const mongoose = require('mongoose')

const TechnologySchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title"]
  },
  imgUrl: {
    type: String,
    required: [true, 'Please provide an image']
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Technology', TechnologySchema)