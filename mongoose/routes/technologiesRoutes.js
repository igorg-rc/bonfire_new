const router = require('express').Router()
const Technology = require('../models/Technology')
const Category = require('../models/Category')

router.get('/', async (req, res) => {
  // const { id } = req.params
  // const category = Category.findById(id)
  // const technologies = category.technologies
  const technologies = await Technology.find()
  try {
    res.status(200).json(technologies)
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router