require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 5000
const quran = require('./routes/quran')

app.use(cors())

app.use(require('morgan')('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/',quran)

app.listen(PORT, ()=> {
	console.log(`Server up and running on port ${PORT}`)
})

