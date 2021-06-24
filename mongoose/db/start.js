const mongoose = require('mongoose')
const MONGO_URI = require('../../config/keys').MONGO_URI

module.exports = async () => {
  await mongoose.connect(MONGO_URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true
  }, () => console.log('Connected to Mongodb...'))
}
