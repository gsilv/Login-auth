const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require('./controllers/authController')(app)
require('./controllers/projectController')(app)

// doing a test

app.listen(3000)