const multer = require('multer')
const crypto = require('crypto')
const path = require('path')

const myStorage = multer.diskStorage({
  destination:(req, file, cb) => {
    cb(null, path.join("downloads/images/industries"))
  },
  filename: (req, file, cb) => {
    crypto.pseudoRandomBytes(16, (err, raw) => {
      if (err) return cb(err)

      cb(null, "img_" + Date.now() + "_" + file.originalname)
    })
  }
})

const upload = multer({
  storage: myStorage,
  limits: { fileSize: 10000000 }
})

module.exports = upload