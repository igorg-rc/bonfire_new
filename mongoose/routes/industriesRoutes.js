const router = require('express').Router()
const Industry = require('../models/Industry')
const upload = require('../../helpers/upload')
const deleteFile = require('../../helpers/deleteFile')

router.get('/', async (req, res) => {
  const industries = await Industry.find()
  try {
    res.status(200).json(industries)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.get('/:id',  async(req, res) => {
  const { id } = req.params
  const industry = await Industry.findById(id)
  
  try {
    if (!industry) return res.status(404).json({ message: `Industry with id ${id} was not found!` })
      
    res.status(200).json(industry)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.post('/', upload.single('image'), async (req, res) => {
  const { title } = req.body 
  const image = req.file
  const imgUrl = image.path
  console.log(image)
  
  try {
    const newIndustry = new Industry({ title, imgUrl })
    await newIndustry.save()
    res.status(201).json(newIndustry)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.patch('/:id', upload.single('image'), async(req, res, next) => {
  const { id } = req.params
  const { title } = req.body
  const image = req.file
  const imgUrl = image.path

  Industry
    .findById(id)
    .then(industry => deleteFile(industry.imgUrl))
    .catch(error => console.log(error))

  try {
 
    if (image.path === undefined || image.path === null || !image) {
      await Industry.findByIdAndUpdate(id, { title }).exec()
    } else if (title === '' || title === undefined) {
      await Industry.findByIdAndUpdate(id, { imgUrl }).exec()
    } else {
      await Industry.findByIdAndUpdate(id, { title, imgUrl }).exec()
    }



    res.status(201).json('Industry was successfuly updated')

  } catch (error) { 
    res.status(500).json({ message: error })
    return next(error)
  }

})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  
  Industry
    .findById(id)
    .then(industry => deleteFile(industry.imgUrl))
    .catch(error => console.log(error))

  try {
    const post = await Industry.findByIdAndRemove(id).exec()
    if (!post) return res.status(404).json({ message: `Post with id=${id} was not found` })
    res.status(200).json({ message: `Industry with id ${id} was successfuly deleted.`})
  } catch (error) { 
    res.status(500).json(error)
  }
})


module.exports = router