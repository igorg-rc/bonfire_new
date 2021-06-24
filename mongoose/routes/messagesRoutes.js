const router = require('express').Router()
const Message = require('../models/Message')

router.get('/', async (req, res) => {
  const messages = await Message.find()
  try {
    res.status(200).json(messages)  
  } catch (error) {
    res.status(522).json(error)
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const message = await Message.findById(id)
  try {
    if (!message) return res.status(404).json({ message: `Message with id ${id} was not found!` })
    res.status(200).json(message)
  } catch (error) {
    return res.status(522).json(error)
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    if (!id) return res.status(404).json({ message: `Message with id ${id} was not found.` })

    const message = await Message.findById(id)
    res.status(200).json(message)
  } catch (error) {
    return res.status(500).json({ message: error })
  }
})

router.post('/', async (req, res) => {
  const { senderName, senderEmail, messageBody } = req.body

  try {
    const message = new Message({ senderName, senderEmail, messageBody })
    await message.save()
    res.status(201).json(message)
  } catch (error) {
    return res.status(500).json(error)
  }
})

router.delete('/:id', async(req, res) => {
  const { id } = req.params
  try {
    await Message.findByIdAndRemove(id)
    res.status(200).json({ message: `message with id ${id} was successfuly deleted.` })
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router