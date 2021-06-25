const express = require('express')
const path = require('path')
const keys = require('./config/keys')
const PORT = process.env.PORT || keys.PORT
const start = require('./mongoose/db/start')
const cors = require('cors')

start()


const app = express()
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/downloads/images/industries', express.static(path.join(__dirname, 'downloads', 'images', 'industries')))
app.use('/downloads/images/technologies', express.static(path.join(__dirname, 'downloads', 'images', 'technologies')))

app.use('/api/industries', require('./mongoose/routes/industriesRoutes'))
app.use('/api/messages', require('./mongoose/routes/messagesRoutes'))

app.use('/api/categories', require('./mongoose/routes/categoriesRoutes'))

app.listen(PORT, () => console.log(`Application is running on port ${PORT}`))