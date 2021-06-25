const router = require('express').Router()
const mongoose = require('mongoose')
const Category = require('../models/Category')
const deleteFile = require('../../helpers/deleteFile')
const Technology = require('../models/Technology')
//===== multer ======//
const multer = require('multer')
const crypto = require('crypto')
const path = require('path')

const techStorage = multer.diskStorage({
  destination:(req, file, cb) => {
    cb(null, path.join("downloads/images/technologies"))
  },
  filename: (req, file, cb) => {
    crypto.pseudoRandomBytes(16, (err, raw) => {
      if (err) return cb(err)

      cb(null, "img_" + Date.now() + "_" + file.originalname)
    })
  }
})

const tech_upload = multer({
  storage: techStorage,
  limits: { fileSize: 10000000 }
})

//=============== Categories routes =================//

router.get('/', async (req, res) => {
  const categories = await Category.find()
  try {
    res.status(200).json(categories)
  } catch (error) {
    return res.status(500).json(error)
  }
})

router.get('/:catId', async (req, res) => {
  const { catId } = req.params
  try {
    const category = await Category.findById(catId).populate('technologies')
    if (!category) return res.status(404).json({ message: `Category with id ${catId} was not found.` })
    res.status(200).json(category)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.post('/', async (req, res) => {
  const { title } = req.body
  try {
    const category = new Category({ title })
    await category.save()
    res.status(201).json(category)
  } catch (error) {
    return res.status(500).json(error)
  }
})

router.patch('/:catId', async (req, res) => {
  const { title } = req.body
  const { catId } = req.params
  const category = await Category.findById(catId)
  try {
    category.title = title
    await category.save()
    res.status(201).json(category)
  } catch (error) {
    return res.status(500).json(error)
  }
})

router.delete('/:catId', async (req, res) => {
  const { catId } = req.params
  try {

    Technology
      .find({ categoryId: catId })
      .then(technologies => technologies.forEach(technology => deleteFile(technology.imgUrl)))
      .catch(error => console.log(error))

    const technologies = await Technology.find({ categoryId: catId }).deleteMany()
    
    await Category.findByIdAndRemove(catId)

    res.status(200).json("category was successfully deleted")
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
})


//=============== Technologies routes =================//
router.get('/:catId/tech', async (req, res) => {
  const { catId } = req.params
  const category = await Category.findById(catId)
  try {
    res.status(200).json(category.technologies)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.get('/:catId/tech/:techId', async (req, res) => {
  const { catId, techId } = req.params
  // const technology = await category.technologies.findById(techId)
  try {
    const category = await Category.findById(catId)
    if (!mongoose.Schema.Types.ObjectId.isValid(techId)) {
      return res.status(404).json(`Category with id ${id} was not found.`)
    }
    res.status(200).json(category)
  } catch (error) {
    return res.status(500).json(error)
  }
})

router.post('/:catId/tech', tech_upload.single('image'), async (req, res) => {
  const { catId } = req.params
  const { title } = req.body
  const image = req.file
  const imgUrl = image.path
  
  const category = await Category.findById(catId)
  const technology = new Technology({ title, imgUrl, categoryId: catId })
  await technology.save()
  
  try {
    category.technologies.push(technology)
    await category.save()
    res.status(201).json(technology)
  } catch (error) {
    return res.status(500).json(error)
  }
})

router.patch('/:catId/tech/:techId', tech_upload.single('image'), async (req, res) => {
  const { catId, techId } = req.params
  const { title } = req.body
  const image = req.file
  const new_imgUrl = image.path

  const technology = await Technology.findById(techId)
  deleteFile(technology.imgUrl)
  technology.title = title
  technology.imgUrl = new_imgUrl
  await technology.save()

  res.status(201).json(technology)
})

router.delete('/:catId/tech/:techId', async (req, res) => {
  const { catId, techId } = req.params
  
  const category = await Category.findById(catId)
  const technology = await Technology.findById(techId)
  deleteFile(technology.imgUrl)
  await technology.delete()
  await category.technologies.pop(techId)

  try {
    await category.save()
    res.status(201).json({ message: `Technology was was successfuly deleted` })
  } catch (error) {
    return res.status(500).json(error)
  }
})

module.exports = router